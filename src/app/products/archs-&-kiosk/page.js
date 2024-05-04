import Image from 'next/image';
import styles from './archs-&-kiosk.module.css';

export default function Inflatables() {
  return (
    <section>
      <head>
        <title>Archs, Kiosks & Others | Petara Corporation</title>
      </head>
      <div className={styles.bgwrap}>
        <div
          className={`heading  text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}
        >
          <h2 className='text-4xl font-semibold mb-4'>Arches & Kiosk</h2>
          <div className={`${styles.bar}`}></div>
        </div>
      </div>
      <div className={`${styles.productDetailsWrap} container mx-auto mb-8`}>
        <div className={styles.flexWrap}>
          <div className={styles.prodInfo}>
            <h1 className='text-4xl mb-8 '>Meet your event superheroes</h1>
            <p className='mb-8 text'>
              Arches & Kiosk Inflatables redefine the landscape of events—
              Picture eye-catching arches welcoming everyone, and kiosks being
              handy hubs for information and promotions. For businesses and
              events, these inflatables act like giant billboards, making sure
              people notice and remember them. The kiosks are not just
              cool-looking; they're practical spaces for selling tickets,
              sharing info, or showing off products. Plus, they're super easy to
              set up and move around, making them the go-to choice for all kinds
              of events. With our Arches & Kiosk Inflatables, your brand becomes
              the star of the show, leaving a mark that people won't forget!
            </p>
            <h3 className='text-xl mb-8 font-bold'>
              Grab your customers' attention from a Kilometre away
            </h3>
            <p className='mb-8 text'>
              Choosing our Arches & Kiosks is more than a purchase; it's a
              strategic investment that amplifies your business or event. Our
              inflatables stand out for their unbeatable quality, combining
              durability with eye-catching design, ensuring that your investment
              lasts and leaves a lasting impression. Whether you're hosting a
              grand opening, a marathon, participating in a trade show, or
              organizing a community event, our Arches & Kiosks offer a
              hassle-free setup and mobility that adapts to your needs. The
              visual impact is not just about aesthetics; it's about making your
              brand unmissable, even from a distance. These inflatables act as
              powerful marketing tools, providing an affordable and dynamic way
              to boost brand visibility, engage audiences, and set your business
              apart from the competition.
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
                src='/images/inflatable-products/archs/Arch.png'
                alt='Bouncy and Inflatables'
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
            <div className={`${styles.imgList}`}>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 md:max-h-48`}
                  src='/images/inflatable-products/archs/archs.png'
                  alt='Bouncy and Inflatables'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/images/inflatable-products/archs/arches.jpeg'
                  alt='Bouncy and Inflatables'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div className='flex-1 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/images/inflatable-products/kiosks/Inflatable-stall.jpg'
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
