import React from 'react';
import Banner from '../Banner/Banner';
import Events from '../Events/Events';
import Team from '../Team/Team';
import HomeServices from '../HomeServices/HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='section-gap'>
                <HomeServices></HomeServices>
            </div>
            <Events></Events>
            <Team></Team>
            
            
           </div>
            
    );
};

export default Home;  
            
       