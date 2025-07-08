import React from 'react'
import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
    return <div className='about-section-container'>
                <div className='about-background-image-container'>
                    <img src={AboutBackground} alt="" />
                </div>
                <div className='about-section-image-container'>
                    <img src={AboutBackgroundImage} alt="" />
                </div>
                <div className='about-section-text-container'>
                    <p className='primary-subheading'>About</p>
                    <h1 className='primary-heading'>
                        Get to know us
                    </h1>
                    <p className='primary-text'>
                    We are a team of wellness professionals passionate about helping you achieve your health goals through therapeutic and relaxing massages.
                    </p>
                    <p className='primary-text'>
                        Professional and experienced trainers to help you in your therapeutic journey.
                    </p>
                    <div className='about-buttons-container'>
                        <button className='secondary-button'>Download App</button>
                        <button className='watch-video-button'><BsFillPlayCircleFill/>Watch video</button>
                    </div>
                </div>
            </div>;
  };
  
  export default About;