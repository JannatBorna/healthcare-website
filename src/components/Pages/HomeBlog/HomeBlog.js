import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import homeBlog1 from '../../../images/home-blog/home-blog-1.jpg';
import homeBlog2 from '../../../images/home-blog/home-blog-2.jpg';
import homeBlog3 from '../../../images/home-blog/home-blog-3.jpg';
import './HomeBlog.css';

const HomeBlog = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className='text-center'>
                            <h2 className='mt-3'>Our Recent Blogs</h2>
                            <p className='mt-3'>It also boasts of having some of the best plastic surgeons in the world. To ensure you'll receive <br />the safest care when getting plastic as well as their medical professionals. </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4} md={4} sm={12}>
                        <div className='mt-5'>
                            <div className='home-blog'>
                                <img src={homeBlog1} alt="" />
                            </div>
                            <div>
                                <h4 className='mt-3 text-info'>Portable Fashion for women</h4>
                                <p className='mt-3'>The Doctor of Medicine (M.D.) degree is a five year graduate program intended to teach students the essentials of being a Medical Doctor.</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={4} sm={12}>
                        <div className='mt-5'>
                            <div className='home-blog'>
                                <img src={homeBlog2} alt="" />
                            </div>
                            <div>
                                <h4 className='mt-3 text-info'>Portable Fashion for women</h4>
                                <p className='mt-3'>The Doctor of Medicine (M.D.) degree is a five year graduate 
                                program intended to teach students the essentials of being a 
                                Medical Doctor.</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={4} sm={12}>
                        <div className='mt-5'>
                            <div className='home-blog'>
                                <img src={homeBlog3} alt="" />
                            </div>
                            <div>
                                <h4 className='mt-3 text-info'>Portable Fashion for women</h4>
                                <p>The Doctor of Medicine (M.D.) degree is a five year graduate 
                                program intended to teach students the essentials of being a 
                                Medical Doctor.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeBlog;