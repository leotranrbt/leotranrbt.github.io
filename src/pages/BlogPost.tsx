import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { Badge, TerminalWindow } from '../components/ui';
import { getBlogPostBySlug } from '../hooks/useBlogPosts';

/**
 * Individual blog post page.
 * Reads the slug from URL params, finds the matching parsed markdown post,
 * and renders the content via react-markdown.
 */
const BlogPost = (): JSX.Element => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug !== undefined ? getBlogPostBySlug(slug) : null;

  if (post === null) {
    return (
      <div className="space-y-4">
        <p className="text-terminal-amber tracking-widest">
          &gt; ERROR: POST NOT FOUND.
        </p>
        <Link
          to="/blog"
          className="block text-terminal-base hover:text-terminal-bright tracking-widest text-sm transition-colors"
        >
          &lt; RETURN TO BLOG INDEX
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Back link */}
      <Link
        to="/blog"
        className="text-terminal-dim hover:text-terminal-base text-sm tracking-widest transition-colors"
      >
        &lt; BACK TO BLOG
      </Link>

      {/* Post header */}
      <div className="border-b border-terminal-border pb-6">
        <h1 className="text-3xl text-terminal-bright tracking-widest mb-3">
          {post.title.toUpperCase()}
        </h1>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-terminal-muted text-xs tracking-widest">{post.date}</span>
          <div className="flex gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <Badge key={tag} label={tag} variant="muted" />
            ))}
          </div>
        </div>
      </div>

      {/* Markdown content */}
      <TerminalWindow title={`blog://${post.slug}`}>
        <div className="prose-terminal">
          <Markdown>{post.content}</Markdown>
        </div>
      </TerminalWindow>
    </div>
  );
};

export default BlogPost;
