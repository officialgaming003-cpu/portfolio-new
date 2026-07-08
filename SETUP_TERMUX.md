# 📱 Setup Guide untuk Termux

Panduan lengkap untuk menjalankan Portfolio CMS di Termux.

## 📋 Prasyarat

- Termux versi terbaru
- Koneksi internet stabil
- Minimal 2GB storage kosong

## 🚀 Langkah-langkah Setup

### Step 1: Update Termux
```bash
pkg update && pkg upgrade -y
```

### Step 2: Install Dependencies Utama
```bash
pkg install nodejs npm git -y
```

**Catatan:** Tunggu hingga selesai (± 5-10 menit)

### Step 3: Setup Git Configuration
```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@gmail.com"
```

### Step 4: Clone Repository
```bash
cd $HOME
git clone https://github.com/iddarknight-arch/portfolio-new.git
cd portfolio-new
```

### Step 5: Checkout Development Branch
```bash
git checkout development
```

### Step 6: Install Project Dependencies
```bash
npm install
```

**Catatan:** Ini akan memakan waktu 10-15 menit pada koneksi normal. Pastikan internet stabil!

### Step 7: Create Environment File (Opsional)
```bash
cp .env.example .env
```

### Step 8: Jalankan Development Server
```bash
npm run dev
```

✅ Server akan berjalan di `http://localhost:3000`

## 🌐 Mengakses Website

### Di Perangkat yang Sama (Smartphone)
```
http://localhost:3000
Atau
http://127.0.0.1:3000
```

### Dari PC/Laptop (Jika di Network Sama)

1. **Cari IP Address Termux:**
```bash
ifconfig
```
Cari IP yang dimulai dengan `192.168.x.x` atau `10.x.x.x`

2. **Akses dari PC:**
```
http://[IP_ADDRESS]:3000
```

Contoh: `http://192.168.1.100:3000`

## 🔧 Troubleshooting

### ❌ Error: "Port 3000 sudah digunakan"
```bash
# Gunakan port berbeda
npm run dev -- --port 3001
```

### ❌ Error: "npm not found"
```bash
# Install ulang Node.js
pkg remove nodejs npm -y
pkg install nodejs npm -y
```

### ❌ Error: "Permission Denied"
```bash
# Fix permission
chmod +x node_modules/.bin/*
```

### ❌ Error: "Out of memory"
```bash
# Bersihkan cache npm
npm cache clean --force

# Coba install ulang
rm -rf node_modules package-lock.json
npm install
```

### ❌ Cannot connect dari PC
```bash
# Pastikan Termux dan PC di network yang sama
# Gunakan IP lokal, bukan localhost

# Cek IP dengan:
ifconfig wlan0
```

## 📦 Build untuk Production

### Optimize dan Minify
```bash
npm run build
```

### Test Production Build
```bash
npm run preview
```

File production akan tersimpan di folder `dist/`

## 🔄 Update Repository

Jika ada update di repository:
```bash
git pull origin development
npm install
```

## 💡 Tips Pengembangan

1. **Hot Reload Aktif** - Perubahan file akan otomatis reload di browser
2. **DevTools** - Buka dengan `F12` atau `Cmd+I` (di PC)
3. **Mobile Preview** - Firefox DevTools punya fitur responsive design
4. **Stop Server** - Tekan `Ctrl + C` di terminal

## 📁 File-file Penting

| File | Fungsi |
|------|--------|
| `package.json` | Definisi dependencies dan scripts |
| `vite.config.js` | Konfigurasi Vite |
| `tailwind.config.js` | Konfigurasi Tailwind CSS |
| `src/main.jsx` | Entry point aplikasi |
| `src/App.jsx` | Komponen utama |
| `src/components/` | Folder komponen React |

## 🆘 Need Help?

1. Cek terminal untuk error message yang detail
2. Verifikasi Node.js: `node --version` (harus v16+)
3. Verifikasi npm: `npm --version` (harus v8+)
4. Buat issue di GitHub repository

## 🎉 Selamat!

Website Portfolio Anda sekarang sudah berjalan di Termux!

Jangan lupa untuk:
- ✅ Customize dengan konten Anda
- ✅ Update warna dan branding
- ✅ Tambahkan portfolio projects
- ✅ Deploy ke hosting

---

**Happy Coding! 🚀**