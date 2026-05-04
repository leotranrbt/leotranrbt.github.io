import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  /** Page content to render between Navbar and Footer */
  children: ReactNode;
}

/**
 * Root layout wrapper applied to every page.
 * Provides sticky Navbar at top, scrollable content area, and Footer at bottom.
 */
const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className="flex flex-col min-h-screen bg-terminal-bg text-terminal-base font-mono">
    <Navbar />
    <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-10">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
