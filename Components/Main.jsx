"use client"
import React from 'react';
import styles from './Main.module.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Main = () => {
    return ( 
        <div className={styles.main}>
          <div className={styles.imgs}>
            <Carousel 
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={4000}
            >
            <div>
            <img src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg" alt="" />
            </div>
            <div>
            <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" alt="" />
            </div>
            <div>
          <img src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg" alt="" />
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt="" />
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" alt="" />
            </div>
            </Carousel>
          </div>
        </div>
     );
}
 
export default Main;