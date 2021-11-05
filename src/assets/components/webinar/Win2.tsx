import React,{useEffect,useState} from "react";
import styles from '../../../styles/Win3.module.scss';
import Image from "next/image";
import Carousel from '../Carousel2';
import { container } from "webpack";

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
        <div className="flex-none justify-center self-center ml-6">
          <div className="flex justify-center"><Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/ml-gojek.png" alt="bag" height={(384/1.2 *width/1920)} width={(291/1.2 *width/1920)}/>
        </div>
        <p className={styles.UbuntuWhite+ " text-center font-bold"}>Ardya Dipta Nandaviri</p>
        <p className={styles.UbuntuWhite+ " text-center"}>Data Lead <br/>@ Gojek - GoTo Group</p>
        </div>
    );
  };
const Message2 = () =>{
  return (
    <div className={styles.containerML}>

      <p className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pt-8 font-bold"}>About this webinar
        </p>
        <p className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pt-5 pb-8"}>
        With the rise of automations, teaching machines with data (machine learning) has become a field many are eager to master. With the development in studies, this field can now be accessed by anyone. Machine learning can help make an efficient and effective business process. In this webinar, learn how machine learning and its models can help improve your business resiliency with Data Lead  <span className="font-bold">Ardya Dipta Nandaviri.</span>
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
        Dipta leads data scientists and analysts on various projects to boost business efficiency and safety across Gojek's services.
 He was also a part-time data science consultant at The World Bank. There, he contributed on data analytics initiatives for the Dana Desa project by The Ministry of Finance of Republic of Indonesia.
 Before Gojek, Dipta was a lead data scientist in Amartha, building a credit scoring system.</p>
    </div>
  )
}

const Message = () =>{
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
        <div className={styles.container2+" pl-10 md:pl-32"}>
            <div className="mr-10 self-center md:mr-32">
            <p className={styles.MontserratWhiteBig+" text-2xl xl:text-3xl font-bold"}>Machine Learning: <br/> 
            Improving Business Resiliency</p>
<p className={styles.UbuntuWhite +" mb-8 flex-auto text-lg text-justify xl:text-2xl"}>WEBINAR | Sunday, 24 October 2021. 12:30 s.d. 13:40 WIB</p>
<div className={"flex"}>
<Carousel>
<Message/>
<Message1/>
<Message2/>
</Carousel>


<Imag size={size}/>



            </div>
            
            
            </div>
            </div>
            

    )
}

export default Win;