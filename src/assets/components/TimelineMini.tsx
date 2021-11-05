import React from 'react';
import styles from '../../styles/Timelin.module.scss';

const Timeline = ({invertColors}) => {
    return (
        <div className={styles.body}>
            <div className="timelineMaster">
                <div className = {styles.timelineDiv}>
                    <p className={styles.timelineText} id={styles.timelineTextUp}>19<br/>August&nbsp;2021<br/></p>
                    <div className={!invertColors ? styles.timelineCircle : styles.circleInverted} />
                    <p className={styles.timelineText} id={styles.timelineTextDown}>Start Registration  <br/>and Submission<br/>Phase</p>
                </div>

                <div className = {styles.timelineDiv}>
                    <p className={styles.timelineText} id={styles.timelineTextUp}>2<br/>September&nbsp;2021<br/></p>
                    <div className={!invertColors ? styles.timelineCircle : styles.circleInverted} />
                    <p className={styles.timelineText} id={styles.timelineTextDown}>End Registration  <br/> and Submission<br/>Phase</p>
                </div>

                <div className = {styles.timelineDiv}>
                    <p className={styles.timelineText} id={styles.timelineTextUp}>9 - 16<br/>September&nbsp;2021</p>
                    <div className={!invertColors ? styles.timelineCircle : styles.circleInverted} />
                    <p className={styles.timelineText} id={styles.timelineTextDown}>Assestment <br/>Phase</p>
                </div>
                <div className = {styles.timelineDiv}>
                    <p className={styles.timelineText} id={styles.timelineTextUp}>19<br/>September&nbsp;2021</p>
                    <div className={!invertColors ? styles.timelineCircle : styles.circleInverted}/>
                    <p className={styles.timelineText} id={styles.timelineTextDown}>Announcement</p>
                </div>
                <style jsx>{`
                    .timelineMaster {
                        display: flex;
                        justify-content: flex-start; 
                        margin-left:25%;
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
                        width: 910px;
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
                            transform: translateX(145px);
                            width: 970px;
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
                            transform: translateX(115px);
                            width: 680px;
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
                            width: 600px;
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
                            width: 500px;
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
                            width: 500px;
                        }
                    }
                `}</style>
            </div>            
        </div>           
    );
}

export default Timeline;


// Reference
