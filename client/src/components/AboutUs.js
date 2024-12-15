import React from 'react';
import './AboutUs.css';  

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Header Section */}
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Learn more about Clean-Air and how we are making a difference.</p>
      </header>

      {/* Company Mission */}
      <section className="about-us-mission">
        <h2>Our Mission</h2>
        <p>
          At Clean-Air, we are committed to providing clean, fresh, and pure air
          to everyone. Our goal is to create awareness about air quality and provide
          innovative solutions to improve the air we breathe.
        </p>
      </section>

      {/* Our Team */}
      <section className="about-us-team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-photo"
            />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
            <p>
              John is the visionary behind Clean-Air. With a passion for technology
              and the environment, he leads the team in making Clean-Air a reality.
            </p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-photo"
            />
            <h3>Jane Smith</h3>
            <p>Chief Technology Officer</p>
            <p>
              Jane is responsible for overseeing the technological innovations that
              power our Clean-Air solutions. Her expertise ensures we're always ahead
              of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-us-contact">
        <h2>Contact Us</h2>
        <p>If you want to learn more or have any questions, feel free to reach out!</p>
        <p>
          Email: <a href="mailto:support@clean-air.com">support@clean-air.com</a>
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
