import React from "react";
import styles from '../../../styles/home/YearTheme.module.scss';

const YearTheme = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.yearTheme}>This Year’s Theme</h3>
            <h1 className={styles.themeTitle}>Using Technology to Improve <br/>Business Resiliency</h1>

            <p className={styles.themeDesc} style={{padding:'0 5%'}}>This time, BIST League 4.0 has the theme "Using Technology to Improve Business Resiliency". 
                With this theme, we hope that the participants will be able to experience issues that are relevant 
                to the current situation. In addition, this theme opens up a lot of space for creativity and 
                innovative technology collaboration.
            </p>
        </div>

    )
}

export default YearTheme;