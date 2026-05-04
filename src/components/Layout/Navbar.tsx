import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BlinkingCursor from '../ui/BlinkingCursor';

interface NavItem {
  label: string;
  path: string;
}

/** Navigation items for the site */
const NAV_ITEMS: NavItem[] = [
  { label: 'HOME',     path: '/' },
  { label: 'PROJECTS', path: '/projects' },
  { label: 'BLOG',     path: '/blog' },
  { label: 'CONTACT',  path: '/contact' },
];

/**
 * Returns Tailwind classes for a NavLink based on its active state.
 * @param isActive - Whether this route is currently active.
 */
const navLinkClass = (isActive: boolean): string =>
  isActive
    ? 'text-terminal-bright border-b border-terminal-bright pb-0.5'
    : 'text-terminal-base hover:text-terminal-bright transition-colors duration-150';

/**
 * Sticky top navigation bar with terminal branding and responsive mobile menu.
 * Uses HashRouter-compatible NavLink for active state detection.
 */
const Navbar = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  /** Toggles the mobile hamburger menu open/closed */
  const toggleMenu = (): void => setMenuOpen((prev) => !prev);

  /** Closes the mobile menu — called when a nav link is clicked */
  const closeMenu = (): void => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-terminal-bg border-b border-terminal-border">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-terminal-bright text-lg tracking-widest" onClick={closeMenu}>
          &gt; LEO_TR_<BlinkingCursor />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm tracking-widest">
          {NAV_ITEMS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) => navLinkClass(isActive)}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-terminal-base hover:text-terminal-bright focus:outline-none"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '[X]' : '[=]'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden border-t border-terminal-border bg-terminal-surface px-4 py-4 flex flex-col gap-4 text-sm tracking-widest">
          {NAV_ITEMS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) => navLinkClass(isActive)}
              onClick={closeMenu}
            >
              &gt; {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
