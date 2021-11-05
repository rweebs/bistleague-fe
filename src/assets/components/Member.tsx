import React,{useState} from "react";
import router, {useRouter} from "next/router";
import users from "pages/api/users";
import { withRouter } from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Member({setTeamName,MemberMessage, currentMember}){
    const customId = "custom-id-yes";

    function changeHandler(e) {
        setTeamName( prevValues => {
          return { ...prevValues,[e.target.name]: e.target.value}
     })
    }

    function fileHandler(e) {
      setTeamName( prevValues => {
        return { ...prevValues,[e.target.name]: e.target.files[0]}
     })
    }

    function submit(e) {
        e.preventDefault();
        console.log(currentMember)
        // setTeamName(currentMember)
        toast('Your submission is validated please go to the next part',{
            toastId: customId
          })
    }
     
    
    return (
        
            <div className={"bg-test  md:p-10 p-4 min-w-3/4 relative"}>
            
        <h1 className="text-xl md:text-4xl text-gray-900 mb-4 md:mb-6 mx-3">
          <span className="font-bold">Profile</span> Information: <br />
          <span className="font-bold">{MemberMessage}</span>
        </h1>
        <form onSubmit={submit}>
        <div className="flex flex-col mb-1 md:mb-4 mx-3">
            <label htmlFor="name" className="text-sm md:text-lg mb-2">
              Full Name<span className="text-red-700">*</span>
            </label>
            <input
              name="name"
              type="text"
              onChange={changeHandler}
              className={[
                "bg-white focus:outline-none text-sm md:text-base border w-full px-4 py-1 md:px-7 md:py-3 w-1/2  ",
                  "focus:border-teal-500 border-gray-600 text-gray-600",
              ].join(" ")}
              value={currentMember.name}
              placeholder="Your name"
              required
            />
          </div>
          <div className="flex flex-col mb-4 mx-3">
            <label htmlFor="email" className="text-sm md:text-lg mb-2">
              Major<span className="text-red-700">*</span>
            </label>
            <input
              name="major"
              type="text"
              onChange={changeHandler}
              className={[
                "bg-white focus:outline-none text-sm md:text-base border w-full px-4 py-1 md:px-6 md:py-3 w-1/2",
                  "focus:border-teal-500 border-gray-600 text-gray-600",
              ].join(" ")}
              value={currentMember.major}
              placeholder="Your major"
              required
            />
          </div>

          <div className="flex flex-col mb-4 mx-3">
            <label htmlFor="email" className="text-sm md:text-lg mb-2">
              Batch<span className="text-red-700">*</span>
            </label>
            <input
              name="batch"
              type="number"
              onChange={changeHandler}
              className={[
                "bg-white focus:outline-none text-sm md:text-base border w-full px-4 py-1 md:px-6 md:py-3 w-1/2",
                  "focus:border-teal-500 border-gray-600 text-gray-600",
              ].join(" ")}
              value={currentMember.batch}
              min={2016}
              max={2021}
              placeholder="Your batch"
              required
            />
          </div>

          <div className="flex flex-col mb-4 mx-3">
            <label htmlFor="email" className="text-sm md:text-lg mb-2">
              Phone<span className="text-red-700">*</span>
            </label>
            <input
              name="phone"
              type="text"
              onChange={changeHandler}
              className={[
                "bg-white focus:outline-none text-sm md:text-base border w-full px-4 py-1 md:px-6 md:py-3 w-1/2",
                  "focus:border-teal-500 border-gray-600 text-gray-600",
              ].join(" ")}
              value={currentMember.phone}
              placeholder="Your phone number"
              required
            />
          </div>

          <div className="flex flex-col mb-4 mx-3">
            <label htmlFor="email" className="text-sm md:text-lg mb-2">
              Email<span className="text-red-700">*</span>
            </label>
            <input
              name="email"
              type="email"
              onChange={changeHandler}
              className={[
                "bg-white focus:outline-none text-sm md:text-base border w-full px-4 py-1 md:px-6 md:py-3 w-1/2",
                  "focus:border-teal-500 border-gray-600 text-gray-600",
              ].join(" ")}
              value={currentMember.email}
              placeholder="Your email address"
              required
            />
          </div>

          <div className="flex flex-col mb-4 mx-3">
            <label htmlFor="email" className="text-sm md:text-lg mb-2">
              Linkedin<span className="text-red-700">*</span>
            </label>
            <input
              name="linkedin"
              type="url"
              onChange={changeHandler}
              className={[
                "bg-white focus:outline-none text-sm md:text-base border w-full px-4 py-1 md:px-6 md:py-3 w-1/2",
                  "focus:border-teal-500 border-gray-600 text-gray-600",
              ].join(" ")}
              value={currentMember.linkedin}
              placeholder="Your linkedin url"
              required
            />
          </div>

          <div className="flex flex-col mb-4 mx-3">
            <label htmlFor="email" className="text-sm md:text-lg mb-2">
              ID Line<span className="text-red-700">*</span>
            </label>
            <input
              name="line"
              type="text"
              onChange={changeHandler}
              className={[
                "bg-white focus:outline-none text-sm md:text-base border w-full px-4 py-1 md:px-6 md:py-3 w-1/2",
                  "focus:border-teal-500 border-gray-600 text-gray-600",
              ].join(" ")}
              value={currentMember.line}
              placeholder="Your email address"
              required
            />
          </div>

          <div className="flex flex-col mb-4 mx-3">
            <label htmlFor="email" className="text-sm md:text-lg mb-2">
            Proof of enrollment<span className="text-red-700">*</span>
            </label>
            <input
              name="proof"
              type="file"
              accept=".pdf"
              onChange={fileHandler}
              className={[
                "bg-white focus:outline-none text-sm md:text-base border w-full py-1 md:py-3 w-1/2",
                  "focus:border-teal-500 border-gray-600 text-gray-600",
              ].join(" ")}
              
              required
            />
          </div>

          <div className="flex flex-col mb-4 mx-3">
            <label htmlFor="email" className="text-sm md:text-lg mb-2">
              Student Card<span className="text-red-700">*</span>
            </label>
            <input
              name="ktm"
              type="file"
              accept=".jpg,.png,.pdf"
              onChange={fileHandler}
              className={[
                "bg-white focus:outline-none text-sm md:text-base border w-full  py-1 md:py-3 w-1/2",
                  "focus:border-teal-500 border-gray-600 text-gray-600",
              ].join(" ")}
              
              required
              
            />
          </div>

          <div className="flex flex-col mb-4 mx-3">
            <label htmlFor="email" className="text-sm md:text-lg mb-2">
              Photo 3x4<span className="text-red-700">*</span>
            </label>
            <input
              name="photos"
              type="file"
              accept=".jpg,.png,.pdf"
              onChange={fileHandler}
              className={[
                "bg-white focus:outline-none text-sm md:text-base border w-full  py-1 md:py-3 w-1/2",
                  "focus:border-teal-500 border-gray-600 text-gray-600",
              ].join(" ")}
              
              required
              
            />
          </div>

          {/* <div className="mb-4 mx-3">
            
            <input
              name="checkbox"
              type="checkbox"
              accept=".jpg,.png,.pdf"
              onChange={changeHandler}
              className={[
                "bg-white focus:outline-none  py-1 ",
              ].join(" ")}
              value={currentMember.checkbox}
              required
              
            />
            <label htmlFor="checkbox" className="text-sm md:text-lg mb-2 px-1">
            I hereby declare that the information provided is true<span className="text-red-700">*</span>
            </label>
          </div> */}

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-400 transition-all duration-200  shadow-inner text-white px-4 py-1 md:px-6 md:py-3 mt-4 w-full"
          >
            Validate
          </button>

          
        </form>
      </div>);
}