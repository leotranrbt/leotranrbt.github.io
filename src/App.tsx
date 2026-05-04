import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home     from './pages/Home';
import Projects from './pages/Projects';
import Blog     from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact  from './pages/Contact';

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
        <Route path="/"           element={<Home />} />
        <Route path="/projects"   element={<Projects />} />
        <Route path="/blog"       element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact"    element={<Contact />} />
      </Routes>
    </Layout>
  </HashRouter>
);

export default App;
