/** @format */

import React, {  useEffect, useState } from "react";
import Footer from "../Component/Footer";
import HomeCarousel from "../Component/HomeCarousel";
import LogoCarousel from "../Component/LogoCarousel";
import Navbar from "../Component/Navbar";
import Phone from "../Component/Phone";
import ReviewCarousel from "../Component/ReviewCarousel";
import CallBackModal from "../Modals/CallBackModal";
import SignInModal from "../Modals/SignInModal";
import useHome from "../hooks/useHome";
import useReview from "../hooks/useReview";

const HomeScreen = () => {
  const [isOn, setIsOn] = useState(false);
  const [ modalShow , setModalShow] = useState(false)
  const [ modalShow2 , setModalShow2] = useState(false)

  const {  
    trusted,
    userLove,
    legal,
    government,
  }= useHome()

  const { review } = useReview()
    

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])


  return (
    <>
       <SignInModal show={modalShow} onHide={() => setModalShow(false)} />
       <CallBackModal show={modalShow2} onHide={() => setModalShow2(false)} />
      <Navbar />
      <HomeCarousel />

    <Phone/>
 

      <div className="home2btn">
        <button
          className={`${!isOn ? "btnOn" : ""}`}
          onClick={() =>  setIsOn(false)}
        >
          Legal Services
        </button>
        <button
          className={`${isOn ? "btnOn" : ""}`}
          onClick={() =>  setIsOn(true)}
        >
          Government Registrations
        </button>
      </div>
{!isOn ? 
  <div className="homeThreeSec">
    {legal?.map((d, i)=>(
        <div className="main">
          <div className="first">
            <img src={d?.image} alt="" />
            <p>{d?.category}</p>
          </div>

          <div className="second">
            {/* <div className="under">
              <div className="two">
                <i class="fa-solid fa-star"></i>
                <p>4.4/5</p>
              </div>
              <p className="alone">15 reviews</p>
            </div>

            <div className="empty"></div> */}

            <div className="under">
              <div className="two">
                <img src={"./Images/6.png"} alt="" />
                <p>300+</p>
              </div>
              <p className="alone">Verified Lawyers</p>
            </div>
          </div>

          <hr />

          <div className="three">
            <p style={{ color: "Consultation starting from" }}>
              Consultation starting from
            </p>
            <p style={{ fontWeight: "bold" }}>₹2,000</p>
            <p style={{ color: "#0F2C64", fontWeight: "bolder" }}>
              Book Now {">"}
            </p>
          </div>
        </div>

    ))}
      </div>
      :
      <div className="homeThreeSec">
        {government?.map((d, i)=>(
        <div className="main">
          <div className="first">
            <img src={d?.image} alt="" />
            <p>{d?.category}</p>
          </div>

          <div className="second">
            {/* <div className="under">
              <div className="two">
                <i class="fa-solid fa-star"></i>
                <p>4.4/5</p>
              </div>
              <p className="alone">15 reviews</p>
            </div>

            <div className="empty"></div> */}

            <div className="under">
              <div className="two">
                <img src={"./Images/6.png"} alt="" />
                <p>300+</p>
              </div>
              <p className="alone">Verified Lawyers</p>
            </div>
          </div>

          <hr />

          <div className="three">
            <p style={{ color: "Consultation starting from" }}>
              Consultation starting from
            </p>
            <p style={{ fontWeight: "bold" }}>₹2,000</p>
            <p style={{ color: "#0F2C64", fontWeight: "bolder" }}>
              Book Now {">"}
            </p>
          </div>
        </div>

    ))}
      </div>
}
      

      <div className="HomeCenterInput">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Looking for something specific?" />
      </div>

      <div className="centerHeading">
        <p>Why users love Us</p>
      </div>

      <div className="HomeThreeSec">
        {userLove?.map((d,i)=>(
        <div key={i}>
          <img src={d?.image} alt="" style={{width:'250px', height:"120px"}}/>
          <p className="heading">{d?.title}</p>
          <p className="desc">
           {d?.description}
          </p>
        </div>

        ))}
      
        {/* <div>
          <img src="./Images/8.png" alt="" />
          <p className="heading">Fixed Pricing</p>
          <p className="desc">
            Prices are fixed across various services and <br /> consultation{" "}
          </p>
        </div>

        <div>
          <img src="./Images/9.png" alt="" />
          <p className="heading">Expert Lawyers</p>
          <p className="desc">24x7 Expert assistance for any legal problem</p>
        </div>

        <div>
          <img src="./Images/10.png" alt="" />
          <p className="heading">Dedicated Support</p>
          <p className="desc">
            Case Manager assist you throughout the <br /> case lifecycle
          </p>
        </div> */}
      </div>

      <div className="centerHeading">
        <p>Trusted by 400+ Businesses</p>
      </div>

      <LogoCarousel data={trusted}/>

      <ReviewCarousel>
        {review?.map((d, i)=>(
      <div className='review-container' key={i}>
    <p>{d?.comment}
</p>
<div className='reviwer-info'>
        <img src="" alt="" style={{width:"50px" , height:"50px" , borderRadius:"50%"}}/>
    <div className='reviwer-name'>
        <div style={{color:"#2B2D3C" , fontSize:"14px", fontWeight:700}}>{d?.userId?.fullName || d?.userId?.firstName + " " + d?.userId?.lastName  }</div>
        <div style={{color:"#A2A5B8" }}>{d?.userId?.district} , {d?.userId?.country} </div>
    </div>
</div>
</div>
        ))}
 
      </ReviewCarousel>

      <div className="homeFistSec">
        <p className="head">Make legal simple with Us!</p>
        <p className="desc">
          400+ Corporates and 27,000+ Customers successfully connected with
          10,000+ top Lawyers.
        </p>
        <div className="two-btn">
          <button
            style={{
              color: "#0f2c64",
              backgroundColor: "rgba(15, 44, 100, 0.1)",
            }}
            onClick={() => setModalShow(true)}
          >
            Sign Up
          </button>
          <button
           style={{
              color: "#fff",
              backgroundColor: "#0f2c64",
            }}
            onClick={() => setModalShow2(true)}
          >Request a callback</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomeScreen;
