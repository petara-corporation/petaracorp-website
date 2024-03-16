'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from './hero-slider.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroCarousel = () => {
  return (
    <div className='relative w-full mb-10'>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        dynamicHeight={false}
      >
        <div className={styles.desktopView}>
          <img alt='Premium Inflatable Solutions' src='./slide1.jpg' />
          <div className={`${styles.overlayText} legend`}>
            <div className={styles.textWrap}>
              <div>
                <h1>We’re on a mission</h1>
                <h1>to craft lasting impressions!</h1>
              </div>
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
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
