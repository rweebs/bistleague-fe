import React,{useState} from "react";
import router, {useRouter} from "next/router";
import users from "pages/api/users";
import { withRouter } from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Member(){
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

    // function changeHandler(e) {
    //     setTeamLeader( prevValues => {
    //     return { ...prevValues,[e.target.name]: e.target.value}
    //  })
    //  sendTeamName(teamLeader)
    // }

    // function fileHandler(e) {
    //     setTeamLeader( prevValues => {
    //     return { ...prevValues,[e.target.name]: e.target.files[0]}
    //  })
    //  sendTeamName(teamLeader)
    // }

    
     
    
    return (
      <div className={"bg-test  md:p-10 p-4 min-w-3/4 relative self-center h-full"}>
            
        <h1 className="text-xl md:text-4xl text-gray-900 mb-4 md:mb-6 mx-3">
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
      </form>
    </div>

    )}