import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Hero.css'; 

const Hero = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken'); 

  const handleLogout = () => {
    localStorage.removeItem('authToken'); 
    navigate('/login'); 
  };

  return (
    <section className="hero">
      {/* Top-left title */}
      <h1 className="hero-title">Breathe Fresh Air</h1>

      {/* "Learn More" Button */}
      <Link to="/learn-more" className="btn learn-more">Learn More</Link>

      {/* Shop Now Button */}
      <Link to="/" className="btn shop-now">Shop Now</Link>
    </section>
  );
};

export default Hero;
