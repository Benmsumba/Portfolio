# Technical Artisan Portfolio

## Ben Msumba · Pharmacy Student × Creative Developer

A high-end digital portfolio showcasing the intersection of pharmaceutical science, creative code, and strategic design. Built under the **DICTON** alias, this project represents a unique blend of medical expertise and digital craftsmanship.

---

## 📋 Project Overview

**Technical Artisan Portfolio** is the professional digital presence of Ben Msumba, a Year 2 Pharmacy student at **KUHES** (Malawi) and a creative developer. The portfolio demonstrates:

- **Three Disciplines**: Pharmacy & Clinical Science | Code, Strategy & Craft | Visual Storytelling
- **Brand Identity**: DICTON — where precision meets creativity
- **Location**: Malawi 🇲🇼
- **Status**: Open for collaborations

---

## 🎯 Brand Identity

### DICTON: Pharmacy × Tech

The DICTON brand encapsulates the philosophy of a "Technical Artisan" — someone who:
- Balances clinical precision with creative innovation
- Merges pharmaceutical knowledge with high-end digital design
- Brings analytical rigor to strategic digital initiatives
- Builds user experiences that are both beautiful and functional

**Core Values**:
- **Precision** in code and craft
- **Innovation** at the intersection of disciplines
- **Strategy** driving every design decision
- **Excellence** in execution of every project

---

## 🚀 Tech Stack

### Frontend
- **HTML5** — Semantic markup with proper accessibility
- **CSS3** — Advanced styling with CSS custom properties, responsive design, and modern layout techniques
- **Vanilla JavaScript** — No frameworks; pure, optimized interactions

### Performance & Optimization
- **Lazy Loading** — Images load on demand for faster initial page load
- **Modular Architecture** — Separated CSS and JavaScript for maintainability
- **Smooth Scrolling** — Custom scroll behavior with easing functions
- **Optimized Typography** — Editorial serif headings with a clean system UI body stack

### Deployment
- **Vercel** — Serverless deployment platform for fast, reliable hosting
- **GitHub** — Version control and source of truth

---

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file (semantic structure)
├── style.css           # All styles (modularized and optimized)
├── script.js           # JavaScript interactivity (defer-loaded)
├── profile.jpg         # Profile photo (optimized with lazy loading)
├── README.md           # This file
└── og-cover.png        # Open Graph preview image (1200×630px)
```

---

## ✨ Key Features

### 1. **Custom Cursor System**
- Interactive cursor with hover states
- Scale and blur effects on interactive elements
- Smooth tracking across the viewport

### 2. **Background Glow Effect**
- Follows cursor position
- Creates depth and visual interest
- Subtle, non-intrusive animation

### 3. **Project Image Reveal**
- Fixed-position thumbnails that follow cursor
- Smooth interpolation and scale transformations
- Desktop-only to avoid mobile clutter

### 4. **Smooth Scroll Navigation**
- Custom wheel event handler
- Easing animation for smooth scroll behavior
- Section linking with scroll-to-anchor

### 5. **Live Timezone Display**
- Central African Time (CAT) — UTC+2
- Auto-hidden when footer is in viewport
- Real-time clock updates every second

### 6. **Responsive Design**
- Mobile-first approach
- Breakpoints optimized for readability
- Touch-friendly interactive elements on mobile

---

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0e0e10` (Deep Black)
- **Secondary Background**: `#161618` (Slightly Lighter)
- **Text**: `#e4e4e4` (Off-White)
- **Accent**: `#b8f0d8` (Mint – "Pharmacy Green")
- **Muted**: `rgba(228,228,228,.36)` (Subtle Text)

### Typography
- **Display Font**: Georgia / Times New Roman — classic, premium, editorial
- **Body Font**: System UI stack — clean, readable, and native-feeling
- **Monospace**: UI monospace stack — practical and restrained

### Spacing & Layout
- Generous padding and margins for premium feel
- 8px baseline grid for consistency
- Viewport-relative sizing (`clamp()`) for scalability

