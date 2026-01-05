import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav>
      <Link to="/blog">Blog</Link>
      {isAuthenticated ? (
        <>
          <Link to="/admin">Admin</Link>
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <Link to="/login">Log In</Link>
      )}
    </nav>
  );
}

export default Navbar;
