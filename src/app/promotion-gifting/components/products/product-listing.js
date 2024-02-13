import Image from 'next/image';
import styles from './product-listing.module.css';

export default function CorporateProductListing() {
  const productList = [
    {
      id: 1,
      name: 'Corporate Gifting',
      url: '/images/promotions-giftings/corporate-gifts/tile-corporate.jpg',
      href: '/promotion-gifting/corporate-gifting',
    },
    {
      id: 2,
      name: 'Personal Utility Gifting',
      url: '/images/promotions-giftings/personal-utilities/Tile-personal.jpg',
      href: '/promotion-gifting/personal-utility-gifting',
    },
    {
      id: 3,
      name: 'Product Promotion',
      url: '/images/promotions-giftings/promotional-products/Tile-product.jpg',
      href: '/promotion-gifting/product-promotion',
    },
  ];
  return (
    <section className='mb-16'>
      <div className='heading container text-center flex flex-col items-center mx-auto'>
        <h2 className='text-2xl md:text-4xl font-semibold mb-4'>
          Range of Products
        </h2>
        <div className={`${styles.bar}`}></div>
      </div>
      <div className={`{styles.products} container mx-auto`}>
        <ul
          className={`${styles.imgList} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 pt-4`}
        >
          {productList.map(product => {
            return (
              <a href={product?.href} className='block h-full'>
                <li key={product.id} className={`${styles.prodCard} relative`}>
                  <Image
                    className={`${styles.gridImgPortfolio} relative`}
                    src={product.url}
                    alt={product.name}
                    fill={true}
                    sizes='(max-width: 768px) 25vw, 25vw'
                  />
                  <p className='text-center mt-4'>{product.name}</p>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
