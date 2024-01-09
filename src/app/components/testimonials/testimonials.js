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
      url: '/images/clients/icici_logo.png',
    },
    {
      id: 2,
      name: 'IOCL',
      url: '/images/clients/Bharat-Petroleum-Logo-PNG.png',
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
      url: '/images/clients/Coromandel.png',
    },
    {
      id: 6,
      name: 'UPL',
      url: '/upl.png',
    },
    {
      id: 7,
      name: 'SWAL',
      url: '/images/clients/swal.png',
    },

    {
      id: 8,
      name: 'Pidilite',
      url: '/images/clients/Pidilite.png',
    },
    {
      id: 9,
      name: 'PI Industries',
      url: '/images/clients/PI industries.png',
    },
    {
      id: 10,
      name: 'Finolex',
      url: '/images/clients/Finolex Cables.png',
    },
    {
      id: 11,
      name: 'Ceva',
      url: '/images/clients/Ceva.png',
    },
    {
      id: 12,
      name: 'BASF',
      url: '/images/clients/BASF B_W logo.jpg',
    },
    {
      id: 13,
      name: 'Mahyco',
      url: '/images/clients/mahyco.png',
    },
    {
      id: 14,
      name: 'Indofil',
      url: '/images/clients/Indofil-2.jpg',
    },
    {
      id: 15,
      name: 'Rovensa Next',
      url: '/images/clients/Rovensa Next.jpg',
    },
    {
      id: 16,
      name: 'Gencrest',
      url: '/images/clients/Gencrest_logo.png',
    },
    {
      id: 17,
      name: 'De Laval',
      url: '/images/clients/De Laval.png',
    },
    {
      id: 18,
      name: 'Indigo',
      url: '/images/clients/Indigo.png',
    },
    {
      id: 19,
      name: 'Indigo',
      url: '/images/clients/Ageis.png',
    },
    {
      id: 20,
      name: 'Vision',
      url: '/vision.png',
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
