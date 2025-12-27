# BSM - Basic System Monitor

A modern, cross-platform system monitoring application built with Electron and React. BSM provides real-time insights into your system's hardware and performance metrics with a clean, intuitive interface.

## 📋 Overview

BSM is a hobby project designed to showcase a modern approach to system monitoring. While it's not intended to replace the Windows Task Manager, it offers a refreshing alternative with real-time monitoring of CPU, GPU, memory, and network information.

## ✨ Features

- **Real-time System Monitoring**
  - CPU usage and specifications
  - Memory (RAM) usage with visual indicators
  - GPU information and specifications
  - Network interface details (IP, subnet, gateway, DNS, MAC address)

- **Modern User Interface**
  - Clean, card-based dashboard design
  - Visual usage bars for CPU and memory
  - Responsive layout

- **Internationalization**
  - Multi-language support (English, Arabic)
  - Easy to extend with additional languages

- **Cross-platform**
  - Built with Electron for Windows, macOS, and Linux support
  - Native application experience

## 🛠️ Tech Stack

- **Frontend**: React 19.2.0
- **Desktop Framework**: Electron 39.2.6
- **Build Tool**: Vite 7.2.4
- **System Information**: systeminformation 5.21.20
- **Routing**: React Router 7.10.1
- **Package Manager**: npm

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Development Setup

1. Clone the repository:
```bash
git clone https://github.com/wahab95/Basic-System-Monitor
cd "Basic-System-Monitor"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. In a separate terminal, start Electron:
```bash
npm start
```

Or use the Electron Forge command:
```bash
npm run f.start
```

## 🚀 Building

### Development Build

Build the React application:
```bash
npm run build
```

### Production Package

Package the application for distribution:
```bash
npm run f.package
```

### Create Installer

Create a distributable installer (Windows MSI):
```bash
npm run f.make
```

The installer will be generated in the `out/make/` directory.

## 📝 Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build the React app for production
- `npm start` - Start Electron with the built app
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build
- `npm run f.start` - Start Electron with Electron Forge
- `npm run f.package` - Package the app with Electron Forge
- `npm run f.make` - Create distributable installer

## 🏗️ Project Structure

```
Modern Task Manager/
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Bar/        # Usage bar component
│   │   ├── Footer/     # Footer component
│   │   └── Nav/        # Navigation component
│   ├── contexts/       # React contexts (Theme, Language)
│   ├── pages/          # Application pages
│   │   ├── Main/       # Main dashboard
│   │   ├── About/      # About page
│   │   └── Settings/   # Settings page
│   ├── translations/   # Language files
│   └── main.jsx        # React entry point
├── main.js             # Electron main process
├── preload.cjs         # Electron preload script
├── forge.config.cjs    # Electron Forge configuration
└── vite.config.js      # Vite configuration
```

## 🎯 Usage

Once the application is running, you'll see a dashboard displaying:

- **Memory**: Total, used, and free memory with a visual usage bar
- **CPU**: Model, cores, and real-time usage percentage
- **GPU**: Model, vendor, and VRAM information
- **Network Interface**: IP address, subnet, gateway, DNS, and MAC address

All metrics update in real-time (every second) to provide current system status.

## 🔧 Configuration

The application can be configured through:
- Settings page (accessible from the navigation)
- Language selection for internationalization
- Theme preferences (if implemented)

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Abdulwahhab**

## 🤝 Contributing

This is a hobby project, but contributions and suggestions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## ⚠️ Disclaimer

BSM is a hobby project created for educational and showcase purposes. It is not intended to replace the Windows Task Manager or any other system monitoring tool. Use at your own discretion.

## 📈 Project Status

**Version**: 0.1.0

This project is in active development. Features and functionality may change.

---

**Note**: This project is built for fun and learning. Enjoy exploring the codebase and feel free to contribute!
