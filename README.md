# Dark Theme Developer Portfolio

A minimalistic, dark-themed developer portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a professional and modern aesthetic with smooth animations and responsive design.

## ✨ Features

- **Dark Theme Design**: Professional dark color scheme with vibrant accent colors (teal/blue)
- **Responsive Layout**: Grid-based design that works across desktop, tablet, and mobile
- **Modern Typography**: Clean fonts (Inter for body text, JetBrains Mono for code)
- **Interactive Components**: Smooth transitions, hover effects, and subtle animations
- **Project Showcase**: Categorized project gallery with filtering functionality
- **Skills Visualization**: Animated skill bars and technology showcase
- **Contact Form**: Functional contact form with validation and status feedback

## 🏗️ Tech Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Heroicons (SVG icons)
- **Fonts**: Google Fonts (Inter, JetBrains Mono)

## 🎨 Design Features

### Color Palette
- **Primary**: Teal (#14b8a6) - for highlights and accents
- **Secondary**: Blue (#3b82f6) - for interactive elements
- **Background**: Deep dark (#020617) - main background
- **Text**: Light grays for hierarchy and readability

### Sections
1. **Hero Section**: Name, tagline, and call-to-action buttons
2. **About Section**: Personal description with stats and current focus
3. **Projects Section**: Categorized portfolio with live filtering
4. **Skills Section**: Animated progress bars and tool showcase
5. **Contact Section**: Contact form and social links

### Interactive Elements
- Smooth scrolling navigation
- Project category filtering
- Hover effects with glows and transforms
- Animated skill progress bars
- Glass morphism effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Personal Information
Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update tagline and description
   - Add your social media links

2. **About Section** (`src/components/About.tsx`):
   - Modify the about text
   - Update stats (years experience, projects, etc.)
   - Change current focus items

3. **Projects** (`src/data/projects.ts`):
   - Replace sample projects with your actual projects
   - Update project images, descriptions, and links
   - Modify technology stacks

4. **Skills** (`src/components/Skills.tsx`):
   - Update skill levels and categories
   - Add or remove technologies
   - Modify tools and software

5. **Contact** (`src/components/Contact.tsx`):
   - Update contact information
   - Change email and location
   - Modify social media links

### Styling
- **Colors**: Modify `tailwind.config.js` to change the color scheme
- **Fonts**: Update font imports in `src/app/globals.css`
- **Animations**: Customize animations in the Tailwind config

### Adding Content
- **Project Images**: Add project screenshots to `/public/projects/`
- **Resume**: Add your resume PDF to `/public/resume.pdf`
- **Favicon**: Replace `/public/favicon.ico` with your own

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

Built with ❤️ using Next.js and Tailwind CSS
