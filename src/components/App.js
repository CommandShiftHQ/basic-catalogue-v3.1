import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/app.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <h1>Example shop</h1>
        <nav>
          <ul className="app__nav-list">
            <li className="app__nav-list-item">Homepage</li>
            <li className="app__nav-list-item">Products</li>
            <li className="app__nav-list-item">About</li>
            <li className="app__nav-list-item">Contact</li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h2>Home component</h2>} />
          <Route path="products" element={<h2>Products component</h2>} />
          <Route path="about" element={<h2>About component</h2>} />
          <Route path="contact" element={<h2>Contact component</h2>} />
          <Route path="*" element={<h2>Unknown route</h2>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
