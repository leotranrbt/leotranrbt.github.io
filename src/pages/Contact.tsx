import { TerminalWindow } from '../components/ui';
import { CONTACT_LINKS } from '../data/sampleData';

/**
 * Contact page — lists all social and contact links from sampleData.
 * Replace CONTACT_LINKS entries with your real profiles before deploying.
 */
const Contact = (): JSX.Element => (
  <div className="space-y-8">
    <div className="border-b border-terminal-border pb-6">
      <p className="text-terminal-dim text-sm tracking-widest mb-2">
        &gt; LOADING CONTACT PROTOCOLS...
      </p>
      <h1 className="text-3xl text-terminal-bright tracking-widest">CONTACT</h1>
    </div>

    <TerminalWindow title="contact.cfg">
      <div className="space-y-6">
        <p className="text-terminal-dim text-sm leading-relaxed">
          &gt; Open to collaborations, interesting projects, and conversations about software.
          Reach out via any channel below.
        </p>

        <div className="space-y-4">
          {CONTACT_LINKS.map((link) => (
            <div key={link.platform} className="flex items-center gap-4">
              <span className="text-terminal-bright w-6 text-center" aria-hidden="true">
                {link.icon}
              </span>
              <span className="text-terminal-dim w-24 text-sm tracking-widest uppercase">
                {link.platform}
              </span>
              <a
                href={link.url}
                target={link.platform !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-terminal-base hover:text-terminal-bright text-sm tracking-widest transition-colors"
              >
                {link.handle}
              </a>
            </div>
          ))}
        </div>
      </div>
    </TerminalWindow>
  </div>
);

export default Contact;
