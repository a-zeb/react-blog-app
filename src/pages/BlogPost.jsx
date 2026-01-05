import { useParams, Link } from 'react-router-dom';
import { posts } from '../posts';

function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
        <Link to="/blog">Back to blog</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/blog">Back to blog</Link>
    </div>
  );
}

export default BlogPost;
