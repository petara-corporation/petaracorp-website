import Image from 'next/image';
import styles from './eco-ethnic-product-listing.module.css';

export default function EcoEthnicProductListing() {
  const productList = [
    {
      name: 'Eco-friendly gifting',
      url: '/images/promotions-giftings/promotional-products/Tile-product.jpg',
      href: '/eco-ethnic-gifting/eco-friendly-gifting',
      info: "Discover Petara's Eco Friendly Gifting service, where sustainability meets sophistication. Our collection features a range of environmentally conscious products that are perfect.",
    },
    {
      name: 'Indian Traditional Gifting',
      url: '/images/promotions-giftings/promotional-products/Tile-product.jpg',
      href: '/eco-ethnic-gifting/indian-traditional-gifting',
      info: "Explore Petara's Eco-Friendly Traditional Gifting service, blending heritage with sustainability. Our curated collection features timeless traditional items that are just perfect.",
    },
  ];
  return (
    <section className='mb-16' aria-labelledby="product-listing-heading">
      <div className='heading container text-center flex flex-col items-center mx-auto'>
        <h2 id="product-listing-heading" className='text-2xl md:text-4xl font-semibold mb-4'>
          Range of Products
        </h2>
        <div className={`${styles.bar}`}></div>
      </div>
      <div className={`${styles.products} container mx-auto`}>
        <ul className={`${styles.imgList} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pt-4`}>
          {productList.map(product => (
            <li key={product.name} className={`${styles.prodCard} relative`}>
              <a href={product.href} className='block h-full' aria-label={`View details of ${product.name}`}>
                <Image
                  className={`${styles.gridImgPortfolio} relative`}
                  src={product.url}
                  alt={product.name}
                  fill
                  sizes='(max-width: 768px) 25vw, 25vw'
                  loading="lazy"
                />
                <h3 className='mt-4 mb-4 font-bold text-xl'>{product.name}</h3>
                <p>{product.info}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}