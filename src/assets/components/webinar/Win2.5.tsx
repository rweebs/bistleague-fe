import React,{useEffect,useState} from "react";
import styles from '../../../styles/Win3.module.scss';
import Image from "next/image";
import Carousel from '../Carousel';

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: 1920,
      height: 1920,
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
  const Imag = ({size}) => {
    const width=size.width
    if (width < 1016) return null;
  
    return (
        <div className="flex-none justify-center self-center mr-6">
          <div className="flex justify-center"><Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/Speaker3.png" alt="bag" height={(390/1.2 *width/1920)} width={(295/1.2 *width/1920)}/>
        </div>
        <p className={styles.UbuntuWhiteWeb+ " text-center font-bold"}>Nadia Pangestika</p>
        <p className={styles.UbuntuWhiteWeb+ " text-center"}>Project Manager <br/>@ SeaMoney</p>
        </div>
    );
  };
const Message = () =>{
  return (
    <div className={styles.containerML}>
      <p className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pt-8 font-bold"}>About this webinar
        </p>
        <p className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pt-5 pb-8"}>
        Decisions must not be made lightly and most of the times to get optimal results, they need to be supported with authentic data. With data and information being the new gold of the century,  businesses should also leverage these treasures for its growth.  In this webinar, learn how data can provide big changes in decision making within the business with <span className="font-bold">Nadia Pangestika.</span>
            </p>
    </div>
  )
}

const Message1 = () =>{
  return (
    <div className={styles.containerML}>
      <p className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pt-8 font-bold"}>About our speaker
        </p>
        <p className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pt-5 pb-8"}>
        Nadia is currently the Project Manager of Strategic Operation at SeaMoney. She was constantly a part of the Shopee’s Global Leaders Program be it about regional project management, payment operations, business intelligence, and business development. Having numerous experiences and being exposed to businesses from various companies have greatly sharpened her insights about data.</p>
    </div>
  )
}

const Message2 = () =>{
  return (
    <div className={styles.containerML}>
      <p className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pt-8 font-bold"}>Benefits
        </p>

        <li className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 "}>
         E-certificate</li>
         <li className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 "}>
         Webinar recording</li>
         <p className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 "}>This workshop is <span className="font-bold">highly suggested for:</span>
        </p>
        <li className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pt-3"}>
        College students</li>
         <li className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pb-8 "}>
         Public who have an interest in data</li>


    </div>
  )
}

const Win = () => {
    const size = useWindowSize();
    return (
        <div className={styles.container3+" pl-10 md:pl-32"}>
            <div className="mr-10 self-center md:mr-32">
            <p className={styles.MontserratWhiteBig+" text-2xl xl:text-3xl font-bold"}>Data For Business: <br/> 
            Leveraging Data to Drive Decision Making</p>
<p className={styles.UbuntuWhite +" mb-8 flex-auto text-lg text-justify xl:text-2xl"}>WEBINAR | Sunday, 24 October 2021. 10:00 s.d. 11:10 WIB</p>
<div className={"flex"}>
<Imag size={size}/>
<Carousel>
<Message/>
<Message1/>
<Message2/>
</Carousel>



            </div>
            
            
            </div>
            </div>
            

    )
}

export default Win;