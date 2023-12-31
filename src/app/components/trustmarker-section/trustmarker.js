import styles from './trustmarker.module.css';

export default function TrustMarker() {
  const benefitsList = [
    {
      id: 1,
      title: 'Flexibility at the Core',
      desc: 'Integral principle woven into our organizational fabric. <br /> Seamlessly aligns with our boundless creativity.',
    },
    {
      id: 2,
      title: 'Ethical Business Practices',
      desc: 'Our practices are rooted in transparency and integrity. <br /> Ensuring trust and sustainability in every interaction.',
    },
    {
      id: 3,
      title: 'Scalable Workforce',
      desc: 'Beyond our dedicated team, capacity to swiftly expand to 300 individuals. <br />Geared for tackling substantial projects effectively.',
    },
    {
      id: 4,
      title: 'Adaptability in Action',
      desc: 'Empowers us to manage major undertakings with ease. <br /> Ensures agility in addressing diverse project requirements.',
    },
  ];
  return (
    <section className={styles.trustmarkerWrap}>
      <div className={styles.trustmarker}>
        <div
          className={`${styles.heading} container text-center flex flex-col items-center mx-auto`}
        >
          <h2 className='text-2xl md:text-4xl font-semibold mb-4'>
            Flexibility, Innovation, Trust
          </h2>
          <div className={`${styles.bar}`}></div>
        </div>
        <div className='container mx-auto'>
          <ul className=' block md:flex justify-center flex-wrap'>
            {benefitsList.map(benefit => {
              return (
                <li key={benefit.id} className={`${styles.card}  mb-6 md:mb-0`}>
                  <h3 className='font-bold  mb-2'>{benefit.title}</h3>
                  <div
                    className='font-light text-sm ml-4'
                    dangerouslySetInnerHTML={{ __html: benefit.desc }}
                  ></div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
