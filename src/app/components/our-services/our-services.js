import Image from 'next/image';
import Link from 'next/link';
import styles from './services.module.css';

export default function OurServices() {
  return (
    <section className='ourServices'>
      <div className='heading container text-center flex flex-col items-center mx-auto'>
        <h2 className='text-2xl md:text-4xl font-semibold mb-4'>
          Our Services
        </h2>
        <div className={`${styles.bar}`}></div>
      </div>
      <div className='images container mx-auto block md:flex justify-between'>
        <div
          className={`${styles.layerWrap} w-11/12 mx-auto md:w-2/4 mb-8 md:mb-0 md:mr-6 relative`}
        >
          <div className={`${styles.layerImageWrap} ${styles.inflatables}`}>
            <Image
              src='/inflatables_and_bouncies.png'
              alt='Bouncy and Inflatables'
              fill
              objectPosition='center'
              objectFit='cover'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
            <div className={styles.overlay}>
              <h2>Bouncy & Inflatables</h2>
              <h3>
                Embark on a journey of inflatable wonder where the fun never
                deflates
              </h3>
            </div>
          </div>
          <div className={styles.hoverLayer}>
            <div className={styles.text}>
              <h2>Bouncy & Inflatables: Larger than life products</h2>
              <h3 className={styles.no_mobile}>
                Embark on a journey of inflatable wonder where the fun never
                deflates
              </h3>
              <br className={styles.no_mobile} />
              <h4>
                Explore a wide variety of inflatables that promise a lasting
                visual impact, ensuring your brand stays activated in the hearts
                and minds of your customers.
              </h4>
              <Link href={'/products'} className={styles.viewAll}>
                View Products
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${styles.layerWrap} w-11/12 mx-auto md:w-2/4 relative`}
        >
          <div className={styles.layerImageWrap}>
            <Image
              src='/corporate_gifts.png'
              alt='Corporate Gifting'
              fill
              objectPosition='center'
              objectFit='cover'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
            <div className={styles.overlay}>
              <h2>Corporate Gifting</h2>
              <h3>
                Elevate your corporate connections with the art of thoughtful
                gifting
              </h3>
            </div>
          </div>
          <div className={styles.hoverLayer}>
            <div className={styles.text}>
              <h2>Corporate Gifting</h2>
              <h3>
                Elevate your corporate connections with the art of thoughtful
                gifting
              </h3>
              <br />
              <h4>
                Forge lasting impressions with our sophisticated and
                personalized corporate gifting solutions.
              </h4>
              <Link href={'/'} className={styles.viewAll}>
                View products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
