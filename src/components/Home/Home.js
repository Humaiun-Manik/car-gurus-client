import React from 'react';
import HomeOtherSection from '../HomeOtherSection/HomeOtherSection';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Banner from './../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HomeOtherSection></HomeOtherSection>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;