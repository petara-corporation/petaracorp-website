import Image from 'next/image';
import styles from './eco-ethnic-intro.module.css';

const EcoEthnicGiftingIntro = () => {
  return (
    <section className={styles.bgwrap} aria-labelledby="eco-ethnic-gifting-heading">
      <div className={`heading text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}>
        <h2 id="eco-ethnic-gifting-heading" className='text-4xl font-semibold mb-4'>Eco-Ethnic Gifting</h2>
        <div className={`${styles.bar}`}></div>
        <p className='text-xl mt-4'>
          Welcome to the world of brand promotion and gifting, where we
          seamlessly blend the power of promotion with the thoughtfulness of
          gifting. Whether you&apos;re looking to strengthen relationships
          with your vendors, traders, distributors, clients and employees, or
          wish to enhance your brand visibility, our Promotion and Gifting
          solutions offer a diverse array of possibilities.
        </p>
      </div>
    </section>
  );
};

export default EcoEthnicGiftingIntro;