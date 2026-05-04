/**
 * Site footer with terminal-style credits and current year.
 * Fully static — no dynamic data fetching.
 */
const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-terminal-border bg-terminal-surface mt-10">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-terminal-dim tracking-widest">
        <span>&copy; {year} LEO TR — ALL RIGHTS RESERVED</span>
        <span className="text-terminal-muted">BUILT WITH VITE + REACT + TAILWIND</span>
      </div>
    </footer>
  );
};

export default Footer;
