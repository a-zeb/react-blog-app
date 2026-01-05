import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '../posts';

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
        <button onClick={() => navigate('/blog')}>Back to blog</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <button onClick={() => navigate('/blog')}>Back to blog</button>
    </div>
  );
}

export default BlogPost;
