import React, { useEffect, useState } from 'react';
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
            <h2 className="text-center fw-3">Health Care <span className="text-color">Services</span></h2>
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




 