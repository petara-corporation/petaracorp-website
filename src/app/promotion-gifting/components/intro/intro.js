import styles from './intro.module.css';

const Intro = () => {
  return (
    <section className={styles.contactUs} aria-labelledby="intro-heading">
      <div className='container mx-auto'>
        <div className={`${styles.aboutInfo} text-center`}>
          <h2 id="intro-heading" className='text-4xl mb-8'>
            In the rush of the world, let the act of giving be stress-free
          </h2>
          <p className='mb-8 text'>
            Welcome to the world of brand promotion and gifting, where we
            seamlessly blend the power of promotion with the thoughtfulness of
            gifting. Whether you're looking to strengthen relationships with
            your vendors, traders, distributors, clients and employees, or wish
            to enhance your brand visibility, our Promotion and Gifting
            solutions offer a diverse array of possibilities.
          </p>
        </div>
        {/* Uncomment and use if needed */}
        {/* <div className={`${styles.processWrap} mx-auto`}>
          <ul className={`flex flex-wrap`}>
            <li>
              <b className='bold'>Corporate Gifting:</b> Boost your brand
              presence with thoughtful and versatile corporate gifts for vendors
              traders distributors, clients and employees.
            </li>

            <li className='pt-2'>
              <b>Accessories:</b> Be a part of your employees’ daily routine.
              Choose from essentials such as laptop stands, travel bags,
              sunglasses and office stationery. Choose from a variety of
              accessories that will delight the receiver.
            </li>

            <li className='pt-2'>
              <b>Electronics:</b> Have a tech-savvy team member? Consider
              gadgets like earphones, USB hubs, smartphones, or smart devices
              tailored to their passion.
            </li>

            <li className='pt-2'>
              <b>Eco-Friendly:</b> Gift with purpose! Browse through our
              extensive range of environmentally friendly gifts, bringing joy to
              the receiver and our planet.
            </li>

            <li className='pt-2'>
              <b>Drinkware:</b> Encourage your employees to stay hydrated with
              our stylish range of drinkware gifts.
            </li>
          </ul>
        </div> */}
      </div>
    </section>
  );
};

export default Intro;