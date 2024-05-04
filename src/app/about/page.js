import Image from 'next/image';
import styles from './about-us.module.css';
import Pillars from './pillars';
import Meta from '../components/meta/meta.component';

export default function About() {
  return (
    <section>
      <Meta
        title='About | Petara Corporation'
        description='Inflatables, Bouncy & Corporate Gifting provider'
      />
      <div className={styles.bgwrap}>
        <div
          className={`heading text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}
        >
          <h2 className='text-4xl font-semibold mb-4'>About Petara</h2>
          <div className={`${styles.bar}`}></div>
        </div>
      </div>
      <div className={`${styles.aboutInfo} container mx-auto`}>
        <p className='mb-8 text'>
          Petara is your trusted partner for bringing your visual marketing
          projects to life. Specializing in larger-than-life inflatables and
          corporate gifting, our solutions are designed to steal the spotlight
          at your events and leave a lasting impression. With over 20 years of
          experience in media, outdoor marketing, and brand promotion, our
          dedicated team at Petara ensures excellence in every aspect of your
          project.
        </p>
        <p className='mb-8'>
          Our sister company, ORION VISUALS ENTERPRISES, with a decade of
          expertise, specializes in corporate gifting, serving esteemed clients
          such as Indian Oil Corporation Limited, Bharat Petroleum Corporation
          Limited, ICICI Bank, Syngenta, UPL, BASF, Coromandel International,
          and many more.
        </p>
        <p className='mb-8'>
          Furthermore, we collaborate with diverse B2B brands focused on
          clothing, bags, accessories, and beyond , customizing their offerings
          to align with your preferences. Whether it's printing branded T-shirts
          or labelling top-notch office accessories, we cover it all. Our
          expertise extends to handling bulk orders seamlessly, ensuring they
          meet the highest standards upon delivery. Our partnerships span from
          premium to local brands, addressing your unique needs.
        </p>
      </div>
      <div className={`${styles.aboutInfo} container mx-auto`}>
        <h2 className='mb-8 text-center md:text-left text-2xl md:text-3xl font-bold'>
          Made in India
        </h2>
        <p className='text-lg'>Why Made in India?</p>
        <p className='text-sm mb-2'>
          At Petara, we take pride in being an Indian brand that stands for
          excellence, ethics, and a commitment to global well-being. Here's why
          choosing "Made in India" matters:
        </p>
        <p className='text-md'>Technological Prowess on a Budget:</p>
        <p className='text-sm mb-2'>
          Just like Chandrayaan (Indian Lunar Exploration Programme) symbolizes
          India's top-tier technological capabilities at an unbelievable cost,
          we at Petara deliver the best quality products at reasonable prices.
          Our commitment to excellence ensures that you receive cutting-edge
          solutions without breaking the bank.
        </p>
        <p className='text-md'>Humanity First:</p>
        <p className='text-sm mb-4'>
          During the challenging times of the pandemic, India extended a helping
          hand globally. Unlike others, India not only provided vaccines to
          those in need but did so free of cost. Embracing the spirit of
          Vasudaiva Kutumbakam (the world is one family), India helped numerous
          developing nations fulfil their vaccine requirements without
          prioritising profits. At Petara, we uphold this principle, placing
          humanity and ethics at the core of our business.
        </p>
        <p className='text-sm mb-4'>
          By choosing Petara, you support a brand rooted in Indian values,
          proving that India can not only compete but excel on the global stage.
          We challenge the misconception that only certain countries can produce
          at scale and affordable rates—India stands tall, delivering quality
          without compromise. Join us in celebrating the excellence and ethics
          that define "Made in India."
        </p>
      </div>
      <div className={`${styles.processWrap} container mx-auto pt-8`}>
        <div className={`${styles.aboutInfo} mx-auto text-center`}>
          <h2 className='text-4xl mb-8 '>Why Petara?</h2>
        </div>
        <div className={`${styles.processItem}`}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src='/service-1.png'
              alt='Balloon'
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className='mb-8 text-center md:text-left text-2xl md:text-3xl font-bold'>
              Promise of Quality
            </h2>
            <p className='text-sm'>
              Quality is our non-negotiable commitment. Be confident that your
              giant inflatables are crafted from the finest materials, and
              undergo thorough quality control. This stringent approach ensures
              that our larger-than-life products meet the highest safety
              standards. Our dedication to quality extends to corporate gifts as
              well(give equal preference to both)—whether it's a pen or an
              electronic device, only the highest quality gifts are delivered.
            </p>
          </div>
        </div>
        <div className={`${styles.processItem} flex-row-reverse`}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src='/images/baloon.webp'
              alt='Balloon'
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className='mb-8 text-center md:text-left text-2xl md:text-3xl font-bold'>
              We bring you the truth, no matter how bitter
            </h2>
            <p className='text-sm'>
              Our larger-than-life inflatables are born from imagination, so
              it's tricky to know exactly how they'll turn out. Environmental
              factors can also affect how they work and how long they last. But
              don't worry—we make sure to tell you about any limitations
              upfront, even more than the good stuff. When you work with us, you
              won't have any unexpected surprises when it comes to setting up
              the product.
            </p>
          </div>
        </div>
        <div className={`${styles.processItem} `}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src='/service-2.png'
              alt='Balloon'
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className='mb-8 text-center md:text-left text-2xl md:text-3xl font-bold'>
              Industry-altered solutions
            </h2>
            <p className='text-sm'>
              Every industry has its own way of doing things. A gift, inflatable
              or bouncy, that works for one might not work for another. Our team
              pays close attention to the details of your industry and comes up
              with ideas that fit just right. We have even transformed bouncy,
              typically seen as a kids' product, into a practical corporate
              utility and a safe game space for employees. Just bring us your
              basic idea, and we'll suggest the right approach for your
              promotional event.
            </p>
          </div>
        </div>
        <div className={`${styles.processItem} flex-row-reverse`}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src='/images/timely_execution.webp'
              alt='Balloon'
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className='mb-8 text-center md:text-left text-2xl md:text-3xl font-bold'>
              Timely Project Execution
            </h2>
            <p className='text-sm'>
              From start to finish, we uphold constant communication, giving top
              priority to meeting deadlines. Our agile and lean work approach
              allows us to smoothly accommodate last-minute changes, ensuring a
              flexible and efficient project execution.
            </p>
          </div>
        </div>
        <div className={`${styles.processItem}`}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src='/visualize-your-vision-2.jpeg'
              alt='Balloon'
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className='mb-8 text-center md:text-left text-2xl md:text-3xl font-bold'>
              Visualize your vision
            </h2>
            <p className='text-sm'>
              We often receive ready artwork files from clients. Once we have
              it, before making the actual product, we show you a graphical
              representation that's as close as possible to how the final
              product will look. This way, you can have an idea of what to
              expect.
            </p>
          </div>
        </div>
        <div className={`${styles.processItem} flex-row-reverse`}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src='/images/ethics.jpeg'
              alt='Balloon'
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className='mb-8 text-center md:text-left text-2xl md:text-3xl font-bold'>
              Ethical business practices
            </h2>
            <p className='text-sm'>
              At Petara, we believe in doing business the right way. Our
              commitment to ethical practices means you can trust us to be fair,
              transparent, and respectful in all our dealings. Choosing us as
              your partner ensures that your business is in honest and reliable
              hands.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.processItem}`}>
        <Pillars />
      </div>
    </section>
  );
}
