import Image from 'next/image';
import styles from './inflatable.module.css';

export default function Inflatables() {
  return (
    <section>
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
                src='/Spiderman.png'
                alt='Bouncy and Inflatables'
                height={100}
                width={500}
              />
            </div>
            <div className={`${styles.imgList}`}>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 md:max-h-48`}
                  src='/images/inflatable-products/inflatables/Rhyno.jpg'
                  alt='Bouncy and Inflatables'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/Main-file-sqr.jpg'
                  alt='Bouncy and Inflatables'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div className='flex-1 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/bottle.jpg'
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
