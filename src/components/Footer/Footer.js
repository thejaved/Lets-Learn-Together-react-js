import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'
const fullYear = new Date().getFullYear();
const Footer = () => {
    return (
        <div className='Footer'>
            <div className="footer_bottom_container">
                <div className="footer_logo">
                    <strong>Technical Clips</strong>
                </div>
                <div className="footer_social_media">
                    <ul>
                        <li>
                            <i className='bx bxl-facebook-circle' ></i>
                        </li>
                        <li>
                            <i className='bx bxl-youtube'></i>
                        </li>
                        <li>
                            <i className='bx bxl-instagram' ></i>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer_menu">
                <ul>
                    <li><NavLink to='/terms-and-conditions'>Terms and Conditions</NavLink></li>
                    <li><NavLink to='/privacy-policy'>Privacy Policy</NavLink></li>
                    <li><NavLink to='/disclaimer'>Disclaimer</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                    <li><NavLink to='/contact'>Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="copyright_footer_container">
                    <strong>Technical Clips © {fullYear} All Rights Reserved.</strong>
            </div>
        </div>
    )
}
export default Footer;
