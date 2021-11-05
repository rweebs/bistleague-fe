import React,{useEffect,useState} from "react";
import styles from '../../../styles/Win3.module.scss';
import Image from "next/image";
import Carousel from '../Carousel2';
import { container } from "webpack";

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

const Win = () => {
    const size = useWindowSize();
    return (
        <div className={styles.containerEnd+" text-center"}>
            <p className={styles.MontserratWhiteBig+" text-2xl xl:text-4xl font-bold"}>Get your seat NOW!</p>
<p className={styles.UbuntuWhite +" mb-8  text-xl  xl:text-3xl text-center"}>For every ticket you buy, you donate IDR5.000,- to those who are impacted by Covid.</p>

<a href="https://bit.ly/BISTWebinarRegistration" className="flex justify-center" target="_blank">
                <button className={styles.registerButton}>
                    <b>Buy Now</b>
                </button>            
            </a>
</div>
     

    )
}

export default Win;