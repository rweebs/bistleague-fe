import React,{useState} from "react";
import router, {useRouter} from "next/router";
import users from "pages/api/users";
import { withRouter } from "react-router-dom";

export default function teamForm({sendTeamName}){
    const [email,setEmail] = useState(()=>(""))
    const [name,setName] = useState(()=>(""))
    const [password,setPassword] = useState(()=>(""))

    function submit(e) {
        e.preventDefault();

        
        
        
    }
    
    return (
        
            <div className={"bg-test py-1/2 my-1/2 md:p-10 p-8 min-w-3/4 relative"}>
            
        <h1 className="text-xl md:text-4xl text-gray-900 mb-4 md:mb-6 mx-3">
          <span className="font-bold">Complete</span> Your <br />
          Registration, <span className="font-bold">Now</span>
        </h1>
        <form onSubmit={submit}>
        <div className="flex flex-col mb-1 md:mb-4 mx-3">
            <label htmlFor="name" className="text-sm md:text-lg mb-2">
              Team Name
            </label>
            <input
              name="email"
              type="text"
              onChange={(event)=>{setName(event.target.value);sendTeamName(event.target.value)}}
              className={[
                "bg-white focus:outline-none text-sm md:text-base border w-full px-4 py-1 md:px-7 md:py-3 w-1/2  ",
                  "focus:border-teal-500 border-gray-600 text-gray-600",
              ].join(" ")}
              value={name}
              placeholder="Your team name"
              required
            />
          </div>
          <div className="flex flex-col mb-4 mx-3">
            <label htmlFor="email" className="text-sm md:text-lg mb-2">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              onChange={(event)=>setEmail(event.target.value)}
              className={[
                "bg-white focus:outline-none text-sm md:text-base border w-full px-4 py-1 md:px-6 md:py-3 w-1/2",
                  "focus:border-teal-500 border-gray-600 text-gray-600",
              ].join(" ")}
              value={email}
              placeholder="Your email addres"
            />
          </div>

          <div className="text-sm md:text-lg mb-2 mx-3">
            <label htmlFor="password" className="text-sm md:text-lg mb-2">
              Institution Name
            </label>
            <input
              name="password"
              type="text"
              onChange={(event)=>setPassword(event.target.value)}
              className="bg-white focus:outline-none border w-full px-6 py-3 w-1/2 border-gray-600 focus:border-teal-500"
              value={password}
              placeholder="Your institution name"
            />
          </div>
          
        </form>
      </div>);
}