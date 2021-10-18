import React from 'react';
import Banner from '../Banner/Banner';
import Events from '../Events/Events';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Events></Events>
            <br />
            <Team></Team>
            
        </div>
    );
};

export default Home;