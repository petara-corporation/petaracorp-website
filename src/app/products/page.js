import Image from 'next/image';
import styles from './product.module.css';

export default function Products() {
  const productList = [
    {
      id: 1,
      label: 'Inflatables',
      img: '/menu.jpg',
      href: '/products/inflatables',
      subProducts: [
        'Ground Inflatable Product Shape ',
        'Ground Inflatable Character Shape',
      ],
    },
    {
      id: 2,
      label: 'Bouncy',
      img: '/bouncy.jpg',
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
    },
    {
      id: 3,
      label: 'Costumes',
      img: '/costume.jpg',
      href: '/products/costumes',
      subProducts: [
        'Inflatable Costume : Product Shape',
        'Inflatable Costume : Character Shape ',
        'Fur Costume',
      ],
    },
    {
      id: 4,
      label: 'Arches & Kiosk',
      img: '/arches.jpeg',
      href: '/products/archs-&-kiosk',
      subProducts: ['Arches & Kiosk', 'Balloons & Blimps'],
    },
    {
      id: 5,
      label: 'Balloons & Blimps',
      img: '/baloon.jpg',
      href: '/products/balloons',
      subProducts: ['Arches & Kiosk', 'Balloons & Blimps'],
    },
  ];
  return (
    <section>
      <div className={styles.bgwrap}>
        <div
          className={`heading  text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}
        >
          <h2 className='text-4xl font-semibold mb-4'>Products</h2>
          <div className={`${styles.bar}`}></div>
        </div>
      </div>
      <div className={styles.products}>
        <div className={`${styles.subnav} container mx-auto`}>
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {productList.map(sub => {
              return (
                <li className={`${styles.productItem}`} key={sub?.id}>
                  <a href={sub?.href} className='block h-full'>
                    <div className={`${styles.layerWrap} relative`}>
                      <div className={styles.layerImageWrap}>
                        <Image
                          className={`${styles.gridImg} relative`}
                          src={sub.img}
                          alt={sub.label}
                          fill={true}
                          sizes='(max-width: 768px) 25vw, 25vw'
                        />
                        <div className={styles.overlay}>
                          <h2>{sub.label}</h2>
                        </div>
                      </div>
                      <div className={styles.hoverLayer}>
                        <div className={styles.text}>
                          <h2>{sub.label}</h2>
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
