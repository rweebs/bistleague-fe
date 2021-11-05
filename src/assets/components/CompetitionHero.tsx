import React from "react";
import styles from '../../styles/CompetitionHero.module.scss';
import Countdown from "./Countdown";

const HomeHero = () => {
    return (
        <div className={styles.container+" flex flex-col md:flex-row justify-center w-full"}>
            <div className={styles.comp+" md:pl-32 flex-none md:flex-auto self-center  text-center md:text-left"}>
            <div>
            <span className={styles.biggestEvent+" "}>Business IT Case <br/>Competition</span><br/>
                <span className={styles.bePart}>Take the challenge<br/>
                and surpass the limits</span>               
            </div>
            <a href="/register">
                <button className={styles.registerButton}>
                    <b>Register Your Team</b>
                </button>            
            </a>
            </div>
            <div className="flex-NONE md:pr-32 self-center md:justify-end">
                <Countdown deadline="August 7 2021 23:59:59"/>
            </div>
        </div>
    )
}

export default HomeHero;