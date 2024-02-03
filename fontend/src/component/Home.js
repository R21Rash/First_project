// Home.jsx
import React, { useRef, useEffect } from 'react';
import { CollectionSection, BrandIntroductionSection } from './ShopAndBrandSections';
import video1 from './res/home/v1.mp4';
import video2 from './res/home/v2.mp4';
import video3 from './res/home/v3.mp4';
import styles from './modifies/Home.module.css';
import ContactUs from './ContactUs';

export default function Home() {
  const videoRefs = [useRef(), useRef(), useRef()];

  useEffect(() => {
    const videos = videoRefs.map((ref) => ref.current);

    function playNextVideo() {
      const currentVideoIndex = videos.findIndex(
        (video) => video.style.display === 'block'
      );
      const nextVideoIndex = (currentVideoIndex + 1) % videos.length;

      // Hide the current video
      videos[currentVideoIndex].style.display = 'none';

      // Show and play the next video
      videos[nextVideoIndex].style.display = 'block';
      videos[nextVideoIndex].play();
    }

    // Initialize videos
    videos.forEach((video, index) => {
      if (video) {
        video.src = [video1, video2, video3][index];
        video.loop = false; // Do not set the loop property
        video.style.display = index === 0 ? 'block' : 'none'; // Display the first video, hide others

        // Add event listener to play the next video when the current one ends
        video.addEventListener('ended', function () {
          // Pause the current video
          video.pause();

          // Play the next video after a short delay for smoother transition
          setTimeout(function () {
            playNextVideo();
          }, 300);
        });
      }
    });

    // Play the first video
    videos[0].play();

    // Set a timeout to switch to the next video after 5 seconds
    setTimeout(playNextVideo, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoRefs]); // Add videoRefs to the dependency array

  function scrollToSection() {
    const section = document.getElementById('collection');
    section.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>
      <section>
        {/* Videos go here */}
        <div className={styles.videoContainer}>
          {/* Video 1 */}
          <video ref={videoRefs[0]} autoPlay loop muted playsInline>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={styles.videoContainer}>
          {/* Video 2 */}
          <video ref={videoRefs[1]} loop muted playsInline>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={styles.videoContainer}>
          {/* Video 3 */}
          <video ref={videoRefs[2]} loop muted playsInline>
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={styles.contentContainer}>
          <header>
            {/* Your header content goes here */}
            <h2>Welcome to Z&W</h2>
            <p>
              Step into a world of style and sophistication, our latest clothing <br />
              destination, meticulously curated exclusively for models, promises an <br />
              unparalleled fusion of elegance and runway-ready fashion
            </p>

            <button className={styles.bun} onClick={() => scrollToSection()}>Shop</button>
          </header>
        </div>

        <div
          className={styles.scrollDown}
          onClick={() => console.log('Scroll down clicked')}
        >
          <p>Scroll down</p>
          <div className={styles.scrollDownArrow}>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </section>

      {/* Include the ShopSection component */}
      <section id="collection" >
       <CollectionSection />
      </section>

      {/* Include the BrandIntroductionSection component */}
      <section>
        <BrandIntroductionSection />
      </section>

      <section id='contactus'>
        <ContactUs />
      </section>

      <section id='Footer'>
      <footer >
        <div className={styles.footer_main}>
            <div className={styles.tag}>
                <h1>Contact</h1>
                <a ><i class="fa-solid fa-house"></i>123/Colombo/Sri Lanka</a> 
                <a ><i class="fa-solid fa-phone"></i>+94 12 345 6789</a> 
                <a ><i class="fa-solid fa-envelope"></i>contact@gmail.com</a>
            </div>

            <div className={styles.tag}>
                <h1>Get Help</h1>
                <a href="#" class="center">FAQ</a>
                <a href="#" class="center">Shipping</a>
                <a href="#" class="center">Returns</a>
                <a href="#" class="center">Payment Options</a>
            </div>

            <div className={styles.tag}>
                <h1>Our Stores</h1>
                <a href="#" class="center">Sri Lanka</a>
                <a href="#" class="center">USA</a>
                <a href="#" class="center">India</a>
                <a href="#" class="center">Japan</a>
            </div>

            <div className={styles.tag}>
                <h1>Follw Us</h1>
                <div className={styles.social_link}>
                    <a href="#"><i class="fa-brands fa-facebook-f" style={{marginTop:'7px'}}></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"style={{marginTop:'7px'}}></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"style={{marginTop:'7px'}}></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin-in"style={{marginTop:'7px'}}></i></a>                    
                </div>
            </div>

            <div className={styles.tag}>
                <h1>Newsletter</h1>
                <div className={styles.search_bar}>
                    <input type="text" placeholder="Your email here"/>
                    
                   
                    <input type='submit' value={'Subscribe'} className={styles.button}></input>
                </div>
            </div>

        </div>
    </footer>
      </section>
    </div>
  );
}
