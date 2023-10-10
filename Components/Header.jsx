"use client"
import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {

    return (
       <div className={styles.header}>
         <div className={styles.upperheader}>  
        <div className={styles.left_header}>
        <img className={styles.img}src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="" />
        <div className={styles.location}
        id="location">
            <span>Deliver to</span>
            <h5><LocationOnIcon sx={{fontSize:'15px'}}/>India</h5>
        </div>
        </div>
        <div className={styles.searchbar}>
        <select name="item" id="">
                <option value="all">All</option>
                <option value="mobile">Moible</option>
                <option value="laptop">Laptop</option>
                <option value="men's">Men's</option>
                <option value="women's">Women's</option>
                <option value="kid's">Kid's</option>
                <option value="grocery">Grocery</option>
            </select>
            <input type="text" placeholder='Search Amazon'/>
            <  SearchIcon  className={styles.srci}/>
        </div>
        <div className={styles.rightHeader}>
        <div className={styles.languages}>
            <span>
                <img style={{width:'25px'}} src="https://pngimg.com/uploads/flags/flags_PNG14592.png" alt="" />
            </span>
            <h6 style={{color:'#fff',margin:0,padding:0}}>EN
            <select name="" id=""></select>
            </h6>
        </div>
        <div className={styles.login}>
            <p style={{color:'#fff',margin:'0px',padding:'0px'}}>
                <span style={{fontSize:'x-small'}}>Hello,Sign in</span>
                <h5 style={{margin:'0px',padding:'0px',}}>Accounts & List 
                <select name="" id="">
                </select>
                </h5>
            </p>
        </div>
        <div className={styles.returns}>
            <p style={{color:'#fff',margin:'0px',padding:'0px'}}>
                <span style={{fontSize:'x-small'}}>Return</span>
                <h5 style={{margin:'0px',padding:'0px'}}>& Orders</h5>
            </p>
        </div>
        <div className={styles.cart}>
            <span style={{padding:'4px'}} >
               < ShoppingCartIcon />
            </span>
            cart
        </div>
        </div>
        </div>
        <div className={styles.bottomheader}>
        <Link style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'4px',fontWeight:'bold'}} href={""}><MenuIcon sx={{color:'white'}}/>All</Link>
            <Link href={""}>Today's Deals</Link>
            <Link href={""}>Customer's Service</Link>
            <Link href={""}>Registry</Link>
            <Link href={""}>Gift Cards</Link>
            <Link href={""}>Sell</Link>
        </div>
       </div>
     );
}
 
export default Header;