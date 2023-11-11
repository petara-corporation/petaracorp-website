"use client";
import styles from "./portfolio.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { useState } from "react";
import { GalleryItems, TabList } from "./data";

const Portfolio = () => {
  const brands = [
    "/audi.gif",
    "/CocomelonLogo.png",
    "/reliance.png",
    "/sunburn.png",
    "/cococola.png",
  ];

  const [selectedTab, setSelectedTab] = useState("All");
  const [displayList, setDisplayList] = useState(GalleryItems);
  function filterPortfolio(tab) {
    setSelectedTab(tab);
    if (tab !== "All") {
      let data = GalleryItems.filter((f) => f.type === tab);
      setDisplayList(data);
    } else {
      setDisplayList(GalleryItems);
    }
  }
  return (
    <section className="portfolio mb-8">
      <div className={styles.bgwrap}>
        <div
          className={`heading  text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}
        >
          <h2 className="text-4xl font-semibold mb-4">Portfolio</h2>
          <div className={`${styles.bar}`}></div>
        </div>
      </div>
      <div className={`${styles.portfiloWrap} container mx-auto`}>
        <p className="text-xl text-center mb-8">
          We consider ourselves fortunate to have crafted giant inflatable
          products for some of the most prominent brands, sports organizations,
          and marketing firms.
        </p>
        <div className={styles.brandsCarousel}>
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            centerMode
            centerSlidePercentage={20}
          >
            {brands.map((slide) => {
              return (
                <div className={styles.slide} key={slide}>
                  <img alt="Premium Inflatable Solutions" src={slide} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className={`${styles.tabsImgWrap} mt-8`}>
          <ul className={styles.tabList}>
            {TabList.map((tab) => {
              return (
                <li
                  onClick={() => filterPortfolio(tab)}
                  key={tab}
                  className={selectedTab === tab ? styles.activeTab : ""}
                >
                  {tab}
                </li>
              );
            })}
          </ul>
          <ul
            className={`${styles.imgList} grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4`}
          >
            {displayList.map((image) => {
              return (
                <li key={image.alt} className="relative">
                  <Image
                    className={`${styles.gridImgPortfolio} relative`}
                    src={image.src}
                    alt={image.alt}
                    fill={true}
                    sizes="(max-width: 768px) 25vw, 25vw"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
