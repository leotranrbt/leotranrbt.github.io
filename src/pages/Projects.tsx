import { TerminalWindow, Badge } from '../components/ui';
import { PROJECTS } from '../data/sampleData';
import type { Project } from '../types';

interface ProjectCardProps {
  /** The project data to render */
  project: Project;
}

/**
 * Renders a single project as a TerminalWindow card.
 * Displays title, description, tech stack badges, and optional links.
 *
 * @param project - Project data object.
 */
const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => (
  <TerminalWindow title={`project://${project.id}`} className="h-full">
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <h2 className="text-terminal-bright tracking-widest">
          {project.title.toUpperCase()}
        </h2>
        {project.featured && <Badge label="FEATURED" variant="amber" />}
      </div>

      <p className="text-terminal-dim text-sm leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 pt-1">
        {project.techStack.map((tech) => (
          <Badge key={tech} label={tech} variant="default" />
        ))}
      </div>

      <div className="flex gap-6 pt-2 text-xs tracking-widest">
        {project.githubUrl !== undefined && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-base hover:text-terminal-bright transition-colors"
          >
            &gt; [GITHUB]
          </a>
        )}
        {project.liveUrl !== undefined && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-amber hover:text-terminal-bright transition-colors"
          >
            &gt; [LIVE DEMO]
          </a>
        )}
      </div>
    </div>
  </TerminalWindow>
);

/**
 * Projects page — grid of ProjectCard components from sample data.
 */
const Projects = (): JSX.Element => (
  <div className="space-y-8">
    <div className="border-b border-terminal-border pb-6">
      <p className="text-terminal-dim text-sm tracking-widest mb-2">
        &gt; LOADING PROJECT DATABASE...
      </p>
      <h1 className="text-3xl text-terminal-bright tracking-widest">PROJECTS</h1>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default Projects;
