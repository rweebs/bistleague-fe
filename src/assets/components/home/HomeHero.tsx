import React from "react";
import styles from '../../../styles/home/HomeHero.module.scss';
import Typist from 'react-text-typist'
import swal from 'sweetalert2';

const HomeHero = () => {
    // swal.fire({
    //     title: 'Hi There!',
    //     icon: 'info',
    //     html:
    //         'Registration is now extended until <b> 7 August</b>. <br><br>' +
    //         'Preliminary submission is extended from <b>8 August</b> until <b>13 August</b>. <br><br>' + 
    //         'Participants in one team are <b>now allowed</b> to not come from one institutions (team made of members from more than one institutions are welcome)',
    //     confirmButtonText:
    //       '<i class="fa fa-thumbs-up"></i> <a href="https://bit.ly/BL4Guidebook" target="_blank">Guidebook</a>!',
    //   })
    return (
        <div className={styles.container}>
            <h1 className={styles.titleContainer}>
                <span className={styles.bePart}>Be a part of the </span><br/>
                <span className={styles.biggestEvent}>Biggest Business IT Case 
                 <Typist sentences={[' Event', ' Competition', ' Challenges', ' Webinar']} pauseTime={1500} typingSpeed={100} 
                deletingSpeed={50} loop={true} />
                </span>                
            </h1>
            <a href="https://bit.ly/WatchThisRegis" target="_blank">
                <button className={styles.registerButton}>
                    <b>Register Now</b>
                </button>            
            </a>
        </div>
    )
}

export default HomeHero;