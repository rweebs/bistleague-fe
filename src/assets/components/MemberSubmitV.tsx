import React,{useState, useEffect} from "react";
import router, {useRouter} from "next/router";
import users from "pages/api/users";
import { withRouter } from "react-router-dom";
import axios from 'configs/axios/index';
import {toast, ToastContainer} from 'react-toastify'

export default function Member({MemberMessage,teamLead,member1,member2}){
  const [final, setFinal] = useState({
    twibbon1:'',
    twibbon2:'',
    twibbon3:'',
    pop:'',
    checklist:''
}); // the lifted state


    function changeHandler(e) {
        setFinal( prevValues => {
        return { ...prevValues,[e.target.name]: e.target.value}
     })
    }

    function fileHandler(e) {
        setFinal( prevValues => {
        return { ...prevValues,[e.target.name]: e.target.files[0]}
     })
    }
    function submit(e) {
        e.preventDefault();
        const dataArray = new FormData();
        console.log("Submit--")
        console.log(teamLead);
        console.log(member1);
        console.log(member2);
        dataArray.append('email_1',teamLead.email)
        dataArray.append('name_1',teamLead.name)
        dataArray.append('major_1',teamLead.major)
        dataArray.append('batch_1',teamLead.batch)
        dataArray.append('phone_1',teamLead.phone)
        dataArray.append('linkedin_1',teamLead.linkedin)
        dataArray.append('id_line_1',teamLead.line)
        dataArray.append('ktm_1',teamLead.ktm)
        dataArray.append('proof_1',teamLead.proof)
        dataArray.append('photo_1',teamLead.photos)
        dataArray.append('email_2',member1.email)
        dataArray.append('name_2',member1.name)
        dataArray.append('major_2',member1.major)
        dataArray.append('batch_2',member1.batch)
        dataArray.append('phone_2',member1.phone)
        dataArray.append('linkedin_2',member1.linkedin)
        dataArray.append('id_line_2',member1.line)
        dataArray.append('ktm_2',member1.ktm)
        dataArray.append('proof_2',member1.proof)
        dataArray.append('photo_2',member1.photos)
        dataArray.append('email_3',member2.email)
        dataArray.append('name_3',member2.name)
        dataArray.append('major_3',member2.major)
        dataArray.append('batch_3',member2.batch)
        dataArray.append('phone_3',member2.phone)
        dataArray.append('linkedin_3',member2.linkedin)
        dataArray.append('id_line_3',member2.line)
        dataArray.append('ktm_3',member2.ktm)
        dataArray.append('proof_3',member2.proof)
        dataArray.append('photo_3',member2.photos)
        dataArray.append('twibbon1',final.twibbon1)
        dataArray.append('twibbon2',final.twibbon2)
        dataArray.append('twibbon3',final.twibbon3)
        dataArray.append('pop',final.pop)
        axios
          .put("/users",dataArray,{
            headers:{
              "Content-Type": "multipart/form-data",
              'authorization':JSON.parse(localStorage.getItem("bist-league-token"))
            }
          }).then((response)=>{
            
            toast('Your submission is successfully uploaded')
          }).catch((err)=>{
            if(err?.response?.status==403){
              toast('Upload failed! Your Login Session is Over')
              router.push('/login')}
            else{
              console.log(err)
              toast(err)
            }
          })
        console.log(member1)
        
    }
    useEffect(()=>{
      console.log("oy!")
    })
    return (
        
            <div className={"bg-test  md:p-10 p-8 min-w-3/4 relative flex flex-col"}>
            <div className="">
              <h1 className="flex-none text-xl md:text-4xl text-gray-900 mb-4 md:mb-6 mx-3 ">
          <span className="font-bold">Complete</span> Registration, <br />
          <span className="font-bold">Now (4/4)</span>
        </h1>
        <div className="place-self-center ">
        <form onSubmit={submit}>
        <div className="flex flex-col mb-1 md:mb-4 mx-3">
        <p className="text-sm md:text-lg mb-2 font-bold">
            Twibbon
            </p>
            <p className="text-sm md:text-lg mb-2">
            Participants are required to post a twibbon, please unprivate your account so that our staffs can check your post
            </p>
            <a href="https://drive.google.com/drive/u/6/folders/1BOxsqbf5lEKEl3in26XyYJsCJuwT7yS_" target="_blank" className="text-indigo-600"><p>Twibbon Link</p></a>
            
          </div>
          <div className="flex flex-col mb-4 mx-3">
            <label htmlFor="email" className="text-sm md:text-lg mb-2">
              Twibbon Link Team Leader<span className="text-red-700">*</span>
            </label>
            <input
              name="twibbon1"
              type="url"
              onChange={changeHandler}
              className={[
                "bg-white focus:outline-none text-sm md:text-base border w-full px-4 py-1 md:px-6 md:py-3 w-1/2",
                  "focus:border-teal-500 border-gray-600 text-gray-600",
              ].join(" ")}
              value={final.twibbon1}
              placeholder="Your Twibbon Link"
              required

            />
          </div>

          <div className="flex flex-col mb-4 mx-3">
            <label htmlFor="email" className="text-sm md:text-lg mb-2">
              Twibbon Link Member 1<span className="text-red-700">*</span>
            </label>
            <input
              name="twibbon2"
              type="url"
              onChange={changeHandler}
              className={[
                "bg-white focus:outline-none text-sm md:text-base border w-full px-4 py-1 md:px-6 md:py-3 w-1/2",
                  "focus:border-teal-500 border-gray-600 text-gray-600",
              ].join(" ")}
              value={final.twibbon2}
              placeholder="Your Twibbon Link"
              required

            />
          </div>

          <div className="flex flex-col mb-4 mx-3">
            <label htmlFor="email" className="text-sm md:text-lg mb-2">
              Twibbon Link Member 2<span className="text-red-700"></span>
            </label>
            <input
              name="twibbon3"
              type="url"
              onChange={changeHandler}
              className={[
                "bg-white focus:outline-none text-sm md:text-base border w-full px-4 py-1 md:px-6 md:py-3 w-1/2",
                  "focus:border-teal-500 border-gray-600 text-gray-600",
              ].join(" ")}
              value={final.twibbon3}
              placeholder="Your Twibbon Link"

            />
          </div>

          <div className="flex flex-col mb-1 md:mb-4 mx-3">
        <p className="text-sm md:text-lg mb-2 font-bold">
        Registration Fee: Rp30.000
            </p><br/>
            <ul>
            <li className="ml-8 text-sm md:text-lg mb-2 ">
            Account Number   : 5725632891
            </li>
            <li className="ml-8 text-sm md:text-lg mb-2 ">
            Bank    : BCA
            </li>
            <li className="ml-8 text-sm md:text-lg mb-2 ">
            Owner   : Patrick Segara
            </li>
            <li className="ml-8 text-sm md:text-lg mb-2 ">
            <br/>
            </li>
            <li className="ml-8 text-sm md:text-lg mb-2 ">
            Account Number   : 0633088884
            </li>
            <li className="ml-8 text-sm md:text-lg mb-2 ">
            Bank    : BNI
            </li>
            <li className="ml-8 text-sm md:text-lg mb-2 ">
            Owner   : Patrick Segara
            </li>
            </ul>
            
          </div>
        
        
          <div className="flex flex-col mb-4 mx-3">
            <label htmlFor="email" className="text-sm md:text-lg mb-2">
              Proof of Payment<span className="text-red-700">*</span>
            </label>
            <input
              name="pop"
              type="file"
              accept=".pdf,.jpg,.png"
              onChange={fileHandler}
              className={[
                "bg-white focus:outline-none text-sm md:text-base border w-full  py-1 md:py-3 w-1/2",
                  "focus:border-teal-500 border-gray-600 text-gray-600",
              ].join(" ")}
              required
              
            />
          </div>

          <div className="mb-4 mx-3">
          <input
              name="checklist"
              type="checkbox"
              accept=".pdf,.jpg,.png"
              onChange={changeHandler}
              className={" h-5 w-5 mr-3 "}
              required
            />
            <label htmlFor="email" className=" text-sm md:text-lg mb-2">
            I give my consent to the staffs of BIST League 4.0 to read and process the information that I have provided above<span className="text-red-700"></span>
            <span className="text-red-700">*</span></label>
            
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-400 transition-all duration-200  shadow-inner text-white px-4 py-1 md:px-6 md:py-3 mt-4 w-full"
          >
            Submit
          </button>
          <ToastContainer/>
          
        </form>
      
        </div>
        </div>
        </div>);
}