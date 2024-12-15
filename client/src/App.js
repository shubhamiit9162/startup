import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Payment from "./pages/Payment"; 
import { CartProvider } from "./contexts/CartContext";

import "./styles.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          {/* Header Section */}
          <Header />

          {/* Hero Section */}
          <Hero />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} /> {/* New Payment Route */}
          </Routes>

          {/* Footer Section */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
