import styles from './trustmarker.module.css';

export default function TrustMarker() {
  const benefitsList = [
    {
      id: 1,
      title: '<strong>Flexibility</strong> at the Core',
      desc:
        '<strong>Integral principle</strong> woven into our <strong>organizational fabric</strong>. <br /> Seamlessly aligns with our <strong>boundless creativity</strong>.',
    },
    {
      id: 2,
      title: '<strong>Ethical Business Practices</strong>',
      desc:
        'Our practices are rooted in <strong>transparency</strong> and <strong>integrity</strong>. <br /> Ensuring <strong>trust</strong> and <strong>sustainability</strong> in every interaction.',
    },
    {
      id: 3,
      title: '<strong>Scalable Workforce</strong>',
      desc:
        'Beyond our dedicated team, capacity to swiftly expand to <strong>300 individuals</strong>. <br /> Geared for tackling <strong>substantial projects effectively</strong>.',
    },
    {
      id: 4,
      title: '<strong>Adaptability</strong> in Action',
      desc:
        'Empowers us to manage <strong>major undertakings</strong> with ease. <br /> Ensures <strong>agility</strong> in addressing <strong>diverse project requirements</strong>.',
    },
  ];

  return (
    <section className={styles.trustmarkerWrap} aria-labelledby="trustmarker-heading">
      <div className={styles.trustmarker}>
        <div className={`${styles.heading} container text-center flex flex-col items-center mx-auto`}>
          <h2 id="trustmarker-heading" className='text-2xl md:text-4xl font-semibold mb-4'>
            <strong>Flexibility</strong>, <strong>Innovation</strong>, <strong>Trust</strong>
          </h2>
          <div className={`${styles.bar}`}></div>
        </div>
        <div className='container mx-auto'>
          <ul className='block md:flex justify-center flex-wrap'>
            {benefitsList.map(benefit => (
              <li key={benefit.id} className={`${styles.card} mb-6 md:mb-0`}>
                <h3 className='font-bold mb-2' dangerouslySetInnerHTML={{ __html: benefit.title }}></h3>
                <p className='font-light text-sm ml-4' dangerouslySetInnerHTML={{ __html: benefit.desc }}></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
