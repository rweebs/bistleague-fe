import React, { useState,useEffect } from 'react';
import styles from '../../styles/Login.module.scss';
import users from "pages/api/users";
import router, { useRouter } from "next/router";
import Image from 'next/image';
import BG from '../../../public/images/Group69.svg';
import VG from '../../../public/images/Vector3.svg';
import VG2 from '../../../public/images/Vector4.svg';
import Navbar from 'assets/components/Navbar';
import FooterTail from 'assets/components/FooterTail';
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

const Login = () => {
  const [errors, seterrors] = useState(() => ({ "test": 1 }));
  const [email, setEmail] = useState(() => (""))
  const [name, setName] = useState(() => (""))
  const [password, setPassword] = useState(() => (""))
  const [institution, setInstitution] = useState(() => (""))

  function submit(e) {
    e.preventDefault();

    users.register({
      email: email.toLowerCase(),
      team_name: name.toLowerCase(),
      institution_name: institution,
      password: password
    })
      .then((res) => {
        router.push("/login")

      })
      .catch((err) => {
        if ("team_name" in err?.response?.data?.message?.keyValue) setName("Your team name has already been taken")
        if ("email" in err?.response?.data?.message?.keyValue) setEmail("Your email has already been taken")
        seterrors(err?.response?.data?.message?.keyValue);

      });

  }
  const size = useWindowSize();
  // The width below which the mobile view should be rendered
    return (
      
      <div className={styles.body + "  overflow-hidden w-full"}>
        
      <div className={styles.page + ""}>
      <Header width={size.width}/>
        <BG className="mx-auto w-full relative" />
        <div className={styles.test + " mx-auto"}>
          <div className={"m-6 bg-test md:p-10 p-8 min-w-3/4 relative"}>
            <h1 className="text-xl md:text-4xl text-gray-900 mb-4 md:mb-6">
              <span className="font-bold">Register</span> Your <br />
              Team, <span className="font-bold">Now</span>
            </h1>
            <form onSubmit={submit}>
              <div className="flex flex-col mb-1 md:mb-4">
                <label htmlFor="name" className="text-sm md:text-lg mb-2">
                  Team Name
                </label>
                <input
                  name="email"
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                  className={[
                    "bg-white focus:outline-none text-sm md:text-base border w-full px-4 py-1 md:px-6 md:py-3 w-1/2  ",
                    "team_name" in errors
                      ? "border-red-500 text-red-500" :
                      "focus:border-teal-500 border-gray-600 text-gray-600",
                  ].join(" ")}
                  value={name}
                  placeholder="Your team name"
                  required
                />
              </div>
              <div className="flex flex-col mb-1 md:mb-4">
                <label htmlFor="name" className="text-sm md:text-lg mb-2">
                  Institution Name
                </label>
                <input
                  name="email"
                  type="text"
                  onChange={(event) => setInstitution(event.target.value)}
                  className={[
                    "bg-white focus:outline-none text-sm md:text-base border w-full px-4 py-1 md:px-6 md:py-3 w-1/2  ",
                    "focus:border-teal-500 border-gray-600 text-gray-600",
                  ].join(" ")}
                  value={institution}
                  placeholder="Your institution name"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="text-sm md:text-lg mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                  className={[
                    "bg-white focus:outline-none text-sm md:text-base border w-full px-4 py-1 md:px-6 md:py-3 w-1/2",
                    "email" in errors
                      ? "border-red-500 text-red-500" :
                      "focus:border-teal-500 border-gray-600 text-gray-600",
                  ].join(" ")}
                  value={email}
                  placeholder="Your email address"
                />
              </div>

              <div className="text-sm md:text-lg mb-2">
                <label htmlFor="password" className="text-sm md:text-lg mb-2">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                  className="bg-white focus:outline-none border w-full px-6 py-3 w-1/2 border-gray-600 focus:border-teal-500"
                  value={password}
                  placeholder="Your password "
                />
              </div>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-400 transition-all duration-200  shadow-inner text-white px-4 py-1 md:px-6 md:py-3 mt-4 w-full"
              >
                Register
              </button>
              <p className="text-sm md:text-lg mt-5 text-center">
                  Already have account? <a href="/login"><span className="text-red-700">Sign In</span></a>
                </p>
            </form>
          </div>
        </div>
        <Heade width={size.width}/>
      </div>
    </div>
    




  );
}

export default Login;
