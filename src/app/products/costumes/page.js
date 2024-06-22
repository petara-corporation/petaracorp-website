import React from 'react';
import Image from 'next/image';
import styles from './costumes.module.css';
import Meta from '../../components/meta/meta.component';

const metadata = {
  title: 'Petara Corporation - Inflatable Costumes',
  description: 'Inflatable Costumes Provider. Petara Corporation offers premium quality inflatable costumes for all events.',
  keywords: 'Inflatables, Costumes, Petara Corporation, Event Solutions',
  image: '/images/inflatable-products/costumes/Costume-banner.jpg',
  url: '/products/costumes',
};

export default function Costumes() {
  return [
    <Meta {...metadata} />,
    <main>
      <section className={styles.bgwrap} aria-labelledby="costumes-heading">
        <div className={`heading text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}>
          <h1 id="costumes-heading" className='text-4xl font-semibold mb-4'>Costumes</h1>
          <div className={`${styles.bar}`}></div>
        </div>
      </section>
      <section className={`${styles.productDetailsWrap} container mx-auto mb-8`} aria-labelledby="product-details-heading">
        <h2 id="product-details-heading" className="sr-only">Product Details</h2>
        <div className={styles.flexWrap}>
          <div className={styles.prodInfo}>
            <h1 className='text-4xl mb-8'>Become the centrepiece of any gathering</h1>
            <p className='mb-8 text'>
              Transform any occasion into a carnival of joy with our playful
              Inflatable Costumes! The versatility of inflatable costumes allows
              wearers to embody diverse characters and themes, ensuring a
              personalised and memorable experience. Crafted for comfort and
              easy wear, they provide a lightweight and enjoyable way to make a
              statement. From interactive features to brand promotion
              opportunities, inflatable costumes add a unique and entertaining
              dimension to any event, creating lasting memories and fostering a
              fun, and engaging atmosphere for all ages.
            </p>
            <div>
              <a className={styles.portfolioLink} href='/portfolio'>View Costume Portfolio</a>
            </div>
          </div>
          <div className={styles.galleryWrap}>
            <div className={`${styles.bigImg}`}>
              <Image
                className={`${styles.gridImg}`}
                src='/images/inflatable-products/costumes/ferrero-kinderjoy-inflatable.png'
                alt='Inflatable Costumes'
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                loading="lazy"
              />
            </div>
            <div className={`${styles.imgList}`}>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 md:max-h-48`}
                  src='/images/inflatable-products/costumes/Costume.png'
                  alt='Inflatable Costumes'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  loading="lazy"
                />
              </div>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/images/inflatable-products/costumes/joker.png'
                  alt='Inflatable Costumes'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  loading="lazy"
                />
              </div>
              <div className='flex-1 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/images/inflatable-products/costumes/USPro-Paint.png'
                  alt='Inflatable Costumes'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  ];
}