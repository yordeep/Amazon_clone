"use client"
import React from 'react';
import styles from './page.module.css';
import Header from '@/Components/Header';
import Main from '@/Components/Main';
import Product from '@/Components/Product';
import Footer from '@/Components/Footer';

const page = () => {
  return ( 
    <div className={styles.front}>
    <Header/>
    <Main/>
    <Product/>
    <Footer/>
    </div>
   );
}
 
export default page;