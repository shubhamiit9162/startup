import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Top Section */}
      <div className="footer-signup">
        <input type="email" placeholder="Email" className="signup-input" />
        <button className="signup-button">Sign Up</button>
        <p className="footer-note">
          This form is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>

      {/* Main Footer Section */}
      <div className="footer-main">
        <div className="footer-brand">
          <h3>Clean-Air.in</h3>
          <a href="/">Home</a>
        </div>

        <div className="footer-stay-loop">
          <h3>Stay in the Loop</h3>
          <div className="signup-form">
            <input type="email" placeholder="Email" className="signup-input" />
            <button className="signup-button">Sign Up</button>
          </div>
          <p className="footer-note">
            This form is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024</p>
      </div>

      <div className="footer-logo">
        <p>weebly</p>
        <p>eCommerce by Square</p>
      </div>
    </footer>
  );
};

export default Footer;
