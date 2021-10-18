import React from 'react';
import Register from '../../Register/Register';
import About from '../About/About';
import Appointments from '../Appointments/Appointments';
import Banner from '../Banner/Banner';
import Events from '../Events/Events';
import Login from '../Login/Login';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Events></Events>
            <Team></Team>
            <Appointments></Appointments>
            
           </div>
    );
};

export default Home;  
            
       