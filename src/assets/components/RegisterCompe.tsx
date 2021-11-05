import React,{useEffect,useState} from "react";
import styles from '../../styles/RegisterCompe.module.scss';
import Image from "next/image";

function useRegisterCompedowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [RegisterCompedowSize, setRegisterCompedowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on RegisterCompedow resize
        function handleResize() {
          // Set RegisterCompedow width/height to state
          setRegisterCompedowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial RegisterCompedow size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return RegisterCompedowSize;
  }
  const Imag = ({ width }) => {
    if (width < 600) return null;
  
    return (
        <div className="flex-none justify-end self-center">
        <Image src="/images/Disket.png" alt="bag" height={(355/1.2 *width/1920)} width={(250/1.2 *width/1920)}/>
        </div>
    );
  };

const RegisterCompe = () => {
    const size = useRegisterCompedowSize();
    return (
        
        <div className={styles.container +" overflow-x-hidden"}>
            <div className="flex  ">
            <div className="flex-auto mr-10 md:mr-32 self-center">
            <p className={styles.MontserratPurpleBig+" mb-8 text-2xl xl:text-3xl"}>Registration Requirements</p>
            <ul className="overflow-hidden">
            <li className={styles.UbuntuPurple +" text-lg text-justify xl:text-2xl list-disc"}>Each team consists of 2-3 members</li>
            <li className={styles.UbuntuPurple +" text-lg text-justify xl:text-2xl list-disc"}>Each member in the team must currently be enrolled as a full-time undergraduate/diploma student from any major</li>
            <li className={styles.UbuntuPurple +" text-lg text-justify xl:text-2xl list-disc"}>Participants may only be registered in one team</li>
            <li className={styles.UbuntuPurple +" text-lg text-justify xl:text-2xl list-disc"}>Every submitted solution must be original and has not been published before</li>
            
            </ul>
            <p className={styles.MontserratPurpleBig+"  text-2xl xl:text-3xl mt-8"}>What are you waiting for? <a href="/register" target="_blank"><span className={styles.MontserratOrangeBig}>Register Now!</span></a></p>
            </div>
            
            <Imag width={size.width}/>
            </div>
            
            
        </div>
    )
}

export default RegisterCompe;