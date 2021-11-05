
import React from 'react'
import Navbar from 'assets/components/Navbar';
import Register from 'assets/components/Register';
import FooterTail from 'assets/components/Footer';
import Head from 'next/head'
const Footer = () =>{

    return(
        <div>
            <Head>
                <title>Register</title>
                
            </Head>
            <Navbar/>
            <Register/>
            <FooterTail/>
        </div>
    )
}


export default Footer;