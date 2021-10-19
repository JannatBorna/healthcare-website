import React from 'react';
//import './Details.css'
import { useParams } from 'react-router';


const Details = () => {
    const { serviceId } = useParams();
  


    return (
        <div className="details">

            <h2>This is Booking: {serviceId}</h2>
            <h3>details</h3>
            
        </div>



    );
};






export default Details;