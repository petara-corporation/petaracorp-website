'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './inflatable.module.css';

export default function Inflatables() {
  const imageList = [
    '/images/inflatable-products/inflatables/Spiderman.png',
    '/images/inflatable-products/inflatables/Rhyno.jpg',
    '/Main-file-sqr.jpg',
    '/images/inflatable-products/inflatables/bottle.jpg',
  ];
  const [bigImageIndex, setBigImageIndex] = useState(0);
  return (
    <section>
      <head>
        <title>Inflatable Product | Petara Corporation</title>
      </head>
      <div className={styles.bgwrap}>
        <div
          className={`heading  text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}
        >
          <h2 className='text-4xl font-semibold mb-4'>Inflatables</h2>
          <div className={`${styles.bar}`}></div>
        </div>
      </div>
      <div className={`${styles.productDetailsWrap} container mx-auto mb-8`}>
        <div className={styles.flexWrap}>
          <div className={styles.prodInfo}>
            <h1 className='text-4xl mb-8 '>
              Meet the attention-grabbing means of promoting your brand
            </h1>
            <p className='mb-8 text'>
              Whether at trade shows, corporate events, or community gatherings,
              the sheer size and vibrant designs of inflatables make them
              impossible to ignore, ensuring maximum visibility for your brand.
              The interactive nature of inflatables also fosters engagement and
              generates a buzz that extends far beyond the event itself.
            </p>
            <h3 className='text-xl mb-8 font-bold'>
              STEP INTO OUR WORLD OF 3D WONDERS:
            </h3>
            <p className='mb-8 text'>
              Featuring our wide range of expansive inflatable products that
              seamlessly come together. These structures take form through
              continuous airflow and pressure from a blower. Leveraging our
              extensive expertise in textiles, design, and complex
              installations, we have the ability to breathe life into even your
              wildest ideas—all without breaking the bank.
            </p>

            <h3 className='text-xl mb-2 font-bold'>
              CHOOSE FROM VARIETY OF SHAPES
            </h3>
            <div className={`${styles.products}`}>
              <ul className='list-disc ml-6 mb-6'>
                <li>
                  <span>GROUND INFLATABLE</span>
                  <ul className='list-disc ml-6 mb-6'>
                    <li>Product Shape</li>
                    <li>Character Shape</li>
                    <li>Logo Shape</li>
                    <li>Special Shapes</li>
                  </ul>
                </li>
                {/* <li>
                  <span>Inflatable Mascot</span>
                  <ul className='list-disc ml-6 mb-6'>
                    <li>Product Shape</li>
                    <li>Character Shape</li>
                    <li>Logo Shape</li>
                    <li>Special Shapes</li>
                  </ul>
                </li> */}
              </ul>
            </div>
            <div>
              <a className={styles.portfolioLink} href='/portfolio'>
                View Inflatable Portfolio
              </a>
            </div>
          </div>
          <div className={styles.galleryWrap}>
            <div className={`${styles.bigImg}`}>
              <Image
                className={`${styles.gridImg}`}
                src={imageList[bigImageIndex]}
                alt='Bouncy and Inflatables'
                height={100}
                width={500}
              />
            </div>
            <div className={`${styles.imgList}`}>
              {imageList.map((image, index) => {
                return bigImageIndex !== index ? (
                  <div
                    key={image}
                    className={`flex-1 ${index + 1 === imageList.length ? '' : 'mr-4'} relative cursor-pointer`}
                  >
                    <Image
                      className={`${styles.gridImg} max-h-40 md:max-h-48`}
                      src={image}
                      alt='Bouncy and Inflatables'
                      fill
                      onClick={() => setBigImageIndex(index)}
                    />
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
