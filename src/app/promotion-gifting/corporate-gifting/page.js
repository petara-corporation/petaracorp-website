import Image from 'next/image';
import styles from './corporate-gifting.module.css';

export default function PersonalUtilityGifting() {
  return (
    <section>
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
              Elevating Relationships and Strengthening Brand Connections
            </h1>
            <p className='mb-8 text'>
              Elevate your corporate relationships and strengthen brand
              connections with Petara's comprehensive Corporate Gifting
              services. Our commitment to excellence ensures that our offerings
              cater to diverse industries, providing a versatile range of
              thoughtful gifts suitable for various occasions. Whether you're
              expressing gratitude to vendors, traders, and distributors,
              fostering client relationships, or appreciating the hard work of
              dedicated employees, our Corporate Gifting solutions are
              meticulously crafted to make a lasting impact.
            </p>
            <h3 className='text-xl mb-8 font-bold'>
              Personalized Gifts that Resonate with Your Brand's Identity
            </h3>
            <p className='mb-8 text'>
              At Petara, we go beyond the ordinary, offering a curated selection
              of premium promotional items and personalized gifts. Our extensive
              range is designed to resonate with the unique preferences of your
              recipients, ensuring that each gift reflects your brand's
              identity. We understand the importance of conveying your brand's
              message through thoughtful gestures, and our team is dedicated to
              helping you make a meaningful impression.
            </p>

            <h3 className='text-xl mb-2 font-bold'>
              Some of our popular corporate gifts:
            </h3>
            <div className={`${styles.products}`}>
              <ul className='list-disc ml-6 mb-6'>
                <li>
                  <p>Keychain</p>
                  <p className='text-sm'>
                    Discover a diverse range of premium keychains at Petara,
                    ranging from plastic and silicon rubber to gun metal and
                    beyond. Beyond serving as conventional key rings, some
                    keychains in our collection boast additional utilities, such
                    as openers and mobile holders. These dual-purpose keychains
                    add an extra layer of practicality to your corporate gifts.
                    Personalize these everyday essentials with your logo or
                    message to make a stylish and functional impression.
                  </p>
                </li>
                <br />
                <li>
                  <p>Pen</p>
                  <p className='text-sm'>
                    Explore an extensive selection of over 200 unique pen models
                    at Petara. Our diverse range includes innovative designs
                    like the Banner Pen, featuring a 2.5”x7” flag rolled into
                    the pen barrel, showcasing printed artwork when pulled out.
                    Additionally, we offer pens with the versatility of
                    incorporating 4 to 6 artworks within a single pen. Some
                    models feature multi-utility functions, such as a 2-way or
                    4-way screwdriver, scale, and more. Uncover stylus pens that
                    enable seamless operation of mobile screens and many other
                    innovative designs.
                  </p>
                </li>
                <br />
                <li>
                  <p>Custom Sets</p>
                  <p className='text-sm'>
                    Perfect for creating a cohesive and branded gift package,
                    our Custom Sets provide a convenient solution for corporate
                    gifting needs. Discover our Custom Set, offering versatile
                    combos of products including a pen, keychain, diary, and
                    card-holder, and more. Our extensive range spans from
                    standard to premium models, each featuring customizable
                    branding for a unique touch.
                  </p>
                </li>
                <br />
                <li>
                  <p>Paper Items</p>
                  <p className='text-sm'>
                    Paper items not only serve as practical and functional gifts
                    but also provide a tangible platform to showcase your brand
                    identity. Convey your brand's essence with every turn of the
                    page through our customizable designs. Choose from an
                    extensive range of paper items featuring diaries, notebooks,
                    notepads, pocket diaries, office books, calendars, and more.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <a className={styles.portfolioLink} href='/portfolio'>
                View Corporate Gifting Portfolio
              </a>
            </div>
          </div>
          <div className={styles.galleryWrap}>
            <div className={`${styles.bigImg}`}>
              <Image
                className={`${styles.gridImg}`}
                src='/Spiderman.png'
                alt='Corporate Gifting'
                height={100}
                width={500}
              />
            </div>
            <div className={`${styles.imgList}`}>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 md:max-h-48`}
                  src='/zebra.jpg'
                  alt='Corporate Gifting'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div className='flex-1 mr-4 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/petrol_man.jpg'
                  alt='Corporate Gifting'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div className='flex-1 relative'>
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src='/bottle.jpg'
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
