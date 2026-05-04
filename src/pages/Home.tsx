import { GlitchText, Badge, TerminalWindow, BlinkingCursor } from '../components/ui';
import { SKILLS } from '../data/sampleData';
import type { Skill } from '../types';

/** Ordered list of skill categories to display */
const CATEGORIES: Skill['category'][] = ['language', 'framework', 'tool', 'platform'];

/** Human-readable label for each skill category */
const CATEGORY_LABELS: Record<Skill['category'], string> = {
  language:  '// LANGUAGES',
  framework: '// FRAMEWORKS',
  tool:      '// TOOLS',
  platform:  '// PLATFORMS',
};

/**
 * Home page — hero section with glitch animation and skills grid.
 * Skills are grouped by category inside a TerminalWindow panel.
 */
const Home = (): JSX.Element => (
  <div className="space-y-10">
    {/* Hero */}
    <section className="py-10 border-b border-terminal-border">
      <p className="text-terminal-dim text-sm tracking-widest mb-3">
        &gt; INITIALIZING PROFILE...
      </p>
      <h1 className="text-5xl md:text-7xl text-terminal-bright tracking-widest mb-3 leading-tight">
        <GlitchText text="LEO TR" duration={1600} />
        <BlinkingCursor />
      </h1>
      <p className="text-terminal-base text-lg tracking-widest mb-6">SOFTWARE ENGINEER</p>
      <p className="text-terminal-dim max-w-xl leading-relaxed text-sm">
        &gt; Building reliable, scalable software. Passionate about clean architecture,
        developer tooling, and open-source. Available for interesting problems.
      </p>
    </section>

    {/* Skills grid */}
    <section>
      <TerminalWindow title="skills.cfg">
        <div className="space-y-6">
          {CATEGORIES.map((category) => {
            const skills = SKILLS.filter((s) => s.category === category);
            if (skills.length === 0) return null;
            return (
              <div key={category}>
                <p className="text-terminal-dim text-xs tracking-widest mb-3">
                  {CATEGORY_LABELS[category]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill.name} label={skill.name} variant="bright" />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </TerminalWindow>
    </section>
  </div>
);

export default Home;
