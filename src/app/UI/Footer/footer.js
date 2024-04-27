'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import styles from './footer.module.css';
import ContactUsModal from '../../components/contact-popup/contact-popup';

const Footer = () => {
  const [open, setOpen] = useState(false);
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <footer className={styles.footer}>
      <div className='container mx-auto block px-8 md:px-4 md:flex py-4 md:py-16 justify-between'>
        <section className='logoSection mb-4'>
          <div className='logo -ml-4'>
            <Link href='/'>
              <Image
                className='relative'
                src='/images/petara_logo_landscape.jpg'
                alt='Petara Logo'
                width={163}
                height={55}
              />
            </Link>
          </div>
        </section>
        <div
          className='flex justify-between pb-4 border-b mb-4 md:border-transparent md:mb-0'
          style={{
            flex: 0.5,
          }}
        >
          <section>
            <nav>
              <ul>
                <li>
                  <h3
                    className='font-bold mb-6'
                    style={{ fontFamily: 'arial' }}
                  >
                    {' '}
                    Company
                  </h3>
                </li>
                <li>
                  <Link
                    href='/'
                    className='font-medium mb-4 inline-block text-sm'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/portfolio'
                    className='font-medium mb-4 inline-block text-sm'
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about'
                    className='font-medium mb-4 inline-block text-sm'
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href='/contact-us'
                    className='font-medium inline-block text-sm'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </section>
          <section>
            <nav>
              <ul>
                <li>
                  <h3
                    className='font-bold mb-6'
                    style={{ fontFamily: 'arial' }}
                  >
                    {' '}
                    Follow Us
                  </h3>
                </li>
                <li>
                  <a
                    href='https://www.facebook.com/share/hVc4mo2gMNxvbCFi/?mibextid=qi2Omg'
                    target='_blank'
                    className='font-medium mb-4 inline-block text-sm underline'
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.instagram.com/petaracorp?igsh=MXU1NGZjbDVkaGNicg=='
                    target='_blank'
                    className='font-medium mb-4 inline-block text-sm underline'
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/company/petaracorp/'
                    target='_blank'
                    className='font-medium mb-4 inline-block text-sm underline'
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
        <section className={styles.contact}>
          <div className={`${styles.addressWrap} mb-6`}>
            <Image src='/marker.svg' alt='Address' width={40} height={40} />
            <p className='text-sm font-medium ml-6'>
              I - 5, Clarion Park, <br />
              Aundh, Pune - 411007
            </p>
          </div>
          <div className={`${styles.addressWrap} mb-6`}>
            <Image src='/phone.svg' alt='Address' width={40} height={40} />
            <a href='tel:+918879292103' className='text-sm font-medium ml-6'>
              +91 88792 92103
            </a>
          </div>
          <div className={styles.addressWrap}>
            <Image src='/email.svg' alt='Address' width={40} height={40} />
            <a
              href='mailto:sales@petaracorp.com'
              className='text-sm font-medium ml-6'
            >
              sales@petaracorp.com
            </a>
          </div>
        </section>
      </div>
      <div className={`${styles.copyright} py-4`}>
        <p className='text-white container text-center mx-auto'>
          &#169; Copyright {new Date().getFullYear()} Petara Corp, All rights
          reserved.
        </p>
      </div>
      <ContactUsModal open={open} hideModal={hideModal} email={''} name={''} />
    </footer>
  );
};

export default Footer;
