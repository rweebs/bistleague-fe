import React from "react";
import styles from '../../../styles/home/WhatsBist.module.scss';

const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>What is BIST League?</h1>

            <p className={styles.bistDesc}>
                Business Information System and Technology (BIST) League 4.0 is a 
                Business-IT Case competition that is present as a means for participants 
                to hone and prove problem-solving skills for business and technology problems. 
                This competition opens up opportunities for students to prove their analytical 
                skills and formulate solutions to solve a given case.
            </p>

            <a href="https://bit.ly/BL4Guidebook" className={styles.guidebook} target="_blank">See our guidebook</a>
        </div>
    )
}

export default Home;