import React,{useEffect,useState} from "react";
import styles from '../../styles/Win.module.scss';
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
        <div className={styles.container+" flex"}>
            <div className="flex-auto mr-10 self-center md:mr-32">
            <p className={styles.MontserratPurpleBig+" mb-8 text-2xl xl:text-3xl"}>Win a Total Prize of IDR 20.000.000</p>
            <p className={styles.UbuntuPurple +" text-lg text-justify xl:text-2xl"}>Business IT Case Competition is one of the main events of BIST League 4.0 to hone the skills of participants to solve a business and technology-related problem by applying problem solving skills in creating creative and effective solutions.<br/><br/>This year’s theme is  “<span className="font-bold">Using Technology to Improve Business Resiliency</span>” in order to increase business resilience in a world that is currently experiencing disruption, especially as one of the results of the COVID-19 pandemic.
</p>
            </div>
            
            <Imag width={size.width}/>
            
        </div>
    )
}

export default Win;