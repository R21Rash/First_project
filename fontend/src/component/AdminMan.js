// Man.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './modifies/Admin.Product.module.css';
import { Link } from 'react-router-dom';

const AdminMan = () => {

  
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
  return (
    <div className={styles.color}>
    <nav className={`navbar ${styles.navbar}`}>
     
        
        <div className={`${styles.collapse} ${styles.navbarNav}`} id="navbarNav">
          <ul className={`${styles.navbarNav} ${styles.navList}`}>
            <li className={styles.navItem}>
              <a className={`${styles.navLink} ${styles.active}`} href="#">
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
              <a className={styles.navLink} href="#">
                Women
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#">
                About Us
              </a>
            </li>
          </ul>
         
  
          <a
            href="/user/login"
            className={`login-button ${styles.loginButton}`}
            style={{ marginLeft: '925px'}}
          >
            Log out
          </a>
        </div>
        
    </nav>
    <div className={`logo-container ${styles.logoContainer}`}>
      <a className={styles.navbarBrand} href="/home">
        <img
          src={require("./res/Black_Grey_Modern_Elegant_Name_Initials_Logo-removebg-preview.png")}
          alt="Logo"
          className={`logo ${styles.logo}`}
        />
      </a>
    </div>
    <br></br>
    <br></br>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <input
    type='search'
    id='search'
    style={{
      backgroundColor: '#222',
      color: '#fff',
      padding: '10px',
      border: '1px solid #fff',
      borderRadius: '25px',
      outline: 'none',
      width: '300px',
      marginLeft: '10px',
      marginTop: '50px',
    }}
    placeholder="Search..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  
</div>


   
   

<div className={styles.container}>
  {filteredManProducts.map((product) => (
    <div className={styles.product} key={product._id}>
      <Link
        to={{
          pathname: `/admin/product/Man/AdminDetails/${product._id}/${product.name}/${product.imgSrc}/${product.description}/${product.price}`,
          state: {
            name: product.name,
            image: `http://localhost:3000/uploads/${product.imgSrc}`,
            description: product.description,
            price: product.price,
          },
        }}
        style={{ textDecoration: 'none' }}
      >
        <img src={`http://localhost:3000/uploads/${product.imgSrc}`} alt="Product Image" />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className={styles.productPrice}>Price: ${product.price}</p>
      </Link>
    </div>
  ))}
</div>

    </div>
  );
};

export default AdminMan;
