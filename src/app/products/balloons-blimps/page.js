import React from 'react';
import Image from 'next/image';
import styles from './balloons-blimps.module.css';
import Meta from '../../components/meta/meta.component';

const metadata = {
  title: 'Petara Corporation - Balloons & Blimps',
  description: 'Provider of premium quality balloons and blimps for events. Elevate your celebrations with Petara Corporation.',
  keywords: 'Inflatables, Balloons, Blimps, Petara Corporation, Event Solutions',
  image: '/images/inflatable-products/balloons/Banner-Sky-baloons.jpg',
  url: '/products/balloons-blimps',
};

export default function BalloonsBlimps() {
  return [
    <Meta {...metadata} />,
    <main>
      <section className={styles.bgwrap} aria-labelledby="balloons-blimps-heading">
        <div className={`heading text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}>
          <h1 id="balloons-blimps-heading" className='text-4xl font-semibold mb-4'>Balloons & Blimps</h1>
          <div className={`${styles.bar}`}></div>
        </div>
      </section>
      <section className={`${styles.productDetailsWrap} container mx-auto mb-8`} aria-labelledby="product-details-heading">
        <h2 id="product-details-heading" className="sr-only">Product Details</h2>
        <div className={styles.flexWrap}>
          <div className={styles.prodInfo}>
            <h1 className='text-4xl mb-8'>A sky of celebration</h1>
            <p className='mb-8 text'>
              Balloons & Blimps, deliver instant visual appeal and a festive
              ambience to any event. Versatile for celebrations, promotions, and
              brand visibility, these customizable elements offer cost-effective
              marketing with easy setup. The playful and engaging nature of
              balloons ensures memorable decor, leaving an unforgettable
              impression on attendees.
            </p>
            <h3 className='text-xl mb-8 font-bold'>Soar above with our Balloons & Blimps</h3>
            <p className='mb-8 text'>
              Elevate any occasion with our high-quality balloons that infuse a
              burst of colour and excitement. Whether you're celebrating
              milestones, promoting your brand, or enhancing event decor, our
              versatile balloons and eye-catching Blimps add vibrancy and a
              unique flair. Soar above the rest with our collection, creating an
              attention-grabbing element for your promotions. Dive into a world
              of possibilities and make your events truly memorable with our
              balloons and blimps.
            </p>
            <div>
              <a className={styles.portfolioLink} href='/portfolio'>View Inflatable Portfolio</a>
            </div>
          </div>
          <div className={styles.galleryWrap}>
            <div className={`${styles.bigImg}`}>
              <Image
                className={`${styles.gridImg}`}
                src='/images/inflatable-products/balloons/Baloon2.png'
                alt='Balloons and Blimps'
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                loading="lazy"
              />
            </div>
            {/* Uncomment and add more images as necessary
            <div className={`${styles.imgList}`}>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 md:max-h-48`}
                  src='/images/inflatable-products/balloons/Baloon2.png'
                  alt='Blimps'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  loading="lazy"
                />
              </div>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/images/inflatable-products/inflatables/Spiderman.png'
                  alt='Bouncy and Inflatables'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  loading="lazy"
                />
              </div>
              <div className='flex-1 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/ferrero-kinderjoy-inflatable.png'
                  alt='Bouncy and Inflatables'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  loading="lazy"
                />
              </div>
            </div>
            */}
          </div>
        </div>
      </section>
    </main>
  ];
}