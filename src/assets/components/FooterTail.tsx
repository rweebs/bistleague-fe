
import React ,{useEffect, useState}from "react";
import styles from "styles/Footer.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';


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
  if (width < 650) return null;

  return (
    <div className={"flex flex-row"}>
    <div className="flex-none mr-5">
        <Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/Header%20Logo.png" alt='Logo Bist League' width={196} height={245}/>
    </div>
    <div className="flex-auto">
        <p className={styles.MonstserratWhite+ " mt-5 mb-5 text-left"}>Contact Person</p>
        <div className="flex ">
            <div className="flex-auto">
                <p className={styles.UbuntuWhite}>Alya Mizani</p>
                <p className={styles.UbuntuWhite}>Head of Event</p>
                <p className={styles.UbuntuWhite}>ID Line: alyamizani</p>
                <p className={styles.UbuntuWhite}>WA: 0852 6047 8249</p>
            </div>
            <div className="flex-auto">
                <p className={styles.UbuntuWhite}>Leony Angela</p>
                <p className={styles.UbuntuWhite}>Competition Team Leader</p>
                <p className={styles.UbuntuWhite}>ID Line: leonyyangela</p>
                <p className={styles.UbuntuWhite}>WA: 0821 2368 0227</p>
            </div>
        </div>

    </div>
    <div className="flex-auto">
    <p className={styles.MonstserratWhite + " mt-5 mb-5 text-left"}>Social Media</p>
    <a href="https://www.linkedin.com/company/bistleague" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" color="white" className="mr-5"/></a>
    <a href="https://www.instagram.com/bistleague" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" color="white"/></a>
    
    
    </div>
    </div>
  );
};

const FooterTail = () => {
  const size = useWindowSize();
  return (
    <div className={styles.flex+ " pr-8 pl-8 overflow-hidden"}>
      <Imag width={size.width}/>
        <p className={styles.PoppinsWhite + " mt-3 md:mt-0 text-sm md:text-lg text-center"}>Business Information System and Technology League</p>
        <p className={styles.PoppinsWhite  + " text-sm md:text-lg text-center"}>© 2021 BIST League 4.0</p>
      </div>
    
  );
};

export default FooterTail;
