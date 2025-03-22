import React from 'react';
import Image from 'next/image';
import styles from './bouncy.module.css';
import Meta from '../../components/meta/meta.component';

const metadata = {
  title: 'Petara Corporation - Bouncy',
  description:
    'Bouncy Provider. Petara Corporation offers premium quality bouncies for all events.',
  keywords:
    'Inflatables, Bouncy, Costumes, Petara Corporation, Event Solutions',
  image: '/images/inflatable-products/bouncies/banner.png',
  url: '/products/bouncy',
};

export default function Bouncy() {
  return [
    <Meta {...metadata} />,
    <main>
      <section
        className={styles.bgwrap}
        aria-labelledby="bouncy-heading"
      >
        <div
          className={`heading text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}
        >
          <h1
            id="bouncy-heading"
            className="text-4xl font-semibold mb-4"
          >
            <strong>Bouncy</strong>
          </h1>
          <div className={`${styles.bar}`}></div>
        </div>
      </section>
      <section
        className={`${styles.productDetailsWrap} container mx-auto mb-8`}
        aria-labelledby="product-details-heading"
      >
        <h2 id="product-details-heading" className="sr-only">
          Product Details
        </h2>
        <div className={styles.flexWrap}>
          <div className={styles.prodInfo}>
            <h1 className="text-4xl mb-8">
              Explore the <strong>joy of movement</strong> with our{' '}
              <strong>larger than life products</strong>
            </h1>
            <p className="mb-8 text">
              <strong>Bouncy</strong> is not just about{' '}
              <strong>entertainment</strong>; it plays a crucial role in
              nurturing kids' <strong>physical development</strong> and
              creating <strong>joyous experiences</strong>. Beyond lively
              bouncing, it sparks children's{' '}
              <strong>motor skill development</strong>,{' '}
              <strong>balance</strong>, and <strong>coordination</strong>.
              For adults, <strong>Bouncy</strong> extends its appeal with{' '}
              <strong>inflatable sports games</strong>, ensuring players
              can engage in <strong>carefree play</strong> without the{' '}
              <strong>risk of injury</strong>.
            </p>
            <h3 className="text-xl mb-8 font-bold">
              <strong>BOUNCE YOUR IDEAS</strong>
            </h3>
            <p className="mb-8 text">
              Uncertain about the <strong>ideal bouncy</strong> for your
              needs? Our team of<strong> experts</strong> is here to{' '}
              <strong>tailor solutions</strong> that align with your{' '}
              <strong>business requirements</strong>. Crafted from{' '}
              <strong>top-notch materials</strong>, our{' '}
              <strong>products</strong> guarantee <strong>safety</strong>,{' '}
              <strong>durability</strong>, and <strong>longevity</strong>.
              With proper <strong>maintenance</strong>, your{' '}
              <strong>bouncy investment</strong> is{' '}
              <strong>built to last</strong> for{' '}
              <strong>years of continued use</strong>.
            </p>
            <div>
              <a
                className={styles.portfolioLink}
                href="/portfolio"
              >
                View <strong>Bouncy Portfolio</strong>
              </a>
            </div>
          </div>
          <div className={styles.galleryWrap}>
            <div className={`${styles.bigImg}`}>
              <Image
                className={`${styles.gridImg}`}
                src="/red-blue-bouncy-2.png"
                alt="Bouncy and Inflatables"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className={`${styles.imgList}`}>
              <div className="flex-1 mr-4 relative">
                <Image
                  className={`${styles.gridImg} max-h-40 md:max-h-48`}
                  src="/images/inflatable-products/bouncies/Dolphin-bouncy.png"
                  alt="Bouncy and Inflatables"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 mr-4 relative">
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src="/images/inflatable-products/bouncies/bouncy-8.png"
                  alt="Bouncy and Inflatables"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src="/tiger.png"
                  alt="Bouncy and Inflatables"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>,
  ];
}
