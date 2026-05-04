import type { BlogPost } from '../types';

/**
 * Parses simple YAML-like frontmatter from a raw markdown string.
 * Supports string values and array syntax: [item1, item2]
 *
 * @param raw - Raw markdown string including frontmatter block.
 * @returns Parsed frontmatter data object and remaining markdown content.
 */
const parseFrontmatter = (
  raw: string,
): { data: Record<string, string | string[]>; content: string } => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (match === null) return { data: {}, content: raw };

  const data: Record<string, string | string[]> = {};
  match[1].split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;
    const key = line.slice(0, colonIndex).trim();
    const val = line.slice(colonIndex + 1).trim();
    if (val.startsWith('[') && val.endsWith(']')) {
      data[key] = val
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
    } else {
      data[key] = val;
    }
  });

  return { data, content: match[2] };
};

/**
 * Derives a URL-safe slug from a Vite glob import path.
 * e.g. "/blogs/hello-world.md" → "hello-world"
 *
 * @param path - The file path string from import.meta.glob keys.
 */
const pathToSlug = (path: string): string =>
  path.split('/').pop()?.replace(/\.md$/, '') ?? path;

/**
 * Eagerly imported raw markdown files from the /blogs directory.
 * Vite resolves this at build time — no runtime file I/O.
 */
const RAW_MODULES = import.meta.glob('/blogs/*.md', {
  as: 'raw',
  eager: true,
}) as Record<string, string>;

/**
 * Returns all parsed blog posts sorted by date descending.
 */
export const getAllBlogPosts = (): BlogPost[] => {
  const posts: BlogPost[] = Object.entries(RAW_MODULES).map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    return {
      slug:    pathToSlug(path),
      title:   typeof data['title']   === 'string' ? data['title']   : pathToSlug(path),
      date:    typeof data['date']    === 'string' ? data['date']    : '',
      summary: typeof data['summary'] === 'string' ? data['summary'] : '',
      tags:    Array.isArray(data['tags']) ? data['tags'] : [],
      content,
    };
  });
  return posts.sort((a, b) => b.date.localeCompare(a.date));
};

/**
 * Returns a single blog post matching the given slug, or null if not found.
 *
 * @param slug - URL slug derived from the markdown filename.
 */
export const getBlogPostBySlug = (slug: string): BlogPost | null =>
  getAllBlogPosts().find((post) => post.slug === slug) ?? null;
