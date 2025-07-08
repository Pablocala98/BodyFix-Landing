import React from 'react'
import PickMassage from '../Assets/pick-massage-image.png'
import ChooseMassage from '../Assets/choose-image.png'
import Delivery from '../Assets/delivery-image.png'

const Work = () => {
    const workInfoData = [
        {
            image: PickMassage,
            title: 'Choose your massage',
            text: 'Select the type of massage that best fits your needs: relaxing, deep tissue, sports, or therapeutic.',
        },
        {
            image: ChooseMassage,
            title: 'Choose the frequency',
            text: 'You can book a one-time session or schedule recurring massages based on your lifestyle and wellness goals.',
        },
        {
            image: Delivery,
            title: 'Receive your therapist',
            text: 'A certified professional will arrive at your home at the scheduled time. Enjoy a relaxing experience without leaving your house.',
        },
    ]
    return <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Work</p>
                <h1 className='primary-heading'>How it works</h1>
                <p className='primary-text'>
                With BodyFix you can book professional massages from the comfort of your home. Choose the type of massage, how often you want it, and receive your therapist wherever you are — quickly and easily!
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