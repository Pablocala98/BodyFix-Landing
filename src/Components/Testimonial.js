import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png'
import { AiFillStar } from 'react-icons/ai'

const Testimonial = () => {
    return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonials</p>
            <h1 className='primary-heading'>What they say</h1>
            <p className='primary-text'>
            Our users trust BodyFix to improve their well-being. Here’s what some of them have to say about their experience.
            </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt="" />
            <p>Booking a massage has never been this easy. Within minutes everything was scheduled and the therapist arrived right on time. It was a relaxing, safe, and highly professional experience. I highly recommend BodyFix!</p>
            <div className='testimonials-stars-container'>
                <AiFillStar />
                <AiFillStar />  
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
    );
};

export default Testimonial;