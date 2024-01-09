'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './header.module.css';
import { navLinks } from './data';
import { useState } from 'react';
import ContactUsModal from '../../components/contact-popup/contact-popup';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([
    {
      src: '/inflatables_bouncies.png',
      alt: 'Inflatables',
    },
    {
      src: '/corporate_gifts_2.png',
      alt: 'Corporate Gifting',
    },
  ]);

  const hideModal = () => {
    setOpen(false);
  };

  const showModal = () => {
    setOpen(true);
  };

  // useEffect(() => {
  //   prepareModal();
  // }, [pathname]);

  // const prepareModal = () => {
  //   switch (pathname) {
  //     case "/":
  //       if (localStorage.getItem("homepage")) {
  //         return;
  //       } else {
  //         setImages([
  //           {
  //             src: "/service-1.png",
  //             alt: "Inflatables",
  //           },
  //           {
  //             src: "/service-2.png",
  //             alt: "corporate gifting",
  //           },
  //         ]);
  //         setTimeout(() => {
  //           showModal();
  //         }, 2500);
  //         localStorage.setItem("homepage", true);
  //       }
  //       break;
  //     case "/corporate-gifting":
  //       if (localStorage.getItem("corporate")) {
  //         return;
  //       } else {
  //         setImages([
  //           {
  //             src: "/service-1.jpg",
  //             alt: "corporate 1",
  //           },
  //           {
  //             src: "/service-2.png",
  //             alt: "corporate",
  //           },
  //         ]);
  //         setTimeout(() => {
  //           showModal();
  //         }, 2500);
  //         localStorage.setItem("corporate", true);
  //       }
  //       break;
  //     case "/products/inflatables":
  //       if (localStorage.getItem("inflatables")) {
  //         return;
  //       } else {
  //         setImages([
  //           {
  //             src: "/bouncy.png",
  //             alt: "Bouncy",
  //           },
  //           {
  //             src: "/inflatable.png",
  //             alt: "Inflatables",
  //           },
  //         ]);
  //         setTimeout(() => {
  //           showModal();
  //         }, 2500);
  //         localStorage.setItem("inflatables", true);
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <header
      className={`fixed w-full py-2 md:py-0 px-2 md:px-4 top-0 bg-white z-10  ${styles.header}`}
    >
      <div
        className={`container  mx-auto flex justify-between items-center ${styles.resContainer}`}
      >
        <div className='flex'>
          <div className={`${styles.hamburger} relative`}>
            <Image
              className={`relative mr-4 top-1`}
              src='/menu.svg'
              alt='Menu'
              width={35}
              height={35}
            />
            <div className={`${styles.menuSlide} absolute`}>
              <div className={`${styles.nav}`}>
                <nav className={`${styles.mobileMenu} self-center`}>
                  <ul className='my-4'>
                    {navLinks.map(nav => {
                      return (
                        <li className='mb-2' key={nav.id}>
                          <a
                            className={`block p-4 ${
                              pathname === nav.path ? styles.activeLinkMob : ''
                            }`}
                            href={nav.path}
                          >
                            {nav.title}
                          </a>
                          {nav?.subMenu && (
                            <div className=''>
                              <ul className='pl-6'>
                                {nav?.subMenu?.map(sub => {
                                  return (
                                    <li className={`ml-4 py-2`} key={sub?.id}>
                                      <a href={sub.url}>{sub.label}</a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <Link href='/' className={`block ${styles.logoWidth}`}>
            <Image
              className='relative'
              src='/petara_logo_landscape.jpg'
              alt='Petara Logo'
              width={163}
              height={55}
              priority
            />
          </Link>
        </div>
        <div className='flex'>
          <nav className={`${styles.desktopMenu} self-center`}>
            <ul className='flex'>
              {navLinks.map(nav => {
                return (
                  <li className={`mr-4 ${styles.mainMenu}`} key={nav.id}>
                    <a
                      className={`${styles.link} px-4 pb-3 whitespace-nowrap ${
                        nav.path !== '/' && pathname.startsWith(nav.path)
                          ? styles.activeLink
                          : nav.path === pathname
                          ? styles.activeLink
                          : ''
                      }`}
                      href={nav.path}
                    >
                      {nav.title}
                    </a>
                    {nav?.subMenu && (
                      <div className={styles.subnav}>
                        <ul className='container mx-auto flex justify-between'>
                          {nav?.subMenu?.map(sub => {
                            return (
                              <li
                                className={`flex py-8 ${styles.menuItem}`}
                                key={sub?.id}
                              >
                                <a
                                  href={sub.url}
                                  className='flex'
                                  style={{
                                    justifyContent: 'space-between',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                  }}
                                >
                                  <div className='flex'>
                                    <div
                                      // className={`relative`}
                                      style={{
                                        width: 48,
                                      }}
                                    >
                                      <Image
                                        className='relative'
                                        src={sub.img}
                                        alt={sub.label}
                                        width={48}
                                        height={48}
                                      />
                                    </div>
                                    <div
                                      className={styles.menuInfo}
                                      style={{ flex: 1 }}
                                    >
                                      <h2>{sub.label}</h2>
                                      <p>{sub.description}</p>
                                      {/* <div>
                                      {sub?.subProducts?.map(product => {
                                        return <p key={product}>{product}</p>;
                                      })}
                                    </div> */}
                                    </div>
                                  </div>
                                  <div
                                    className={`block flex ${styles.productImage}`}
                                  >
                                    Show Details{' '}
                                    <Image
                                      className='relative ml-1'
                                      src='/arrow-right.svg'
                                      alt='Arrow'
                                      width={12}
                                      height={12}
                                    />
                                  </div>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className='ctaWrap'>
          <button className={`${styles.cta} `} onClick={showModal}>
            Get in Touch
          </button>
        </div>
      </div>
      <ContactUsModal open={open} images={images} hideModal={hideModal} />
    </header>
  );
}
