import React from "react";
import Navbar from "../../assets/components/Navbar";
import CompetitionHero from "../../assets/components/CompetitionHero";
import Win from "../../assets/components/Win"
import Footer from "assets/components/Footer"
import Fee from "assets/components/Fee"
import Head from 'next/head'
import TimelineCompe from "assets/components/TimelineCompe";
import RegisterCompe from 'assets/components/RegisterCompe'

const Competition = () => {
    return (
        <div className=" ">
<Head>
        <title>Competition</title>
        
    </Head>
            <Navbar/>
            <CompetitionHero/>
            <Win/>
            <Fee/>
            <RegisterCompe/>
            <TimelineCompe/>
            <Footer/>

                    
        </div>
    )
}

export default Competition;