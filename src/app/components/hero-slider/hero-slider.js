'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from './hero-slider.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroCarousel = () => {
  return (
    <section className='relative w-full mb-10' aria-label="Hero Carousel">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        dynamicHeight={false}
        aria-label="Main hero carousel"
      >
        <div className={styles.desktopView}>
          <img
            alt='Premium Inflatable Solutions'
            src='./slide1.jpg'
            loading='lazy'
          />
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
                <button aria-label="Explore Products">Explore</button>
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default HeroCarousel;