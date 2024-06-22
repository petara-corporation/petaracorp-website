'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './header.module.css';
import { navLinks } from './data';
import { useState } from 'react';
import ContactUsModal from '../../components/contact-popup/contact-popup';

const images = [
  {
    src: '/images/inflatables_bouncies_contact_us.png',
    alt: 'Inflatables and Bouncies',
  },
  {
    src: '/images/corporate_gifts_contact_us.png',
    alt: 'Corporate Gifting Solutions',
  },
  {
    src: '/images/Bamboo/eco-ethnic.webp',
    alt: 'Eco-Friendly Gifting',
  },
];

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const hideModal = () => {
    setOpen(false);
  };

  const showModal = () => {
    setOpen(true);
  };

  return (
    <header className={`fixed w-full px-2 md:px-4 top-0 bg-white z-10 ${styles.header}`}>
      <div className={`container mx-auto flex justify-between items-center ${styles.resContainer}`}>
        <div className='flex'>
          <div className={`${styles.hamburger} relative`}>
            <Image
              className={`relative mr-4 top-1`}
              src='/menu.svg'
              alt='Menu icon'
              width={35}
              height={35}
            />
            <div className={`${styles.menuSlide} absolute`}>
              <div className={`${styles.nav}`}>
                <nav aria-label="Main navigation" className={`${styles.mobileMenu} self-center`}>
                  <ul className='my-4'>
                    {navLinks.map(nav => {
                      return (
                        <li className='mb-2' key={nav.title}>
                          <a
                            className={`block p-4 ${pathname === nav.path ? styles.activeLinkMob : ''}`}
                            href={nav.path}
                          >
                            {nav.title}
                          </a>
                          {nav?.subMenu && (
                            <div className=''>
                              <ul className='pl-6'>
                                {nav?.subMenu?.map(sub => {
                                  return (
                                    <li className={`ml-4 py-2`} key={sub?.label}>
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
              src='/images/petara_logo_landscape.jpg'
              alt='Petara Corporation Logo'
              width={163}
              height={55}
              priority
            />
          </Link>
        </div>
        <div className='flex'>
          <nav aria-label="Sub navigation" className={`${styles.desktopMenu} self-center`}>
            <ul className='flex'>
              {navLinks.map(nav => {
                return (
                  <li className={`mr-4 ${styles.mainMenu} px-4`} key={nav.title}>
                    <a
                      className={`${styles.link} whitespace-nowrap ${nav.path !== '/' && pathname.startsWith(nav.path) ? styles.activeLink : nav.path === pathname ? styles.activeLink : ''}`}
                      href={nav.path}
                    >
                      {nav.title}
                    </a>
                    {nav?.subMenu ? (
                      <div className={styles.subnav}>
                        <ul
                          className={`container mx-auto flex justify-between grid grid-cols-${Math.min(nav.subMenu.length, 3)}`}
                          style={{
                            gridTemplateColumns: `repeat(${Math.min(nav.subMenu.length, 3)}, minmax(0, 1fr))`,
                          }}
                        >
                          {nav?.subMenu?.map(sub => {
                            return (
                              <li className={`flex py-8 ${styles.menuItem}`} key={sub?.label}>
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
                                    <div style={{ width: 102 }}>
                                      <Image
                                        className='relative rounded'
                                        src={sub.img}
                                        alt={sub.label}
                                        width={102}
                                        height={102}
                                      />
                                    </div>
                                    <div className={styles.menuInfo} style={{ flex: 1 }}>
                                      <h2>{sub.label}</h2>
                                      <p>{sub.description}</p>
                                      <div className={`block flex ${styles.productImage}`}>
                                        Show Details{' '}
                                        <Image
                                          className='relative ml-1'
                                          src='/arrow-right.svg'
                                          alt='Arrow icon'
                                          width={12}
                                          height={12}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className='ctaWrap'>
          {pathname !== '/contact-us' ? (
            <button className={`${styles.cta}`} onClick={showModal} aria-label="Get in touch">
              Get in Touch
            </button>
          ) : (
            <div style={{ width: 133.66 }}>
              &nbsp;
            </div>
          )}
        </div>
      </div>
      <ContactUsModal open={open} images={images} hideModal={hideModal} />
    </header>
  );
};

export default Header;