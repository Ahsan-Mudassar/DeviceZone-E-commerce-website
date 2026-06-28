<div align="center">

<img src="/devicezone_logo.png" alt="DeviceZone Logo" height="100" />

# 🛒 DeviceZone

**A modern e-commerce web app for electronics — smartphones, laptops, tablets & accessories.**

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=flat-square&logo=tailwindcss)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=flat-square&logo=reactrouter)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

[🌐 Live Demo](https://device-zone-e-commerce-website.vercel.app/) • [🐛 Report Bug](https://github.com/Ahsan-Mudassar/devicezone/issues](https://device-zone-e-commerce-website.vercel.app/) • [✨ Request Feature](https://github.com/Ahsan-Mudassar/devicezone/issues)

![DeviceZone Preview](https://via.placeholder.com/900x450?text=DeviceZone+Screenshot)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Pages](#-pages)
- [Contributing](#-contributing)
- [Contact](#-contact)
- [License](#-license)

---

## 🧐 About the Project

**DeviceZone** is a fully responsive e-commerce frontend built with React and Tailwind CSS. It lets users browse electronics by category, search for products, manage a shopping cart, and learn about the store — all with a clean, professional UI.

This project was built as a portfolio project to demonstrate real-world React skills including state management with Context API, data fetching, routing, localStorage persistence, and responsive design.

---

## ✨ Features

- 🔍 **Product Search** — Search products by name in real-time
- 📂 **Category Filter** — Filter by Smartphones, Laptops, Tablets, Accessories
- 🛒 **Cart System** — Add, remove, increase/decrease quantity
- 💾 **Persistent Cart** — Cart data saved in `localStorage` (survives page reload)
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- 🍔 **Hamburger Menu** — Mobile-friendly navbar with slide-down menu
- ⚡ **Fast & Lightweight** — Powered by Vite for instant HMR
- 🎨 **Clean UI** — Professional design with Tailwind CSS utility classes

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI library |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS v3](https://tailwindcss.com/) | Styling |
| [React Router v6](https://reactrouter.com/) | Client-side routing |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |
| [DummyJSON API](https://dummyjson.com/) | Product data source |

---

## 📁 Project Structure

```
devicezone/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/               # Images & logos
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Search.jsx
│   │   └── Spinner.jsx
│   ├── context/              # Global state
│   │   └── CartContext.jsx
│   ├── pages/                # Route-level pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Cart.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx               # Routes setup
│   └── main.jsx              # App entry point
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### ✅ Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)

You can verify by running:

```bash
node -v
git --version
```

### 📦 Installation

**1. Clone the repository**

```bash
git clone https://github.com/Ahsan-Mudassar/devicezone.git
```

**2. Go into the project folder**

```bash
cd devicezone
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open in browser**

```
http://localhost:5173
```

That's it — the app is running! 🎉

---

## 💡 Usage

| Action | How |
|---|---|
| Browse all products | Go to `/products` |
| Filter by category | Click a category button on the Products page |
| Search a product | Type in the search bar |
| Add to cart | Click **Add To Cart** on any product card |
| View cart | Click the cart icon in the navbar |
| Adjust quantity | Use `+` / `−` buttons in the cart |
| Remove item | Click the 🗑️ delete icon in the cart |

---

## 📄 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero section with call-to-action |
| Products | `/products` | Product listing with search & filters |
| Cart | `/cart` | Shopping cart with quantity controls |
| About | `/about` | Store info, stats, and story |
| Not Found | `*` | 404 fallback page |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

```bash
# 1. Fork the repo on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/devicezone.git

# 3. Create a new branch
git checkout -b feature/your-feature-name

# 4. Make your changes, then commit
git add .
git commit -m "feat: add your feature"

# 5. Push to your fork
git push origin feature/your-feature-name

# 6. Open a Pull Request on GitHub
```

Please keep PRs focused and write clear commit messages.

---

## 📬 Contact

**Ahsan Mudassar**

[![GitHub](https://img.shields.io/badge/GitHub-Ahsan--Mudassar-181717?style=flat-square&logo=github)](https://github.com/Ahsan-Mudassar)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ahsan_Mudassar-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/ahsan-mudassar-00b984394)
[![Gmail](https://img.shields.io/badge/Gmail-ahsanmudassar441-EA4335?style=flat-square&logo=gmail)](mailto:ahsanmudassar441@gmail.com)

---

## 📝 License

This project is licensed under the **MIT License** — feel free to use it for learning or personal projects.

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/Ahsan-Mudassar">Ahsan Mudassar</a>
</div>
