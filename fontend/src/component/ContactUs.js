import React from 'react';
import styles from './modifies/ContactUsPage.module.css'; // Import your CSS module

const ContactUsPage = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactForm}>
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p>Email: contact@example.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Main Street, Cityville</p>
      </div>
    </div>
  );
};

export default ContactUsPage;
