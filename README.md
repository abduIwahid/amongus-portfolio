# 🚀 Abdul Wahid — Among Us Portfolio

> A creative, Among Us–themed developer portfolio built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**. Designed to stand out — featuring animated impostor intro sequences, interactive mini-games, floating space characters, and a fully responsive design.

🌐 **Live Demo:** [amongus-portfolio.vercel.app](https://abduiwahid-portfolio.vercel.app)

---

## ✨ Features

- 🎮 **Among Us Intro Animation** — Impostor reveal sequence with sound on first visit
- 👻 **Interactive About Me Room** — Control a ghost character with keyboard/joystick to explore
- 🌌 **Floating Background Characters** — GPU-accelerated Among Us crewmates floating across all pages
- 📁 **Projects Showcase** — Cards with live links and GitHub links for all projects
- 🧠 **Skills Section** — Visual tech stack display
- 👤 **About Me Page** — CV info, certifications, experience, extracurriculars & projects
- 📞 **Contact Page** — Clean, clickable contact cards (Email, Phone, LinkedIn, GitHub)
- 🔊 **Sound Effects** — Click sounds, typing sounds, and impostor reveal audio
- 📱 **Fully Responsive** — Mobile-friendly with a virtual joystick for the About page

---

## 🗂️ Pages

| Route | Description |
|---|---|
| `/` | Home — Impostor intro animation + main menu |
| `/about` | Explore — Interactive ghost mini-game room |
| `/hire-me` | About Me — CV, experience, projects, certs |
| `/profile` | Profile — Social links & bio |
| `/projects` | Projects — Project showcase cards |
| `/skills` | Skills — Tech stack |
| `/contact` | Contact — Direct contact info |

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Font:** Custom Among Us font + Geist
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/abduIwahid/amongus-portfolio.git
cd amongus-portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
amongus-portfolio/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Home page with intro animation
│   ├── about/            # Interactive ghost mini-game
│   ├── hire-me/          # About Me / CV page
│   ├── profile/          # Profile & social links
│   ├── projects/         # Projects showcase
│   ├── skills/           # Skills section
│   └── contact/          # Contact details
├── components/           # Reusable React components
│   ├── Homepage/         # Main menu
│   ├── about/            # Ghost, room, dead body components
│   ├── Contact/          # Contact card UI
│   ├── Projects/         # Project cards
│   ├── Skills/           # Skill display
│   └── Texts/            # Animated text components
├── hooks/                # Custom React hooks
│   ├── useFloatingCharacters.tsx
│   └── useClickSound.ts
├── assets/               # SVG logos and images
└── public/               # Static assets (characters, sounds, fonts)
```

---

## 📬 Contact

| Platform | Link |
|---|---|
| 📧 Email | abdulwahid.connects@gmail.com |
| 📞 Phone | +92 307-8141252 |
| 💼 LinkedIn | [linkedin.com/in/abdu1wahid](https://linkedin.com/in/abdu1wahid) |
| 🐙 GitHub | [github.com/abduIwahid](https://github.com/abduIwahid) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
