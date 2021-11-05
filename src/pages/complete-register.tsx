import React, {useState,useEffect} from 'react';
import styles from '../styles/Login.module.scss';
import users from "pages/api/users";
import router, {useRouter} from "next/router";
import Image from 'next/image';
import BG from '../../public/images/Group69.svg';
import VG from '../../public/images/Vector3.svg';
import VG2 from '../../public/images/Vector4.svg';
import TeamForm from '../assets/components/teamForm'
import Carousel from '../assets/components/Carousel';
import Member from '../assets/components/Member';
import MemberSubmitV from '../assets/components/MemberSubmitV'
import MemberSubmit from '../assets/components/MemberSubmit'
import Regis2 from 'assets/components/Regis2'
import Navbar from 'assets/components/Navbar';
import FooterTail from 'assets/components/FooterTail';
import Head from 'next/head'
// Hook
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

const Login = (props) => {
    const [teamLeader, setTeamLeader] = useState({
        name:'',
        major:'',
        batch:'',
        phone:'',
        email:'',
        linkedin:'',
        line:'',
        proof:'',
        ktm:'',
        photo:''
    }); // the lifted state

    const [member1, setMember1] = useState({
        name:'',
        major:'',
        batch:'',
        phone:'',
        email:'',
        linkedin:'',
        line:'',
        proof:'',
        ktm:'',
        photo:''
    }); // the lifted state

    const [member2, setMember2] = useState({
      name:'',
      major:'',
      batch:'',
      phone:'',
      email:'',
      linkedin:'',
      line:'',
      proof:'',
      ktm:'',
      photo:''
  }); // the lifted state

  const sendTeamName = (index) => { // the callback. Use a better name
    setTeamLeader(index);
  };
  const sendMember1 = (index) => { // the callback. Use a better name
    setMember1(index);
  };

  const sendMember2 = (index) => { // the callback. Use a better name
    setMember2(index);
  };

  const Header = ({ width }) => {
    if (width < 500) return null;
  
    return (
<VG className="invisible md:visible float-right w-1/2"/>
    );
  };
  const Heade = ({ width }) => {
    if (width < 500) return null;
  
    return (
<VG2 className="invisible md:visible float-left w-1/2"/>
    );
  };
  const size = useWindowSize();
  // The width below which the mobile view should be rendered
  const [regis,setRegis]=useState(false)
  let isToken=false
  useEffect(() => {
    // only execute all the code below in client side
    const token = localStorage.getItem("bist-league-token");
    if(token){
      isToken=true
    }
    else{
      router.push('/login')
    }
  }); 

return(    <>
      <Head>
        <title>Complete Registration</title>
        
    </Head>
      <Navbar/>
        <div className={styles.body + " w-full h-auto overflow-hidden"}>
            <div className={styles.page+""}>
            <Header width={size.width}/>
            <BG className="mx-auto w-full relative"/>
            <div className={styles.test+" mx-auto"}>
             <div className="p-5">
             <Carousel >
             <Member MemberMessage={"Team Leader (1/4)"} setTeamName={setTeamLeader} currentMember = {teamLeader}/>
                <Member MemberMessage={"First Member (2/4)"} setTeamName={sendMember1} currentMember = {member1}/>
                <MemberSubmit MemberMessage={"Second Member (3/4)"} setTeamName={sendMember2} currentMember = {member2}/>
                <MemberSubmitV MemberMessage={"Second Member (4/4)"} teamLead={teamLeader} member1={member1} member2={member2}/>
            </Carousel>
            </div>   
            

      </div>
      <Heade width={size.width}/>
        </div>
        </div>
        <FooterTail/>
        </>)
    }

    
  
    

export default Login;
