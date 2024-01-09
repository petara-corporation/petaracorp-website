import styles from './intro.module.css';

const ShortContactUs = () => {
  return (
    <section className={styles.ContactUsWrap}>
      <div
        className={`${styles.contactUs} container text-center flex flex-col items-center mx-auto`}
      >
        <p className='mb-4 px-4 font-bold text-xl'>Want something else?</p>
        <p className='mb-8 px-4'>
          Got a unique idea for a customized gift hamper? Let's connect over a
          call and bring your vision to life today.
        </p>
        <a
          href={`/contact-us/`}
          className={`${styles.quoteBtn} mt-1 ml-0 md:ml-2`}
        >
          Get Quote
        </a>
      </div>
    </section>
  );
};

export default ShortContactUs;
