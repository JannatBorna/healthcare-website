import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import slide1 from '../../../images/slide/s-1.png';
import slide2 from '../../../images/slide/s-2.png';
import slide3 from '../../../images/slide/s-3.png';
import './Banner.css';

const Banner = () => {
    return (
        <Container>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Your Health Is Your Priority</h5>
                        <p>But I must explain to you how all this mistaken idea of denouncing.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={slide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>The Best For Your Health</h5>
                        <p>denouncing pleasure and praising pain was born.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={slide3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Health care worker perspectives</h5>
                        <p>Lack of health insurance coverage may negatively affect health.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;