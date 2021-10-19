import React, { useEffect, useState } from 'react';
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




 