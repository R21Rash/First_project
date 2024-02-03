import React from 'react';
import styles from './modifies/Header.module.css'; // Adjust the path accordingly

export default function Header() {
  return (
    <header className={styles.headerr}>
      <nav>
        <ul className={styles.navul}>
          <li><a href="#" className={styles.navLink}>Home</a></li>
          <li><a href="#" className={styles.navLink}>Man</a></li>
          <li><a href="#" className={styles.navLink}>Kids</a></li>
          <li><a href="#" className={styles.navLink}>Women</a></li>
          <li><a href="#" className={styles.navLink}>About Us</a></li>
        </ul>
      </nav>
      <div className={styles.logoContainer}>
        <a href="#" className={`${styles.navLink} ${styles.navBrand}`}>
          <img src="./1.png" alt="Logo" className={styles.logo} />
        </a>
      </div>
      <form className={styles.formm}>
        <input type="search" placeholder="Search..." aria-label="Search" className={styles.inputt} />
      </form>
      <button type="button" className={`${styles.buttonn} ${styles.buttonnPrimary}`}>Login</button>
    </header>
  );
}
