// Import React and necessary components
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './modifies/Admin.module.css';
import i0 from './res/Preview, Edit, Delete..png';
import i1 from './res/0001.png';
import i2 from './res/hellllll.png'

export default function Admin() {
  const [searchQuery, setSearchQuery] = useState('');

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


  // Sample data for demo purposes
  const Data = [
    { id: 1, name: 'Inquiry', category: 'Inquiry', image: i0, linkTo: '#' },
    { id: 2, name: 'Upload', category: 'Upload', image: i1, linkTo: '/admin/Upload' },
    { id: 3, name: 'Preview', category: 'Preview', image: i2, linkTo: '/admin/product/Man' },
   
    // Add more demo data as needed
  ];

  return (
    <div className={styles.color}>
       <nav className={`navbar ${styles.navbar}`}>
        <div className={`${styles.collapse} ${styles.navbarNav}`} id="navbarNav">
          <ul className={`${styles.navbarNav} ${styles.navList}`}>
            <li className={styles.navItem}>
              <a className={`${styles.navLink} ${styles.active}`} href="/Home">
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="./product/man">
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

      {/* Grid Layout with Demo Content */}
      <div className={styles.gridContainer}>
        {Data.map((product) => (
          <Link key={product.id} to={product.linkTo} className={styles.gridItem}>
            <div className={styles.productDetails}>
              <img src={product.image} alt={product.name} />
              <div className={styles.detailsOverlay}>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <footer className={`${styles.fixedFooter} ${styles.footer}`}>
        <p>&copy; 2023 ZxW Modeling. All rights reserved.</p>
      </footer>
    </div>
  );
}
