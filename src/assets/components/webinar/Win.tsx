import React,{useEffect,useState} from "react";
import styles from '../../../styles/Win3.module.scss';
import Image from "next/image";
import Carousel from '../../../assets/components/Carousel';

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
          <div className="flex justify-center"><Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/ds.png" alt="bag" height={(340/1.2 *width/1920)} width={(328/1.2 *width/1920)}/>
        </div>
        <p className={styles.UbuntuPurpleWeb+ " text-center font-bold"}>Triano Nurkhimat</p>
        <p className={styles.UbuntuPurpleWeb+ " text-center"}>Data Scientist @ DataLabs.id</p>
        </div>
    );
  };
const Message = () =>{
  return (
    <div className={styles.containerDS}>
      <p className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pt-8 font-bold"}>About this workshop
        </p>
        <p className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pt-5 pb-8"}>
        Data and information has become the new gold of the century. This key aspect can determine a business’s future growth and sustainability. Learn how data can help your business resiliency in these tough times. In this workshop, we will learn more about data cleaning and visualization using python and insights we can take from the results with Data Scientist <span className="font-bold">Triano Nurhikmat.</span>
            </p>
    </div>
  )
}

const Message1 = () =>{
  return (
    <div className={styles.containerDS}>
      <p className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pt-8 font-bold"}>About our speaker
        </p>
        <p className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pt-5 pb-8"}>
        Mr. Triano Nurhikmat, majored in Statistics, found interest on the secrets behind data. After releasing his thesis on the application of Deep Learning for image classification with Convolutional Neural Network (CNN), he’s now pursuing his career as a Data Scientist at <span className="font-bold">DataLabs.id </span>. Other than his current career, he experienced internship as a Data Analyst at PT. Pertamina (PERSERO).            </p>
    </div>
  )
}

const Message2 = () =>{
  return (
    <div className={styles.containerDS}>
      <p className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pt-8 font-bold"}>Benefits
        </p>

        <li className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pt-3"}>
         Knowledge and skills</li>
         <li className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 "}>
         E-certificate</li>
         <li className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pb-4"}>
         Workshop kit including guidebook, data, and the notebook result(.ipynb)</li>
         <p className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 "}>This workshop is <span className="font-bold">highly suggested for:</span>
        </p>
        <li className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pt-3"}>
        College students</li>
         <li className={styles.UbuntuBlack +" flex-auto text-lg text-justify xl:text-2xl pr-12 pl-12 pb-8 "}>
         Public who have an interest in data</li>


    </div>
  )
}

const Win = ({size}) => {
    return (
        <div className={styles.container+" ml-10 md:ml-32"}>
            <div className="mr-10 self-center md:mr-32">
            <p className={styles.MontserratPurpleBig+" text-2xl xl:text-3xl font-bold"}>Using Data Analytics and Visualization<br/> 
to Improve Business Resiliency</p>
<p className={styles.UbuntuPurple +" mb-8 flex-auto text-lg text-justify xl:text-2xl"}>WORKSHOP | Sunday, 24 October 2021. 09:00 s.d. 11:30 WIB</p>
<div className={"flex"}>
{/* <Imag width={size.width}/> */}
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