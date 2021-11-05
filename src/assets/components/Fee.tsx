import React,{useEffect,useState} from "react";
import styles from '../../styles/Fee.module.scss';
import Image from "next/image";


export function useWindowSize() {
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
  

const Fee = () => {
    const size = useWindowSize();
    return (
        <div className={styles.container}>
          <div className="flex">
            <div className="flex-auto md:mr-32">
              <p className={styles.MontserratWhiteBig+" text-2xl xl:text-4xl"+" ml-10 mt-5 md:mt-20 md:ml-32  mb-8"}>Registration Fee and Guidebook</p>
            </div>
            <div className="flex-none justify-end">
                <Image src="/images/GrassDown.png" alt="bag" height={173 * size.width/1920} width={398 * size.width/1920}/>
            </div>
          </div>
          <p className={styles.UbuntuWhite+" text-lg text-justify xl:text-3xl"+ " ml-10 mr-10 md:ml-32 md:mr-32 "}>Registration Fee: <span className="font-bold"> IDR30.000 </span><br />
            Participants who pass the preliminary round are required to pay an additional <span className="font-bold">IDR270.000</span> to proceed to the Semifinal<br/><br/>

            Before registering your team, make sure you have read and understood the competition guidelines
          </p>
          <a href="https://bit.ly/BL4Guidebook" target="_blank">
                <button className={styles.registerButton+" m-10 md:ml-32 md:mr-32 md:mb-16"}>
                    <b>Guidebook</b>
                </button>            
            </a>
          <div className="flex justify-start ">
            <Image src="/images/GrassUp.png" alt="bag" height={173 * size.width/1920} width={398 * size.width/1920}/>
          </div>
        </div>
    )
}

export default Fee;