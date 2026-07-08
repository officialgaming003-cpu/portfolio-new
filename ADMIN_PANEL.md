# Admin Panel Documentation

## 📋 Overview

Admin Panel adalah fitur manajemen konten yang memungkinkan Anda untuk mengedit berbagai elemen website secara real-time tanpa perlu mengubah kode.

## 🎯 Fitur Utama

### 1. **Dashboard**
- Statistik konten (jumlah services, marketplace items, dll)
- Status sistem
- Informasi terkini

### 2. **Hero Section Editor**
- Ubah badge/status
- Edit main title
- Ubah deskripsi hero

### 3. **Services Manager**
- Kelola 3 service utama (Web Development, Scraping & Automation, Bot Development)
- Edit title, description, dan tech stack
- Tambah/hapus teknologi

### 4. **Marketplace Editor**
- Kelola produk marketplace
- Edit harga dan deskripsi produk
- Update badge dan status promo

## 🔐 Akses Admin Panel

### Membuka Admin Panel
1. Cari tombol engkol ⚙️ di sudut kanan bawah halaman
2. Klik untuk membuka admin panel
3. Masukkan password (default: `admin123`)

### Password Default
```
admin123
```

⚠️ **Penting:** Ubah password di file `src/components/AdminPanel.jsx` baris 9 untuk keamanan production.

## 📝 Cara Menggunakan

### Edit Hero Section
1. Buka Admin Panel dan klik tab "🎨 Hero"
2. Edit Badge, Title, dan Description sesuai kebutuhan
3. Perubahan disimpan otomatis

### Edit Services
1. Klik tab "⚙️ Services"
2. Klik tombol "Edit" pada service yang ingin diubah
3. Modifikasi Title, Description, dan Tech Stack
4. Klik "Selesai" ketika selesai

### Edit Marketplace
1. Klik tab "🛒 Marketplace"
2. Klik tombol "Edit" pada produk
3. Update Title, Description, Price, dan Original Price
4. Klik "Selesai" untuk menyimpan

## 🏗️ Struktur File

```
src/
├── components/
│   ├── AdminPanel.jsx           # Modal utama admin panel
│   ├── AdminTrigger.jsx         # Tombol trigger admin panel
│   └── admin/
│       ├── AdminDashboard.jsx   # Dashboard tab
│       ├── HeroEditor.jsx       # Hero section editor
│       ├── ServicesEditor.jsx   # Services editor
│       └── MarketplaceEditor.jsx # Marketplace editor
├── context/
│   └── AdminContext.jsx         # State management
├── hooks/
│   └── useAdmin.js              # Custom hook untuk admin
└── styles/
    └── globals.css              # Global styles
```

## 🎨 Customization

### Ubah Password Admin
Buka `src/components/AdminPanel.jsx` dan ubah baris 9:
```javascript
const ADMIN_PASSWORD = 'password-anda-yang-baru'
```

### Ubah Warna Admin Panel
Edit gradient di `AdminPanel.jsx` baris 127:
```javascript
className="bg-gradient-to-r from-purple-500 to-teal-500"
```

### Tambah Tab Baru
1. Buat component editor baru di `src/components/admin/`
2. Import di `AdminPanel.jsx`
3. Tambahkan ke array tabs (baris 147)
4. Render component di content section

## 🔄 State Management

### AdminContext
Menyimpan state:
- `isAdminOpen` - Status panel terbuka/tertutup
- `adminTab` - Tab aktif saat ini
- `content` - Data konten (hero, services, marketplace)

### Update Functions
- `updateHero(data)` - Update hero section
- `updateService(id, data)` - Update service tertentu
- `updateMarketplace(id, data)` - Update marketplace item

## 📱 Responsive Design

Admin Panel fully responsive:
- ✅ Mobile (320px+)
- ✅ Tablet (640px+)
- ✅ Desktop (1024px+)

## 🚀 Production Deployment

Saat production:
1. Ubah password admin ke yang lebih kuat
2. Pertimbangkan menambah autentikasi backend
3. Simpan perubahan ke database/API
4. Tambah logging untuk audit trail

## 💾 Persisten Data

Saat ini, data disimpan di React state (hilang saat page refresh).

### Untuk Persisten Data:
1. Tambah localStorage:
```javascript
localStorage.setItem('portfolio-content', JSON.stringify(content))
```

2. Atau integrasikan dengan backend API:
```javascript
const response = await fetch('/api/content', {
  method: 'POST',
  body: JSON.stringify(updatedContent)
})
```

## 🐛 Troubleshooting

**Admin Panel tidak muncul?**
- Pastikan `AdminProvider` membungkus `App`
- Cek di console apakah ada error

**Perubahan tidak tersimpan?**
- Saat ini hanya tersimpan di memory (refresh page akan reset)
- Integrasikan localStorage atau backend untuk persisten

**Password salah?**
- Default: `admin123`
- Cek apakah ada typo

## 📚 Resources

- [React Context Documentation](https://react.dev/reference/react/useContext)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## ✨ Features Roadmap

- [ ] Backend API integration
- [ ] Database persistence
- [ ] File upload untuk images
- [ ] User authentication
- [ ] Revision history
- [ ] Multi-language support
- [ ] Dark mode
- [ ] SEO metadata editor

---

**Last Updated:** 2026-07-08
