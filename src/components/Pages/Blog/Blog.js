import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import blog1 from '../../../images/blog/blog-1.jpg';
import blog2 from '../../../images/blog/blog-2.jpg';
import blog3 from '../../../images/blog/blog-3.jpg';
import blog4 from '../../../images/blog/blog-4.jpg';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className='blog-headline'>
                <h2>Blog</h2>
                <p>We Care for Your Health Every Moment</p>
            </div>

            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className='blog mt-5'>
                            <img src={blog1} alt=""/>
                            <div className='blog-text'>
                                <h2>5 Reasons why you should choose a plastic surgeon</h2>
                                <p>
                                    <span className='blog-by'>BY</span> <span>Dr. James Smith</span> <span className='mx-5'>in Surgery</span> 
                                    <span>2 Comments</span>
                                </p>
                                <p>A doctor is responsible for all sides of care of a patient. They diagnose, educate, and treat patients to <br />ensure that they have the best possible care. A few of the main duties of a doctor are performing <br />diagnostic tests,  recommending specialists for patients, document patient's medical<br /> history, and educating patients.</p>
                                <button className='button'>READ MORE</button>
                            </div>
                        </div>
                    </Col>
                    
                    <Col lg={12} md={12} sm={12}>
                        <div className='blog section-gap'>
                            <img src={blog2} alt=""/>
                            <div className='blog-text'>
                                <h2>5 Reasons why you should choose a plastic surgeon</h2>
                                <p>
                                    <span className='blog-by'>BY</span> <span>Dr. James Smith</span> <span className='mx-5'>in Surgery</span>
                                    <span>2 Comments</span>
                                </p>
                                <p>A doctor is responsible for all sides of care of a patient. They diagnose, educate, and treat patients to <br />ensure that they have the best possible care. A few of the main duties of a doctor are performing <br />diagnostic tests,  recommending specialists for patients, document patient's medical<br /> history, and educating patients.</p>
                                <button className='button'>READ MORE</button>
                            </div>
                        </div>
                    </Col>

                    <Col lg={12} md={12} sm={12}>
                        <div className='blog section-gap'>
                            <img src={blog3} alt=""/>
                            <div className='blog-text'>
                                <h2>5 Reasons why you should choose a plastic surgeon</h2>
                                <p>
                                    <span className='blog-by'>BY</span> <span>Dr. James Smith</span> <span className='mx-5'>in Surgery</span>
                                    <span>2 Comments</span>
                                </p>
                                <p>A doctor is responsible for all sides of care of a patient. They diagnose, educate, and 
                                    treat patients to <br />ensure that they have the best possible care. A few of the main 
                                    duties of a doctor are performing <br />diagnostic tests,  recommending specialists for 
                                    patients, document patient's medical<br /> history, and educating patients.</p>
                                <button className='button'>READ MORE</button>
                            </div>
                        </div>
                    </Col>

                    <Col lg={12} md={12} sm={12}>
                        <div className='blog section-gap'>
                            <img src={blog4} alt=""/>
                            <div className='blog-text'>
                                <h2>5 Reasons why you should choose a plastic surgeon</h2>
                                <p>
                                    <span className='blog-by'>BY</span> <span>Dr. James Smith</span> <span className='mx-5'>in Surgery</span>
                                     <span>2 Comments</span>
                                </p>
                                <p>A doctor is responsible for all sides of care of a patient. They diagnose, educate, and 
                                    treat patients to <br />ensure that they have the best possible care. A few of the main 
                                    duties of a doctor are performing <br />diagnostic tests,  recommending specialists for 
                                    patients, document patient's medical<br /> history, and educating patients.</p>
                                <button className='button mb-5'>READ MORE</button>
                            </div>
                        </div>
                    </Col>                   
                </Row>
            </Container>
        </div>
    );
};

export default Blog;