'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from './hero-slider.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroCarouselCorporate = () => {
  return (
    <div className='relative w-full mb-10'>
      {typeof window !== 'undefined' && window.innerWidth < 768 ? (
        <div className={styles.mobileView}>
          <img alt='Premium Corporate Gifting Solutions' src='./slide-3.jpg' />
          <div className={`${styles.overlayText} legend`}>
            <div className={styles.textWrap}>
              <h1>Premium Corporate Gifting</h1>
              <p>Your allies in creating a memorable brand</p>
              <button>Explore</button>
            </div>
          </div>
        </div>
      ) : (
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          dynamicHeight={true}
        >
          <div className='slide'>
            <img
              alt='Premium Corporate Gifting Solutions'
              src='./slide-3.jpg'
            />
            <div className={`${styles.overlayText} legend`}>
              <div className={styles.textWrap}>
                <h1>Premium Corporate Gifting</h1>
                <p>Your allies in creating a memorable brand</p>
                <button>Explore</button>
              </div>
            </div>
          </div>
          {/* <div className="slide">
          <img alt="Premium Inflatable Solutions" src="./slide-4.jpg" />
          <div className={`${styles.overlayText} legend`}>
            <div className={styles.textWrap}>
              <h1>Customize Gift Packing</h1>
              <p>for Your Business Success</p>
              <button>Explore</button>
            </div>
          </div>
        </div> */}
        </Carousel>
      )}
    </div>
  );
};

export default HeroCarouselCorporate;
