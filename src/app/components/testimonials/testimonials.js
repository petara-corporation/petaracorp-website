'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from './testimonials.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Marquee from 'react-fast-marquee';

export default function Testimonials() {
  const brands = [
    {
      id: 1,
      name: 'ICICI Bank',
      url: '/icici_logo.png',
    },
    {
      id: 2,
      name: 'Servo',
      url: '/servo-logo-newa.jpg',
    },
    {
      id: 3,
      name: 'Piaggio',
      url: '/piaggio.png',
    },
    {
      id: 4,
      name: 'Syngenta',
      url: '/syngenta.png',
    },
    {
      id: 5,
      name: 'Coromandel',
      url: '/coromandel.png',
    },
    {
      id: 6,
      name: 'Vision',
      url: '/vision.png',
    },
    {
      id: 7,
      name: 'UPL',
      url: '/upl.png',
    },
  ];

  return (
    <section className={styles.testimonialsWrap}>
      <div className='heading container text-center flex flex-col items-center mx-auto'>
        <h2 className='text-2xl md:text-4xl font-semibold mb-4'>
          Brands That Trust Us Through Years
        </h2>
        <div className={`${styles.bar}`}></div>
      </div>
      <div className={`${styles.brandsCarousel} container mx-auto`}>
        <div className={`${styles.desktopCarousel}`}>
          <Marquee>
          {brands.map(slide => {
            return (
              <div className={styles.slide} key={slide.id}>
                <img
                  alt={slide.name}
                  src={slide.url}
                  className={styles.imgSlide}
                />
              </div>
            );
          })}
          </Marquee>
        </div>
        <div className={`${styles.mobileCarousel}`}>
            {brands.map(slide => {
              return (
                <div className={styles.slide} key={slide.id}>
                  <img
                    alt={slide.name}
                    src={slide.url}
                    className={styles.imgSlide}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
