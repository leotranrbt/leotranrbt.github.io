import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

/**
 * Placeholder page component used during scaffolding phases.
 * Will be replaced by real page components in Phase 3.
 */
const PlaceholderPage = ({ name }: { name: string }): JSX.Element => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <p className="text-xl text-terminal-dim tracking-widest">
      &gt; [{name.toUpperCase()} PAGE — COMING IN PHASE 3]<span className="animate-blink">_</span>
    </p>
  </div>
);

/**
 * Root application component.
 * Uses HashRouter for GitHub Pages static hosting compatibility —
 * avoids 404s on deep-link page refreshes without a server rewrite rule.
 * All routes are wrapped in the shared Layout (Navbar + Footer).
 */
const App = (): JSX.Element => (
  <HashRouter>
    <Layout>
      <Routes>
        <Route path="/"           element={<PlaceholderPage name="Home" />} />
        <Route path="/projects"   element={<PlaceholderPage name="Projects" />} />
        <Route path="/blog"       element={<PlaceholderPage name="Blog" />} />
        <Route path="/blog/:slug" element={<PlaceholderPage name="Blog Post" />} />
        <Route path="/contact"    element={<PlaceholderPage name="Contact" />} />
      </Routes>
    </Layout>
  </HashRouter>
);

export default App;
