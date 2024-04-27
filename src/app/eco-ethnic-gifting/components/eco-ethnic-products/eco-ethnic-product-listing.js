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
    <section className='mb-16'>
      <div className='heading container text-center flex flex-col items-center mx-auto'>
        <h2 className='text-2xl md:text-4xl font-semibold mb-4'>
          Range of Products
        </h2>
        <div className={`${styles.bar}`}></div>
      </div>
      {/* <div className={`${styles.products} container mx-auto`}>
        <ul
          className={`${styles.imgList} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 pt-4`}
        >
          {productList.map(product => {
            return (
              <a
                href={product?.href}
                className='block h-full'
                key={product.name}
              >
                <li className={`${styles.prodCard} relative`}>
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
      </div> */}
      <div className={`${styles.products} container mx-auto`}>
        <ul
          className={`${styles.imgList} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8 pt-4`}
        >
          {productList.map(product => {
            return (
              <a
                href={product?.href}
                className='block h-full'
                key={product.name}
              >
                <li className={`${styles.prodCard} relative`}>
                  <Image
                    className={`${styles.gridImgPortfolio} relative`}
                    src={product.url}
                    alt={product.name}
                    fill
                    sizes='(max-width: 768px) 25vw, 25vw'
                  />
                  {/* make font bold & bigger using tailwind classes */}
                  <h3 className='mt-4 mb-4 font-bold text-xl'>
                    {product.name}
                  </h3>
                  <p>{product.info}</p>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
