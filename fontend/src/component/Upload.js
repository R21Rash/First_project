// Upload.js
import React, { useState } from "react";
import axios from 'axios';
import { Form, Button, Alert, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './modifies/Upload.module.css';
import { Link } from 'react-router-dom';

export default function Upload() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('genre', genre);
      formData.append('description', description);
      formData.append('price', price);

      if (imageFile) {
        formData.append('imgSrc', imageFile);
      }

      const response = await axios.post('http://localhost:3000/product/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
       
        openModal();
      } else {
       
      }
    } catch (error) {
      console.error("Error during data upload:", error);
      console.error(error.response);
    }
  };

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
    <div className={`container ${styles.uploadForm}`}>
      <h1 className="mt-4 mb-4">Upload</h1>
      <Form>
        <Form.Group controlId="genre">
          <Form.Label className={styles.labelll}>Genre:</Form.Label>
          <Form.Control className={styles.sselect} as="select" value={genre} onChange={handleGenreChange}>
            <option value="">Select Genre</option>
            <option value="Man">Man</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label className={styles.labelll}>Name:</Form.Label>
          <Form.Control className={styles.iinput} type="text" value={name} onChange={handleNameChange} />
        </Form.Group>

        <Form.Group controlId="imgSrc">
          <Form.Label className={styles.labelll}>Image:</Form.Label>
          <Form.Control className={styles.iinput} type="file" onChange={handleImageChange} />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label className={styles.labelll}>Price:</Form.Label>
          <Form.Control className={styles.iinput} type="text" value={price} onChange={handlePriceChange} />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label className={styles.labelll}>Description:</Form.Label>
          <Form.Control className={styles.ttextarea} as="textarea" value={description} onChange={handleDescriptionChange} />
        </Form.Group>

        <Button className={styles.butt} variant="primary" onClick={handleUpload}>
          Upload
        </Button>
      
      {confirmationMessage && (
            <Alert variant="success" className={styles['confirmation-message']}>
              {confirmationMessage}
            </Alert>
          )}
        </Form>

        {/* Modal for successful upload */}
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Successful</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Your data has been successfully uploaded!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
