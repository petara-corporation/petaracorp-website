import Image from 'next/image';
import styles from './product-listing.module.css';

export default function CorporateProductListing() {
  const productList1 = [
    {
      name: 'Corporate Gifting',
      url: '/images/promotions-giftings/corporate-gifts/tile-corporate.jpg',
      href: '/promotion-gifting/corporate-gifting',
    },
    {
      name: 'Product Promotion',
      url: '/images/promotions-giftings/promotional-products/Tile-product.jpg',
      href: '/promotion-gifting/product-promotion',
    },
    {
      name: 'Personal Utility Gifting',
      url: '/images/promotions-giftings/personal-utilities/Tile-personal.jpg',
      href: '/promotion-gifting/personal-utility-gifting',
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
        <ul className={`${styles.imgList} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4`}>
          {productList1.map(product => (
            <li key={product.name} className={`${styles.prodCard} relative`}>
              <a href={product.href} className='block h-full' aria-label={`View details of ${product.name}`}>
                <Image
                  className={`${styles.gridImgPortfolio} relative`}
                  src={product.url}
                  alt={product.name}
                  fill={true}
                  sizes='(max-width: 768px) 25vw, 25vw'
                  loading="lazy"
                />
                <p className='text-center mt-4'>{product.name}</p>
              </a>
            </li>
          ))}
        </ul>
        {/* Uncomment and use if needed
        <ul className={`${styles.imgList} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pt-4`}>
          {productList2.map(product => (
            <li key={product.name} className={`${styles.prodCard} relative`}>
              <a href={product.href} className='block h-full'>
                <Image
                  className={`${styles.gridImgPortfolio} relative`}
                  src={product.url}
                  alt={product.name}
                  fill={true}
                  sizes='(max-width: 768px) 25vw, 25vw'
                  loading="lazy"
                />
                <p className='text-center mt-4'>{product.name}</p>
              </a>
            </li>
          ))}
        </ul>
        */}
      </div>
    </section>
  );
}