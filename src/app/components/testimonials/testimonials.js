'use client';
import React from 'react';
import styles from './testimonials.module.css';

const Testimonials = () => {
  const brandsTopLine = [
    {
      name: 'UPL',
      url: '/images/clients/upl.png',
    },
    {
      name: 'BASF',
      url: '/images/clients/BASF_B_W_logo.jpg',
    },
    {
      name: 'IOCL',
      url: '/images/clients/iocl-logo-2-2.png',
    },
    {
      name: 'BP',
      url: '/images/clients/Bharat-Petroleum-Logo-PNG.png',
    },
    {
      name: 'PI Industries',
      url: '/images/clients/PI industries.png',
    },
    {
      name: 'Ceva',
      url: '/images/clients/Ceva.png',
    },
    {
      name: 'Indigo',
      url: '/images/clients/Indigo.png',
    },
    {
      name: 'Ageis',
      url: '/images/clients/Ageis.png',
    },
    {
      name: 'Pidilite',
      url: '/images/clients/Pidilite.png',
    },
  ];
  const brands = [
    {
      name: 'Piaggio',
      url: '/images/clients/piaggio.png',
    },
    {
      name: 'SWAL',
      url: '/images/clients/swal.png',
    },
    {
      name: 'Finolex',
      url: '/images/clients/Finolex Cables.png',
    },
    {
      name: 'Govind Milk and Milk Products',
      url: '/images/clients/govind_milk.jpeg',
    },
    {
      name: 'Mahyco',
      url: '/images/clients/mahyco.png',
    },
    {
      name: 'Atul Limited',
      url: '/images/clients/Atul_logo.svg',
    },
    {
      name: 'Rovensa Next',
      url: '/images/clients/Rovensa Next.jpg',
    },
    {
      name: 'Vision',
      url: '/images/clients/vision.png',
    },
  ];
  const brandsLastRow = [
    {
      name: 'Syngenta',
      url: '/images/clients/syngenta.jpeg',
    },
    {
      name: 'ICICI Bank',
      url: '/images/clients/icici_logo.png',
    },
    {
      name: 'Indofil',
      url: '/images/clients/Indofil-2.jpeg',
    },
    {
      name: 'Coromandel',
      url: '/images/clients/Coromandel.png',
    },
    {
      name: 'De Laval',
      url: '/images/clients/De Laval.png',
    },
    {
      name: 'Gencrest',
      url: '/images/clients/Gencrest_logo.png',
    },
  ];

  return (
    <section className={styles.testimonialsWrap} aria-labelledby="testimonials-heading">
      <div className='heading container text-center flex flex-col items-center mx-auto'>
        <h2 id="testimonials-heading" className='text-2xl md:text-4xl font-semibold mb-4'>
          Brands That Trust Us Through Years
        </h2>
        <div className={`${styles.bar}`}></div>
      </div>
      <div className={`${styles.brandsCarousel} container mx-auto`}>
        <div className={`${styles.carousel}`} aria-label="Top brands carousel">
          {brandsTopLine.map(slide => {
            return (
              <div className={styles.slide} key={slide.name}>
                <img
                  alt={`Logo of ${slide.name}`}
                  src={slide.url}
                  className={styles.imgSlide}
                  loading='lazy'
                />
              </div>
            );
          })}
        </div>
        <div className={`${styles.carousel} ${styles.twoCol}`} aria-label="Middle brands carousel">
          {brands.map(slide => {
            return (
              <div className={styles.slide} key={slide.name}>
                <img
                  alt={`Logo of ${slide.name}`}
                  src={slide.url}
                  className={styles.imgSlide}
                  loading='lazy'
                />
              </div>
            );
          })}
        </div>
        <div className={`${styles.carousel} ${styles.twoCol}`} aria-label="Bottom brands carousel">
          {brandsLastRow.map(slide => {
            return (
              <div className={styles.slide} key={slide.name}>
                <img
                  alt={`Logo of ${slide.name}`}
                  src={slide.url}
                  style={{ height: 64 }}
                  className={styles.imgSlide}
                  loading='lazy'
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;