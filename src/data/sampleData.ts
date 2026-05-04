import type { Skill, Project, ContactLink } from '../types';

/**
 * Skills data — grouped by category.
 * Categories map to section headers on the Home page:
 *   language | framework | tool | platform
 */
export const SKILLS: Skill[] = [
  // Languages
  { name: 'C#',          category: 'language' },
  { name: 'JavaScript',  category: 'language' },
  { name: 'Python',      category: 'language' },
  { name: 'PowerShell',  category: 'language' },

  // Frameworks
  { name: '.NET',        category: 'framework' },
  { name: 'ReactJS',     category: 'framework' },

  // Tools
  { name: 'MS SQL',      category: 'tool' },
  { name: 'SSIS',        category: 'tool' },
  { name: 'Git',         category: 'tool' },
  { name: 'Scrum',       category: 'tool' },

  // Platforms
  { name: 'AWS',         category: 'platform' },
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
 * Contact links.
 * Replace handles and URLs with your actual profiles.
 */
export const CONTACT_LINKS: ContactLink[] = [
  { platform: 'GitHub',   url: 'https://github.com/<YOUR_USERNAME>',    handle: '@<YOUR_USERNAME>', icon: '⌥' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/<YOUR_HANDLE>', handle: '<YOUR_HANDLE>',    icon: '▣' },
  { platform: 'Email',    url: 'mailto:<YOUR_EMAIL>',                   handle: '<YOUR_EMAIL>',     icon: '✉' },
];
