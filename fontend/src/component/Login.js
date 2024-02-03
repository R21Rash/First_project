// Login.js

import React, { useState } from 'react';
import axios from 'axios';
import styles from './modifies/Hello.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = async (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill out both email and password fields');
    } else {
      try {
        // Make an API request to your backend for login
        const response = await axios.post('http://localhost:3000/user/login', {
          email,
          password,
        });
        

        const gender = response.data.gender;
        if (email === 'admin@gmail.com'){
          window.location.href ='/Admin';
        }
        else{
            // Add your logic for handling successful login, such as redirecting to another page
        if (gender === 'female') {
          window.location.href = '/Woman'; // Redirect to the women page
        } else if (gender === 'male') {
          window.location.href = '/product/man'; // Redirect to the men page
        } else if (gender === 'kids') {
          window.location.href = '/kids'; // Redirect to the kids page
        } else {
          // Default redirection or handle other cases
          window.location.href = '/product/man';
        }
        }
      
        // Handle success
        console.log('Login successful:', response.data);
        // Add your logic for handling successful login, such as redirecting to another page

      } catch (error) {
        console.error('Login error:', error.response.data);
        // Handle error, show error message, etc.
      }
    }
  };

  return (
    <div className={styles.bodyStyling}>
      <header>
        <div className={styles.logo}>
          <img src={require("./res/Black Grey Modern Elegant Name Initials Logo.png")} alt="ZARA Modeling Logo" />
        </div>
      </header>

      <div className={styles.login}>
        <h1 className={styles.h1Login}>Login</h1>
        <form onSubmit={validateForm}>
          <input
            type="text"
            id="uname"
            name="uname"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField}
          />
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
          />
          <button type='submit' className={styles.btn}>Login</button>
        </form>
        <a href="#" className={styles.forgotPassword}>Forgot password?</a>
        <a href="./register" className={styles.forgotPassword}>Register</a>
      </div>

      <footer className={`${styles.fixedFooter} ${styles.footer}`}>
        <p>&copy; 2023 ZxW Modeling. All rights reserved.</p>
      </footer>
    </div>
  );
}
