// src/pages/Payment.js
import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    if (!paymentMethod) {
      setPaymentStatus("Please select a payment method.");
      return;
    }
    setIsProcessing(true);
    setPaymentStatus("Processing payment...");

    setTimeout(() => {
      setIsProcessing(false);
      setPaymentStatus("Payment Successful!");
      clearCart(); // (Clear the cart after successful payment)

      // (Navigate to an order confirmation page)
      navigate("/order-confirmation");
    }, 3000); 
  };

  return (
    <div className="payment-container">
      <h2>Complete Your Payment</h2>

      {/* Order Summary */}
      <div className="payment-summary">
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span className="item-name">{item.name}</span>
              <span className="item-quantity">x{item.quantity}</span>
              <span className="item-total">${item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <h3 className="total-price">Total: ${totalPrice.toFixed(2)}</h3>
      </div>

      {/* Payment Method Section */}
      <div className="payment-methods">
        <h3>Select Payment Method</h3>
        <label>
          <input
            type="radio"
            value="creditCard"
            checked={paymentMethod === "creditCard"}
            onChange={() => setPaymentMethod("creditCard")}
          />
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
          />
          PayPal
        </label>
        <label>
          <input
            type="radio"
            value="netBanking"
            checked={paymentMethod === "netBanking"}
            onChange={() => setPaymentMethod("netBanking")}
          />
          Net Banking
        </label>
      </div>

      {/* Payment Button */}
      <button
        className={`payment-button ${isProcessing ? "disabled" : ""}`}
        onClick={handlePayment}
        disabled={isProcessing}
      >
        {isProcessing ? "Processing..." : "Proceed to Pay"}
      </button>

      {/* Payment Status */}
      {paymentStatus && (
        <p
          className={`payment-status ${
            paymentStatus.includes("Successful") ? "success" : "error"
          }`}
        >
          {paymentStatus}
        </p>
      )}
    </div>
  );
};

export default Payment;
