import React from "react";
import { useNavigate } from "react-router-dom";  
import { useCart } from "../contexts/CartContext"; 
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart(); 
  const navigate = useNavigate(); 

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // (Function to handle Proceed to Payment)
  const handleProceedToPayment = () => {
    const token = localStorage.getItem('authToken'); 

    if (token) {
      navigate("/payment"); 
    } else {
      navigate("/login"); 
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <h4>{item.name}</h4>
                <p>
                  Price: ${item.price} | Quantity: {item.quantity}
                </p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice}</h3>
          <button onClick={clearCart}>Clear Cart</button>

          {/* Proceed to Payment button */}
          <button onClick={handleProceedToPayment}>
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
