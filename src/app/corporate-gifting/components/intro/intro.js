import styles from './intro.module.css';

const Intro = () => {
  return (
    <div className={styles.contactUs}>
      <div className='container mx-auto'>
        <div className={`${styles.aboutInfo} text-center`}>
          <h2 className='text-4xl mb-8 '>
            In the rush of the world, let the act of giving be stress-free
          </h2>
          <p className='mb-8 text'>
            Order a variety of merchandise for your employees and clients, all
            fully customizable to meet your specific preferences. We believe
            gifts should come from the heart, so we put special care into
            crafting each one with that heartfelt touch. Let loose your
            creativity, envision any gift, and we'll bring it to life for you.
            Our dedicated team also offers personalized consultations tailored
            to the nature of the occasion and your budget, ensuring a seamless
            and thoughtful gifting experience.
          </p>
        </div>
        {/* <div className={`${styles.processWrap} mx-auto`}>
          <ul className={`flex flex-wrap`}>
            <li>
              <b>Apparel:</b> Customize corporate wear to your liking, from
              t-shirts, hoodies, jackets, and shirts to caps.
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
    </div>
  );
};

export default Intro;
