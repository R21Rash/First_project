// ShopAndBrandSections.jsx
import React from 'react';
import styles from './modifies/Home.module.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import x1 from './res/Black Grey Modern Elegant Name Initials Logo.png';
import x2 from './res/pexels-cottonbro-studio-6069566.jpg';
import x3 from './res/pexels-edgars-kisuro-1488463.jpg';
import x4 from './res/pexels-lisa-fotios-3695660.jpg';
import x5 from './res/pexels-ron-lach-8306370.jpg';
 // Update with your actual styles file

const CollectionSection = () => {
  return (
    <section id="collection" className={styles.collectionSection}>
      <h1>Collection</h1>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img src={require('./res/homew3.jpg')} alt="Image 1" className={styles.collectionImage} />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={require('./res/homem2.jpg')} alt="Image 2" className={styles.collectionImage} />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={require('./res/homek1.jpeg')} alt="Image 3" className={styles.collectionImage} />
          <div className={styles.overlay}></div>
        </div>
      </div>
      
    <div className={styles.textCenter}>
      <h2>DISCOVER THE COLLECTION</h2>
      <div className={styles.buttonsContainer}>
      <Link to="/Woman" className={styles.btn}>
          WOMAN
        </Link>
        <Link to="/product/man" className={styles.btn}>
          MEN
        </Link>
        <button className={styles.btn}>KIDS</button>
      </div>
      </div>
    </section>
  );
};

export default CollectionSection;



const BrandIntroductionSection = () => {
  
  return (
    <section className={styles.about} >
      <h1>About Us</h1>

<div className={styles.aboutMain}>
    <div className={styles.aboutImage}>
        <div className={styles.aboutSmallImage}>
            <img src={x2} onclick="functio(this)"/>
            <img src={x3} onclick="functio(this)"/>
            <img src={x4} onclick="functio(this)"/>
            <img src={x5} onclick="functio(this)"/>
        </div>

        <div className={styles.imageContaner}>
            <img src={x1} id="imagebox"/>
        </div>

    </div>

    <div className={styles.aboutText}>
        <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at 
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a 
            Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the 
            undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, 
            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes 
            from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
            for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also 
            reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
    </div>

</div>
    </section>
  );
};




export { CollectionSection, BrandIntroductionSection };
