import Image from 'next/image';
import Link from 'next/link';
import styles from './services.module.css';

export default function OurServices() {
  return (
    <section className='container mx-auto max-[1024px]:px-4' aria-labelledby="our-services-heading">
      <div className='heading container text-center flex flex-col items-center mx-auto'>
        <h2 id="our-services-heading" className='text-2xl md:text-4xl font-semibold mb-4'>
          Our Services
        </h2>
        <div className='bar'></div>
      </div>
      <div className='images container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-8'>
        <div className={`${styles.layerWrap} relative max-md:mb-8`}>
          <div className={`${styles.layerImageWrap} ${styles.inflatables}`}>
            <Image
              src='/inflatables_and_bouncies-min.png'
              alt='Bouncy and Inflatables'
              fill
              objectPosition='center'
              objectFit='cover'
              sizes='(max-width: 768px) 100vw, 50vw'
              loading='lazy'
            />
            <div className={styles.overlay} aria-hidden="true">
              <p className={styles.title}><strong>Bouncy & Inflatables</strong></p>
              <p className={styles.shortDesc}>
                Embark on a journey of <strong>inflatable wonder</strong> where the <strong>fun never deflates</strong>
              </p>
            </div>
          </div>
          <div className={styles.hoverLayer}>
            <div className={styles.text}>
              <p className={styles.title}>
                <strong>Bouncy & Inflatables: Larger than life products</strong>
              </p>
              <p className={`${styles.no_mobile} ${styles.shortDesc}`}>
                Embark on a journey of <strong>inflatable wonder</strong> where the <strong>fun never deflates</strong>
              </p>
              <br className={styles.no_mobile} />
              <h4>
                Explore a wide variety of <strong>inflatables</strong> that promise a <strong>lasting visual impact</strong> with <strong>superior quality</strong>, ensuring your brand stays activated in the hearts and minds of your customers.
              </h4>
              <Link href='/products' className={styles.viewAll} aria-label="View all products related to Bouncy & Inflatables">
                View Products
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.layerWrap} relative`}>
          <div className={styles.layerImageWrap}>
            <Image
              src='/corporate_gifts-min.png'
              alt='Corporate Gifting'
              fill
              objectPosition='center'
              objectFit='cover'
              sizes='(max-width: 768px) 100vw, 50vw'
              loading='lazy'
            />
            <div className={styles.overlay} aria-hidden="true">
              <p className={styles.title}><strong>Promotion & Gifting</strong></p>
              <p className={styles.shortDesc}>
                <strong>Elevate your corporate relationships</strong> and <strong>strengthen brand connections</strong>
              </p>
            </div>
          </div>
          <div className={styles.hoverLayer}>
            <div className={styles.text}>
              <p className={styles.title}><strong>Promotion & Gifting</strong></p>
              <p className={styles.shortDesc}>
                <strong>Elevate your corporate relationships</strong> and <strong>strengthen brand connections</strong>
                <br />
              </p>
              <br />
              <h4>
                <strong>Forge lasting impressions</strong> with our <strong>sophisticated and personalized corporate gifting solutions</strong>.
              </h4>
              <Link href='/promotion-gifting' className={styles.viewAll} aria-label="View all promotion and gifting products">
                View products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
