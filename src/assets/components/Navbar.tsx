import React, { useState, useEffect } from "react";
import styles from '../../styles/Navbar.module.scss';

import Burger from '@animated-burgers/burger-arrow'; 
import { Collapse } from 'react-burgers'

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

const Navbar = () => {
    const size = useWindowSize();
    const [open, setOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <ul style={{display:'inline', color:'white'}}>
                <li style={{display:'inline', marginRight:'3%'}}>
                    <a href="/">
                        <img src="/images/Logo Putih BIST League.png" style={{display:'inline', marginRight:'1%'}}/>
                        <span className={styles.title}>BIST League 4.0</span>
                    </a>
                </li>

                <span>
                    <li className={styles.navItem}><a href="/competition">Competition</a></li>
                    <li className={styles.navItem}><a href="/mini-challenge">Mini Challenge</a></li>
                    <li className={styles.noMarRight}><a href="/webinar">Webinar</a></li>
                </span>
                
                {size.width <= 576 ?
                    <div style={{float:'right', marginTop:'-2%'}}>
                        <Collapse borderRadius={15} active={open} onClick={() => setOpen(openState => !openState)}
                        color='#fff' lineHeight={2} padding={"8px"}/>                    
                    </div>

                    :
                    null                     
                }

                {open && size.width <= 576 ?
                    <div className={styles.dropdown}>
                        <ul>
                            <li ><a href="/competition">Competition</a></li>
                            <li ><a href="/mini-challenge">Mini Challenge</a></li>
                            <li ><a href="/webinar">Webinar</a></li>
                            {/* <li ><a href="/login">Log In</a></li> */}
                        </ul>
                    </div>
                :
                null}

                {/* <li className={styles.noMarRight} style={{float: 'right'}}><a href="/login">Log In</a></li> */}
                {/* <Burger isOpen={open} direction="up" } 
                Component="button" type="button">
                    asd
                </Burger> */}

            </ul>
            
        </nav>
    )
}

export default Navbar;