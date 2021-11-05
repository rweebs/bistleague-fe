// TIMPA TIMELINE UTAMA KETIKA EXTENDED REGIST


import React from 'react';
import styles from '../../styles/Timeline.module.scss';

const Timeline = ({invertColors}) => {
    return (
        <div className={styles.body}>
            <div className="timelineMaster">
                <div className = {styles.timelineDiv}>
                    <p className={styles.timelineText} id={styles.timelineTextUp}>5 - 31<br/>July&nbsp;2021</p>
                    <div className={!invertColors ? styles.timelineCircle : styles.circleInverted} />
                    <p className={styles.timelineText} id={styles.timelineTextDown}>Registration<br/>Phase</p>
                </div>
                <div className = {styles.timelineDiv}>
                    <p className={styles.timelineText} id={styles.timelineTextUp}>31 July -<br/> 8 Aug&nbsp;2021</p>
                    <div className={!invertColors ? styles.timelineCircle : styles.circleInverted} />
                    <p className={styles.timelineText} id={styles.timelineTextDown}>Extended<br/>Registration</p>
                </div>
                <div className = {styles.timelineDiv}>
                    <p className={styles.timelineText} id={styles.timelineTextUp}>1 - 8<br/>August&nbsp;2021</p>
                    <div className={!invertColors ? styles.timelineCircle : styles.circleInverted}/>
                    <p className={styles.timelineText} id={styles.timelineTextDown}>Preliminary<br/>Round</p>
                </div>
                <div className = {styles.timelineDiv}>
                    <p className={styles.timelineText} id={styles.timelineTextUp}>8<br/>August&nbsp;2021</p>
                    <div className={!invertColors ? styles.timelineCircle : styles.circleInverted} />
                    <p className={styles.timelineText} id={styles.timelineTextDown}>Preliminary&nbsp;Round<br/>Submission</p>
                </div>
                <div className = {styles.timelineDiv}>
                    <p className={styles.timelineText} id={styles.timelineTextUp}>22<br/>August&nbsp;2021</p>
                    <div className={!invertColors ? styles.timelineCircle : styles.circleInverted}/>
                    <p className={styles.timelineText} id={styles.timelineTextDown}>Semifinalist<br/>Announcement</p>
                </div>
                <div className = {styles.timelineDiv}>
                    <p className={styles.timelineText} id={styles.timelineTextUp}>22 - 29<br/>August&nbsp;2021</p>
                    <div className={!invertColors ? styles.timelineCircle : styles.circleInverted}/>
                    <p className={styles.timelineText} id={styles.timelineTextDown}>Payment<br/>Period</p>
                </div>
                <div className = {styles.timelineDiv}>
                    <p className={styles.timelineText} id={styles.timelineTextUp}>1 - 19<br/>September&nbsp;2021</p>
                    <div className={!invertColors ? styles.timelineCircle : styles.circleInverted}/>
                    <p className={styles.timelineText} id={styles.timelineTextDown}>Semifinal<br/>Round</p>
                </div>
                <div className = {styles.timelineDiv}>
                    <p className={styles.timelineText} id={styles.timelineTextUp}>3<br/>October&nbsp;2021</p>
                    <div className={!invertColors ? styles.timelineCircle : styles.circleInverted}/>
                    <p className={styles.timelineText} id={styles.timelineTextDown}>Finalist<br/>Announcement</p>
                </div>
                <div className = {styles.timelineDiv}>
                    <p className={styles.timelineText} id={styles.timelineTextUp}>22 - 24<br/>October&nbsp;2021</p>
                    <div className={!invertColors ? styles.timelineCircle : styles.circleInverted}/>
                    <p className={styles.timelineText} id={styles.timelineTextDown}>Final<br/>Round</p>
                </div>
                <style jsx>{`
                    .timelineMaster {
                        display: flex;
                        justify-content: flex-start; 
                        margin: 0 12%;
                        flex-direction: row;    
                        position: relative;
                        transition-duration: 0.3s;
                        animation:opac 0.8s;
                        overflow-x: auto;
                        overflow-y: hidden;
                        height: 230px;
                        flex-wrap: nowrap;
                        width:100%;
                    }

                    .timelineMaster::-webkit-scrollbar-track{
                        background: ${invertColors ? "#8356A0" : "#FFF"}; 
                    }
                        
                    .timelineMaster::-webkit-scrollbar-thumb{
                        background: ${invertColors ? "#FFF" : "#8356A0"};
                    }

                    .timelineMaster::-webkit-scrollbar {
                        width: 3px;
                        height: 6px;
                    }

                    @keyframes opac{from{opacity:0} to{opacity:1}}
                    
                    .timelineMaster:before {
                        content: '';
                        position: absolute;
                        bottom: 48.5%;
                        border-bottom: 5px ${invertColors ? "#FFF" : "#8356A0"} solid;
                        z-index:0;
                        transform: translateX(140px);
                        width: 2400px;
                        animation:opac 0.8s;
                    }

                    @media only screen and (max-width: 1200px) {
                        .timelineMaster {
                            margin: auto 8%;  
                            height: 210px;
                            flex-wrap: nowrap;
                        }

                        .timelineMaster:before {
                            content: '';
                            position: absolute;
                            bottom: 48.5%;
                            border-bottom: 5px ${invertColors ? "#FFF" : "#8356A0"} solid;
                            z-index:0;
                            transform: translateX(140px);
                            width: 2225px;
                            animation:opac 0.8s;
                        }
                    }
                    
                    @media only screen and (max-width: 992px) {
                        .timelineMaster {
                            margin: auto 8%;  
                            height: 180px;
                            flex-wrap: nowrap;
                        }

                        .timelineMaster:before {
                            content: '';
                            position: absolute;
                            bottom: 48.5%;
                            border-bottom: 5px ${invertColors ? "#FFF" : "#8356A0"} solid;
                            z-index:0;
                            transform: translateX(120px);
                            width: 1825px;
                            animation:opac 0.8s;
                        }
                    }
                    
                    @media only screen and (max-width: 768px) {
                        .timelineMaster {
                            margin: auto 8%;  
                            height: 150px;
                            flex-wrap: nowrap;
                        }

                        .timelineMaster:before {
                            content: '';
                            position: absolute;
                            bottom: 48.5%;
                            border-bottom: 5px ${invertColors ? "#FFF" : "#8356A0"} solid;
                            z-index:0;
                            transform: translateX(95px);
                            width: 1600px;
                            animation:opac 0.8s;
                        }
                    }

                    @media only screen and (max-width: 576px) {
                        .timelineMaster {
                            margin: auto 8%;  
                            height: 150px;
                            flex-wrap: nowrap;
                        }

                        .timelineMaster:before {
                            content: '';
                            position: absolute;
                            bottom: 48.5%;
                            border-bottom: 5px ${invertColors ? "#FFF" : "#8356A0"} solid;
                            z-index:0;
                            transform: translateX(75px);
                            width: 1350px;
                        }
                    }

                    @media only screen and (max-width: 400px) {
                        .timelineMaster {
                            margin: auto 8%;  
                            height: 150px;
                            flex-wrap: nowrap;
                        }

                        .timelineMaster:before {
                            content: '';
                            position: absolute;
                            bottom: 48.5%;
                            border-bottom: 5px ${invertColors ? "#FFF" : "#8356A0"} solid;
                            z-index:0;
                            transform: translateX(75px);
                            width: 1350px;
                        }
                    }
                `}</style>
            </div>            
        </div>           
    );
}

export default Timeline;


// Reference
