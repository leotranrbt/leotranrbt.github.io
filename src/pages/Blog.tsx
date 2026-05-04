import { Link } from 'react-router-dom';
import { Badge, TerminalWindow } from '../components/ui';
import { getAllBlogPosts } from '../hooks/useBlogPosts';

/**
 * Blog listing page.
 * Reads all parsed markdown posts and renders them as a terminal-style list.
 */
const Blog = (): JSX.Element => {
  const posts = getAllBlogPosts();

  return (
    <div className="space-y-8">
      <div className="border-b border-terminal-border pb-6">
        <p className="text-terminal-dim text-sm tracking-widest mb-2">
          &gt; SCANNING BLOG DIRECTORY...
        </p>
        <h1 className="text-3xl text-terminal-bright tracking-widest">BLOG</h1>
      </div>

      {posts.length === 0 ? (
        <p className="text-terminal-dim tracking-widest">&gt; NO POSTS FOUND.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <TerminalWindow key={post.slug} title={`blog://${post.slug}`}>
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-terminal-bright hover:text-terminal-base tracking-widest transition-colors"
                  >
                    {post.title.toUpperCase()}
                  </Link>
                  <span className="text-terminal-muted text-xs tracking-widest shrink-0">
                    {post.date}
                  </span>
                </div>

                <p className="text-terminal-dim text-sm leading-relaxed">{post.summary}</p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {post.tags.map((tag) => (
                    <Badge key={tag} label={tag} variant="muted" />
                  ))}
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="block pt-1 text-xs text-terminal-base hover:text-terminal-bright tracking-widest transition-colors"
                >
                  &gt; READ MORE
                </Link>
              </div>
            </TerminalWindow>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
