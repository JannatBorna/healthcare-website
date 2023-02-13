import React, { useEffect, useState } from 'react';
import {  Row, Col } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService';
import './HomeServices.css';


const HomeServices = () => {
     const [homeServices, setHomeServices] = useState([]);
     const [limit, setLimit] = useState(4);
         
     
     

     useEffect( () => {
         fetch('/services.json')
         .then(res => res.json())
         .then(data =>setHomeServices(data))
     },[])

    

    return (
        <div id="services">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className='text-center'>
                         <h2>Our Offered Services</h2>
                        <p>We may consider a Doctor, the most important person in society. He treats <br /> from one or many diseases. The doctor has a profound   knowledge of various illnesses.</p>
                    </div>
                </Col>
            </Row>
            
   
            <div className="service-container mt-5">
                {
                    homeServices.slice(0, limit ? limit : homeServices.length).map(homeService => <HomeService
                        key={homeService.id}
                         homeService={homeService}
                         setLimit={setLimit}
                    ></HomeService>)
                }
               </div>
           </div>
        );
     };
           
export default HomeServices;




 