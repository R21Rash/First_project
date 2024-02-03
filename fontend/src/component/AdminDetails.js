import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash, faImage } from '@fortawesome/free-solid-svg-icons';
import styles from './modifies/AdminDetails.module.css';
import Swal from 'sweetalert2'; // Import SweetAlert
import { Link } from 'react-router-dom';

const AdminDetails = () => {
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
  const { id, name, imgSrc, description, price } = useParams();
  const location = useLocation();
  const { state } = location;

  const initialProductName = state?.name || name;
  const initialProductImage = state?.image || `http://localhost:3000/uploads/${imgSrc}`;
  const initialProductDescription = state?.description || description;
  const initialProductPrice = state?.price || price;

  const [productName, setProductName] = useState(initialProductName);
  const [productImage, setProductImage] = useState(initialProductImage);
  const [productDescription, setProductDescription] = useState(initialProductDescription);
  const [productPrice, setProductPrice] = useState(initialProductPrice);
  const [newImage, setNewImage] = useState(null);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();

    if (!productName || !productDescription || !productPrice) {
      alert('Please fill in all the fields.');
      return;
    }

    const isConfirmed = window.confirm('Do you want to update the product?');

    if (isConfirmed) {
      try {
        Swal.fire({
          title: 'Loading',
          html: 'Please wait...',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        const formData = new FormData();
        formData.append('name', productName);
        formData.append('description', productDescription);
        formData.append('price', productPrice);
        formData.append('imgSrc', newImage || productImage);

        const response = await axios.put(`http://localhost:3000/product/update/${id}`, formData);

        console.log('Response from server:', response.data);

        setTimeout(() => {
          Swal.close();
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error updating product:', error);

        Swal.fire({
          title: 'Error',
          text: 'Failed to update product. Please try again.',
          icon: 'error',
        });

        setIsLoading(false);
      }
    }
  };


    

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
  };

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

      <br></br>
      <br></br>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="position-relative">
              <img src={productImage} alt="Product Image" className={styles.img} />
              {isEditingImage && (
                <div className={`${styles.editIcon} position-absolute`}>
                  <label htmlFor="imageUpload" className="input-group-text">
                    <FontAwesomeIcon icon={faImage} />
                  </label>
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    className={`${styles.imageUpload} visually-hidden`}
                    onChange={handleImageChange}
                  />
                </div>
              )}
            </div>
            <div className="mt-2">
              <button className={`btn btn-sm btn-secondary ${styles.btnnn} `} 
 onClick={() => setIsEditingImage(true)}>
                Edit Image
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="mb-0">Product Details</h2>
              <p className="text-muted">Product ID: {id}</p>
            </div>
            <form onSubmit={handleSave}>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">
                  Product Name
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    placeholder="Enter product name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faSave} />
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="productDescription" className="form-label">
                  Description
                </label>
                <div className="input-group">
                  <textarea
                    className="form-control"
                    id="productDescription"
                    rows="3"
                    placeholder="Enter product description"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                  ></textarea>
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faSave} />
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">
                  Price
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="productPrice"
                    placeholder="Enter product price"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faSave} />
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="productImage" className="form-label">
                  Product Image
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="productImage"
                    value={productImage}
                    readOnly
                  />
                  <label htmlFor="imageUpload" className="input-group-text">
                    <FontAwesomeIcon icon={faImage} />
                  </label>
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    className="visually-hidden"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              <div className="d-flex">
              <button type="submit" className={`btn btn-primary me-2 ${styles.btnnn}`}>
  Save <FontAwesomeIcon icon={faSave} className="ms-1" />
</button>
<button className={`btn btn-danger ${styles.btnnn}`}>
  Delete <FontAwesomeIcon icon={faTrash} className="ms-1" />
</button>
              </div>
              {/* Loading indicator */}
              {isLoading && (
                <div className="spinner-border text-primary mt-3" role="status"></div>
              )}
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};


export default AdminDetails;
