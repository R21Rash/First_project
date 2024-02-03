// Man.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './modifies/style.module.css';
import { Link } from 'react-router-dom';

const Man = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [manProducts, setManProducts] = useState([]);

  useEffect(() => {
    const fetchManProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/product/man');
        if (Array.isArray(response.data)) {
          setManProducts(response.data);
        }
      } catch (error) {
        console.error('Error fetching man products:', error);
      }
    };

    fetchManProducts();
  }, []);

  const filteredManProducts = manProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();

    recognition.onstart = () => {
      console.log('Speech recognition started');
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
    };

    recognition.onend = () => {
      console.log('Speech recognition ended');
    };

    recognition.start();
  };
  

  return (
    <div>
      <nav className={`navbar ${styles.navbar}`}>
        <div className={`${styles.collapse} ${styles.navbarNav}`} id="navbarNav">
          <ul className={`${styles.navbarNav} ${styles.navList}`}>
            <li className={styles.navItem}>
              <a className={`${styles.navLink} ${styles.active}`} href="/Home">
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#">
                Man
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#">
                Kids
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/Woman">
                Women
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/user/login">
                About Us
              </a>
            </li>
          </ul>
          <div className={styles.rightt}>
            <form className={styles.searchBar} onSubmit={(e) => e.preventDefault()}>
              <input
                className={`${styles.searchInput}`}
                type="search"
                placeholder="Search..."
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className={`${styles.micButton}`} onClick={startListening}>
                <div className={`${styles.micIcon}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-mic"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"
                    />
                    <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                  </svg>
                </div>
              </button>
            </form>
          </div>

          <Link to="/user/login" className={styles.loginButton}>
            Logout
          </Link>
        </div>
      </nav>
      <div className={`logo-container ${styles.logoContainer}`}>
        <Link className={styles.navbarBrand} to="/home">
          <img
            src={require("./res/Black_Grey_Modern_Elegant_Name_Initials_Logo-removebg-preview.png")}
            alt="Logo"
            className={`logo ${styles.logo}`}
          />
        </Link>
      </div>
      <div className={styles.products} id="Products">
        <h1>Man's clothing.</h1>
        <div className={`${styles.box} ${styles.fourPerLine}`}>
          {filteredManProducts.map((product) => (
            <div className={styles.box} key={product._id}>
              <Link
                to={{
                  pathname: `/user/product/details/${product._id}/${product.name}/${product.imgSrc}/${product.description}/${product.price}`,
                  state: {
                    name: product.name,
                    image: `http://localhost:3000/uploads/${product.imgSrc}`,
                    description: product.description,
                    price: product.price,
                  },
                }}
                style={{ textDecoration: 'none' }}
              >
                <div className={styles.card}>
                  <div className={styles.smallCard}>
                    <i
                      className="fa-solid fa-heart"
                      style={{ color: '#343a40', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => (e.target.style.color = 'red')}
                      onMouseLeave={(e) => (e.target.style.color = '#343a40')}
                    ></i>

                    <i
                      className="fa-solid fa-share"
                      style={{ color: '#343a40', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => (e.target.style.color = 'red')}
                      onMouseLeave={(e) => (e.target.style.color = '#343a40')}
                    ></i>
                  </div>
                  <div className={styles.image}>
                    <img src={`http://localhost:3000/uploads/${product.imgSrc}`} alt="Product Image" />
                  </div>
                  <div className={styles.productsText}>
                    <h2 style={{ fontWeight: 'bold' }}>{product.name}</h2>
                    <p style={{ textDecoration: 'none' }}>{product.description}</p>
                    <h3 style={{ color: 'black' }}>${product.price}</h3>
                    <div className={styles.productStar}>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <a href="#" className={styles.btn}>
                      Add To Cart
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
<section style={{marginTop: '850px'}}>
      <footer>
        <div className={styles.footermain}>
          <div className={styles.tag}>
            <h1>Contact</h1>
            <a>
              <i className="fa-solid fa-house"></i>123/Colombo/Sri Lanka
            </a>
            <a>
              <i className="fa-solid fa-phone"></i>+94 12 345 6789
            </a>
            <a>
              <i className="fa-solid fa-envelope"></i>contact@gmail.com
            </a>
          </div>

          <div className={styles.tag}>
            <h1>Get Help</h1>
            <a href="#" className="center">
              FAQ
            </a>
            <a href="#" className="center">
              Shipping
            </a>
            <a href="#" className="center">
              Returns
            </a>
            <a href="#" className="center">
              Payment Options
            </a>
          </div>

          <div className={styles.tag}>
            <h1>Our Stores</h1>
            <a href="#" className="center">
              Sri Lanka
            </a>
            <a href="#" className="center">
              USA
            </a>
            <a href="#" className="center">
              India
            </a>
            <a href="#" className="center">
              Japan
            </a>
          </div>

          <div className={styles.tag}>
            <h1>Follow Us</h1>
            <div className={styles.social_link}>
              <a href="#">
                <i className="fa-brands fa-facebook-f" style={{ marginTop: '7px' }}></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter" style={{ marginTop: '7px' }}></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram" style={{ marginTop: '7px' }}></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in" style={{ marginTop: '7px' }}></i>
              </a>
            </div>
          </div>

          <div className={styles.tag}>
            <h1>Newsletter</h1>
            <div className={styles.search_bar}>
              <input type="text" placeholder="Your email here" />
              <input type="submit" value={'Subscribe'} className={styles.button}></input>
            </div>
          </div>
        </div>
      </footer>
      </section>
    </div>
  );
};

export default Man;
