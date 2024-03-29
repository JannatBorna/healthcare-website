import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';


const Services = () => {
     const [services, setServices] = useState([]);
         
     
     

     useEffect( () => {
         fetch('/services.json')
         .then(res => res.json())
         .then(data =>setServices(data))
     },[])

    

    return (
        <div id="services">
            <h2 className="text-center fw-3">Health Care <span className="text-color">Services</span></h2>
            <div className="service-container my-5">
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




 