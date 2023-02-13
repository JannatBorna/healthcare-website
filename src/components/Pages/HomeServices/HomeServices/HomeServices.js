import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService';



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
            <Container>
                <h2 className="text-end fw-3">Our <span className="text-color">Services</span></h2>
            </Container>
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




 