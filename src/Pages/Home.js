import React from 'react';
import './Home.css';
import SocialBar from '../Components/SocialBar';
import Hero from '../Components/Hero';
import Tabs from '../Components/Tabs';

const Home = () => {
    return (
        <>
            <Hero />
            <SocialBar />
            <Tabs />
        </>
    )
}

export default Home
