import React from 'react'
import './Hero.css'
import arrow_icon from '../Components/Assets/arrow.png'
import hero_image from '../Components/Assets/hero_image.png'
const Hero = () => {
    return (
        <div className='hero' >
            <div className="hero-left">
                <div>
                    <p>New collections for everyone </p>
                   
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt='' />

                </div>

            </div>
            <div className="hero-right"></div>
            <img src={hero_image} alt='' />

        </div>
    )
}
export default Hero