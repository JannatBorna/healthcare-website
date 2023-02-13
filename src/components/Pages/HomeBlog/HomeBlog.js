import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const HomeBlog = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className='text-center'>
                            <h2>Our Recent Blogs</h2>
                            <p>It also boasts of having some of the best plastic surgeons in the world. To ensure you'll receive <br />the safest care when getting plastic as well as their medical professionals. </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4} md={4} sm={12}>
                        <div>
                            <div>
                                {/* <img src={} alt="" /> */}
                            </div>
                            <div>
                                <h6>Portable Fashion for women</h6>
                                <p></p>
                            </div>

                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}></Col>
                    <Col lg={4} md={4} sm={12}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeBlog;