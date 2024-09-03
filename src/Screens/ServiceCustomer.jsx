/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Phone from "../Component/Phone";
import { fetchApiData } from "../utils";
import UserSide from "./User/UserSide";
import UserNav from "./User/UserNav";
import useLawyerProfile from "../hooks/useLawyerProfile";


const ServiceCustomer = () => {
  const { cusomerInfo , WalletInfo } = useLawyerProfile();
  const [updateProfile, setupdateProfile] = useState(false)

const [hamb, setHamb] = useState(true);
    const [categoryInfo, setCategoryInfo] = useState()
  const navigate = useNavigate()
  const { id } = useParams()
  

  
  async function fetchServiceInfo() {
    const data = await fetchApiData(`https://flyweisgroup.com/api/api/v1/category/${id}`);
    setCategoryInfo(data);
  }

  useEffect(()=>{
    fetchServiceInfo()
  },[])

 

  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  return (
    <>

<div>
        
      <section className="HocSection" style={{ height: "100vh" , overflow:"scroll" }}>
        <div className="HocSide">
          <UserSide WalletInfo={WalletInfo} UserInfo={cusomerInfo} />
        </div>

        <div className="HocNav">
          <UserNav hamb={hamb} setHamb={setHamb} />
          <div>
          <div className="seventScreen">
        <div className="left">
          <div className="upper">
            <img src={categoryInfo?.data?.image} alt="" />
            <div>
              <p className="head">{categoryInfo?.data?.category}</p>
              
            </div>
          </div>

          <div className="mid">


            <p className="over">Overview</p>
            <hr style={{ border: "1px solid #0F2C64" }} />

            <p className="desc">
             {categoryInfo?.data?.info}
            </p>

           
          </div>

        

          <div className="seventScreenFourth">
            <p className="head">Frequently Asked Questions</p>
            <hr />
{categoryInfo?.data?.faqs?.map((d, i)=>(
            <div className="twoSec">
              <p>{d?.question}</p>
         <p>{d?.answer}</p>
            </div>

))}
      
          </div>

          <div className="seventScreenFivth">
            <p className="head">List of Lawyers</p>
            <hr />

            {categoryInfo?.lawyer?.map((d,i)=>(
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

                <button onClick={()=>navigate(`/payment/${d?._id}`)}>Consult now</button>
              </div>
            </div>
            <hr />
            </>
           )) }

          </div>
        </div>

        
      </div>
         
          </div>
        </div>
      </section>

      <Footer />
    </div>
  
    </>
  );
};

export default ServiceCustomer;
