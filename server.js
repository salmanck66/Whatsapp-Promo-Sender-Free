import express from "express";
import qrcode from "qrcode-terminal";
import multer from "multer";
import path from "path";
import fs from "fs";
import cors from "cors";
import pkg from "whatsapp-web.js";

const { Client, LocalAuth, MessageMedia } = pkg;
const app = express();
const upload = multer({ dest: "uploads/" });
const PORT = 3000;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// WhatsApp client setup
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { headless: true },
});

// Generate QR for first login
client.on("qr", (qr) => {
  console.log("Scan this QR code to log in:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ WhatsApp client is ready!");
});

client.initialize();

// Helper: delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// API route to send messages to multiple numbers
app.post("/send", upload.single("media"), async (req, res) => {
  try {
    const { numbers, message, delayMs } = req.body;

    if (!numbers || !message)
      return res.status(400).json({ error: "Missing numbers or message" });

    // Split, clean, and remove duplicates
    const numberList = [
      ...new Set(
        numbers
          .split(",")
          .map((num) => num.trim())
          .filter((num) => /^\d{10}$/.test(num))
      ),
    ];

    if (numberList.length === 0)
      return res.status(400).json({ error: "No valid phone numbers found" });

    const delayTime = Number(delayMs) || 0;
    console.log(
      `📤 Sending to ${numberList.length} unique numbers with ${delayTime}ms delay`
    );

    let media = null;
    if (req.file) {
      const filePath = path.join(process.cwd(), req.file.path);
      const mime = req.file.mimetype;
      const filename = req.file.originalname;
      const mediaData = fs.readFileSync(filePath).toString("base64");
      media = new MessageMedia(mime, mediaData, filename);
    }

    for (let i = 0; i < numberList.length; i++) {
      const number = numberList[i];
      const formattedNumber = `91${number}@c.us`;

      try {
        if (media) {
          await client.sendMessage(formattedNumber, media, {
            caption: message,
          });
        } else {
          await client.sendMessage(formattedNumber, message);
        }
        console.log(`✅ Sent to ${number}`);
      } catch (err) {
        console.error(`❌ Failed to send to ${number}:`, err.message);
      }

      // Wait before next message
      if (i < numberList.length - 1 && delayTime > 0) {
        console.log(`⏳ Waiting ${delayTime / 1000}s before next...`);
        await delay(delayTime);
      }
    }

    if (req.file) fs.unlinkSync(req.file.path);

    res.json({
      success: true,
      message: `✅ Sent messages to ${numberList.length} recipients`,
    });
  } catch (err) {
    console.error("❌ Error sending messages:", err);
    res.status(500).json({ error: "Failed to send messages" });
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
