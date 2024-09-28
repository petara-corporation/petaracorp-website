import Image from 'next/image';
import styles from './about-us.module.css';
import Pillars from './pillars';
import Meta from '../components/meta/meta.component';

export default function About() {
  return [
    <Meta
      title='About | Petara Corporation'
      description='Inflatables, Bouncy & Corporate Gifting provider'
    />,
    <section>
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
          Petara is your trusted partner for bringing your{' '}
          <strong>visual marketing</strong> projects to life. Specializing in
          larger-than-life <strong>inflatables</strong> and{' '}
          <strong>corporate gifting</strong>, our solutions are designed to steal
          the spotlight at your events and leave a lasting impression. With over
          20 years of experience in media, <strong>outdoor marketing</strong>, and{' '}
          <strong>brand promotion</strong>, our dedicated team at Petara ensures
          excellence in every aspect of your project.
        </p>
        <p className='mb-8'>
          Our sister company, ORION VISUALS ENTERPRISES, with a decade of
          expertise, specializes in <strong>corporate gifting</strong>, serving
          esteemed clients such as Indian Oil Corporation Limited, Bharat
          Petroleum Corporation Limited, ICICI Bank, Syngenta, UPL, BASF,
          Coromandel International, and many more.
        </p>
        <p className='mb-8'>
          Furthermore, we collaborate with diverse B2B brands focused on{' '}
          <strong>clothing</strong>, <strong>bags</strong>,{' '}
          <strong>accessories</strong>, and beyond, customizing their offerings to
          align with your preferences. Whether it's printing{' '}
          <strong>branded T-shirts</strong> or labeling top-notch{' '}
          <strong>office accessories</strong>, we cover it all. Our expertise
          extends to handling <strong>bulk orders</strong> seamlessly, ensuring
          they meet the highest standards upon delivery. Our partnerships span
          from premium to local brands, addressing your unique needs.
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
          choosing "<strong>Made in India</strong>" matters:
        </p>
        <p className='text-md'>Technological Prowess on a Budget:</p>
        <p className='text-sm mb-2'>
          Just like Chandrayaan (Indian Lunar Exploration Programme) symbolizes
          India's top-tier technological capabilities at an unbelievable cost, we
          at Petara deliver the <strong>best quality products</strong> at{' '}
          <strong>reasonable prices</strong>. Our commitment to excellence ensures
          that you receive <strong>cutting-edge solutions</strong> without breaking
          the bank.
        </p>
        <p className='text-md'>Humanity First:</p>
        <p className='text-sm mb-4'>
          During the challenging times of the pandemic, India extended a helping
          hand globally. Unlike others, India not only provided vaccines to those
          in need but did so free of cost. Embracing the spirit of Vasudaiva
          Kutumbakam (the world is one family), India helped numerous developing
          nations fulfill their vaccine requirements without prioritizing profits.
          At Petara, we uphold this principle, placing{' '}
          <strong>humanity and ethics</strong> at the core of our business.
        </p>
        <p className='text-sm mb-4'>
          By choosing Petara, you support a brand rooted in{' '}
          <strong>Indian values</strong>, proving that India can not only compete
          but excel on the <strong>global stage</strong>. We challenge the
          misconception that only certain countries can produce at scale and
          affordable rates—India stands tall, delivering{' '}
          <strong>quality without compromise</strong>. Join us in celebrating the{' '}
          <strong>excellence and ethics</strong> that define "Made in India."
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
              <strong>Quality</strong> is our non-negotiable commitment. Be
              confident that your <strong>giant inflatables</strong> are crafted
              from the <strong>finest materials</strong> and undergo thorough{' '}
              <strong>quality control</strong>. This stringent approach ensures
              that our larger-than-life products meet the{' '}
              <strong>highest safety standards</strong>. Our dedication to quality
              extends to <strong>corporate gifts</strong> as well—whether it's a
              pen or an electronic device, only the{' '}
              <strong>highest quality gifts</strong> are delivered.
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
              Our <strong>larger-than-life inflatables</strong> are born from
              imagination, so it's tricky to know exactly how they'll turn out.{' '}
              <strong>Environmental factors</strong> can also affect how they work
              and how long they last. But don't worry—we make sure to tell you about
              any limitations upfront, even more than the good stuff. When you work
              with us, you won't have any <strong>unexpected surprises</strong>{' '}
              when it comes to setting up the product.
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
              Every industry has its own way of doing things. A{' '}
              <strong>gift</strong>, <strong>inflatable</strong>, or{' '}
              <strong>bouncy</strong> that works for one might not work for another.
              Our team pays close attention to the details of your industry and
              comes up with ideas that fit just right. We have even transformed{' '}
              <strong>bouncy castles</strong>, typically seen as a kids' product,
              into a <strong>practical corporate utility</strong> and a{' '}
              <strong>safe game space for employees</strong>. Just bring us your
              basic idea, and we'll suggest the right approach for your{' '}
              <strong>promotional event</strong>.
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
              From start to finish, we uphold <strong>constant communication</strong>, giving top
              priority to <strong>meeting deadlines</strong>. Our{' '}
              <strong>agile and lean work approach</strong> allows us to smoothly
              accommodate <strong>last-minute changes</strong>, ensuring a{' '}
              <strong>flexible and efficient project execution</strong>.
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
              We often receive <strong>ready artwork files</strong> from clients.
              Once we have it, before making the actual product, we show you a{' '}
              <strong>graphical representation</strong> that's as close as possible
              to how the <strong>final product</strong> will look. This way, you can
              have an idea of what to expect.
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
              At Petara, we believe in doing business the right way. Our commitment
              to <strong>ethical practices</strong> means you can trust us to be{' '}
              <strong>fair</strong>, <strong>transparent</strong>, and{' '}
              <strong>respectful</strong> in all our dealings. Choosing us as your
              partner ensures that your business is in{' '}
              <strong>honest and reliable hands</strong>.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.processItem}`}>
        <Pillars />
      </div>
    </section>,
  ];
}
