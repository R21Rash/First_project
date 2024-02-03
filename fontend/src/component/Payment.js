import React, { useState } from 'react';
import styles from './modifies/Payment.module.css'; // Import your CSS module

const Payment  = ({ closeModal }) => {
    const [showPopup, setShowPopup] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary form submission logic

    // Close the popup after form submission
    closePopup();
  };

  const closePopup = () => {
    // Close the popup
    setShowPopup(false);
  };
    return (
        <div className={styles.ccccontainer}>
        {showPopup ? (
            <div className={styles.popup}>
                <div className={styles.popupContent}>
                    <span onClick={closeModal} className={styles.closePopup}>
                        &times;
                    </span>
                    <form  onSubmit={handleSubmit}>
                        <div className={styles.roww}>
                            <div className={styles.coll}>
                                <h3 className={styles.title}>billing address</h3>

                                <div className={styles.inputBox}>
                                    <span>full name :</span>
                                    <input type="text" placeholder="john deo" />
                                </div>
                                <div className={styles.inputBox}>
                                    <span>email :</span>
                                    <input type="email" placeholder="example@example.com" />
                                </div>
                                <div className={styles.inputBox}>
                                    <span>address :</span>
                                    <input type="text" placeholder="room - street - locality" />
                                </div>
                                <div className={styles.inputBox}>
                                    <span>city :</span>
                                    <input type="text" placeholder="Colombo" />
                                </div>

                                <div className={styles.flex}>
                                    <div className={styles.inputBox}>
                                        <span>state :</span>
                                        <input type="text" placeholder="Sri Lanka" />
                                    </div>
                                    <div className={styles.inputBox}>
                                        <span>zip code :</span>
                                        <input type="text" placeholder="123 456" />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.coll}>
                                <h3 className={styles.title}>payment</h3>

                                <div className={styles.inputBox}>
                                    <span>cards accepted :</span>
                                    <img src={require('./res/images/card_img.png')} alt="" />
                                </div>
                                <div className={styles.inputBox}>
                                    <span>name on card :</span>
                                    <input type="text" placeholder="mr. john deo" />
                                </div>
                                <div className={styles.inputBox}>
                                    <span>credit card number :</span>
                                    <input type="number" placeholder="1111-2222-3333-4444" />
                                </div>
                                <div className={styles.inputBox}>
                                    <span>exp month :</span>
                                    <input type="text" placeholder="january" />
                                </div>

                                <div className={styles.flex}>
                                    <div className={styles.inputBox}>
                                        <span>exp year :</span>
                                        <input type="number" placeholder="2024" />
                                    </div>
                                    <div className={styles.inputBox}>
                                        <span>CVV :</span>
                                        <input type="text" placeholder="123" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <input type="submit" value="proceed to checkout" className={styles['submit-btn']} />
                    </form>
                </div>
            </div>
        ) : (
            <form onSubmit={handleSubmit}>
                <div className={styles.roww}>
                    <div className={styles.coll}>
                        <h3 className={styles.title}>billing address</h3>

                        <div className={styles.inputBox}>
                            <span>full name :</span>
                            <input type="text" placeholder="john deo" />
                        </div>
                        <div className={styles.inputBox}>
                            <span>email :</span>
                            <input type="email" placeholder="example@example.com" />
                        </div>
                        <div className={styles.inputBox}>
                            <span>address :</span>
                            <input type="text" placeholder="room - street - locality" />
                        </div>
                        <div className={styles.inputBox}>
                            <span>city :</span>
                            <input type="text" placeholder="mumbai" />
                        </div>

                        <div className={styles.flex}>
                            <div className={styles.inputBox}>
                                <span>state :</span>
                                <input type="text" placeholder="india" />
                            </div>
                            <div className={styles.inputBox}>
                                <span>zip code :</span>
                                <input type="text" placeholder="123 456" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <h3 className={styles.title}>payment</h3>

                        <div className={styles.inputBox}>
                            <span>cards accepted :</span>
                            <img src={require('./res/images/card_img.png')} alt="" />
                        </div>
                        <div className={styles.inputBox}>
                            <span>name on card :</span>
                            <input type="text" placeholder="mr. john deo" />
                        </div>
                        <div className={styles.inputBox}>
                            <span>credit card number :</span>
                            <input type="number" placeholder="1111-2222-3333-4444" />
                        </div>
                        <div className={styles.inputBox}>
                            <span>exp month :</span>
                            <input type="text" placeholder="january" />
                        </div>

                        <div className={styles.flex}>
                            <div className={styles.inputBox}>
                                <span>exp year :</span>
                                <input type="number" placeholder="2022" />
                            </div>
                            <div className={styles.inputBox}>
                                <span>CVV :</span>
                                <input type="text" placeholder="1234" />
                            </div>
                        </div>
                    </div>
                </div>

                <input type="submit" value="proceed to checkout" className={styles['submit-btn']} />
                
            </form>
        )}
    </div>
);
};

export default Payment;