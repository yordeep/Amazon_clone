import React from 'react';
import styles from './Products.module.css'
import Link from 'next/link';
import { style } from '@mui/system';
const Product = () => {
    return (  
       <div className={styles.prod}>
        <div className={styles.prodlist}>
            <div className={styles.prod5}>
                <h3>Gaming Accesories</h3>
               <div className={styles.innerimgs}>
                <div className={styles.innerimg1}>
                 <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg" alt=""/>headset
                </div>
                <div className={styles.innerimg2}>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg" alt=""/>keyboard
                </div>
                <div className={styles.innerimg3}>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg" alt=""/>mouse
                </div>
                <div className={styles.innerimg4}>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg" alt=""/>chairs
                </div>
                </div>
                <Link href={""}>see more</Link>
            </div>
            <div className={styles.prod4}>
                <h3>Toys Under $30</h3>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg" alt="" />
                <Link href={""}>see more</Link>
            </div>
        <div className={styles.prod1}>
            <h3>Home & Kitchen under $30</h3>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_379x304_1X_en_US._SY304_CB609304299_.jpg" alt="" />
        <Link href={""}>see more</Link>
        </div>
        <div className={styles.prod2}>
            <h3>Health & Personal care</h3>
         <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg" alt="" />
         <Link href={""}>see more</Link>
        </div>
        <div className={styles.prod3}>
            <h3>Cosmetics</h3>
         <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg" alt="" />
         <Link href={""}>see more</Link>   
        </div>
        <div className={styles.prod6}>
          <h3>Electronics</h3> 
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg" alt="" /> 
          <Link href={""}>see more</Link>
        </div>
        <div className={styles.prod7}>
        <div className={styles.dealsimgs}>
            <h3>Shop deals in Fashion</h3>
            <div className={styles.dealimg1}>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg" alt="" />Jeans under $50
            </div>
            <div className={styles.dealimg2}>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg" alt="" />Tops under $25
            </div>
            <div className={styles.dealimg3}>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg" alt="" />Dresses under $30
            </div>
            <div className={styles.dealimg4}>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg" alt="" />shoes under $50
            </div>
            <Link href={""}>see all deals</Link>
        </div>
        </div>
        <div className={styles.prod8}>
            <div className={styles.spaceimgs}>
            <h3>Refresh your space</h3>
                <div className={styles.spaceimg1}>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg" alt="" />Dining
                </div>
                <div className={styles.spaceimg2}>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg" alt="" />Home
                </div>
                <div className={styles.spaceimg3}>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" alt="" />Kitchen
                </div>
                <div className={styles.spaceimg4}>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg" alt="" />Health and Beauty
                </div>
            <Link href={""}>See more</Link>
            </div>
        </div>
        <div className={styles.prod9}>
        <div className={styles.exinfo}>
               <h3>Exciting deals</h3>
                <Link href={""}>See all deals</Link>
               </div>
            <div className={styles.excitingimgs}>
                <div className={styles.eximg1}>
                    <div style={{textAlign:'center'}}>
                    <img src="https://m.media-amazon.com/images/I/51hMmHsIPaL._AC_SY200_.jpg" alt="" />
                    </div>
                   <div>
                   <div style={{display:'flex',marginTop:'4%',textAlign:'center',fontSize:'small'}}><span style={{backgroundColor:'#cc0c39',color:'white',margin:'0% 2%',padding:'2%'}}>25% off</span> <span style={{color:'#cc0c39',padding:'2%'}}>Deal</span></div>
                    <div style={{padding:'2% 0%'}}> <span style={{fontSize:'small'}}><sup>$</sup></span><span style={{fontSize:'large'}}>59</span><span style={{fontSize:'large'}}>.</span><span style={{fontSize:'large',paddingRight:'2%'}}>97</span><span style={{fontSize:'small'}}>List Price: <span style={{fontSize:'small',textDecoration:'line-through'}}>$79.99</span></span> </div>
                   <div style={{fontSize:'small',paddingBottom:'5%'}}>
                   <span>MIKASA V200W,Volleyball</span>
                   </div>
                   </div>
                </div>
                <div className={styles.eximg2}>
                <div style={{textAlign:'center'}}>
                    <img src="https://m.media-amazon.com/images/I/61CJugOQ16L._AC_SY200_.jpg" alt="" />
                    </div>
                   <div>
                   <div style={{display:'flex',marginTop:'4%',textAlign:'center',fontSize:'small'}}><span style={{backgroundColor:'#cc0c39',color:'white',margin:'0% 2%',padding:'2%'}}>24% off</span> <span style={{color:'#cc0c39',padding:'2%'}}>Deal</span></div>
                    <div style={{padding:'2% 0%'}}> <span style={{fontSize:'small'}}><sup>$</sup></span><span style={{fontSize:'large'}}>22</span><span style={{fontSize:'large'}}>.</span><span style={{fontSize:'large',paddingRight:'2%'}}>93</span><span style={{fontSize:'small'}}>List Price: <span style={{fontSize:'small',textDecoration:'line-through'}}>$30.00</span></span> </div>
                   <div style={{fontSize:'small'}}>
                   <span>Out There Screaming: An...</span>
                   </div>
                   </div>
                </div>
                <div className={styles.eximg3}>
                <div style={{textAlign:'center'}}>
                    <img src="https://m.media-amazon.com/images/I/41WaLsyD8EL._AC_SY200_.jpg" alt="" />
                    </div>
                   <div>
                   <div style={{display:'flex',marginTop:'4%',textAlign:'center',fontSize:'small'}}><span style={{backgroundColor:'#cc0c39',color:'white',margin:'0% 2%',padding:'2%'}}>18% off</span> <span style={{color:'#cc0c39',padding:'2%'}}>Deal</span></div>
                    <div style={{padding:'2% 0%'}}> <span style={{fontSize:'small'}}><sup>$</sup></span><span style={{fontSize:'large'}}>359</span><span style={{fontSize:'large'}}>.</span><span style={{fontSize:'large',paddingRight:'2%'}}>99</span><span style={{fontSize:'small'}}>List Price: <span style={{fontSize:'small',textDecoration:'line-through'}}>$439.99</span></span> </div>
                   <div style={{fontSize:'small'}}>
                   <span>ZOTAC Gaming GeForce RTX <sup>TM</sup>...</span>
                   </div>
                   </div>
                </div>
                <div className={styles.eximg4}>
                <div style={{textAlign:'center'}}>
                    <img src="https://m.media-amazon.com/images/I/51Q14EyEDzL._AC_SY200_.jpg" alt="" />
                    </div>
                   <div>
                   <div style={{display:'flex',marginTop:'4%',textAlign:'center',fontSize:'small'}}><span style={{backgroundColor:'#cc0c39',color:'white',margin:'0% 2%',padding:'2%'}}>36% off</span> <span style={{color:'#cc0c39',padding:'2%'}}>Deal</span></div>
                    <div style={{padding:'2% 0%'}}> <span style={{fontSize:'small'}}><sup>$</sup></span><span style={{fontSize:'large'}}>19</span><span style={{fontSize:'large'}}>.</span><span style={{fontSize:'large',paddingRight:'2%'}}>19</span><span style={{fontSize:'small'}}>List Price: <span style={{fontSize:'small',textDecoration:'line-through'}}>$30.00</span></span> </div>
                   <div style={{fontSize:'small'}}>
                   <span>To Infinity and Beyond...</span>
                   </div>
                   </div>
                </div>
                <div className={styles.eximg5}>
                <div style={{textAlign:'center'}}>
                    <img src="https://m.media-amazon.com/images/I/51L3TJcK1vL._AC_SY200_.jpg" alt="" />
                    </div>
                   <div>
                   <div style={{display:'flex',marginTop:'4%',textAlign:'center',fontSize:'small'}}><span style={{backgroundColor:'#cc0c39',color:'white',margin:'0% 2%',padding:'2%'}}>33% off</span> <span style={{color:'#cc0c39',padding:'2%'}}>Deal</span></div>
                    <div style={{padding:'2% 0%'}}> <span style={{fontSize:'small'}}><sup>$</sup></span><span style={{fontSize:'large'}}>89</span><span style={{fontSize:'large'}}>.</span><span style={{fontSize:'large',paddingRight:'2%'}}>86</span><span style={{fontSize:'small'}}>List Price: <span style={{fontSize:'small',textDecoration:'line-through'}}>$134.99</span></span> </div>
                   <div style={{fontSize:'small'}}>
                   <span>Hasbro Gaming Avalon Hill...</span>
                   </div>
                   </div>
                </div>
                <div className={styles.eximg6}>
                <div style={{textAlign:'center'}}>
                    <img src="https://m.media-amazon.com/images/I/41i20yC1wcL._AC_SY200_.jpg" alt="" />
                    </div>
                   <div>
                   <div style={{display:'flex',marginTop:'4%',textAlign:'center',fontSize:'small'}}><span style={{backgroundColor:'#cc0c39',color:'white',margin:'0% 2%',padding:'2%'}}>38% off</span> <span style={{color:'#cc0c39',padding:'2%'}}>Deal</span></div>
                    <div style={{padding:'2% 0%'}}> <span style={{fontSize:'small'}}><sup>$</sup></span><span style={{fontSize:'large'}}>63</span><span style={{fontSize:'large'}}>.</span><span style={{fontSize:'large',paddingRight:'2%'}}>33</span><span style={{fontSize:'small'}}>List Price: <span style={{fontSize:'small',textDecoration:'line-through'}}>$101.99</span></span> </div>
                   <div style={{fontSize:'small'}}>
                   <span>BioGreen TER2/US Termo...</span>
                   </div>
                   </div>
                </div>
                <div className={styles.eximg7}>
                <div style={{textAlign:'center'}}>
                    <img src="https://m.media-amazon.com/images/I/51QmGW-CDJL._AC_SY200_.jpg" alt="" />
                    </div>
                   <div>
                   <div style={{display:'flex',marginTop:'4%',textAlign:'center',fontSize:'small'}}><span style={{backgroundColor:'#cc0c39',color:'white',margin:'0% 2%',padding:'2%'}}>24% off</span> <span style={{color:'#cc0c39',padding:'2%'}}>Deal</span></div>
                    <div style={{padding:'2% 0%'}}> <span style={{fontSize:'small'}}><sup>$</sup></span><span style={{fontSize:'large'}}>22</span><span style={{fontSize:'large'}}>.</span><span style={{fontSize:'large',paddingRight:'2%'}}>88</span><span style={{fontSize:'small'}}>List Price: <span style={{fontSize:'small',textDecoration:'line-through'}}>$30.00</span></span> </div>
                   <div style={{fontSize:'small'}}>
                   <span>Clear Thinking:Turing...</span>
                   </div>
                   </div>
                </div>
                <div className={styles.eximg8}>
                <div style={{textAlign:'center'}}>
                    <img src="https://m.media-amazon.com/images/I/61pfgu6uJmL._AC_SY200_.jpg" alt="" />
                    </div>
                   <div>
                   <div style={{display:'flex',marginTop:'4%',textAlign:'center',fontSize:'small'}}><span style={{backgroundColor:'#cc0c39',color:'white',margin:'0% 2%',padding:'2%'}}>16% off</span> <span style={{color:'#cc0c39',padding:'2%'}}>Deal</span></div>
                    <div style={{padding:'2% 0%'}}> <span style={{fontSize:'small'}}><sup>$</sup></span><span style={{fontSize:'large'}}>92</span><span style={{fontSize:'large'}}>.</span><span style={{fontSize:'large',paddingRight:'2%'}}>17</span><span style={{fontSize:'small'}}>List Price: <span style={{fontSize:'small',textDecoration:'line-through'}}>$109.99</span></span> </div>
                   <div style={{fontSize:'small'}}>
                   <span>Toddleroo by North States...</span>
                   </div>
                   </div>
                </div>
                <div className={styles.eximg9}>
                <div style={{textAlign:'center'}}>
                    <img src="https://m.media-amazon.com/images/I/41AzfYgFmgL._AC_SY200_.jpg" alt="" />
                    </div>
                   <div>
                   <div style={{display:'flex',marginTop:'4%',textAlign:'center',fontSize:'small'}}><span style={{backgroundColor:'#cc0c39',color:'white',margin:'0% 2%',padding:'2%'}}>5% off</span> <span style={{color:'#cc0c39',padding:'2%'}}>Deal</span></div>
                    <div style={{padding:'2% 0%'}}> <span style={{fontSize:'small'}}><sup>$</sup></span><span style={{fontSize:'large'}}>109</span><span style={{fontSize:'large'}}>.</span><span style={{fontSize:'large',paddingRight:'2%'}}>34</span><span style={{fontSize:'small'}}>List Price: <span style={{fontSize:'small',textDecoration:'line-through'}}>$115.59</span></span> </div>
                   <div style={{fontSize:'small'}}>
                   <span>Bulova C1517 Saybrook Wall Clock...</span>
                   </div>
                   </div>
                </div>
            </div>
        </div>
        </div>
       </div>
    );
}
 
export default Product;