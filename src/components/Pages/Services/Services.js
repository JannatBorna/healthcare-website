import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Services.css';

const Services = () => {
     const [services, setServices] = useState([]);

     useEffect( () => {
         fetch('/services.json')
         .then(res => res.json())
         .then(data =>setServices(data))
     },[])
    return (
        <div>
            <Container className="my-5 ">
                <h2 className="text-center fw-3"> <span className="text-color">O</span>ur Healthcare Services</h2>
                <Row lg={3} md={2} xs={1} className="g-4">
                    {
                        services.map(service => <Col
                            key={service.id}
                        >

                            <Card className="shadow service my-3">
                                <Card.Img className="w-75 mx-auto my-2 rounded-circle" variant="top" src={service.img} />
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>
                                        {service.description}
                                    </Card.Text>
                                    
                                </Card.Body>
                                {/* <Button className="my-2 details-btn align-self-center" type="submit" >See More<i class="fas fa-arrow-right"></i></Button> */}
                                <a href="#">See more <button className="more-btn my-3"><i className="fas fa-arrow-right"></i></button></a>
                              </Card>

                            
                                
                            

                        </Col>)


                       

                    }
                </Row>
            </Container>
        </div>

        
        
    );
};

export default Services;