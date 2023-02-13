import React from 'react';
import Banner from '../Banner/Banner';
import Events from '../Events/Events';
import Team from '../Team/Team';
import HomeServices from '../HomeServices/HomeServices/HomeServices';
import BannerTwo from '../BannerTwo/BannerTwo';
import Clint from '../Clint/Clint';
import HomeBlog from '../HomeBlog/HomeBlog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='section-gap'>
                <HomeServices></HomeServices>
            </div>
            <Events></Events>
            <BannerTwo></BannerTwo>
            <Team></Team>
            <Clint></Clint>
            <HomeBlog></HomeBlog>
            
           </div>
            
    );
};

export default Home;  
            
       