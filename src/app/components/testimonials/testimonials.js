'use client';
import React from 'react';
import styles from './testimonials.module.css';

export default function Testimonials() {
  const brandsTopLine = [
    {
      name: 'UPL',
      url: '/images/clients/upl.png',
    },
    {
      name: 'BASF',
      url: '/images/clients/basf.png',
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
    {
      name: 'Mahyco',
      url: '/images/clients/mahyco.png',
    },
  ];
  const brands = [
    {
      name: 'Piaggio',
      url: '/piaggio.png',
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
      name: 'Indofil',
      url: '/images/clients/Indofil-2.jpeg',
    },
    {
      name: 'Rovensa Next',
      url: '/images/clients/Rovensa Next.jpg',
    },
    {
      name: 'Vision',
      url: '/vision.png',
    },
  ];
  const brandsLastRow = [
    {
      name: 'ICICI Bank',
      url: '/images/clients/icici_logo.png',
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
    <section className={styles.testimonialsWrap}>
      <div className='heading container text-center flex flex-col items-center mx-auto'>
        <h2 className='text-2xl md:text-4xl font-semibold mb-4'>
          Brands That Trust Us Through Years
        </h2>
        <div className={`${styles.bar}`}></div>
      </div>
      <div className={`${styles.brandsCarousel} container mx-auto`}>
        <div className={`${styles.carousal}`}>
          {brandsTopLine.map(slide => {
            return (
              <div className={styles.slide} key={slide.name}>
                <img
                  alt={slide.name}
                  src={slide.url}
                  className={styles.imgSlide}
                />
              </div>
            );
          })}
        </div>
        <div className={`${styles.carousal}  ${styles.twoCol}`}>
          {brands.map(slide => {
            return (
              <div className={styles.slide} key={slide.name}>
                <img
                  alt={slide.name}
                  src={slide.url}
                  className={styles.imgSlide}
                />
              </div>
            );
          })}
        </div>
        <div className={`${styles.carousal}  ${styles.twoCol}`}>
          {brandsLastRow.map(slide => {
            return (
              <div className={styles.slide} key={slide.name}>
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
