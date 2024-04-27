'use client';

import styles from './contact-popup.module.css';
import React, { useState, useRef, useEffect } from 'react';
import useOutsideClick from '../useOutsideClick';
import Image from 'next/image';

const ContactUsModal = props => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (!isOpen) {
      props.hideModal();
    }
  });

  return (
    <div>
      <div
        className={`${styles.backdrop} ${
          props.open ? styles.show : styles.hide
        }`}
      >
        <div
          className={`${styles.popup} ${styles.ContactUsModalWrap}`}
          ref={ref}
        >
          <div className='heading container text-center flex flex-col items-center mx-auto'>
            <h2 className='text-2xl md:text-4xl font-semibold mb-4'>
              Contact Us
            </h2>
            <div className={`${styles.bar}`}></div>
          </div>
          <p className='mb-8 text-center text-sm md:text-regular'>
            👋 Need assistance or have questions? Let's chat! visit our{' '}
            <a href='/contact-us' className='text-sky-500 underline'>
              Contact Us
            </a>{' '}
            page and connect with our team. We're here to help you! 🚀
          </p>
          <div className={`mb-16 md:flex justify-center ${styles.imgWrap}`}>
            {props.images?.map(img => {
              return (
                <div className={`text-center`} key={img.alt}>
                  <Image
                    className={`${styles.processImg}`}
                    key={img.alt}
                    src={img.src}
                    alt={img.alt}
                    width={200}
                    height={200}
                  />
                </div>
              );
            })}
          </div>
          <div className='text-center'>
            <a className={`${styles.cta} `} href='/contact-us'>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;
