# Sandeep Portfolio

A modern, minimalist, and highly responsive personal portfolio website designed specifically for an AI Engineer and Data Scientist. Built to showcase technical expertise, machine learning projects, and current research pipelines.

**🌍 Live Demo:** [View Portfolio Here](https://csandeep98.github.io/portfolio_website/)

---

## ✨ Features

- **Hero Section:** High-impact introduction with a dynamic background, quick contact links, and a downloadable resume button.
- **About Me:** Professional biography highlighting background, experience, and key career statistics.
- **Technical Expertise:** Categorized skill clouds covering Languages, Machine Learning, Data Engineering, Cloud/DevOps, and Tools.
- **Featured Projects:** Interactive project cards detailing ML/AI projects, complete with tech stacks, GitHub repository links, and live demo links.
- **In The Pipeline:** A unique section showcasing current focus areas (e.g., Generative AI, RAG systems) and upcoming research/development goals.
- **Contact & Socials:** Clean call-to-action section for collaboration, featuring integrated GitHub, LinkedIn, and email links.
- **Smooth Animations:** Scroll-triggered animations and page transitions powered by Framer Motion.
- **Fully Responsive:** Optimized for all devices, from mobile phones to ultra-wide desktop monitors.

---

## 🛠️ Tech Stack

This project is built with modern web technologies to ensure fast performance, easy maintenance, and a great developer experience:

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 6](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion (Framer Motion)](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [GitHub Pages](https://pages.github.com/) (`gh-pages` package)

---

## 💻 Local Development

Follow these steps to run the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed.

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/csandeep98/portfolio_website.git
   cd portfolio_website

2. **Install dependencies:**
```npm install```

4. **Start the development server:**
```npm run dev```

5. **View the app:**
Open your browser and navigate to http://localhost:3000.

📂 **Project Structure**
The project follows a **clean, component-based architecture:**

```
portfolio_website/
├── public/               # Static assets (favicon, resume.pdf)
├── src/
│   ├── components/       # Reusable UI sections
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Pipeline.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx           # Main application layout
│   ├── index.css         # Global styles & Tailwind imports
│   └── main.tsx          # React entry point
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration (includes base path)
└── README.md             # Project documentation
```

🎨 ***Customizing the Content***
To update the portfolio with your own data, edit the respective components in the ```src/components/ directory```:

- **Skills:** Open Skills.tsx and modify the skills array at the top of the file.
- **Projects:** Open Projects.tsx and update the projects array with your own project titles, descriptions, image URLs, and links.
- **Pipeline:** Open Pipeline.tsx to update your current focus areas and upcoming tasks.
- **Resume:** Replace the resume.pdf file in the public/ folder with your actual resume document. Ensure the file name remains resume.pdf so the download button works correctly.

🚀 **Deployment**
This project is configured to deploy automatically to GitHub Pages using the gh-pages npm package.

**1. Configure the base path**
Ensure your vite.config.ts has the correct base path:

```TypeScript
base: '/portfolio_website/',
```
**2. Run the deployment script:**

```npm run deploy```

The script will build the project into a dist folder and push it to the gh-pages branch.
Ensure GitHub Pages is set to serve from the gh-pages branch in your repository settings.

📄 **License**

This project is open-source and available under the **MIT License**. Feel free to fork and adapt it for your own personal portfolio!
