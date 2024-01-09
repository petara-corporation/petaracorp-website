'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from './hero-slider.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroCarousel = () => {
  return (
    <div className='relative w-full mb-10'>
      {typeof window !== 'undefined' && window.innerWidth < 768 ? (
        <div className={styles.mobileView}>
          <img alt='Premium Inflatable Solutions' src='./slide1.jpg' />
          <div className={`${styles.overlayText} legend`}>
            <div className={styles.textWrap}>
              <h1>We’re on a mission to craft lasting impressions!</h1>
              <p>
                Unleash a Petara i.e. "a Basket" of solutions that are
                guaranteed to amaze your clients - from Inflatables to
                personalized gifting solutions, we craft everything that catches
                the eye and soul.
              </p>
              <a href='/products'>
                <button>Explore</button>
              </a>
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
            <img alt='Premium Inflatable Solutions' src='./slide1.jpg' />
            <div className={`${styles.overlayText} legend`}>
              <div className={styles.textWrap}>
                <h1>We’re on a mission to craft lasting impressions!</h1>
                <p>
                  Unleash a Petara i.e. "a Basket" of solutions that are
                  guaranteed to amaze your clients - from Inflatables to
                  personalized gifting solutions, we craft everything that
                  catches the eye and soul.
                </p>
                <a href='/products'>
                  <button>Explore</button>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="slide">
          <img alt="Premium Inflatable Solutions" src="./slide2.jpg" />
          <div className={`${styles.overlayText} legend`}>
            <div className={styles.textWrap}>
              <h1>We’re on a mission to craft lasting impressions!</h1>
              <p>Unleash a Petara (basket) of solutions that are guaranteed to amaze your clients - from Inflatables to personalized gifting solutions, we craft everything that catches the eye and soul.</p>
              <button>Explore</button>
            </div>
          </div>
        </div> */}
        </Carousel>
      )}
    </div>
  );
};

export default HeroCarousel;
