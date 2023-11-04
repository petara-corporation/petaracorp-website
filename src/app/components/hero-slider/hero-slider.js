"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./hero-slider.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroCarousel = () => (
  <div className="relative w-full mb-10">
    <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
      <div className="slide">
        <img alt="Premium Inflatable Solutions" src="./slide1.jpg" />
        <div className={`${styles.overlayText} legend`}>
          <div className={styles.textWrap}>
            <h1>Premium Inflatable Solutions</h1>
            <p>for Your Business Success</p>
            <button>Explore</button>
          </div>
        </div>
      </div>
      <div className="slide">
        <img alt="Premium Inflatable Solutions" src="./slide2.jpg" />
        <div className={`${styles.overlayText} legend`}>
          <div className={styles.textWrap}>
            <h1>Premium Sky Balloons</h1>
            <p>for Your Business Success</p>
            <button>Explore</button>
          </div>
        </div>
      </div>
    </Carousel>
  </div>
);

export default HeroCarousel;
