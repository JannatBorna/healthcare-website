import React from 'react';
import About from '../About/About';
import Appointments from '../Appointments/Appointments';
import Banner from '../Banner/Banner';
import Events from '../Events/Events';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Services></Services>
            <br />
            <About></About>
            <Events></Events>
            <br />

            <Team></Team>
            <Appointments></Appointments>
            
        </div>
    );
};

export default Home;