import React, { useState } from 'react';
import styles from './modifies/Common.module.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


const modelData = [
    {
      name: 'Model Name 1',
      description: 'Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.',
      price: '$500 per hour',
      imgSrc: require('./res/OIP.jpeg'),
      thumbnails: [require('./res/740full-armanda-barten.jpg'), require('./res/740full-zanna-van-vorstenbosch.jpg'), require('./res/76c3f63e11d784d5882d33d77c50145f.jpg'), require('./res/2.jpeg'), require('./res/R.jpeg')],
    },
    {
        name: 'Model Name 1',
        description: 'Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.',
        price: '$500 per hour',
        imgSrc: require('./res/740full-armanda-barten.jpg'),
        thumbnails: [require('./res/OIP.jpeg'), require('./res/740full-zanna-van-vorstenbosch.jpg'), require('./res/76c3f63e11d784d5882d33d77c50145f.jpg'), require('./res/2.jpeg'), require('./res/R.jpeg')],
      },
      {
        name: 'Model Name 1',
        description: 'Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.',
        price: '$500 per hour',
        imgSrc: require('./res/740full-zanna-van-vorstenbosch.jpg'),
        thumbnails: [require('./res/740full-armanda-barten.jpg'), require('./res/OIP.jpeg'), require('./res/76c3f63e11d784d5882d33d77c50145f.jpg'), require('./res/2.jpeg'), require('./res/R.jpeg')],
      },
];
const Woman = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
  
    function toggleSearch() {
      setIsSearchVisible((prev) => !prev);
    }
  
    function showModelDetails(name, description, price, imgSrc, thumbnails) {
      // Placeholder for navigation logic
      console.log('Navigating to model details:', name, description, price, imgSrc, thumbnails);
    }
  
    return (
      <div>
      {/*  
        <header className={styles.header}>
          <div className={styles.centerLogo}>
            <img src={require('./res/Black_Grey_Modern_Elegant_Name_Initials_Logo-removebg-preview.png')} alt="ZARA Modeling Logo" />
          </div>
          <div className={styles.searchBar}>
            <i className={`search-icon fas fa-search ${styles.searchIcon}`} onClick={toggleSearch}></i>
            <input type="text" className={`${styles.searchInput} ${isSearchVisible ? styles.visible : ''}`} placeholder="Search..." />
          </div>
          <a href="/user/login" className={styles.login}>Login</a>
        </header>
  
        <div className={styles.menuCategory}>
          <a href="./Man">MAN</a>
          <div className={styles.submenu}>
            <a href="#">Pants</a>
            <a href="#">Shirts</a>
            <a href="#">Shoes</a>
          </div>
        </div>
        <div className={styles.menuCategory}>
         
          <a href="./Woman">WOMAN</a>
          <div className={styles.submenu}>
            <a href="#">Dresses</a>
            <a href="#">Blouses</a>
            <a href="#">Heels</a>
          </div>
        </div>
        <div className={styles.menuCategory}>
          KIDS
          <div className={styles.submenu}>
            <a href="#">Toys</a>
            <a href="#">Clothing</a>
          </div>
    </div> */}
  
        <section className={styles.container}>
          <div className={styles.row}>
            {modelData.map((model, index) => (
              <div key={index} className={styles.colMd4}>
                <div className={`${styles.modelCard} ${styles.modelCardStyle}`} onMouseEnter={() => showModelDetails(model.name, model.description, model.price, model.imgSrc, model.thumbnails)}>
                  <img src={model.imgSrc} alt={model.name} />
                  <div className={styles.modelInfo}>
                    <h3>{model.name}</h3>
                    <p>{model.description}</p>
                    <p className={styles.modelPrice}>{model.price}</p>
                  </div>
  
                  <div className={styles.thumbnailGallery}>
                    {model.thumbnails.map((thumbnail, i) => (
                      <img key={i} src={thumbnail} alt={`Thumbnail ${i + 1}`} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
         
        </section>  
        <footer className={`${styles.footer} ${styles.fixedFooter}`}>
                  <p>&copy; 2023 ZxW Modeling. All rights reserved.</p>
      </footer>
                      
      </div>
      
    );
  };
  
  export default Woman;