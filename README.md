# LEO TR // PORTFOLIO

Personal portfolio site built with **Vite + React + TypeScript + Tailwind CSS**.
Hosted on GitHub Pages with a Fallout terminal aesthetic.

🔗 **Live site:** [leotranrbt.github.io](https://leotranrbt.github.io)

---

## Stack

| Tool | Purpose |
|---|---|
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [React 18](https://react.dev) | UI framework |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [react-router-dom](https://reactrouter.com) | Client-side routing (HashRouter) |
| [react-markdown](https://github.com/remarkjs/react-markdown) | Blog post rendering |

---

## Local Development

```bash
# 1. Clone the repo
git clone https://github.com/leotranrbt/leotranrbt.github.io.git
cd leotranrbt.github.io

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → http://localhost:5173

# 4. Type-check
npx tsc --noEmit

# 5. Production build (outputs to dist/)
npm run build

# 6. Preview production build locally
npm run preview