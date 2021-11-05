import React,{useEffect,useState} from "react";
import Image from "next/image";
import styles from '../../../styles/WebinarHero.module.scss';
import Countdown from "./Countdown";

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
  const Imag = ({ width }) => {
    if (width < 600) return null;
  
    return (
        <div className="flex-none justify-end self-center">
        <Image src="/images/submission-left.png" alt="bag" height={(452*16/1.2 *width/1920)} width={(316*16/1.2 *width/1920)}/>
        </div>
    );
  };

const HomeHero = () => {
    const size = useWindowSize();
    return (
        <div className={styles.container+" pt-20 pb-20 bg-cover bg-no-repeat bg-center flex flex-col md:flex-row justify-center w-full"}  id="home">
            <div className={styles.comp+" md:pl-32 flex-none md:flex-auto self-center  text-center md:text-left"}>
            <div>
            <span className={styles.biggestEvent+" "}>Gain New Knowledge <br/>from Real Experts</span><br/>
                <span className={styles.bePart}>Grab your seats!</span>               
            </div>
            <a href="https://bit.ly/BISTWebinarRegistration" target="_blank">
                <button className={styles.registerButton}>
                    <b>Register Now</b>
                </button>            
            </a>
            </div>
            <div className="flex-NONE md:pr-32 self-center md:justify-end">
                <Countdown deadline="October 24 2021 09:00:00"/>
            </div>
        </div>
    )
}

export default HomeHero;