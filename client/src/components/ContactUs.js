import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      {/* Header */}
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We’re here to help you with your queries and concerns.</p>
      </header>

      {/* FAQ Section */}
      <section className="contact-section">
        <h2>Frequently Asked Questions</h2>
        <ul className="faq-list">
          <li>
            <h4>How can I track my order?</h4>
            <p>Visit the "My Orders" page to track your recent purchases.</p>
          </li>
          <li>
            <h4>How do I return or exchange an item?</h4>
            <p>
              Go to your "Order History" and select the item you want to return.
            </p>
          </li>
          <li>
            <h4>What payment methods are accepted?</h4>
            <p>We accept all major credit cards, debit cards, and UPI.</p>
          </li>
          <li>
            <h4>How can I reset my password?</h4>
            <p>Click on "Forgot Password" during login to reset it.</p>
          </li>
        </ul>
      </section>

      {/* Contact Options */}
      <section className="contact-section">
        <h2>Contact Options</h2>
        <div className="contact-options">
          <div className="contact-option">
            <h3>Email Us</h3>
            <p>
              Send us an email at{" "}
              <a href="mailto:support@clean-air.com">support@clean-air.com</a>.
            </p>
          </div>
          <div className="contact-option">
            <h3>Call Us</h3>
            <p>Our support team is available at: <strong>+1-800-123-4567</strong></p>
          </div>
          <div className="contact-option">
            <h3>Chat With Us</h3>
            <p>
              Chat with our 24/7 support team using our{" "}
              <a href="/chat">online chat</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-section">
        <h2>Still Need Help?</h2>
        <p>Fill out the form below, and we'll get back to you soon.</p>
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Describe your issue" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
