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
            <br />
            <About></About>
            <Events></Events>
            <br />

            <Team></Team>
            <Appointments></Appointments>
            <Register></Register>
            <Login></Login>
            
        </div>
    );
};

export default Home;