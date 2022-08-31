import {
  BrowserRouter as Router,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import "../styles/app.css";

//components
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

// mock data
import products from "../data/products.json";

const App = () => {
  return (
    <div className="app">
      <Router>
        <h1>Example shop</h1>
        <nav>
          <ul className="app__nav-list">
            <li className="app__nav-list-item">
              <NavLink className="app__nav-list-link" to="/">
                Homepage
              </NavLink>
            </li>
            <li className="app__nav-list-item">
              <NavLink className="app__nav-list-link" end to="products">
                Products
              </NavLink>
            </li>
            <li className="app__nav-list-item">
              <NavLink className="app__nav-list-link" to="about">
                About
              </NavLink>
            </li>
            <li className="app__nav-list-item">
              <NavLink className="app__nav-list-link" to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h2>Home component</h2>} />
          <Route
            path="products"
            element={<ProductList products={products} />}
          />
          <Route
            path="products/product/:id"
            element={<ProductDetails products={products} />}
          />
          <Route path="about" element={<h2>About component</h2>} />
          <Route path="contact" element={<h2>Contact component</h2>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
