
import React,{useEffect,useState} from 'react'
import Navbar from 'assets/components/Navbar';
import Register from 'assets/components/submission/SubmissionHero';
import Win from 'assets/components/submission/Win';
import FooterTail from 'assets/components/Footer';
import Head from 'next/head'
import router, {useRouter} from "next/router";
const Footer = () =>{


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
      const size = useWindowSize();
      // The width below which the mobile view should be rendered
      const [regis,setRegis]=useState(false)
      let isToken=false
      let isValid=false
      useEffect(() => {
        // only execute all the code below in client side
        const token = localStorage.getItem("bist-league-token");
        if(token){
            isValid=true;
        }
        else{
          router.push('/login')
        }
      }); 
    return(
        <div>
            <Head>
                <title>Submission</title>
                
            </Head>
            <Navbar/>
            <Register/>
            <Win/>
            <div className="static">
                <FooterTail/>
            </div>
            
        </div>
    )
}


export default Footer;