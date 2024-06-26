/** @format */

import React, { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Phone from "../Component/Phone";
import axios from "axios";
import { successToast, warnToast } from "../Component/Toast";
import { fetchApiData } from "../utils";

const SecondScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [caseInfo, setCaseInfo] = useState([]);

  const getCase = async ()=>{
    const userData = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/Blog/getCaseManager')
    setCaseInfo(userData?.data)
  }

  useEffect(()=>{
    getCase()
  },[])

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!email || !password || !name || !phone) {
      return warnToast("Fill all the fields");
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("fullName", name);
    formData.append("phone", phone);
  
    try {
      const response = await axios.post(
        "https://shlok-mittal-lawyer-backend.vercel.app/api/v1/lawyer/registration",
        formData
      );
      successToast("Regsiter Successfully");
    } catch (error) {
      console.log(error);
      return error;
    }
  };



  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <>
    <Phone />
      <Navbar />

      <div className="secondScreen">
        <div className="left">
          <p className="head">
            Join Advo <br /> Legal Network
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
          </p>

          <div className="two-sec">
            <img src={"./Images/28.png"} alt="" />
            <div>
              <p className="first">Profile</p>
              <p className="second">
                Create a profile under the guidelines of Advocate Act -1961
              </p>
            </div>
          </div>

          <div className="two-sec">
            <img src={"./Images/29.png"} alt="" />

            <div>
              <p className="first">Appointments and Consultations</p>
              <p className="second">
                Get paid appointments & consultations from the comfort of your
                home
              </p>
            </div>
          </div>
        </div>

        <div className="right">
          <form>
            <input type="text" placeholder="Name :" value={name} onChange={(e)=> setName(e.target.value)} />
            <br />
            <input type="text" placeholder="Email Addresss :" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <br />
            <input type="text" placeholder="Mobile :"  value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <br />
            <input type="text" placeholder="Password :" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
            <br />
           
            <button onClick={handleRegister}>Sign Up</button>
          </form>
        </div>
      </div>

      <div className="secondBack">
      <div className="secondScreenCenter">
        <p className="head">Case Manager</p>
        <p className="desc">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et
        </p>
      </div>
      {caseInfo?.map((d, i)=>(
<>
<div className="secondScreenTwo-Sec">
 

  <div className="right">
    <div className="main">
     
      <div>
        <p className="first" style={{fontSize:"20px", fontWeight:"bold", paddingBottom:"10px"}}>{d?.title}</p>
        <p className="second">
        {d?.description}
        </p>
      </div>
    </div>

  </div>
</div>
   <hr className="secondHr" />
</>
      ))}




      </div>

    <Footer />

    </>
  );
};

export default SecondScreen;
