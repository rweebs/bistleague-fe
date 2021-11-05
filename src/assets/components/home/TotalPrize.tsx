import React, { useState, useEffect } from "react";
import styles from '../../../styles/home/TotalPrize.module.scss';
import Countdown from '../Countdown';
import Image from "next/image";

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

const Home = () => {
    const size = useWindowSize();
    return (
        <div className={styles.container} id="register">
          <div className="flex">
              <div className="flex-none justify-start">
                  <Image src="/images/GrassDown.png" alt="bag" height={173 * size.width/1920} width={398 * size.width/1920}/>
              </div>                
          </div>
          
        
          <div className={styles.textContainer}>
              <div className={styles.countdownContainer}>
                  <Countdown deadline="August 7 2021 23:59:59"/>
              </div>
              <div style={{display:'flex',flexDirection:'column',justifyContent:'center', textAlign:'center',}}>
                  <p>
                      <span className={styles.winPrize}>Win a Total Prize of</span> <br/>
                      <span className={styles.cash}>IDR 20.000.000 </span>                        
                  </p>
              </div>
                            
          </div>

          <div className="flex justify-end ">
              <Image src="/images/GrassUp.png" alt="bag" height={173 * size.width/1920} width={398 * size.width/1920}/>
          </div>                  
        </div>
    )
}

export default Home;