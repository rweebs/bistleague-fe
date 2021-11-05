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
  const Imag = ({ width }) => {
    if (width < 1016) return null;
  
    return (
        <div className="flex-none justify-center self-center ml-6">
          <div className="flex justify-center"><Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/presentasi.png" alt="bag" height={(465*1.2 *width/1920)} width={(482*1.2 *width/1920)}/>
        </div>
        </div>
    );
  };

const Win = () => {
    const size = useWindowSize();
    return (
        <div className={styles.containerEnd+" pl-10 md:pl-32"}>
            <div className="flex mr-10 self-center md:mr-32">
            <div className={"flex-auto"}>
            <p className={styles.MontserratWhiteBig+" text-2xl xl:text-3xl font-bold"}>Get your seat NOW!</p>
<p className={styles.UbuntuWhite +" mb-8 flex-auto text-lg text-justify xl:text-2xl"}>For every ticket you buy, you donate IDR5.000,- to xx cause.</p>
<div className={styles.slot+ " flex mb-8"}>
  <div className={styles.slot2+" ml-2 mb-2 mt-2 flex-row flex-auto"}>
    <div className="flex flex-auto">
      <p className="flex-auto text-3xl font-bold">50</p>
      <p className="flex-auto">halo halo</p>
    </div>
    <p className="flex-auto">data science</p>
  </div>
  <div className={styles.slot2+" ml-2 mb-2 mt-2 flex-row flex-auto"}>
    <div className="flex flex-auto">
      <p className="flex-auto text-3xl font-bold">50</p>
      <p className="flex-auto">halo halo</p>
    </div>
    <p className="flex-auto">data science</p>
  </div>
  <div className={" ml-2 mb-2 mt-2 flex-row flex-auto"}>
    <div className="flex flex-auto">
      <p className="flex-auto text-3xl font-bold">50</p>
      <p className="flex-auto">halo halo</p>
    </div>
    <p className="flex-auto">data science</p>
  </div>
</div>


<a href="https://bit.ly/WatchThisRegis" target="_blank">
                <button className={styles.registerButton}>
                    <b>Buy Now</b>
                </button>            
            </a>
</div>


<Imag width={size.width}/>



            
            
            
            </div>
            </div>
            

    )
}

export default Win;