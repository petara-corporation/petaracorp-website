import Meta from '../../components/meta/meta.component';
import Image from 'next/image';
import styles from './indian-traditional-gifting.module.css';

const metadata = {
  title: 'Promotional Products | Indian Traditional Gifting | Petara Corporation',
  description: 'Explore eco-friendly traditional gifting solutions from Petara Corporation. Perfect for all corporate events and occasions.',
  keywords: 'Indian Traditional, Eco-Friendly, Gifting, Corporate Gifting, Petara Corporation, Sustainable Solutions',
  image: '/images/Traditional/Traditional-banner.png'
};

export default function IndianTraditionalGifting() {
  return (
    <main>
      <Meta {...metadata} />
      <section className={styles.bgwrap} aria-labelledby="indian-traditional-gifting-heading">
        <div className={`heading text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}>
          <h2 id="indian-traditional-gifting-heading" className='text-4xl font-semibold mb-4'>Indian Traditional Gifting</h2>
          <div className={`${styles.bar}`}></div>
        </div>
      </section>
      <section className={`${styles.productDetailsWrap} container mx-auto mb-8`} aria-labelledby="product-details-heading">
        <h2 id="product-details-heading" className="sr-only">Product Details</h2>
        <div className={styles.flexWrap}>
          <div className={styles.prodInfo}>
            <h1 className='text-4xl mb-8'>Indian Traditional Gifting: Heritage Meets Sustainability</h1>
            <p className='mb-8 text'>
              Explore Petara's Eco-Friendly Traditional Gifting service, blending heritage with sustainability. Our curated collection features timeless traditional items crafted from eco-friendly materials, perfect for honoring cultural traditions while prioritizing environmental responsibility.
            </p>
            <p className='mb-8 text'>
              Our intricately designed statues of the elephant god, Ganesha, are made of paper pulp, making them eco-friendly, durable, lightweight and can be easily carried around. Unlike the soil idols, our product stands a higher chance of sustaining damage due to the bonding property of the adhesive in the pulp.
            </p>
            <p className='mb-8 text'>
              We also curate traditional lanterns and auspicious Gudis by carefully choosing each item to reflect the richness of our heritage while minimizing ecological impact. Furthermore, we customize these gifts with your official branding, transforming them into memorable marketing assets that resonate with your audience.
            </p>
            <div>
              <a className={styles.portfolioLink} href='/portfolio'>View Product Promotion Portfolio</a>
            </div>
          </div>
          <div className={styles.galleryWrap}>
            <div className={`${styles.bigImg}`}>
              <Image
                className={`${styles.gridImg}`}
                src='/images/Bamboo/6.jpg'
                alt='Corporate Gifting'
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                loading="lazy"
              />
            </div>
            <div className={`${styles.imgList}`}>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 md:max-h-48`}
                  src='/images/Bamboo/Skylamp.jpg'
                  alt='Corporate Gifting'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  loading="lazy"
                />
              </div>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/images/promotions-giftings/personal-utilities/Bamboo-gift.jpg'
                  alt='Corporate Gifting'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  loading="lazy"
                />
              </div>
              <div className='flex-1 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/service-4.jpeg'
                  alt='Corporate Gifting'
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
  );
}