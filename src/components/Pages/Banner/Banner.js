import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slide2 from '../../../images/slide/s-2.png';
import './Banner.css';

const Banner = () => {
    return (
        <Container className="mt-2">

            <div className="container_banner my-3">
                <div className="container_header mt-5">
                    <h1><span className="color_text ">Health care</span><span className="health_care">  lack of health may negatively affect health.</span></h1>
                    <p className="p_tag">Your Health Is Your Priority. But I must explain to you how all this mistaken idea of denouncing.</p>

                    <Link to="/about" className="button_color"><Button>Read More</Button></Link>
                </div>

                <div className="picture">
                    <img className="w-100 " src={slide2} alt="" rounded/>
                </div>
                
            </div>
                     
</Container>
    );
};

export default Banner;



          


        