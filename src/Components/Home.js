import React from 'react';
import Navbar from './Navbar';
import BannerBackground from '../Assets/home-banner-background.png';
import BannerImage from '../Assets/home-banner-image.png';
import { FiArrowRight } from 'react-icons/fi';


const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt='' />
            </div>
            <div className='home-text-section'>
                <h1 className='primary-heading'>
                    Your Personalized Wellness Journey Starts Here
                </h1>
                <p className='primary-text'>
                    Health and well-being are the key to a happy and fulfilling life.
                </p>
                <button className='secondary-button'>
                    Bookings Now <FiArrowRight />
                </button>
            </div>
            <div className='home-image-container'>
                <img src={BannerImage} alt='' />
            </div>
        </div>
    </div>
  );
};

export default Home;
