import React,{useEffect,useRef,useState} from "react";
import styles from "styles/Countdown.module.scss"

const Countdown= (props)=>{

    const calculateTimeLeft = (date) => {
        let difference = +new Date(date) - +new Date();
        
        let timeLeft = {days:0,hours:0,minutes:0,seconds:0};
        if (difference > 0) {
            timeLeft = {
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference / 1000 / 60) % 60),
              seconds: Math.floor((difference / 1000) % 60)
            };
          }
          return timeLeft;
        
        }
        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(props.deadline));
        useEffect(() => {
            const timer = setTimeout(() => {
              setTimeLeft(calculateTimeLeft(props.deadline));
            }, 1000);
            return () => clearTimeout(timer);
          });

    return (
        <div className="flex flex-col m-5">
            <p className={styles.MonserratWhiteMiddle+ " m-5 text-center"}>Submission Closing in</p>
            <div className="flex space-x-4 justify-center">
                <div className={styles.count2+" md:h-24 md:w-24 h-20 w-16"}>
                    <p className={styles.UbuntuWhiteBig+" text-4xl md:text-5xl leading-none"}>{timeLeft.days}</p>
                    <p className={styles.UbuntuWhiteSmall+" text-xl md:text-2xl "}>days</p>
                </div>
                <div className={styles.count2+" md:h-24 md:w-24 h-20 w-16"}>
                <p className={styles.UbuntuWhiteBig+" text-4xl md:text-5xl leading-none"}>{timeLeft.hours}</p>
                <p className={styles.UbuntuWhiteSmall+" text-xl md:text-2xl "}>hours</p>
                </div>
                <div className={styles.count2+" md:h-24 md:w-24 h-20 w-16"}>
                    <p className={styles.UbuntuWhiteBig+" text-4xl md:text-5xl leading-none"}>{timeLeft.minutes}</p>
                    <p className={styles.UbuntuWhiteSmall+" text-xl md:text-2xl "}>mins</p>
                </div>
                <div className={styles.count2+" md:h-24 md:w-24 h-20 w-16"}>
                    <p className={styles.UbuntuWhiteBig+" text-4xl md:text-5xl leading-none"}>{timeLeft.seconds}</p>
                    <p className={styles.UbuntuWhiteSmall+" text-xl md:text-2xl "}>secs</p>
                </div>
            </div>
        </div>
    )
}

export default Countdown;