
import React from 'react'
import Countdowns from '../assets/components/Footer'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Footer.module.scss'
import Countdown from 'assets/components/Countdown'
import Navbar from 'assets/components/Navbar';
const Footer = () =>{

    return(
        <div>
            <Head>
                <title>Coming Soon...</title>
                
            </Head>
            <Navbar/>
            <div className={styles.heights+ " flex"}>
            <div className={"flex-auto self-center flex-col"}>
          
            <p className={styles.MonstserratPurple+" mt- text-center text-4xl"}>Registration Coming Soon ...</p>
            </div>
            
            
            
            </div>
            <Countdowns />
            
        </div>
    )
}


export default Footer;