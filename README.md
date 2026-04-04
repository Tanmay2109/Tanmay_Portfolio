<div align="center">

# Tanmay Patil — Computer Science & Engineering (IoT) Portfolio

Welcome to the source code of my personal portfolio! This is a responsive, interactive web application built to showcase my academic journey, technical skills, software projects, and professional certifications. It is developed from scratch utilizing modern web technologies and component-driven architecture to deliver a clean and intuitive user experience.

</div>

---

## ✨ Standout Features

- **Windows Terminal Chatbot**: A custom-built, interactive floating chatbot styled precisely like a native Windows 11 PowerShell terminal (`Consolas` typography, raw output formatting, and command-based quick questions).
- **Interactive Swipe Navigation**: Education and Certification timelines are compressed into beautiful, touch-friendly swipeable cards with pagination controls.
- **Advanced 3D Geometry**: Project cards, internship experiences, and education statistics integrate dynamic `perspective(1000px)` 3D transformations that pop out, tilt, and cast depth shadows when hovered.
- **Dynamic Theming**: True multi-theme support including:
  - **Dark Mode**: High-contrast, glowing accents with animated SVG backgrounds.
  - **Light Mode**: Crisp, clean, and highly professional readability.
  - **Paper Mode**: A warm, sepia-toned reading experience.
- **Component Modularity**: Logically split architecture organizing monolithic data into granular React sub-components (`Hero`, `Experience`, `Education`, `Certifications`, `Hobbies`, `Footer`).

## 🛠️ Technology Stack

* **Core Structure**: React (via Vite)
* **Styling Ecosystem**: Pure custom Vanilla CSS focusing heavily on CSS Variables for flawless Theme toggling.
* **Iconography**: Lucide React
* **Deployment**: Optimized for serverless edge-hosting natively.

## 🚀 Local Development

To run this portfolio locally on your machine and explore the source code:

```bash
# 1. Clone the repository
git clone https://github.com/Tanmay2109/Tanmay-Portfolio.git

# 2. Navigate into the directory
cd Tanmay-Portfolio

# 3. Install NPM dependencies
npm install

# 4. Start the Vite development server
npm run dev
```

## 📂 Project Structure Snapshot

```text
src/
├── components/          # Reusable UI Blocks
│   ├── About.jsx        # Biographical background
│   ├── Certifications.jsx # Interactive NPTEL, Cousera sliders
│   ├── Chatbot.jsx      # Animated Windows PowerShell bot
│   ├── Education.jsx    # Swipeable academic timeline
│   ├── Experience.jsx   # Professional Internship highlights
│   ├── Footer.jsx       # Geometric social linkage
│   ├── Hero.jsx         # Animated landing screen
│   ├── Hobbies.jsx      # Extracurriculars and management roles
│   ├── Navbar.jsx       # Sticky theme-switching header
│   ├── Projects.jsx     # 3D tilted project gallery
│   └── Skills.jsx       # Tech stack breakdown
├── App.jsx              # Global application structure
├── index.css            # Standardized styling & variables
└── main.jsx             # React DOM injection point
```

## 📫 Connect with Me

I am always open to discussing new opportunities, academic projects, and software engineering roles.

- **LinkedIn:** [linkedin.com/in/tanmaypatil2109](https://linkedin.com/in/tanmaypatil2109)
- **Email:** tanmaypatil2109@gmail.com

<div align="center">
  <p><i>Conceptualized, designed, and developed by Tanmay Patil.</i></p>
</div>
