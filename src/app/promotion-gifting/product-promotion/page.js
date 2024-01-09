import Image from 'next/image';
import styles from './product-promotion.module.css';

export default function ProductPromotion() {
  return (
    <section>
      <head>
        <title>Promotional Products | Petara Corporation</title>
      </head>
      <div className={styles.bgwrap}>
        <div
          className={`heading  text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}
        >
          <h2 className='text-4xl font-semibold mb-4'>Product Promotion</h2>
          <div className={`${styles.bar}`}></div>
        </div>
      </div>
      <div className={`${styles.productDetailsWrap} container mx-auto mb-8`}>
        <div className={styles.flexWrap}>
          <div className={styles.prodInfo}>
            <h1 className='text-4xl mb-8 '>
              Diverse Product Promotion Services for Unforgettable Brand
              Presence
            </h1>
            <p className='mb-8 text'>
              Amplify your brand's visibility and appeal with comprehensive
              Product Promotion services. From bespoke Thermoforming creations
              to dynamic LED Boards, impactful Table Tops, and engaging
              Standees, each product serves as a unique canvas for your brand.
              By strategically placing your brand on these diverse products, you
              not only capture attention but also create a tangible and
              memorable connection. This approach extends beyond conventional
              advertising, allowing your brand to become an integral part of the
              environments where your partners and their customers interact.
            </p>
            <h3 className='text-xl mb-8 font-bold'>
              Maximize Impact and Foster Brand Loyalty with Our Tailored Product
              Promotion Services
            </h3>
            <p className='mb-8 text'>
              Our expertise lies in understanding the nuances of each product
              and tailoring strategies to ensure maximum impact. Choose our
              Product Promotion services to not only enhance your brand
              visibility but also to foster brand loyalty and recognition within
              your target market. As your brand resonates across these varied
              touchpoints, it establishes a strong and enduring presence,
              driving engagement and influencing buying decisions.
            </p>

            <h3 className='text-xl mb-2 font-bold'>
              Discover the extensive range of our Product Promotion services:
            </h3>
            <div className={`${styles.products}`}>
              <ul className='list-disc ml-6 mb-6'>
                <li>
                  <p>Thermoforming</p>
                  <p className='text-sm'>
                    Elevate your brand promotion strategy with our cutting-edge
                    Thermoforming services. We specialize in transforming flat
                    surfaces into captivating three-dimensional masterpieces
                    that leave a lasting impression. Using high-quality PP
                    material and precision Punch die technology, we bring your
                    brand to life in a visually striking manner. The punched
                    parts, once affixed to various surfaces, create a dynamic
                    and engaging three-dimensional effect that captures
                    attention from all angles.
                  </p>
                </li>
                <br />
                <li>
                  <p>Wall Clock</p>
                  <p className='text-sm'>
                    Transform your brand into a timeless masterpiece through our
                    Wall Clocks. At Petara, we boast an extensive collection of
                    around 300 varieties of wall clocks. Our clocks not only
                    serve as functional timepieces but also act as powerful
                    promotional tools. With customizable options, we ensure that
                    your brand's identity is seamlessly integrated into every
                    tick and tock. Enhance your brand visibility with a touch of
                    sophistication and functionality, making each passing moment
                    a reminder of your brand's enduring presence.
                  </p>
                </li>
                <br />
                <li>
                  <p>LED Board</p>
                  <p className='text-sm'>
                    Step into the future with our LED Boards—an innovative
                    technology featuring A3 and A4 size frames with product
                    cut-outs illuminated by vibrant LEDs. The customizable
                    nature of LED boards allows for extensive modification to
                    suit your brand's unique requirements, making them a
                    preferred choice for dealers aiming to attract customers
                    effectively
                  </p>
                </li>
              </ul>
            </div>
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
                src='/images/promotions-giftings/promotional-products/Horse-watch.jpg'
                alt='Corporate Gifting'
                height={100}
                width={500}
              />
            </div>
            <div className={`${styles.imgList}`}>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 md:max-h-48`}
                  src='/images/promotions-giftings/promotional-products/Thernmal.jpg'
                  alt='Corporate Gifting'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/images/promotions-giftings/promotional-products/electric-board.jpg'
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
