import React,{useEffect,useState} from "react";
import styles from '../../../styles/Win2.module.scss';
import Image from "next/image";
import Test from './Test';
import swal from 'sweetalert2';

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
        <Image src="/images/GrassRight.png" alt="bag" height={(416/1.2 *width/1920)} width={(181/1.2 *width/1920)}/>
        </div>
    );
  };

  const Imags = ({ width }) => {
    if (width < 600) return null;
  
    return (
        <div className="flex-none justify-end self-center">
        <Image src="/images/GrassLeft.png" alt="bag" height={(416/1.2 *width/1920)} width={(181/1.2 *width/1920)}/>
        </div>
    );
  };

const Win = () => {
    const size = useWindowSize();
    // swal.fire({
    //   title: 'Preliminary submission',
    //   icon: 'warning',
    //   html:
    //       'You can only submit one time. <br></br>Make sure this is your final submission.', 
    //   confirmButtonText:
    //     '<i class="fa fa-thumbs-up"></i> <a>Agree</a>!',
    // })
    return (
        <div className={styles.container+" flex justify-center text-center md:pt-32 pt-20 pb-10"}>
          <Imags width={size.width}/>
            <div className="flex-auto  self-center ">
            <p className={styles.MontserratPurpleBig+" mb-8 text-2xl xl:text-3xl font-bold"}>Upload Your Submission</p>
            <p className={styles.UbuntuPurple +" text-lg xl:text-2xl pr-10 pl-10 md:pr-20 md:pl-20 text-center mb-10"}>Semifinal submission must be submitted in PDF format <br/>with maximum size of 10MB
</p>
<Test/>
            </div>
            
            <Imag width={size.width}/>
            
        </div>
    )
}

export default Win;