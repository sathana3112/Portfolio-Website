import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">

      <h2 className="contactTitle">📣 Get in Touch</h2>

      <div className="contactContainer">

        <div className="contactInfo">

          <p>📧 Email: 
            <a href="mailto: sathanalogaramanan@gmail.com"> sathanalogaramanan@gmail.com</a>
          </p>

          {/* <p>📞 Phone: 
            <a href="tel:+917639735373"> +91 XXXXXXXX</a>
          </p> */}

          <p>🔗 LinkedIn: 
            <a href="https://linkedin.com" target="_blank"> linkedin.com/in/sathana-logaramanan</a>
          </p>

          <p>💻 GitHub: 
            <a href="https://github.com" target="_blank"> github.com/sathana3112</a>
          </p>

          <p>📍 Location: Coimbatore, India</p>

        </div>

        <form className="contactForm">

          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <textarea placeholder="Your Message" rows="5"></textarea>

          <button type="submit">Send Message</button>

        </form>

        <div className="footerQuote">
  <p>"Turning curiosity into code and ideas into reality."</p>
  <span>© 2026 Sathana L</span>
</div>

      </div>

    </section>
  );
};

export default Contact;