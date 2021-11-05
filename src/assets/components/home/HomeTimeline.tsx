import React from "react";
import styles from '../../../styles/home/HomeTimeline.module.scss';
import Timeline from '../Timeline';

const HomeHero = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.timelineTitle}>
                Event Timeline            
            </h1>
            <Timeline invertColors = {false}/>
        </div>
    )
}

export default HomeHero;