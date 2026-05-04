import type { ReactNode } from 'react';

interface TerminalWindowProps {
  /** Title shown in the fake terminal title bar */
  title: string;
  /** Content rendered inside the terminal panel */
  children: ReactNode;
  /** Optional extra Tailwind classes for the outer wrapper */
  className?: string;
}

/**
 * A bordered panel styled as a terminal window.
 * Includes a fake title bar with traffic-light dots and a title label.
 *
 * @param title - Label displayed in the title bar.
 * @param children - Content rendered in the terminal body.
 * @param className - Optional additional Tailwind classes.
 */
const TerminalWindow = ({ title, children, className = '' }: TerminalWindowProps): JSX.Element => (
  <div className={`border border-terminal-border bg-terminal-surface rounded-sm ${className}`}>
    {/* Title bar */}
    <div className="flex items-center gap-2 px-4 py-2 border-b border-terminal-border bg-terminal-bg">
      <span className="w-2.5 h-2.5 rounded-full bg-terminal-dim" />
      <span className="w-2.5 h-2.5 rounded-full bg-terminal-dim" />
      <span className="w-2.5 h-2.5 rounded-full bg-terminal-dim" />
      <span className="ml-3 text-xs text-terminal-dim tracking-widest uppercase">{title}</span>
    </div>
    {/* Body */}
    <div className="p-5">
      {children}
    </div>
  </div>
);

export default TerminalWindow;
