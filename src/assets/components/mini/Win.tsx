import React,{useEffect,useState} from "react";
import styles from '../../../styles/Win3.module.scss';
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
  const Imag = ({ width }) => {
    if (width < 600) return null;
  
    return (
        <div className="flex-none justify-end self-center">
        <Image src="/images/bag.png" alt="bag" height={(452/1.2 *width/1920)} width={(275/1.2 *width/1920)}/>
        </div>
    );
  };

const Win = () => {
    const size = useWindowSize();
    return (
        <div className={styles.container+" ml-10 md:ml-32 flex"}>
            <div className="flex-auto mr-10 self-center md:mr-32">
            <p className={styles.MontserratPurpleBig+" mb-8 text-2xl xl:text-3xl"}>What is Mini Challenge?</p>
            <p className={styles.UbuntuPurple +" text-lg text-justify xl:text-2xl"}>The Mini Challenge is a part of BIST League events designed to spread awareness about the importance of technology. This year, we created a special mini-challenge called “<span className="font-bold">Watch This!</span>”.
            <br/><br/>
            In this challenge, you will have to create a video about our theme, “<span className="font-bold">Using Technology to Improve Business Resilience</span>”, and share it on our social media. Winning videos will be posted on our Instagram and get a <span className="font-bold">total prize of Rp700.000</span>!
</p>
            </div>
            
            <Imag width={size.width}/>
            
        </div>
    )
}

export default Win;