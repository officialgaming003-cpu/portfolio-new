# Contributing Guidelines

## Cara Berkontribusi

Terima kasih telah tertarik untuk berkontribusi ke Portfolio CMS!

## 🚀 Cara Memulai

### 1. Fork Repository
```bash
# Clone fork Anda
git clone https://github.com/YOUR_USERNAME/portfolio-new.git
cd portfolio-new
```

### 2. Buat Branch Baru
```bash
# Dari branch development
git checkout development

# Buat branch baru untuk fitur
git checkout -b feature/nama-fitur
```

### 3. Buat Perubahan
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Commit Changes
```bash
# Pastikan kode sudah siap
git add .

# Commit dengan pesan yang jelas
git commit -m "Add: deskripsi fitur"
```

### 5. Push ke Fork
```bash
git push origin feature/nama-fitur
```

### 6. Buat Pull Request
- Buka GitHub dan buat PR dari fork Anda ke repo utama
- Deskripsi apa yang Anda ubah
- Reference issue jika ada

## 📝 Commit Message Format

```
<type>: <subject>

<body>

<footer>
```

### Types
- `Add` - Fitur baru
- `Fix` - Bug fix
- `Update` - Update existing
- `Refactor` - Refactoring code
- `Docs` - Documentation
- `Style` - Styling changes
- `Test` - Test cases

### Contoh
```
Add: New testimonial component

Added testimonial section with 3 sample testimonials.
Includes star rating and avatar.

Closes #123
```

## 🎨 Code Style

### JavaScript/React
```jsx
// ✅ Good
const MyComponent = () => {
  const [state, setState] = useState(false)
  
  return (
    <div className="flex gap-4">
      <button>Click me</button>
    </div>
  )
}

// ❌ Bad
const myComponent = function() {
  var state = false
  return <div><button>Click me</button></div>
}
```

### Tailwind Classes
```jsx
// ✅ Good
<div className="flex justify-center items-center gap-4 p-4">
  <button className="px-6 py-3 bg-blue-500 text-white rounded-lg">
    Click
  </button>
</div>

// ❌ Bad
<div style="display: flex;">
  <button style="padding: 12px 24px; background: blue;">
    Click
  </button>
</div>
```

## ✅ Checklist Sebelum PR

- [ ] Code sudah tested
- [ ] Responsive di mobile/tablet/desktop
- [ ] Tidak ada console errors
- [ ] Commit message jelas dan terstruktur
- [ ] Documentation sudah updated
- [ ] Tidak mengubah file yang tidak perlu

## 🧪 Testing

### Manual Testing
```bash
npm run dev

# Test di berbagai ukuran layar
# Test di browser yang berbeda
```

### Build Testing
```bash
npm run build
npm run preview
```

## 🐛 Bug Reports

Jika menemukan bug:

1. Cek apakah sudah ada issue yang sama
2. Buat issue baru dengan:
   - Deskripsi bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots/videos jika ada
   - Environment (browser, OS, Termux version)

## 💡 Suggestions

Untuk saran fitur:

1. Buka discussion atau issue
2. Jelaskan fitur yang diinginkan
3. Jelaskan use case dan benefit
4. Bandingkan dengan website lain jika ada

## ❓ Questions?

Tanya di:
- Issues section
- GitHub Discussions
- Direct message

---

**Thank you untuk berkontribusi! 🙏**