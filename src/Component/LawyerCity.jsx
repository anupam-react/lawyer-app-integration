/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchApiData } from "../utils";
import Navbar from "./Navbar";
import Phone from "./Phone";
import Footer from "./Footer";




const LawyerCity = () => {
    const [categoryInfo, setCategoryInfo] = useState()
  const navigate = useNavigate()
  const { id } = useParams()
  

  
  async function fetchServiceInfo() {
    const data = await fetchApiData(`https://shlok-mittal-lawyer-backend.vercel.app/api/v1/user/getLawyersWithFilter?location=${id}`);
    setCategoryInfo(data?.data);
  }

  useEffect(()=>{
    fetchServiceInfo()
  },[])

 

  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  return (
    <>
      <Navbar />
      <Phone />

      <div className="seventSecond"></div>

      <div className="seventScreen">
        <div className="left">
       

      


       

            

         

          <div className="seventScreenFivth">
            <p className="head">List of Lawyers</p>
            <hr />

            {categoryInfo?.map((d,i)=>(
            <>
             <div className="threeSec">
              <img src={d?.image} alt="" style={{width:"80px", height:"80px", borderRadius:"50%"}}/>
              <div className="centerONe">
                <h3>Advocate. {d?.fullName || d?.firstName + " " + d?.lastName}</h3>
                <h4>{d?.categoryId[0]?.name}</h4>
                {d?.languages?.map((d,i)=>
          <span key={i}>{d +  ', '}</span>
          )}

                <div className="twoTwo">
                  <h6>Exp: {d?.experiance} yrs</h6>
                  <img src="./Images/91.png" alt="" />
                </div>

                <h6>{d?.minofconsultance}min. consultation</h6>
              </div>

              <div className="RightONe">
                <h4>consultation fee</h4>
                <h2> ₹{d?.consultancyCost}</h2>

                <button onClick={()=> alert("Please login your account")}>Consult now</button>
              </div>
            </div>
            <hr />
            </>
           )) }

          </div>
        </div>

        
      </div>

      <Footer />
    </>
  );
};

export default LawyerCity;
