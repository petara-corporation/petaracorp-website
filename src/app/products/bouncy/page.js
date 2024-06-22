import React from 'react';
import Image from 'next/image';
import styles from './bouncy.module.css';
import Meta from '../../components/meta/meta.component';

const metadata = {
  title: 'Petara Corporation - Bouncy',
  description: 'Bouncy Provider. Petara Corporation offers premium quality bouncies for all events.',
  keywords: 'Inflatables, Bouncy, Costumes, Petara Corporation, Event Solutions',
  image: '/images/inflatable-products/bouncies/banner.png',
  url: '/products/bouncy',
};

export default function Bouncy() {
  return [
    <Meta {...metadata} />,
    <main>
      <section className={styles.bgwrap} aria-labelledby="bouncy-heading">
        <div className={`heading text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}>
          <h1 id="bouncy-heading" className='text-4xl font-semibold mb-4'>Bouncy</h1>
          <div className={`${styles.bar}`}></div>
        </div>
      </section>
      <section className={`${styles.productDetailsWrap} container mx-auto mb-8`} aria-labelledby="product-details-heading">
        <h2 id="product-details-heading" className="sr-only">Product Details</h2>
        <div className={styles.flexWrap}>
          <div className={styles.prodInfo}>
            <h1 className='text-4xl mb-8'>Explore the joy of movement with our larger than life products</h1>
            <p className='mb-8 text'>
              Bouncy is not just about entertainment; it plays a crucial role in
              nurturing kids' physical development and creating joyous
              experiences. Beyond lively bouncing, it sparks children's motor
              skill development, balance, and coordination. For adults, Bouncy
              extends its appeal with inflatable sports games, ensuring players
              can engage in carefree play without the risk of injury.
            </p>
            <h3 className='text-xl mb-8 font-bold'>BOUNCE YOUR IDEAS</h3>
            <p className='mb-8 text'>
              Uncertain about the ideal bouncy for your needs? Our team of
              experts is here to tailor solutions that align with your business
              requirements. Crafted from top-notch materials, our products
              guarantee safety, durability, and longevity. With proper
              maintenance, your bouncy investment is built to last for years of
              continued use.
            </p>
            <div>
              <a className={styles.portfolioLink} href='/portfolio'>View Bouncy Portfolio</a>
            </div>
          </div>
          <div className={styles.galleryWrap}>
            <div className={`${styles.bigImg}`}>
              <Image
                className={`${styles.gridImg}`}
                src='/red-blue-bouncy-2.png'
                alt='Bouncy and Inflatables'
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                loading="lazy"
              />
            </div>
            <div className={`${styles.imgList}`}>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 md:max-h-48`}
                  src='/images/inflatable-products/bouncies/Dolphin-bouncy.png'
                  alt='Bouncy and Inflatables'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  loading="lazy"
                />
              </div>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/images/inflatable-products/bouncies/bouncy-8.png'
                  alt='Bouncy and Inflatables'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  loading="lazy"
                />
              </div>
              <div className='flex-1 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/tiger.png'
                  alt='Bouncy and Inflatables'
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