import Image from 'next/image';
import styles from './services-list.module.css';
Image;

const ServicesList = () => {
  return (
    <div>
      <div className='heading container text-center flex flex-col items-center mx-auto'>
        <h2 className='text-2xl md:text-4xl font-semibold mb-4'>
          Our Services
        </h2>
        <div className={`${styles.bar}`}></div>
      </div>
      <div className={`${styles.processWrap} container mx-auto`}>
        <div className={`${styles.processItem}`}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src='/brand_labeling.png'
              alt='Balloon'
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className='mb-2 text-center md:text-left text-2xl md:text-3xl font-bold'>
              Brand Labeling
            </h2>
            <p className='text-md font-bold mb-4'>
              Transform ordinary gifts into powerful brand ambassadors
            </p>
            <p className='text-sm'>
              Tailor corporate gifts with your company's logo, tagline, or
              personalized message, adding a touch of sophistication and brand
              identity to every gift. Our brand Labeling solution transforms
              each product into a unique and powerful representation of your
              brand. Whether it's a sleek executive accessory or a thoughtful
              token of appreciation, we can imprint your company's logo or
              message on absolutely anything, turning every gift into a powerful
              branding tool. Make a distinctive statement, enhance brand
              visibility, and create a lasting connection with clients,
              partners, and employees. Our commitment to quality ensures that
              every branded item speaks volumes about your company's values and
              appreciation for the receiver.
            </p>
          </div>
        </div>
        <div className={`${styles.processItem} flex-row-reverse`}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src='/customized_gift_packaging.png'
              alt='Balloon'
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className='mb-2 text-center md:text-left text-2xl md:text-3xl font-bold'>
              Customize Gift Packaging
            </h2>
            <p className='text-md font-bold mb-4'>
              How you present matters just as much as what you present
            </p>
            <p className='text-sm'>
              Unveil the art of thoughtful presentation with our Custom Gift
              Packaging service, curated exclusively for our corporate gifting
              collection. At Petara, we understand that the first impression is
              everything, and our customizable packaging is designed to elevate
              your gift-giving experience. Choose from a variety of premium
              materials, colours, and designs to tailor the packaging to match
              your brand's identity. Whether it's a luxurious executive gift or
              a personalized token of appreciation, our Custom Gift Packaging
              adds an extra layer of sophistication and reinforces the
              uniqueness of your corporate gesture. Tailor the packaging to
              reflect your brand identity, incorporating your logo, colours, and
              a personalized message for that extra touch of elegance. Make
              every gift reveal a moment of anticipation and delight with our
              personalized packaging. Explore our corporate gifting solutions
              and customize your packaging to make a lasting impression today!
            </p>
          </div>
        </div>
        <div className={`${styles.processItem} `}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src='/bulk_gifting.png'
              alt='Balloon'
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className='mb-2 text-center md:text-left text-2xl md:text-3xl font-bold'>
              Bulk Gifting
            </h2>
            <p className='text-md font-bold mb-4'>Spread smiles at scale</p>
            <p className='text-sm'>
              Unveil the power of thoughtful efficiency with our Bulk Gifting
              solution—a tailored approach to corporate gifting at scale. At
              Petara, we redefine convenience without compromising on quality.
              Our Bulk Gifting service empowers you to choose from a diverse
              array of premium gifts, each customizable to reflect your brand
              identity. Whether recognizing a team achievement, thanking
              clients, or celebrating milestones, our Bulk Gifting ensures a
              smooth and personalized process from selection to delivery.
              Embrace cost-effective solutions that maintain the exceptional
              standard of your brand. We take pride in presenting customized
              corporate gifting ideas that cater to diverse industries. Our
              all-encompassing procurement service, guarantees a hassle-free
              experience, enabling you to concentrate on your priorities.
              Streamline your gifting strategy effortlessly—explore our
              corporate gifting options and experience the unparalleled ease and
              impact of our Bulk Gifting service.
            </p>
          </div>
        </div>
        <div className={`${styles.processItem} flex-row-reverse`}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src='/luxury_gifting.png'
              alt='Luxury Gifting'
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className='mb-2 text-center md:text-left text-2xl md:text-3xl font-bold'>
              Luxury Gifting
            </h2>
            <p className='text-md font-bold mb-4'>
              Special bonds deserve special gifts
            </p>
            <p className='text-sm'>
              Indulge in the extraordinary with our Luxury Gifting collection at
              Petara. Immerse yourself in a world where sophistication meets
              artistry, and every gift is a masterpiece. From lavish executive
              accessories to meticulously crafted gift sets, our Luxury Gifting
              options redefine opulence. Elevate your corporate relationships by
              gifting a touch of luxury that speaks volumes about your
              commitment to excellence, and make a statement of appreciation
              that transcends ordinary gestures. Explore the epitome of
              corporate sophistication with our Luxury Gifting—where every
              gesture becomes a statement of refined appreciation. Explore the
              pinnacle of corporate elegance with our Luxury Gifting—where each
              gift is a celebration of prestige and enduring relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
