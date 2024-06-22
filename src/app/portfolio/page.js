'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './portfolio.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import { GalleryItems, TabList } from './data';
import ImageViewer from '../components/image-viewer/image-viewer';
import Testimonials from '../components/testimonials/testimonials';
import Meta from '../components/meta/meta.component';

const metadata = {
  title: 'Portfolio | Petara Corporation',
  description: 'Explore our diverse portfolio of innovative solutions and successful collaborations at Petara Corporation.',
  keywords: 'Portfolio, Petara Corporation, Corporate Gifting, Inflatable Products, Event Solutions',
  image: '/images/portfolio-banner.jpg',
  url: '/portfolio',
};

const PortfolioComponent = () => {
  const router = useRouter();
  const params = useSearchParams();

  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [displayList, setDisplayList] = useState(GalleryItems);
  const [isOpen, setIsOpen] = useState(false);

  const filterPortfolio = tab => {
    if (tab) {
      setDisplayList(GalleryItems.filter(f => f.type === tab));
    } else {
      setDisplayList([...GalleryItems]);
    }
  };

  function setIndex(index) {
    setSelectedImgIndex(index);
    setIsOpen(true);
  }
  function hideModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (params.get('tab')) {
      filterPortfolio(params.get('tab'));
    } else {
      filterPortfolio();
    }
  }, [params]);

  return (
    <section className='portfolio mb-8' aria-labelledby="portfolio-heading">
      <Meta {...metadata} />
      <div className={styles.bgwrap}>
        <div className={`heading text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}>
          <h2 id="portfolio-heading" className='text-4xl font-semibold mb-4'>Explore our diverse portfolio</h2>
          <div className={`${styles.bar}`}></div>
          <h4 className='text-xl'>A visual journey through our innovative solutions and successful collaborations</h4>
        </div>
      </div>
      <Testimonials />
      <div className={`${styles.portfolioWrap} container mx-auto`}>
        <div className={`${styles.tabsImgWrap} mt-8`}>
          <ul className={styles.tabList}>
            {TabList.map(tab => (
              <li
                key={tab}
                onClick={() => router.push(tab !== 'All' ? `/portfolio?tab=${tab}` : `/portfolio`, { scroll: false })}
                className={params.get('tab') === tab || (tab === 'All' && !params.get('tab')) ? styles.activeTab : ''}
              >
                {tab}
              </li>
            ))}
          </ul>
          <ul className={`${styles.imgList} grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-4`}>
            {displayList.map((image, index) => (
              <li key={image.src} className='relative'>
                <Image
                  className={`${styles.gridImgPortfolio} relative`}
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes='(max-width: 768px) 25vw, 25vw'
                  loading="lazy"
                  onClick={() => setIndex(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ImageViewer
        images={displayList}
        currentIndex={selectedImgIndex}
        hideModal={hideModal}
        open={isOpen}
      />
    </section>
  );
};

const Portfolio = () => {
  return (
    <Suspense>
      <PortfolioComponent />
    </Suspense>
  );
};

export default Portfolio;