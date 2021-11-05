import React from "react";
import styles from '../../styles/TimelineCompe.module.scss';
import Image from "next/image";
import Timeline from './Timeline';

const TimelineCompe = () => {
    return (
        <div className={styles.container +" pb-48 md:pb-64"}>
            <h1 className={styles.timelineTitle}>
                Event Timeline            
            </h1>
            <div className="self-center pb-10"><Timeline invertColors={true}/></div>
            
        </div>
    )
}

export default TimelineCompe;