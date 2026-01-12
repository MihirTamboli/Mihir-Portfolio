# Mihir Tamboli - Portfolio Website

A modern, fully responsive personal portfolio website showcasing projects, skills, and experience as a Data Analyst, AI Engineer, and Backend Developer.

## 🚀 Features

- **Dark Theme Design** - Modern dark theme with electric blue/neon cyan accents
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Smooth Animations** - Powered by Framer Motion for smooth transitions
- **Interactive UI** - Hover effects, glow animations, and smooth scrolling
- **SEO Optimized** - Meta tags and semantic HTML structure
- **Fast Loading** - Built with Vite for optimal performance

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## ⚠️ Prerequisites

- **Node.js v16 or higher** (v18+ recommended)
- **npm v7 or higher**

> **Note:** If you're using Node.js v14 or lower, you'll encounter syntax errors. Please update Node.js first. See [SETUP.md](./SETUP.md) for detailed instructions.

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📝 Setup Instructions

### Adding Your Resume

1. Place your resume PDF file in the `public` folder
2. Name it `resume.pdf` (or update the filename in `src/components/Hero.jsx`)

### Customizing Content

All personal information, projects, and skills can be easily edited in the respective component files:

- **Personal Info**: `src/components/Hero.jsx`
- **About Section**: `src/components/About.jsx`
- **Skills**: `src/components/Skills.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Certifications**: `src/components/Certifications.jsx`
- **Contact**: `src/components/Contact.jsx`

## 🌐 Deployment

### Netlify Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to Netlify:
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy!

The `netlify.toml` file is already configured for easy deployment.

## 📱 Sections

1. **Hero** - Introduction with animated typing effect
2. **About** - Professional summary and education
3. **Skills** - Technical skills organized by category
4. **Projects** - Showcase of featured projects with GitHub links
5. **Certifications** - Professional certifications
6. **Contact** - Contact form and social links

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  'electric-blue': '#00D9FF',
  'neon-cyan': '#00FFFF',
  'deep-navy': '#0A0E27',
}
```

### Animations

Animations are configured in `tailwind.config.js` and can be customized there.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Mihir Tamboli**
- Email: mihirtamboli262003@gmail.com
- LinkedIn: [mihir-tamboli-033690284](https://www.linkedin.com/in/mihir-tamboli-033690284/)
- GitHub: [MihirTamboli](https://github.com/MihirTamboli)
