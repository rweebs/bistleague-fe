import React,{useEffect,useState} from "react";
import styles from '../../../styles/Win3.module.scss';
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

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
  // const Imag = ({ width }) => {
  //   if (width < 600) return null;
  
  //   return (
  //       <div className="flex-none justify-center self-center mr-6">
  //         <div className="flex justify-center"><Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/ds.png" alt="bag" height={(340/1.2 *width/1920)} width={(328/1.2 *width/1920)}/>
  //       </div>
  //       <p className={styles.UbuntuPurpleWeb+ " text-center font-bold"}>Triano Nurkhimat</p>
  //       <p className={styles.UbuntuPurpleWeb+ " text-center"}>Data Scientist @ DataLabs.id</p>
  //       </div>
  //   );
  // };
const Win = () => {
    const size = useWindowSize();
    return (
        <div className={styles.container+" ml-10 md:ml-32"}>
            <div className="mr-10 self-center md:mr-32">
            <p className={styles.MontserratPurpleBig+" text-2xl xl:text-3xl font-bold text-center mb-8"}>Webinar and Workshop Fee</p>


<Carousel responsive={responsive}
infinite
itemClass="carousel-item-padding-40-px"
ssr={true}
renderButtonGroupOutside>
<div className=" mr-2 ml-2">
  <img src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/Frame%20911%20%283%29.png"/>
  <div className={styles.box+" flex "}>
    <p className={styles.UbuntuPurpleWeb +" flex-auto text-lg text-justify xl:text-2xl "}>{0} slots left</p>
    <div className="flex-auto">
    <img src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/Frame%2011748.png"/>
    </div>
  
  </div>
</div>
<div className=" mr-2 ml-2"><img src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/Frame%20912%20%282%29.png"/>
<div className={styles.box+" flex "}>
    <p className={styles.UbuntuPurpleWeb +" flex-auto text-lg text-justify xl:text-2xl "}>{0} slots left</p>
    <div className="flex-auto">
    <img src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/Frame%2011748%20%281%29.png"/>
    </div>
  
  </div>
</div>
<div className=" mr-2 ml-2"><img src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/Frame%20913%20%282%29.png"/>
<div className={styles.box+" flex "}>
    <p className={styles.UbuntuPurpleWeb +" flex-auto text-lg text-justify xl:text-2xl "}>{0} slots left</p>
    <div className="flex-auto">
    <img src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/Frame%2011748%20%281%29.png"/>
    </div>
  
  </div>
</div>
</Carousel>




            
            
            </div>
            </div>
            

    )
}

export default Win;