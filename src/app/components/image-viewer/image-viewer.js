'use client';

import styles from './image-viewer.module.css';
import React, { useState, useRef, useEffect } from 'react';
import useOutsideClick from '../useOutsideClick';
import Image from 'next/image';

const ImageViewer = props => {
  const [imgIndex, setCurrentIndex] = useState(props.currentIndex);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const [imgList, setImgList] = useState(props.images || []);

  const showImage = () => {
    return (
      <div className={styles.imgWrap}>
        <img src={imgList[imgIndex].src} alt={imgList[imgIndex].alt} />
      </div>
    );
  };

  useEffect(() => {
    setCurrentIndex(props.currentIndex);
  }, [props.currentIndex]);

  useEffect(() => {
    setImgList(props.images);
  }, [props.images]);

  const prevImage = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + imgList.length) % imgList.length,
    );
  };

  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % imgList.length);
  };

  useOutsideClick(ref, () => {
    if (!isOpen) {
      props.hideModal();
    }
  });
  return (
    <div
      className={`${styles.backdrop} ${props.open ? styles.show : styles.hide}`}
    >
      <div className={` ${styles.ContactUsModalWrap}`} ref={ref}>
        <div className={styles.popup}>{imgList.length >= 1 && showImage()}</div>
        <div className={`${styles.actionBtnWrap} text-center p-4`}>
          <button
            className={`${styles.quoteBtn} ${styles.prev}  mr-4`}
            onClick={prevImage}
          >
            <Image
              className='relative'
              src='/chevron-left.svg'
              alt='Left'
              width={40}
              height={40}
            />
          </button>
          <button
            className={`${styles.quoteBtn} ${styles.next}`}
            onClick={nextImage}
          >
            <Image
              className='relative'
              src='/chevron-right.svg'
              alt='Left'
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
