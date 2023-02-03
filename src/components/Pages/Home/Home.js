import React from 'react';
import Appointments from '../Appointments/Appointments';
import Banner from '../Banner/Banner';
import Events from '../Events/Events';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='section-gap'>
                <Services></Services>
            </div>
            <Events></Events>
            <Team></Team>
            <Appointments></Appointments>
            
           </div>
            
    );
};

export default Home;  
            
       