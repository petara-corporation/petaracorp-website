import styles from './pillars.module.css';

export default function Pillars() {
  return (
    <section className={styles.trustmarkerWrap}>
      <div className={styles.trustmarker}>
        <div
          className={`container text-center flex flex-col items-center mx-auto`}
        >
          <h2 className='text-2xl md:text-4xl font-semibold mb-4'>
            Pillars of Petara
          </h2>
          <div className={`${styles.bar}`}></div>
        </div>
        <div className='container mx-auto'>
          <p className='mb-8 text'>
            Business thrives on passion, yet true success comes from having a
            circle that loves and supports your passion as much as you do.
          </p>

          <p className='mb-8 text'>
            Fortunate to be guided by Mr. Kishor Kalkar, our mentor throughout
            this journey, using the invaluable "WHAT NOT TO DO" approach. His
            mentorship has been our compass, and we owe him a tremendous debt.
            We refrain from mere thanks as it doesn't capture the depth of our
            gratitude.
          </p>

          <p className='mb-8 text'>
            Adv. Anjani Kalkar has also played a significant role, and the names
            Petara Corporation and Orion Visuals Enterprises stand as remarkable
            tokens of her contributions.
          </p>
        </div>
      </div>
    </section>
  );
}
