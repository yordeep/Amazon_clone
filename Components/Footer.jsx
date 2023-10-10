import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import LanguageIcon from '@mui/icons-material/Language';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <div className={styles.upperfooter}>
                <div className={styles.inneruf}>
                    <div className={styles.knowus}>
                        <h3>Get to Know Us</h3>
                        <ul>
                            <li><Link href={""}>Careers</Link></li>
                            <li><Link href={""}>Blog</Link></li>
                            <li><Link href={""}>About Amazon</Link></li>
                            <li><Link href={""}>Investor Relations</Link></li>
                            <li><Link href={""}>Amazon Devices</Link></li>
                            <li><Link href={""}>Amazon Science</Link></li>
                        </ul>
                    </div>
                    <div className={styles.withus}>
                        <h3>Make Money with Us</h3>
                        <ul>
                            <li><Link href={""}>Sell Products on Amazon</Link></li>
                            <li><Link href={""}>Sell on Amazon Business</Link></li>
                            <li><Link href={""}>Sell apps on Amazon</Link></li>
                            <li><Link href={""}>Become an Affiliate</Link></li>
                            <li><Link href={""}>Advertise Your Produts</Link></li>
                            <li><Link href={""}>Sell-Publish with Us</Link></li>
                            <li><Link href={""}>Host an Amazon Hub</Link></li>
                            <li><Link href={""}>see More Make Money with Us</Link></li>
                        </ul>
                    </div>
                    <div className={styles.products}>
                        <h3>Amazon Payment Products</h3>
                        <ul>
                            <li><Link href={""}>Amazon Business Card</Link></li>
                            <li><Link href={""}>Shop with Points</Link></li>
                            <li><Link href={""}>Reload Your Balance</Link></li>
                            <li><Link href={""}>Amazon Currency Converter</Link></li>
                        </ul>
                    </div>
                    <div className={styles.helpyou}>
                        <h3>Let Us Help You</h3>
                        <ul>
                            <li><Link href={""}>Amazon and COVID-19</Link></li>
                            <li><Link href={""}>Your Account</Link></li>
                            <li><Link href={""}>Your Orders</Link></li>
                            <li><Link href={""}>Shipping Rates & Replacements</Link></li>
                            <li><Link href={""}>Manage Your Content and Devices</Link></li>
                            <li><Link href={""}>Amazon Assistant</Link></li>
                            <li><Link href={""}>Help</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.middlefooter}>
                    <span>
                        <div className={styles.logo}>
                            <img style={{width:'40%',paddingTop:'5%',cursor:'pointer'}} src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="" />
                        </div>
                    </span>
                    <button style={{backgroundColor:"#232F3E",color:'lightgray',border:'1px solid gray',borderRadius:'3px',fontSize:'small',marginRight:'20px',cursor:'pointer',height:'2.5em'}}><span><LanguageIcon style={{fontSize:"medium",padding:'0px 6px'}}/></span>English</button>
                    <button style={{backgroundColor:'#232F3E',color:'lightgray',border:'1px solid gray',borderRadius:'3px',fontSize:'small',marginRight:'20px',cursor:'pointer',height:'2.5em'}}><span><AttachMoneyIcon style={{fontSize:'medium',paddingRight:'0px 6px'}}/></span>USD-U.S.Doller</button>
                    <button style={{backgroundColor:'#232F3E',color:'lightgray',border:'1px solid gray',borderRadius:'3px',fontSize:'small',cursor:'pointer',height:'2.5em'}}>
                        <span>
                          <img style={{width:'25px',padding:'1px 6px'}} src="https://pngimg.com/uploads/flags/flags_PNG14592.png" alt="" />
                        </span>United States
                     </button>
                </div>
                <div className={styles.bf}>
                    <div className={styles.innerbf}>
                        <table >
                         {/* row no .1 */}
                            <tr>
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>Amazon Music</span> <br /> <span>Stream millions of music</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>Amazon Advertising</span> <br /> <span>Find,attract,and engage customers</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>6am</span> <br /> <span>Score deals on fashion brands</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>AbeBooks</span> <br /> <span>Books,art & collectibles</span></Link>
                               </td>
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>ACX</span> <br /> <span>Audiobook Publishing</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:"#fff"}}>Sell on Amazon</span> <br /> <span>Start a Selling Account</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>Amazon Business</span> <br /> <span>Everthing For Your Business</span></Link>
                               </td>
                            </tr>

                            {/* row no.2 */}

                            <tr>
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>Amp</span> <br /> <span>Host your own live radio show with music you love</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>AmazonGlobal</span> <br /> <span>Ship Orders Internationally</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>Home Services</span> <br /> <span>Experienced Pros Happiness Guarantee</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>Amazon Web Services</span> <br /> <span>Scalable Cloud Computing Services</span></Link>
                               </td>
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>Audible</span> <br /> <span>Listen to Books & Original Audio Performances</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:"#fff"}}>Box Office Mojo</span> <br /> <span>Find Movie Box Office Data</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>Goodreads</span> <br /> <span>Book reviews & recommendations</span></Link>
                               </td>
                            </tr>

                            {/* row no.3 */}

                            <tr>
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>IMDb</span> <br /> <span>Movies,TV & Celebrities</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>IMDbPro</span> <br /> <span>Get Info Entertainment Professionals Need</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>Kindle Direct Publishing</span> <br /> <span>Indie Digital & Print Publishing Made Easy</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>Prime Video Direct</span> <br /> <span>Video Distribution Made Easy</span></Link>
                               </td>
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>Shopbop</span> <br /> <span>Designer Fashion Brands</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:"#fff"}}>Woot!</span> <br /> <span>Deals and Shenanigans</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>Zappos</span> <br /> <span>Shoes & Clothing</span></Link>
                               </td>
                            </tr>

                            {/* row no.4 */}
                            
                            <tr>
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>Ring</span> <br /> <span>Smart Home Security Systems</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>eero WIFI</span> <br /> <span>Steam 4K Video in Every Room</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>Blink</span> <br /> <span>Smart Security for Every Home</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>Neighbors App</span> <br /> <span>Real-Time Crime & Safty Alerts</span></Link>
                               </td>
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:'#fff'}}>Amazon Subscription Boxes</span> <br /> <span>Top subscription boxes-right to your door</span></Link>
                               </td>
                               
                               <td>
                                <Link href={""}> <span style={{fontSize:'small',color:"#fff"}}>PillPack</span> <br /> <span>Pharmacy Simplified</span></Link>
                               </td>
                               <td>

                               </td>
                            </tr>
                        </table>
                    </div>
                    <div className={styles.innerbf2}>
                        <ul>
                            <li> <Link href={""}>Conditions of Use</Link> </li>
                            <li> <Link href={""}>Privacy Notice</Link> </li>
                            <li> <Link href={""}>Your Ads Privacy Choices</Link> </li>
                        </ul>
                        <span>copyright 1996-2023,Amazon.com,Inc.or its Affilites</span>
                    </div>
                </div>
        </div>
     );
}
 
export default Footer;