# VITE + REACT SETUP GUIDE

Panduan untuk development di Termux

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build untuk production
npm run build

# 4. Preview production build
npm run preview
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview production build
- `npm run lint` - Jalankan ESLint

## 🎨 Styling

Proyek ini menggunakan **Tailwind CSS** untuk styling.

### Tailwind Classes
```jsx
// Contoh penggunaan
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Hello World
</div>
```

### Custom CSS
Tambahkan custom CSS di `src/styles/globals.css`

## 📦 Dependencies

- `react` - UI Library
- `react-dom` - DOM rendering
- `react-router-dom` - Routing
- `framer-motion` - Animasi
- `axios` - HTTP requests
- `tailwindcss` - CSS Framework

## 🔧 Configuration

### Vite Config
Edit `vite.config.js` untuk mengubah port atau settings lainnya

### Tailwind Config
Edit `tailwind.config.js` untuk customize warna, font, dll

## 📚 Struktur Folder

```
src/
├── components/     # React components
├── pages/          # Page components
├── styles/         # Global styles
├── App.jsx         # Main component
└── main.jsx        # Entry point
```

## 🚀 Deployment

### Build
```bash
npm run build
```
Output akan di folder `dist/`

### Upload ke Hosting
- Upload folder `dist/` ke hosting Anda
- Atau gunakan Netlify/Vercel untuk auto-deploy

## 🐛 Debugging

### Console Log
```jsx
console.log('Debug message')
```

### Browser DevTools
Tekan F12 atau Cmd+I untuk membuka DevTools

## 📖 Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

---

Happy coding! 🎉