import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../Assets/Logo.png'
import {SiLinkedin} from 'react-icons/si'
import {BsYoutube} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
    const navigate = useNavigate();

    const handleTermsClick = () => {
        navigate('/terms');
    };

    const handlePrivacyClick = () => {
        navigate('/privacy');
    };

    return <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Logo} alt="" />
            </div>
            <div className='footer-icons'>
                <BsInstagram/>
                <SiLinkedin/>
                <BsYoutube/>
                <FaFacebookF/>
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>244-5333-7783</span>
                <span>hello@bodyfix.com</span>
                <span>press@bodyfix.com</span>
                <span>contact@bodyfix.com</span>
            </div>
            <div className='footer-section-columns'>
                <span onClick={handleTermsClick} style={{cursor: 'pointer'}}>Terms & Conditions</span>
                <span onClick={handlePrivacyClick} style={{cursor: 'pointer'}}>Privacy Policy</span>
            </div>
        </div>
    </div>

    
}

export default Footer;