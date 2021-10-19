import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
    const { user } = useAuth()
     const [services, setServices] = useState([]);
    const [details, setDetails] = useState([])
         
     
     

     useEffect( () => {
         fetch('/services.json')
         .then(res => res.json())
         .then(data =>setServices(data))
     },[])

    // const handleAddToCart = (services) => {

    //     const newDetails = [...details, services];
    //     setDetails(newDetails);
    // }

    return (
        <div id="services">
            <h2 className="text-center fw-3"> <span className="text-color">O</span>ur Healthcare Services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
               </div>
           </div>
        );
     };
           

            

    export default Services;




 {/*  <div className="my-5">
 <Container>
                <h2 className="text-center fw-3"> <span className="text-color">O</span>ur Healthcare Services</h2>
                <Row lg={3} md={2} xs={1} className="g-4">
                    {
                        services.map(service =>
                            
                            <Col 
                           
                            key={service.id}
                            handleAdd={handleAddToCart}
                        >

                            <Card className="shadow service my-3">
                                <Card.Img className="w-75 mx-auto my-2 rounded-circle" variant="top" src={service.img} />
                                <Card.Body>
                                    <Card.Title className="fw-normal fs-5">{service.name}</Card.Title>
                                    <Card.Text className="fw-lighter fw-5">
                                        {service.description}
                                    </Card.Text>
                                    
                                </Card.Body>

                                    {
                                        !user?.email ? <Link to="/login">
                                        <Button  className="my-2 details-btn align-self-center" type="submit" >See More <i class="fas fa-arrow-right"></i></Button>
                                        </Link>
                                       
                                            
                                         :
                                            <Link to={`/details/${img}`}>
                                             <Button onClick={handleAddToCart} className="my-2 details-btn align-self-center" type="submit" >See More <i class="fas fa-arrow-right"></i></Button>
                                             </Link>
                                        }
                                      
                                   


                                    
                              </Card>
                            </Col>)
                    }
                </Row>
            </Container> */}





    
                            
        
        
   

                       

                   
                                
                            

                        