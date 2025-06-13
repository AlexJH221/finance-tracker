import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav className="flex gap-4 p-4 bg-gray-100 shadow">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/about" className="text-blue-600 hover:underline">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
