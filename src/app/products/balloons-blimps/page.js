import Image from 'next/image';
import styles from './balloons-blimps.module.css';

export default function BalloonsBlimps() {
  return (
    <section>
      <div className={styles.bgwrap}>
        <div
          className={`heading  text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}
        >
          <h2 className='text-4xl font-semibold mb-4'>Balloons & Blimps</h2>
          <div className={`${styles.bar}`}></div>
        </div>
      </div>
      <div className={`${styles.productDetailsWrap} container mx-auto mb-8`}>
        <div className={styles.flexWrap}>
          <div className={styles.prodInfo}>
            <h1 className='text-4xl mb-8 '>A sky of celebration</h1>
            <p className='mb-8 text'>
              Balloons & Blimps, deliver instant visual appeal and a festive
              ambience to any event. Versatile for celebrations, promotions, and
              brand visibility, these customizable elements offer cost-effective
              marketing with easy setup. The playful and engaging nature of
              balloons ensures memorable decor, leaving an unforgettable
              impression on attendees.
            </p>
            <h3 className='text-xl mb-8 font-bold'>
              Soar above with our Balloons & Blimps
            </h3>
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
              <a className={styles.portfolioLink} href='/portfolio'>
                View Inflatable Portfolio
              </a>
            </div>
          </div>
          <div className={styles.galleryWrap}>
            <div className={`${styles.bigImg}`}>
              <Image
                className={`${styles.gridImg}`}
                src='/ball.png'
                alt='Bouncy and Inflatables'
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
            <div className={`${styles.imgList}`}>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 md:max-h-48`}
                  src='/play-inflatable.png'
                  alt='Bouncy and Inflatables'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/spiderman.png'
                  alt='Bouncy and Inflatables'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div className='flex-1 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/ferrero-kinderjoy-inflatable.png'
                  alt='Bouncy and Inflatables'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
