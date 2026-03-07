# Charannath Chowdary's Professional Portfolio

A modern, fully responsive developer portfolio website built with React, Vite, and Tailwind CSS. Showcasing projects, skills, and professional experience with a clean, professional design.

## ✨ Features

- **Modern & Professional Design**: Clean, minimal UI suitable for a professional developer
- **Fully Responsive**: Perfect on mobile, tablet, and desktop devices
- **Dark Mode Toggle**: Switch between light and dark themes
- **Smooth Animations**: Framer Motion animations for a polished feel
- **Sticky Navigation**: Easy navigation throughout the page
- **Project Showcase**: Modern grid layout with project cards featuring:
  - Project images/previews
  - Descriptions
  - Technology stack
  - Live demo and GitHub repository links
- **Skills Section**: Organized by category with certifications
- **Contact Section**: Multiple ways to get in touch
- **Social Links**: Quick access to social profiles

## 🛠️ Technologies Used

- **React 18**: UI library
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **PostCSS**: CSS processing

## 📂 Project Structure

```
charannath-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation with dark mode toggle
│   │   ├── Hero.tsx            # Hero section with CTA buttons
│   │   ├── About.tsx           # About section with stats
│   │   ├── Skills.tsx          # Skills by category + certifications
│   │   ├── Projects.tsx        # Project cards showcase
│   │   ├── Contact.tsx         # Contact section with social links
│   │   └── Footer.tsx          # Footer with quick links
│   ├── data/
│   │   ├── projects.ts         # Project data
│   │   └── skills.ts           # Skills and certifications data
│   ├── pages/
│   │   └── Home.tsx            # Main page component
│   ├── styles/
│   │   └── globals.css         # Global styles
│   ├── App.tsx                 # App component
│   └── main.tsx                # Entry point
├── public/
│   ├── favicon.svg
│   └── Charannath_Chowdary_Resume.pdf  # Add your resume here
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd charannath-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add your resume**
   - Place your resume PDF in the `public/` directory
   - Name it: `Charannath_Chowdary_Resume.pdf`

4. **Update your information**
   - Edit [src/data/projects.ts](src/data/projects.ts) with your projects
   - Edit [src/data/skills.ts](src/data/skills.ts) with your skills and certifications
   - Update component files with your personal information

5. **Start development server**
   ```bash
   npm run dev
   ```

   - Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Preview production build

## 🎨 Customization

### Update Contact Email

Edit the email address in:

- [src/components/Hero.tsx](src/components/Hero.tsx)
- [src/components/Contact.tsx](src/components/Contact.tsx)

### Update Social Links

Edit social links in:

- [src/components/Footer.tsx](src/components/Footer.tsx)
- [src/components/Contact.tsx](src/components/Contact.tsx)

### Change Colors

Edit the color scheme in:

- [tailwind.config.js](tailwind.config.js) - Modify the `colors` object

### Add Projects

1. Add project data to `src/data/projects.ts`
2. Add project images to `public/` directory
3. Update the image URL in the projects data

## 🌓 Dark Mode

The portfolio supports both light and dark modes with a toggle in the header. The preference is saved to localStorage.

## 📱 Responsive Design

Breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Deploy to Vercel

1. Push your repository to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the Vite configuration and deploy

### Deploy to Netlify

1. Push your repository to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Set build command to `npm run build`
6. Set publish directory to `dist`

### Deploy to GitHub Pages

1. Add to `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: "/charannath-portfolio/",
     // ... rest of config
   });
   ```
2. Run `npm run build`
3. Push `dist` folder to `gh-pages` branch

## 👤 About Charannath Chowdary

**Systems Engineer at Infosys, Hyderabad**

- B.Tech in Computer Science and Design from Sree Vidyanikethan Engineering College
- Passionate about building interactive web applications
- Experienced in Java, web development, and problem-solving

### Skills

- **Programming**: Java, Python, C, JavaScript
- **Web**: HTML, CSS, React, Tailwind CSS
- **Core Skills**: Data Structures, Operating Systems, Computer Networks, DBMS
- **Tools**: Git, GitHub, VS Code

### Certifications

- NPTEL Programming in Java
- Google Project Management (Coursera)
- Microsoft Power BI Data Analyst (Coursera)
- Pearson MePro Level 10 Expert

## 📞 Contact

- **Email**: charannath.chowdary@example.com
- **GitHub**: [github.com/charannath](https://github.com/charannath)
- **LinkedIn**: [linkedin.com/in/charannath](https://linkedin.com/in/charannath)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)
- Bundled with [Vite](https://vitejs.dev/)

---

**Last Updated**: March 2026

## Contact

For any inquiries or collaborations, feel free to reach out via email at charannath@example.com.