---

## 🔍 SEO & Meta Information

### Open Graph (Social Sharing)
- Facebook, LinkedIn, and iMessage preview cards
- Optimized for 1200×630px sharing images
- Complete og:* metadata

### Twitter Card
- `Summary Large Image` format
- Custom title and description
- Optimized for Twitter sharing

### Canonical URL
- Points to `https://benmsumba.com/` (replace with your domain)

### Search Engine Optimization
- Semantic HTML structure
- Comprehensive meta description
- Relevant keywords
- Author attribution
- Proper locale specification

---

## 📋 Sections

### 01 — About
Deep dive into Ben's three worlds: pharmacy student, creative developer, digital strategist. Includes statistics and personal brand narrative.

### 02 — Capabilities
Comprehensive list of skills across two domains:
- **Pharmacy & Clinical Science**: Pharmacology, Chem, Anatomy, Drug Dispensing, Biochemistry, Patient Counseling, Research, Drug Interactions
- **Code, Strategy & Craft**: HTML/CSS/JS, UI Design, Prompt Engineering, Social Strategy, Content Creation, Analytics, Visual Storytelling

### 03 — Selected Work
Portfolio of featured projects:
1. **MEDINFO TOOL** — Clinical drug information engine (R&D)
2. **DICTON IDENTITY** — Brand and creative direction system (Active)
3. **DIGITAL GROWTH** — Social media strategy and audience analytics (Active)

### 04 — Contact
Call-to-action section with contact information, social links, and email contact button.

---

## 🛠️ Customization

### To Add New Projects
1. Open `index.html`
2. Find the `<!-- ▲ PASTE NEW PROJECT BLOCKS ABOVE THIS LINE ▲ -->` comment
3. Copy a project block (`.project-item`)
4. Update:
   - `href` → live project URL
   - `.proj-reveal-img src` → project thumbnail (800px)
   - `.proj-num` → next number (04, 05, etc.)
   - `.proj-title` → project name
   - `.proj-desc` → 1–2 sentence description
   - `.proj-status` → status badge (e.g., `[ Live ]`, `[ R&D ]`)
   - `.proj-tag` → relevant tags (max 3)

### To Update Domain
- **Canonical URL**: Change `https://benmsumba.com/` to your domain in the `<link rel="canonical">` meta tag
- **Open Graph URL**: Update all `og:url` values
- **Twitter URL**: Update `twitter:image` if using a custom domain image

---

## 📦 Deployment to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Portfolio setup to industry standards"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Configure Custom Domain** (optional)
   - In Vercel Dashboard: Settings → Domains
   - Add your custom domain
   - Follow DNS configuration steps

---

## 🚦 Performance Checklist

- ✅ **Lazy Loading**: Images load on demand
- ✅ **Modularized Assets**: Separate CSS and JS files
- ✅ **Deferred Scripts**: `defer` attribute on script tag
- ✅ **Optimized Fonts**: Google Fonts with `display=swap`
- ✅ **Semantic HTML5**: Proper accessibility structure
- ✅ **Responsive Design**: Mobile-first, tested at multiple breakpoints
- ✅ **Meta Tags**: Complete SEO and Social metadata

---

## 📱 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Modern versions with ES6 support

---

## 📄 License

This portfolio is a personal project created by Ben Msumba. Feel free to use this as inspiration for your own portfolio, but please create your own unique design and content.

---

## 🤝 Collaboration

**Status**: Open for collaborations on:
- Web design & development projects
- Health tech initiatives
- Creative direction and brand strategy
- Digital growth consulting

**Connect**:
- 📧 Email: [contact@benmsumba.com](mailto:contact@benmsumba.com)
- 🔗 LinkedIn: [linkedin.com/in/benmsumba](https://www.linkedin.com/in/benmsumba)
- 💻 GitHub: [github.com/Benmsumba](https://github.com/Benmsumba)

---

**Made with precision and care.** 🇲🇼 Built in Malawi.

*© 2026 Ben Msumba · DICTON*