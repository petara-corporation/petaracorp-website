import Image from 'next/image';
import styles from './eco-friendly-gifting.module.css';

export default function EcoFriendlyGifting() {
  return (
    <section>
      <head>
        <title>
          Promotional Products | Eco-friendly gifting | Petara Corporation
        </title>
      </head>
      <div className={styles.bgwrap}>
        <div
          className={`heading  text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}
        >
          <h2 className='text-4xl font-semibold mb-4'>Eco-friendly gifting</h2>
          <div className={`${styles.bar}`}></div>
        </div>
      </div>
      <div className={`${styles.productDetailsWrap} container mx-auto mb-8`}>
        <div className={styles.flexWrap}>
          <div className={styles.prodInfo}>
            <h1 className='text-4xl mb-8 '>
              Eco-Friendly Gifting: Sustainable & Sophisticated
            </h1>
            <p className='mb-8 text'>
              Discover Petara's Eco-Friendly Gifting service, where
              sustainability meets sophistication. Our collection features a
              range of environmentally conscious gifts crafted from renewable
              materials, perfect for eco-conscious individuals and businesses.
              Each item, from bamboo utensils to recycled tote bags, is
              meticulously chosen to minimize environmental impact while
              maximizing style and utility. Moreover, our expert branding
              services allow you to personalize these gifts with your logo or
              message, turning them into powerful marketing tools that showcase
              your commitment to sustainability.
            </p>
            <h3 className='text-xl mb-8 font-bold'>
              Customized Eco-Friendly Gifting Solutions
            </h3>
            <p className='mb-8 text'>
              Our special R&D team is also equipped to help you bring your
              imagination to life; come to us with your idea of gifting, and we
              will curate the gifts even outside our catalogue.
            </p>
            <div>
              <a className={styles.portfolioLink} href='/portfolio'>
                View Product Promotion Portfolio
              </a>
            </div>
          </div>
          <div className={styles.galleryWrap}>
            <div className={`${styles.bigImg}`}>
              <Image
                className={`${styles.gridImg}`}
                src='/images/eco-friendly-gifting/eco-friendly-ganesha.jpeg'
                alt='Corporate Gifting'
                height={100}
                width={500}
              />
            </div>
            <div className={`${styles.imgList}`}>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 md:max-h-48`}
                  src='/images/Bamboo/5.jpg'
                  alt='Wooden Lamps'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/images/Bamboo/4.jpg'
                  alt='Corporate Gifting'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div className='flex-1 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/images/promotions-giftings/promotional-products/Key-holder.jpg'
                  alt='Corporate Gifting'
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
