// Footer.jsx
// Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './modifies/Footer.module.css'; // Update with your actual styles file

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className={styles.contactSection}>
            <h5>Contact Us</h5>
            <p>Email: contact@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col md={6} className={styles.followUsSection}>
            <h5>Follow Us</h5>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              {/* Add more social media icons here */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p>&copy; 2023 ZxW Modeling. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
