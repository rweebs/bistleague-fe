
import React,{useEffect,useState} from 'react'
import Navbar from 'assets/components/Navbar';
import Register from 'assets/components/webinar/SubmissionHero';
import Win from 'assets/components/webinar/Win';
import Fee from 'assets/components/webinar/Win2';
import Fees from 'assets/components/webinar/Win2.5';
import FooterHead from 'assets/components/FooterHead';
import FooterTail from 'assets/components/FooterTailWeb';
import Head from 'next/head'
import RegisterMini from 'assets/components/webinar/Win3';
import TimelineCompe from "assets/components/webinar/Win4";
import router, {useRouter} from "next/router";
import {google} from 'googleapis';

export async function getServerSideProps(){

  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

  const sheets = google.sheets({ version: 'v4', auth });

  // Query

  const range = 'Form Responses 1!K2:M2';

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  const [workshop,webinar1,webinar2]=response.data.values[0]


  return{
    props:{
      workshop,
      webinar1,
      webinar2

    }
  }
}


const Footer = ({workshop,webinar1,webinar2}) =>{


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
      const size = useWindowSize();
      // The width below which the mobile view should be rendered
    return(
        <div className="overflow-hidden">
            <Head>
                <title>Webinar</title>
                
            </Head>
            <Navbar/>
            <Register/>
            <Win size={size}/>
            <Fee/>
            <Fees/>
            <RegisterMini workshop={workshop} webinar1={webinar1} webinar2={webinar2} />
            <TimelineCompe/>
            <div className="static">
              <FooterHead/>
                <FooterTail/>
            </div>
            
        </div>
    )
}


export default Footer;