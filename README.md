# Portfolio CMS - Website Portofolio Modern

Website Portfolio CMS dengan desain modern, UI/UX yang elegan, dan fitur-fitur profesional.

## 📋 Dokumentasi Desain

### Karakter Desain Utama
- Full-width modern layout
- Hero section dengan headline besar dan call-to-action
- Animasi halus dan profesional
- Navbar transparan yang berubah saat di-scroll
- Card dengan sudut membulat dan bayangan lembut
- Kombinasi warna gelap dan terang yang elegan
- Glassmorphism ringan
- Typography modern dan mudah dibaca
- White space yang lega
- Responsive design (desktop, tablet, mobile)
- Performa tinggi dan SEO-friendly

### Section yang Tersedia
- ✅ Hero Section
- ✅ Navbar Responsif
- ✅ Services Section
- ✅ Portfolio/Projects
- ✅ Blog
- ✅ Testimonial
- ✅ FAQ
- ✅ Contact Section
- ✅ Footer

## 🛠️ Instalasi di Termux

### 1. Update dan Install Dependencies
```bash
pkg update && pkg upgrade -y
pkg install nodejs npm git -y
```

### 2. Clone Repository
```bash
git clone https://github.com/iddarknight-arch/portfolio-new.git
cd portfolio-new
```

### 3. Checkout Development Branch
```bash
git checkout development
```

### 4. Install Project Dependencies
```bash
npm install
```

### 5. Start Development Server
```bash
npm run dev
```

Server akan berjalan di `http://localhost:3000`

## 📦 Build untuk Production

```bash
npm run build
```

File production akan tersimpan di folder `dist/`

## 📁 Struktur Project

```
portfolio-new/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Blog.jsx
│   │   ├── Testimonial.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Teknologi yang Digunakan

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animasi
- **React Router** - Navigation
- **Axios** - HTTP Client

## 📝 Catatan Penting

- Desain mengambil inspirasi dari Aditdev.ID tetapi tetap original
- Logo, aset, dan konten adalah buatan sendiri (bukan copy)
- Fokus pada identitas visual yang unik dan profesional
- SEO-optimized dan mobile-friendly

## 🚀 Fitur Tambahan yang Akan Datang

- [ ] Dark/Light Mode Toggle
- [ ] CMS Integration
- [ ] Blog Search
- [ ] Project Filter
- [ ] Newsletter Subscription
- [ ] Analytics Integration

## 📧 Support

Untuk pertanyaan atau masalah, silakan buat issue di repository ini.

---

**Last Updated:** 2026-07-08