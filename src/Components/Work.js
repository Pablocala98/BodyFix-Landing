import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png'
import ChooseMeals from '../Assets/choose-image.png'
import Delivery from '../Assets/delivery-image.png'

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: 'Pick Meals',
            text: 'Lorem ipsum dolor sit amet consectetur. Quis ipsum suspendisse ultrices gravida.',
        },
        {
            image: ChooseMeals,
            title: 'Choose How Often',
            text: 'Lorem ipsum dolor sit amet consectetur. Quis ipsum suspendisse ultrices gravida.',
        },
        {
            image: Delivery,
            title: 'Fast Deliveries',
            text: 'Lorem ipsum dolor sit amet consectetur. Quis ipsum suspendisse ultrices gravida.',
        },
    ]
    return <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Work</p>
                <h1 className='primary-heading'>How it works</h1>
                <p className='primary-text'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore illum id maiores doloremque natus modi labore eos, ipsum cum qui pariatur, placeat incidunt molestias fugit excepturi accusantium nemo eligendi vitae.
                </p>
            </div>
            <div className='work-section-bottom'>
                {
                    workInfoData.map((data)=>(
                        <div className='work-section-info'>
                            <div className='info-boxes-image-container'>
                                <img src={data.image} alt="" />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))
                }
            </div>
    </div>
}

export default Work;