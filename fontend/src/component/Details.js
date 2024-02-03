import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Payment from './Payment';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './modifies/Details.module.css';

const Details = () => {
  const { id, name, imgSrc, description, price } = useParams();
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  const initialProductId = state?.id || id;
  const initialProductName = state?.name || name;
  const initialProductImage = state?.image || `http://localhost:3000/uploads/${imgSrc}`;
  const initialProductDescription = state?.description || description;
  const initialProductPrice = state?.price || price;

  const [quantity, setQuantity] = useState(1);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${initialProductName} to cart`);
  };

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
  const handleBuyNowClick = () => {
    // Open the payment modal
    setPaymentModalOpen(true);
  };
  const handlePaymentModalClose = () => {
    setPaymentModalOpen(false);
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
           <a className={styles.navLink} href="/product/man">
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
         <form className={styles.searchBar} >
           <input
             className={`${styles.searchInput}`}
             type="search"
             placeholder="Search..."
             aria-label="Search"
           />
           <button className={`${styles.micButton}`}>
             <div className={`${styles.micIcon}`}>
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="16"
                 height="16"
                 fill="currentColor"
                 className="bi bi-mic"
                 viewBox="0 0 16 16"
               >
                 <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
                 <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"/>
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
 <br></br>
 <div className={`${styles.container} mt-5`}>
  <div className={styles.dooown}>
        <div className={`${styles.row} row`}>
          <div className="col-md-6">
            <div className={styles.move}>
            <img src={initialProductImage} alt="Product Image" className={`img-fluid rounded shadow ${styles.isize}`} />

            </div>
          </div>
          <div className="col-md-6">
            <div className={`${styles.detailsContainer}`}>
              <h2 className={`${styles.price}`}>${initialProductPrice}</h2>
              <h1 className={`${styles.productName}`}>{initialProductName}</h1>
              <p className={`${styles.productDescription}`}>{initialProductDescription}</p>

              {/* Review Section */}
              <div className={`${styles.review}`}>
                <p >Rating:</p>
                {/* Add your star icons or any other review representation here */}
                 <i style={{marginTop: '5px' , color: '#ffba08'}} className="fa-solid fa-star"></i> 
                 <i style={{marginTop: '5px' , color: '#ffba08'}} className="fa-solid fa-star"></i> 
                 <i style={{marginTop: '5px', color: '#ffba08'}} className="fa-solid fa-star"></i> 
                 <i style={{marginTop: '5px', color: '#ffba08'}} className="fa-solid fa-star"></i> 
                 
              </div>

              {/* Size Options Section */}
              <div className={`${styles.sizeOptions}`}>
                <p>Size:</p>
                <div className={`${styles.sizeOption}`}>S</div>
                <div className={`${styles.sizeOption}`}>M</div>
                <div className={`${styles.sizeOption}`}>L</div>
                <div className={`${styles.sizeOption}`}>XL</div>
              </div>

              {/* Color Options Section */}
              <div className={`${styles.colorOptions}`}>
                <p>Color:</p>
                {/* Add your color options here */}
              </div>
            </div>

            <div className={`col-md-4 ${styles.paymentSection}`}>
  <form className={`${styles.paymentForm} border rounded p-3`}>
    <div className={`mb-3`}>
      <label htmlFor="sendTo" className={`form-label`} style={{ fontWeight: 'bold' }}>
        <i className="bi bi-geo-alt-fill" style={{ marginRight: '8px' }}></i> Send to
      </label>
      <div className={`input-group mb-3`}>
        <select className={`form-select`} id="country" name="country">
          <option value="sri_lanka">Sri Lanka</option>
          <option value="india">India</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <label htmlFor="delivery" className={`form-label`} style={{ fontWeight: 'bold' }}>
        <i className="bi bi-truck" style={{ marginRight: '8px' }}></i> Delivery
      </label>
      <input type="text" className={`form-control`} id="address" placeholder="No/Street/City" />
      <label htmlFor="delivery" className={`form-label`} style={{ fontWeight: 'bold' }}>
        <i className="bi bi-truck" style={{ marginRight: '8px' }}></i> From
      </label>
      <input type="text" className={`form-control`} id="address" value={'From Kandy'} />
    </div>
    

    
    <div className={`mb-3`}>
      <label htmlFor="quantity" className={`form-label`} style={{ fontWeight: 'bold' }}>
        <i className="bi bi-box" style={{ marginRight: '8px' }}></i> Quantity
      </label>
      <input type="number" className={`form-control`} style={{width: '50px'}} id="quantity" name="quantity" />
    </div>

   
  
     
    <br />
    <button
  type="button"
  className={`btn btn-primary ${styles.buybtn}`}
  onClick={handleBuyNowClick}
>
  <i className="bi bi-cart-plus"></i> Buy Now
</button>

<br />

<button
  type="button"
  className={`btn btn-secondary ${styles.addToCartbtn}`}
>
  <i className="bi bi-cart"></i> Add to Cart
</button>

</form>

<div
  className={`container ${styles.paymentModal}`}
  style={{
    position: 'fixed',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
   
}}
>
  {isPaymentModalOpen && (
    <div className={styles.paymentModal}>
      <Payment closeModal={handlePaymentModalClose} />
    </div>
  )}
  
</div>



</div>
</div>

           
          </div>
        </div>
        
      </div>
    
      <div className={styles.products}  id="Products">
      <h3 style={{
  marginBottom: '20px',
  textAlign: 'center',
  fontWeight: 'bolder',
  fontFamily: 'sans-serif',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adjust the shadow properties as needed
}}>
  Similar Products
</h3>

    <div className={`${styles.box} ${styles.fourPerLine}`}>
    {manProducts.map((product) => (
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
                  <i className="fa-solid fa-heart" style={{ color: '#343a40', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'red'} onMouseLeave={(e) => e.target.style.color = '#343a40'}></i>

<i className="fa-solid fa-share"style={{color: '#343a40',transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'red'} onMouseLeave={(e) => e.target.style.color = '#343a40'}></i>
                  </div>
                  <div className={styles.image}>
                    <img src={`http://localhost:3000/uploads/${product.imgSrc}`} alt="Product Image" />
                  </div>
                  <div className={styles.productsText}>
                    <h2 style={{ fontWeight: 'bold'}}>{product.name}</h2>
                    <p style={{ textDecoration: 'none' }}>{product.description}</p>
                    <h3 style={{ color : 'black'}}>${product.price}</h3>
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
        <div className={styles.footer_main}>
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

export default Details;
