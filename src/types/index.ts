/**
 * Core domain types for the portfolio site.
 * All types are explicit — no `any` usage.
 */

/** Represents a single skill or technology */
export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'platform';
}

/** Represents a portfolio project entry */
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

/** Represents a blog post parsed from a markdown file */
export interface BlogPost {
  slug: string;
  title: string;
  date: string;        // ISO 8601 — e.g. "2026-04-01"
  summary: string;
  tags: string[];
  content: string;     // Raw markdown body
}

/** Represents a social / contact link */
export interface ContactLink {
  platform: string;
  url: string;
  handle: string;
  icon: string;        // Emoji or icon identifier
}
