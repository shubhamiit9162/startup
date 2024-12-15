import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ products = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate(); 
  const token = localStorage.getItem('authToken'); 

  
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredProducts([]); 
    } else {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      setFilteredProducts(results);
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem('authToken'); 
    navigate('/login'); 
  };

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header-logo">
        <Link to="/" className="logo">
          Clean-Air
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/guest">Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* Search Bar */}
      <div className="header-search">
        <input
          type="text"
          placeholder="Search for products..."
          className="search-input"
          value={searchQuery}
          onChange={handleSearch}
        />
        {searchQuery && (
          <div className="search-results">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product._id} className="search-item">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-details">
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-results">No products found</p>
            )}
          </div>
        )}
      </div>

      {/* Icons Section (Cart, Login/Logout) */}
      <div className="header-icons">
        <Link to="/cart" className="icon">
          <span>Cart</span>
        </Link>

        {!token ? (
          // If not logged in, show Login and Sign Up options
          <>
            <Link to="/login" className="icon">
              <span>Sign In</span>
            </Link>
            <Link to="/register" className="icon">
              <span>Sign Up</span>
            </Link>
          </>
        ) : (
          // If logged in, show Logout button
          <button className="icon logout-button" onClick={handleLogout}>
            <span>Logout</span>
          </button>
        )}
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span>{isMenuOpen ? "✖" : "☰"}</span>
      </div>
    </header>
  );
};

export default Header;
