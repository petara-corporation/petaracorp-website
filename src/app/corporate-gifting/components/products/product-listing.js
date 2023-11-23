import Image from "next/image";
import styles from "./product-listing.module.css";

export default function CorporateProductListing() {
  const productList = [
    {
      id: 1,
      name: "Keychain And Accessories",
      url: "/product.png",
    },
    {
      id: 2,
      name: "Bags",
      url: "/product.png",
    },
    {
      id: 3,
      name: "Copper Handmade Products",
      url: "/product.png",
    },
    {
      id: 4,
      name: "Stationary and Paper Items",
      url: "/product.png",
    },
  ];
  return (
    <section className="mb-16">
      <div className="heading container text-center flex flex-col items-center mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Selected from Catalog
        </h2>
        <div className={`${styles.bar}`}></div>
      </div>
      <div className={`{styles.products} container mx-auto`}>
        <ul
          className={`${styles.imgList} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 pt-4`}
        >
          {productList.map((product) => {
            return (
              <li key={product.id} className={`${styles.prodCard} relative`}>
                <Image
                  className={`${styles.gridImgPortfolio} relative`}
                  src={product.url}
                  alt={product.name}
                  fill={true}
                  sizes="(max-width: 768px) 25vw, 25vw"
                />
                <p className="text-center mt-4">{product.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
