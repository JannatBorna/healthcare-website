import React from 'react';
import { Link } from 'react-router-dom';
import slide2 from '../../../images/slide/s-2.png';
import './Banner.css';

const Banner = () => {
    return (
    

            <div className="container-banner">
                <div className="container_header mt-5">
                    <h1>Healthy Health <span className="banner-bold">Care Tips</span></h1>
                    <p className="p-tag">Drink Water and Stay Hydrated, and Limit Sugared Beverages.Exercise Regularly and Be Physically Active.Get Enough Good Sleep..Your Health Is Your Priority. But I must explain to you how all this mistaken idea of denouncing.</p>
                    <p className='p-tag'>Health is the condition of the human body which is free from any injury or illness. But staying healthy is defined as staying mentally, physically and socially fit. Maintaining good health will ultimately lead to a happy mind which is more valuable than any precious gift in today's life.</p>
                    <Link to="/about"><button className="button">Read More</button></Link>
                    
                </div>

                <div className="banner-picture">
                    <img src={slide2} alt="" rounded/>
                </div>
                
            </div>
                     

    );
};

export default Banner;



          


        