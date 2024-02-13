import Image from 'next/image';
import styles from './product.module.css';
import PageTitle from '../components/page-title/page-title.component';

export default function Products() {
  const productList = [
    {
      id: 1,
      label: 'Inflatables',
      img: '/inflatables.jpg',
      href: '/products/inflatables',
      subProducts: [
        'Ground Inflatable Product Shape ',
        'Ground Inflatable Character Shape',
      ],
      description:
        'Elevate events with attention-grabbing, larger-than-life inflatables',
    },
    {
      id: 2,
      label: 'Bouncy',
      img: '/bouncies_1.jpg',
      href: '/products/bouncy',
      subProducts: [
        'Ball Pool : Bouncy with Ball',
        'Basic Bouncy : Standard Bouncy',
        'Combo Units : Mix of Many Bouncy',
        'Fun Slide : Bouncy & Slide',
        'Fun Obstacle : Bouncy & Obstructs',
        'Aqua Fun : Water Bouncy',
        'Maze’s : Puzzle Bouncy',
        'Package Bouncy : Mix Of All Bouncy',
        'Fun Interactive : Interactive Bouncy',
        'Fun Tunnel  : Tunnel Bouncy',
      ],
      description:
        'Foster joy and physical development with our vibrant bouncy products',
    },
    {
      id: 3,
      label: 'Costumes',
      img: '/inflatable_costumes.png',
      href: '/products/costumes',
      subProducts: [
        'Inflatable Costume : Product Shape',
        'Inflatable Costume : Character Shape ',
        'Fur Costume',
      ],
      description:
        'Transform moments with playful, interactive and creative inflatable costumes',
    },
    {
      id: 4,
      label: 'Arches & Kiosk',
      img: '/inflatable_archs_kiosks.png',
      href: '/products/archs-&-kiosk',
      subProducts: ['Arches & Kiosk', 'Balloons & Blimps'],
      description:
        'Make a grand entrance or create unique event spaces effortlessly',
    },
    {
      id: 5,
      label: 'Balloons & Blimps',
      img: '/Balloon2.png',
      href: '/products/balloons-blimps',
      subProducts: ['Arches & Kiosk', 'Balloons & Blimps'],
      description:
        'Store Openings, Product Launches, Parades, Outdoor Events, Marketing Campaigns',
    },
  ];
  return (
    <section>
      <head>
        <title>Inflatables | Petara Corporation</title>
      </head>
      <div className={styles.bgwrap}>
        <div
          className={`heading  text-center flex flex-col items-center ${styles.verticalAlign}`}
        >
          <h2 className='text-4xl font-semibold mb-4'>
            Larger than Life Inflatables
          </h2>
          <div className={`${styles.bar}`}></div>
          <p className='text-xl mt-4'>
            Bring your brand to life with our Larger than Life Inflatables{' '}
            <br />
            making a grand statement that captures attention and creates lasting
            impressions
          </p>
        </div>
      </div>
      <div className={styles.products}>
        <div className={`${styles.subnav} container mx-auto`}>
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {productList.map(product => {
              return (
                <li className={`${styles.productItem}`} key={product?.id}>
                  <a href={product?.href} className='block h-full'>
                    <div className={`${styles.layerWrap} relative`}>
                      <div className={styles.layerImageWrap}>
                        <Image
                          className={`${styles.gridImg} relative`}
                          src={product.img}
                          alt={product.label}
                          fill={true}
                          sizes='(max-width: 768px) 25vw, 25vw'
                        />
                        <div className={styles.overlay}>
                          <h2>{product.label}</h2>
                        </div>
                      </div>
                      <div className={styles.hoverLayer}>
                        <div className={styles.text}>
                          <h2>{product.label}</h2>
                          <h3>{product.description}</h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
