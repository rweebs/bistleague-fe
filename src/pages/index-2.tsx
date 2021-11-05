import React from "react";
import Navbar from "../assets/components/Navbar";
import Head from 'next/head'
import HomeHero from "../assets/components/home/HomeHero";
import YearTheme from "../assets/components/home/YearTheme";
import TotalPrize from "../assets/components/home/TotalPrize";
import HomeTimeline from "../assets/components/home/HomeTimeline";
import WhatsBist from "../assets/components/home/WhatsBist";

import FooterTail from "../assets/components/Footer";

const Home = () => {
    return (
        <div>
            <Head>
        <title>Home</title>
        
    </Head>
            <Navbar/>
            <HomeHero/>    
            <YearTheme/>  
            <TotalPrize/>
            <HomeTimeline/>
            <WhatsBist/>  
            <FooterTail/>    
        </div>
    )
}

export default Home;