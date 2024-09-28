import Image from 'next/image';
import styles from './product.module.css';
import Meta from '../components/meta/meta.component';

export const metadata = {
  title: 'Petara Corporation - Inflatables, Bouncy & Costumes',
  description:
    'Inflatables, Bouncy & Costumes Provider. Petara Corporation offers premium quality products for all events.',
  keywords: 'Inflatables, Bouncy, Costumes, Petara Corporation, Event Solutions',
  image: '/products_banner.jpeg',
  url: '/products',
};

const productList = [
  {
    id: 1,
    label: 'Inflatables',
    img: '/images/inflatable-products/inflatables/7Up.png',
    href: '/products/inflatables',
    subProducts: [
      'Ground Inflatable Product Shape ',
      'Ground Inflatable Character Shape',
    ],
    description:
      'Elevate events with <strong>attention-grabbing</strong>, <strong>larger-than-life inflatables</strong>',
  },
  {
    id: 2,
    label: 'Bouncy',
    img: '/images/inflatable-products/bouncies/bouncies_1.jpg',
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
      'Foster <strong>joy</strong> and <strong>physical development</strong> with our <strong>vibrant bouncy products</strong>',
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
      'Transform moments with <strong>playful</strong>, <strong>interactive</strong> and <strong>creative inflatable costumes</strong>',
  },
  {
    id: 4,
    label: 'Arches & Kiosk',
    img: '/inflatable_archs_kiosks.png',
    href: '/products/archs-&-kiosk',
    subProducts: ['Arches & Kiosk', 'Balloons & Blimps'],
    description:
      'Make a <strong>grand entrance</strong> or create <strong>unique event spaces</strong> effortlessly',
  },
  {
    id: 5,
    label: 'Balloons & Blimps',
    img: '/images/inflatable-products/balloons/Balloon2.png',
    href: '/products/balloons-blimps',
    subProducts: ['Arches & Kiosk', 'Balloons & Blimps'],
    description:
      '<strong>Store Openings</strong>, <strong>Product Launches</strong>, <strong>Parades</strong>, <strong>Outdoor Events</strong>, <strong>Marketing Campaigns</strong>',
  },
];

export default function Products() {
  return [
    <Meta {...metadata} />,
    <main>
      <section className={styles.bgwrap} aria-labelledby="product-heading">
        <div
          className={`heading text-center flex flex-col items-center ${styles.verticalAlign}`}
        >
          <h1
            id="product-heading"
            className="text-2xl md:text-4xl font-semibold mb-4"
          >
            <strong>Larger than Life Inflatables</strong>
          </h1>
          <div className={`${styles.bar}`}></div>
          <p className="text-xl mt-4">
            <strong>Bring your brand to life</strong> with our{' '}
            <strong>Larger than Life Inflatables</strong>
            <br />
            making a <strong>grand statement</strong> that{' '}
            <strong>captures attention</strong> and{' '}
            <strong>creates lasting impressions</strong>
          </p>
        </div>
      </section>
      <section
        className={styles.products}
        aria-labelledby="product-list-heading"
      >
        <h2 id="product-list-heading" className="sr-only">
          Product List
        </h2>
        <div className={`${styles.subnav} container mx-auto`}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productList.map((product) => (
              <li className={`${styles.productItem}`} key={product.id}>
                <a
                  href={product.href}
                  className="block h-full"
                  aria-label={`View details of ${product.label}`}
                >
                  <div
                    className={`${styles.layerWrap} relative rounded overflow-hidden`}
                  >
                    <div className={styles.layerImageWrap}>
                      <Image
                        className={`${styles.gridImg} relative`}
                        src={product.img}
                        alt={product.label}
                        fill={true}
                        sizes="(max-width: 768px) 25vw, 25vw"
                        loading="lazy"
                      />
                      <div className={styles.overlay}>
                        <h2>{product.label}</h2>
                      </div>
                    </div>
                    <div
                      className={styles.hoverLayer}
                      aria-hidden="true"
                    >
                      <div className={styles.text}>
                        <h2>{product.label}</h2>
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: product.description,
                          }}
                        ></h3>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>,
  ];
}
