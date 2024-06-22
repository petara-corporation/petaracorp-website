'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from './hero-slider.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroCarouselCorporate = () => {
  return (
    <section className='relative w-full mb-10' aria-labelledby="hero-carousel-heading">
      <h2 id="hero-carousel-heading" className="sr-only">Hero Carousel</h2>
      {typeof window !== 'undefined' && window.innerWidth < 768 ? (
        <div className={styles.mobileView}>
          <img
            alt='Premium Corporate Gifting Solutions'
            src='./slide-3.jpg'
            loading="lazy"
          />
          <div className={`${styles.overlayText} legend`}>
            <div className={styles.textWrap}>
              <h1>Premium Corporate Gifting</h1>
              <p>Your allies in creating a memorable brand</p>
              <a href='/products'>
                <button aria-label="Explore Corporate Gifting Solutions">Explore</button>
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
          aria-label="Corporate Gifting Carousel"
        >
          <div className='slide'>
            <img
              alt='Premium Corporate Gifting Solutions'
              src='./slide-3.jpg'
              loading="lazy"
            />
            <div className={`${styles.overlayText} legend`}>
              <div className={styles.textWrap}>
                <h1>Premium Corporate Gifting</h1>
                <p>Your allies in creating a memorable brand</p>
                <a href='/products'>
                  <button aria-label="Explore Corporate Gifting Solutions">Explore</button>
                </a>
              </div>
            </div>
          </div>
          <div className='slide'>
            <img
              alt='Customize Gift Packing for Your Business Success'
              src='./slide-4.jpg'
              loading="lazy"
            />
            <div className={`${styles.overlayText} legend`}>
              <div className={styles.textWrap}>
                <h1>Customize Gift Packing</h1>
                <p>for Your Business Success</p>
                <a href='/products'>
                  <button aria-label="Explore Customized Gift Packing">Explore</button>
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      )}
    </section>
  );
};

export default HeroCarouselCorporate;