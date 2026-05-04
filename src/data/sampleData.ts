import type { Skill, Project, ContactLink } from '../types';

/**
 * Sample skills data.
 * Replace with your actual skills before deployment.
 */
export const SKILLS: Skill[] = [
  { name: 'TypeScript', category: 'language' },
  { name: 'Python',     category: 'language' },
  { name: 'Go',         category: 'language' },
  { name: 'React',      category: 'framework' },
  { name: 'Node.js',    category: 'framework' },
  { name: 'FastAPI',    category: 'framework' },
  { name: 'Docker',     category: 'tool' },
  { name: 'Git',        category: 'tool' },
  { name: 'PostgreSQL', category: 'tool' },
  { name: 'AWS',        category: 'platform' },
  { name: 'GitHub Actions', category: 'platform' },
];

/**
 * Sample projects data.
 * Replace with your actual projects before deployment.
 */
export const PROJECTS: Project[] = [
  {
    id: 'project-alpha',
    title: 'Project Alpha',
    description: 'A full-stack web application built with React and FastAPI. Handles real-time data processing with WebSocket support.',
    techStack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    githubUrl: 'https://github.com/<YOUR_USERNAME>/project-alpha',
    liveUrl: 'https://<YOUR_USERNAME>.github.io/project-alpha',
    featured: true,
  },
  {
    id: 'project-beta',
    title: 'Project Beta',
    description: 'A CLI tool written in Go for automating development workflows. Supports plugin architecture.',
    techStack: ['Go', 'Docker', 'GitHub Actions'],
    githubUrl: 'https://github.com/<YOUR_USERNAME>/project-beta',
    featured: true,
  },
  {
    id: 'project-gamma',
    title: 'Project Gamma',
    description: 'Data pipeline and visualisation dashboard for monitoring system metrics.',
    techStack: ['Python', 'AWS', 'PostgreSQL'],
    githubUrl: 'https://github.com/<YOUR_USERNAME>/project-gamma',
    featured: false,
  },
];

/**
 * Sample contact links.
 * Replace handles and URLs with your actual profiles.
 */
export const CONTACT_LINKS: ContactLink[] = [
  { platform: 'GitHub',   url: 'https://github.com/<YOUR_USERNAME>',     handle: '@<YOUR_USERNAME>', icon: '⌥' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/<YOUR_HANDLE>',   handle: '<YOUR_HANDLE>',    icon: '▣' },
  { platform: 'Email',    url: 'mailto:<YOUR_EMAIL>',                     handle: '<YOUR_EMAIL>',     icon: '✉' },
];
