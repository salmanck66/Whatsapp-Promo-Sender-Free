# 📱 WhatsApp Bulk Sender

A modern, user-friendly web application for sending bulk WhatsApp messages with media support. Built with Node.js and whatsapp-web.js, featuring a beautiful reactive frontend.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![WhatsApp](https://img.shields.io/badge/WhatsApp-Web.js-25D366.svg)

## ✨ Features

- 🚀 **Bulk Message Sending** - Send messages to multiple contacts at once
- 📎 **Media Support** - Attach images and videos to your messages
- ⏱️ **Customizable Delays** - Set delays between messages to avoid blocking
- 🧹 **Smart Number Cleaning** - Automatically removes duplicates and validates numbers
- 📊 **Real-time Statistics** - View total numbers, unique contacts, and estimated time
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- 📈 **Progress Tracking** - Visual progress bar during message sending
- 🔔 **Status Notifications** - Real-time feedback on operations
- 🌐 **CORS Enabled** - Easy integration with frontend

## 🎯 Use Cases

- Marketing campaigns
- Event notifications
- Customer announcements
- Emergency alerts
- Community updates
- Promotional messages

## 🛠️ Tech Stack

**Backend:**
- Node.js
- Express.js
- whatsapp-web.js
- Multer (file uploads)
- Puppeteer

**Frontend:**
- HTML5
- CSS3 (Modern animations & gradients)
- Vanilla JavaScript
- Responsive Design

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v14.0.0 or higher)
- npm or yarn
- A WhatsApp account
- Active internet connection

## 🚀 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/whatsapp-bulk-sender.git
cd whatsapp-bulk-sender
```

2. **Install dependencies**
```bash
npm install
```

3. **Create required folders**
```bash
mkdir uploads public
```

4. **Move the HTML file**
```bash
# Place the frontend HTML file in the public folder
mv index.html public/
```

5. **Start the server**
```bash
node server.js
```

6. **Open your browser**
```
http://localhost:3000
```

## 📱 First Time Setup

1. Start the server
2. Scan the QR code in your terminal with WhatsApp mobile app
3. Wait for "WhatsApp client is ready!" message
4. Start sending messages!

## 💻 Usage

### Basic Message Sending

1. **Enter phone numbers** (comma or newline separated)
   ```
   9004288362, 7003716714, 9876543210
   ```

2. **Type your message**
   ```
   Hello! This is a bulk message from our service.
   ```

3. **Set delay** (recommended: 20-30 seconds)
   ```
   30
   ```

4. **Optional: Upload media** (images/videos)

5. **Click "Clean & Preview"** to validate numbers

6. **Click "Send Messages"** to start bulk sending

### API Endpoint

**POST** `/send`

**Form Data:**
- `numbers` (string) - Comma-separated phone numbers
- `message` (string) - Message text
- `delayMs` (number) - Delay in milliseconds
- `media` (file, optional) - Image or video file

**Example with cURL:**
```bash
curl -X POST http://localhost:3000/send \
  -F "numbers=9004288362,7003716714" \
  -F "message=Hello from bulk sender!" \
  -F "delayMs=30000" \
  -F "media=@image.jpg"
```

## ⚙️ Configuration

Edit the following in `server.js`:

```javascript
const PORT = 3000; // Change server port

// Puppeteer options
puppeteer: { 
  headless: true,  // Set to false for debugging
  args: ['--no-sandbox'] // Add more args if needed
}
```

## 📊 Features Breakdown

### Smart Number Validation
- Automatically extracts 10-digit numbers
- Removes duplicates
- Validates Indian mobile format
- Shows preview before sending

### Delay Management
- Prevents WhatsApp blocking
- Customizable per-message delay
- Real-time estimation of total time
- Progress tracking

### Media Handling
- Supports images (JPG, PNG, GIF, etc.)
- Supports videos (MP4, AVI, MOV, etc.)
- Automatic file cleanup after sending
- Preview of selected media

### User Interface
- Modern gradient design
- Smooth animations
- Responsive layout
- Real-time statistics
- Status notifications
- Progress indicators

## ⚠️ Important Notes

- **Rate Limiting**: Use appropriate delays (20-30 seconds) to avoid WhatsApp blocking
- **WhatsApp Terms**: Ensure compliance with WhatsApp's Terms of Service
- **Privacy**: Handle user data responsibly
- **Testing**: Test with small batches first
- **Internet**: Maintain stable connection during bulk sends

## 🔒 Security Best Practices

- Don't share your session data
- Use environment variables for sensitive data
- Implement rate limiting on the API
- Validate and sanitize all inputs
- Use HTTPS in production
- Keep dependencies updated

## 🐛 Troubleshooting

**QR Code not appearing?**
- Check if port 3000 is available
- Ensure WhatsApp Web is accessible
- Try restarting the server

**Messages not sending?**
- Verify internet connection
- Check if numbers are valid
- Ensure WhatsApp session is active
- Increase delay between messages

**Media upload failing?**
- Check file size (< 16MB recommended)
- Verify file format is supported
- Ensure uploads folder exists

## 🗺️ Roadmap

- [ ] Schedule messages for later
- [ ] Import contacts from CSV/Excel
- [ ] Message templates library
- [ ] Multi-language support
- [ ] Message tracking & analytics
- [ ] Group messaging support
- [ ] Custom variable replacement

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚖️ Disclaimer

This tool is for educational and legitimate business purposes only. Users must:
- Comply with WhatsApp's Terms of Service
- Obtain consent from recipients
- Follow anti-spam regulations
- Use responsibly and ethically

The developer is not responsible for misuse of this software.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💼 Custom Development Services

Need a custom WhatsApp automation solution or any other application? I'm available for freelance work!

**Contact me for:**
- Custom WhatsApp bots & automation
- Web application development
- API integrations
- Full-stack development
- Mobile app development
- And more...

📧 **Email:** [salmanulfaris.c.k10@gmail.com](mailto:salmanulfaris.c.k10@gmail.com)

Let's build something amazing together! 🚀

## 👨‍💻 Author

- Email: salmanulfaris.c.k10@gmail.com
- GitHub: [@yourusername](https://github.com/salmanck66)

## 🙏 Acknowledgments

- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) - Amazing WhatsApp Web API
- [Express.js](https://expressjs.com/) - Web framework
- [Puppeteer](https://pptr.dev/) - Headless Chrome automation

---

⭐ **Star this repository if you find it helpful!**

Made with ❤️ by Salmanul Faris CK 
