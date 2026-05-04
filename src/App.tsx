import { HashRouter, Routes, Route } from 'react-router-dom';

/**
 * Placeholder page component used during scaffolding phases.
 * Will be replaced by real page components in Phase 3.
 */
const PlaceholderPage = ({ name }: { name: string }): JSX.Element => (
  <div className="min-h-screen flex items-center justify-center font-mono text-terminal-base">
    <p className="text-2xl">[{name.toUpperCase()} PAGE — COMING IN NEXT PHASE]</p>
  </div>
);

/**
 * Root application component.
 * Uses HashRouter for GitHub Pages static hosting compatibility —
 * avoids 404s on deep-link page refreshes without a server rewrite rule.
 */
const App = (): JSX.Element => (
  <HashRouter>
    <Routes>
      <Route path="/"           element={<PlaceholderPage name="Home" />} />
      <Route path="/projects"   element={<PlaceholderPage name="Projects" />} />
      <Route path="/blog"       element={<PlaceholderPage name="Blog" />} />
      <Route path="/blog/:slug" element={<PlaceholderPage name="Blog Post" />} />
      <Route path="/contact"    element={<PlaceholderPage name="Contact" />} />
    </Routes>
  </HashRouter>
);

export default App;
