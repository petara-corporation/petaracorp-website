import Image from 'next/image';
import styles from './costumes.module.css';

export default function Inflatables() {
  return (
    <section>
      <div className={styles.bgwrap}>
        <div
          className={`heading  text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}
        >
          <h2 className='text-4xl font-semibold mb-4'>Costumes</h2>
          <div className={`${styles.bar}`}></div>
        </div>
      </div>
      <div className={`${styles.productDetailsWrap} container mx-auto mb-8`}>
        <div className={styles.flexWrap}>
          <div className={styles.prodInfo}>
            <h1 className='text-4xl mb-8 '>
              Become the centrepiece of any gathering
            </h1>
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
              <a className={styles.portfolioLink} href='/portfolio'>
                View Costume Portfolio
              </a>
            </div>
          </div>
          <div className={styles.galleryWrap}>
            <div className={`${styles.bigImg}`}>
              <Image
                className={`${styles.gridImg}`}
                src='/service-1.png'
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
                  src='/disney-inflatable.png'
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
