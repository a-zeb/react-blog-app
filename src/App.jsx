import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/blog">Blog</Link>
        </nav>
        <Routes>
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
