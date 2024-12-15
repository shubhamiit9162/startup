import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams(); 
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [deliveryOption, setDeliveryOption] = useState("shipping");
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [address, setAddress] = useState("");
  const [optionalAddress, setOptionalAddress] = useState("");
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  // (Fetch product details)
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true); 
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        console.log("Fetched Product:", data);
        setProduct(data);
        setLoading(false); 
      } catch (err) {
        console.error("Fetch Error:", err.message);
        setError(err.message); 
        setLoading(false); 
      }
    };
    fetchProduct();
  }, [id]);

  // Quantity Handlers
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  // Delivery Option Handlers
  const handleDeliveryOption = (e) => setDeliveryOption(e.target.value);

  // Address Modal Handlers
  const openAddressModal = () => setShowAddressModal(true);
  const closeAddressModal = () => setShowAddressModal(false);

  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleOptionalAddressChange = (e) => setOptionalAddress(e.target.value);

  const handleUpdateLocation = () => {
    if (address.trim().length > 5) {
      setIsAddressValid(true);
      closeAddressModal();
    } else {
      alert("Please enter a valid delivery address.");
    }
  };

  // (Add to Cart)
  const handleAddToCart = () => {
    if (!product) {
      alert("Product not found!");
      return;
    }

    const cartProduct = {
      ...product,
      quantity,  
    };

    addToCart(cartProduct); 
    alert("Added to cart!");
  };

  // (Handle Loading and Errors)
  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  // (Render Product Details)
  return (
    <div className="product-details-container">
      {/* Product Info */}
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="product-description">{product.description}</p>

        {/* Pricing */}
        <p className="price">
          <span className="sale-price">${product.price}</span>{" "}
          <span className="original-price">
            ${product.originalPrice || product.price + 5}
          </span>
        </p>

        {/* Quantity Selector */}
        <div className="quantity-selector">
          <button onClick={decrementQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>

        {/* Delivery Section */}
        <div className="delivery-section">
          <h4>How to get it</h4>
          <label>
            <input
              type="radio"
              name="delivery"
              value="shipping"
              checked={deliveryOption === "shipping"}
              onChange={handleDeliveryOption}
            />
            Shipping
          </label>
          <label>
            <input
              type="radio"
              name="delivery"
              value="local"
              checked={deliveryOption === "local"}
              onChange={handleDeliveryOption}
            />
            Local Delivery
          </label>

          {/* Address Modal Trigger */}
          {deliveryOption === "local" && (
            <div className="change-address">
              <button onClick={openAddressModal} className="change-address-btn">
                {isAddressValid ? "Change your address" : "Enter delivery address"}
              </button>
              {isAddressValid && <p>Address: {address}</p>}
            </div>
          )}
        </div>

        {/* Add to Cart */}
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>

      {/* Address Modal */}
      {showAddressModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Enter delivery address</h3>
            <input
              type="text"
              placeholder="Delivery address"
              value={address}
              onChange={handleAddressChange}
            />
            <input
              type="text"
              placeholder="Apt, Floor, Suite, etc. (Optional)"
              value={optionalAddress}
              onChange={handleOptionalAddressChange}
            />
            <div className="modal-buttons">
              <button onClick={closeAddressModal} className="close-btn">
                Cancel
              </button>
              <button onClick={handleUpdateLocation} className="update-btn">
                Update location
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
