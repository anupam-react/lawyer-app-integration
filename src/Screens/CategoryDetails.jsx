/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Phone from "../Component/Phone";
import { fetchApiData } from "../utils";


const CategoryDetails = () => {
    const [categoryInfo, setCategoryInfo] = useState()
  const navigate = useNavigate()
  const { id } = useParams()
  

  
  async function fetchCategoryInfo() {
    const data = await fetchApiData(`https://flyweisgroup.com/api/api/v1/category/${id}`);
    setCategoryInfo(data);
  }

  useEffect(()=>{
    fetchCategoryInfo()
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
          <div className="upper">
            <img src={categoryInfo?.data?.image} alt="" />
            <div>
              <p className="head">{categoryInfo?.data?.name}</p>
              
            </div>
          </div>

          <div className="mid">


            <p className="over">Overview</p>
            <hr style={{ border: "1px solid #0F2C64" }} />

            <p className="desc">
             {categoryInfo?.data?.info}
            </p>

            {/* <p className="head2">Steps involved in a RERA complaint</p>

            <div className="towSec">
              <div className="empty"></div>
              <div>
                <p>Document Verification</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
            <div className="towSec">
              <div className="empty"></div>
              <div>
                <p>Complaint Drafting</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
            <div className="towSec">
              <div className="empty"></div>
              <div>
                <p>Filing of Complaint</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
            <div className="towSec">
              <div className="empty"></div>
              <div>
                <p>Reply</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
            <div className="towSec">
              <div className="empty"></div>
              <div>
                <p>Hearing and Arguments</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
            <div className="towSec">
              <div className="empty"></div>
              <div>
                <p>Judgment</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
            <div className="towSec">
              <div className="empty"></div>
              <div>
                <p>Execution</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div> */}
          </div>

          {/* <div className="seventScreenThird">
            <div className="mina">
              <img
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                alt=""
              />
              <div>
                <p>Charandas Singh</p>
                <p>New Delhi, India</p>
              </div>
            </div>
            <p className="desc">
              Got my property issues solved by a lawyer I was put in touch with
              by MyAdvo's team. I was relieved after I received full refund for
              possession delay. Smooth and transparent service that I highly
              recommend!
            </p>
          </div> */}

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

export default CategoryDetails;
