import Image from 'next/image';
import styles from './personal-utility-gifting.module.css';

export default function PersonalUtilityGifting() {
  return (
    <section>
      <head>
        <title>Personal Utility Gifting | Petara Corporation</title>
      </head>
      <div className={styles.bgwrap}>
        <div
          className={`heading  text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}
        >
          <h2 className='text-4xl font-semibold mb-4'>
            Personal Utility Gifting
          </h2>
          <div className={`${styles.bar}`}></div>
        </div>
      </div>
      <div className={`${styles.productDetailsWrap} container mx-auto mb-8`}>
        <div className={styles.flexWrap}>
          <div className={styles.prodInfo}>
            <h1 className='text-4xl mb-8 '>
              Create Lasting Impressions in Daily Lives
            </h1>
            <p className='mb-8 text'>
              Be a part of the daily routine of your vendors, traders,
              distributors, clients and employees. Elevate your brand's essence
              with our Personal Utility Gifting service, a thoughtful approach
              to building lasting impressions. By aligning your brand with items
              that are practical and stylish, you create a lasting impact on
              recipients' daily lives.
            </p>
            <h3 className='text-xl mb-8 font-bold'>
              Boost Your Brand with Our Curated Range of Personalized Utility
              Gifts: Where Function Meets Fashion
            </h3>
            <p className='mb-8 text'>
              Our curated selection includes a versatile range of items such as
              bags, bottles, flasks, raincoats, electronics, clothing, and more.
              These personalized essentials not only cater to individual needs
              but also serve as a powerful branding tool. Utility gifting not
              only showcases your commitment to functionality and fashion but
              also strengthens brand recall. Boost your corporate image by
              choosing gifts that resonate, making your brand an integral part
              of recipients' everyday experiences.
            </p>

            <h3 className='text-xl mb-2 font-bold'>
              More about our popular personal utility gifts:
            </h3>
            <div className={`${styles.products}`}>
              <ul className='list-disc ml-6 mb-6'>
                <li>
                  <p>Bags</p>
                  <p className='text-sm'>
                    We offer an extensive range of bags, including backpacks,
                    duffles, cotton, jute, handmade bags, designer options,
                    trollies, suitcases, and tourist bags. Our partnerships
                    extend to both Indian and multinational brands such as
                    American Tourister, VIP, WildCraft, and many others. Whether
                    you're interested in specific products or models, we
                    specialize in catering to B2B business needs and can source
                    any desired item for you.
                  </p>
                </li>
                <br />
                <li>
                  <p>Bottles, Flasks & Utensils</p>
                  <p className='text-sm'>
                    Our drinkware collection is incredibly popular, featuring
                    options made from stainless steel, copper, brass, and even
                    glass. For added safety, we offer bottles made of
                    Borosilicate Glass with a customizable silicon sleeve on
                    top, providing individuality and protection against
                    breakage. Additionally, we offer household utility items
                    that come in sets, making them perfect for gifting. Our
                    range includes both high-quality local products and renowned
                    brands such as Milton and Cello. Explore our diverse
                    selection of stylish and functional drinkware and utility
                    sets.
                  </p>
                </li>
                <br />
                <li>
                  <p>Raincoat & Umbrella</p>
                  <p className='text-sm'>
                    Dive into our versatile rainwear collection, offering a wide
                    array of products. From PVC and Zeal raincoats to stylish
                    umbrellas like garden, golf, and Kargil, we've got you
                    covered. Additionally, we offer promotional tables with
                    umbrellas for a unique touch. We collaborate with brands
                    like Decathlon for these products.
                  </p>
                </li>
                <br />
                <li>
                  <p>Electronics</p>
                  <p className='text-sm'>
                    Electronic gadgets such as Bluetooth speakers, headphones,
                    and smartwatches are essential for today's young generation
                    and have demonstrated their utility, gaining acceptance even
                    among the mid-age demographic. Simply specify the product
                    and brand, and we'll get a comprehensive selection for you.
                  </p>
                </li>
                <br />
                <li>
                  <p>Clothing</p>
                  <p className='text-sm'>
                    Whether it's formal or casual clothing, branding on apparel
                    provides significant exposure with enduring quality. We
                    offer a wide array of fabrics and styles, ensuring a diverse
                    selection. From renowned brands to specific styles, we can
                    arrange almost any clothing option to meet your needs.
                  </p>
                </li>
                <br />
                <li>
                  <p>Bamboo Gifting</p>
                  <p className='text-sm'>
                    Make a statement for sustainability with our eco-friendly
                    and biodegradable bamboo gifts. Crafted with care and
                    environmental consciousness, these gifts reflect your
                    commitment to a greener world. Choose from a range of bamboo
                    products that are not only stylish but also contribute to a
                    sustainable lifestyle. We are deeply involved in the
                    development of these products, and we employ modern
                    technology to meet the rising demand for sustainable
                    solutions.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <a className={styles.portfolioLink} href='/portfolio'>
                View Personal Utility Gifting Portfolio
              </a>
            </div>
          </div>
          <div className={styles.galleryWrap}>
            <div className={`${styles.bigImg}`}>
              <Image
                className={`${styles.gridImg}`}
                src='/images/promotions-giftings/personal-utilities/Bag.jpg'
                alt='Corporate Gifting'
                height={100}
                width={500}
              />
            </div>
            <div className={`${styles.imgList}`}>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 md:max-h-48`}
                  src='/images/promotions-giftings/personal-utilities/Bamboo-gift.jpg'
                  alt='Corporate Gifting'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/images/promotions-giftings/personal-utilities/Bottle-class.jpg'
                  alt='Corporate Gifting'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div className='flex-1 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/images/promotions-giftings/personal-utilities/clothing.jpg'
                  alt='Corporate Gifting'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
            </div>
            <br />
            <div className={`${styles.imgList}`}>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 md:max-h-48`}
                  src='/images/promotions-giftings/personal-utilities/CAp.jpg'
                  alt='Corporate Gifting'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/images/promotions-giftings/personal-utilities/headphone.jpg'
                  alt='Corporate Gifting'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div className='flex-1 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/images/promotions-giftings/personal-utilities/Raincoat.jpg'
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
