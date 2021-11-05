import React,{useEffect,useState} from "react";
import styles from '../../../styles/RegisterCompe2.module.scss';
import Image from "next/image";
import {Link} from 'react-scroll'

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
        <div className="flex-none justify-start self-center">
        <Image src="/images/Search.png" alt="bag" height={(355/1.2 *width/1920)} width={(378/1.2 *width/1920)}/>
        </div>
    );
  };

const RegisterCompe = () => {
    const size = useRegisterCompedowSize();
    return (
        
        <div className={styles.container +" overflow-x-hidden"}>
            <div className="flex  ">
            <Imag width={size.width}/>
            <div className="flex-auto mr-10 md:mr-32 self-center justify-end md:ml-24">
            <p className={styles.MontserratPurpleBig+" mb-8 text-2xl xl:text-3xl"}>Submit your Video!</p>

            <p className={styles.UbuntuPurple +" text-lg text-justify xl:text-3xl "}>Make sure your video matches the mini challenge guideline!</p>
            

            <a href="https://bit.ly/BISTWebinarRegistration" target="_blank">
                <button className={styles.registerButton}>
                    <b>Submit Video</b>
                </button>            
            </a>
            <p className={styles.UbuntuPurple +" mt-20 text-lg text-justify xl:text-xl "}>Not registered yet? <span className="text-orange-400 cursor-pointer select-none"><Link  to="home" spy={true} smooth={true}> Register Now</Link></span></p>
            </div>
            
            
            </div>
            
            
        </div>
    )
}

export default RegisterCompe;