import React from 'react'
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import phoneLogo from '../../assets/images/original/Contoso_Assets/Icons/telephone_icon.svg'
import emailLogo from '../../assets/images/original/Contoso_Assets/Icons/email_icon.svg'
import { ReactComponent as Logo } from '../../assets/images/logo-horizontal.svg';


const Footer = () => {
  return (
    <div className='footer-container'>
    <Grid container className='footer-grid-container'>
        <Grid item xs={4} className='section-1'>
            <Link to="/">
                <Logo />
            </Link>
            <p  className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Grid>
        <Grid item xs={2} className='section-2'>
            <ul>
                <li className='main-element'>Catalog</li>
                {/* <li className='list-element'>My Account</li> */}
                <li className='list-element'><Link to='/list/all-products'>All Products</Link></li>
                <li className='list-element'><Link to='/list/controllers'>Controllers</Link></li>
                <li className='list-element'><Link to='/list/laptops'>Laptops</Link></li>
                <li className='list-element'><Link to='/list/monitors'>Monitors</Link></li>
            </ul>
        </Grid>
        <Grid item xs={2} className='section-3'>
            <ul>
                <li className='main-element'>Legals</li>
                <li className='list-element'><Link to='/terms-of-service'>Terms of Service</Link></li>
                <li className='list-element'><Link to='/refund-policy'>Refund Policy</Link></li>
                <li className='list-element'><Link to='/about-us'>About Us</Link></li>
            </ul>
        </Grid>
        <Grid item xs={4} className='section-4'>
            <ul>
                <li className='main-element'>Contact us</li>
                <li className='list-element'>Feel free to get in touch with us via phone or send us a message</li>
                <li>
                    <div className='contact-div' >
                        <div className='logo-div' >
                            <img src={phoneLogo} alt='phone-logo'/>
                        </div>
                        <div className='list-element'>
                            {' '}+123456768910
                        </div>
                    </div>           
                </li>
                <li>
                    <div className='contact-div' >
                        <div className='logo-div' >
                            <img src={emailLogo} alt='email-logo'/>
                        </div>
                        <div className='list-element'>
                            {' '}support@tailwindtraders.com
                        </div>
                    </div> 
                </li>
            </ul>
        </Grid>
    </Grid>
    </div>
  )
}

export default Footer