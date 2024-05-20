/** @format */

import React, { useEffect } from "react";
import HOC from "./User/HOC";
import useAllLawyers from "../hooks/useAllLawyers";
import LawyerCard from "./LawyerCard";
import useUpcomingAppointment from "../hooks/useUpcomingAppointment";
import StarRating2 from "./User/StarRating2";

const Ninth = () => {
 const { UserInfo } = useAllLawyers();
 const { upcomingAppointment } = useUpcomingAppointment() 
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  return (
    <>
      <h4 className="centerNinthHeading">Upcoming Consultation</h4>

      <div className="NinthFirst">
        <div className="left">
          {UserInfo?.map((d, i)=>(
           <LawyerCard unique={i} data={d}/>
          ))}
        </div>

        <div className="rightFirst">
          <p className="head">Upcoming Consultation</p>

          <div className="two-Sec">
          <div>
      <img
        src=""
        alt=""
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "20px",
        }}
      />
      <div style={{ position: "relative" }}>
        <img
          src="./Group 9457.png"
          alt=""
          style={{ width: "90px", height: "60px", marginTop: "-40px" }}
        />
        <div
          style={{
            position: "absolute",
            top: "-15px",
            right: "14%",
            color: "white",
            fontSize: "10px",
            fontWeight: 600,
          }}
        >
          Legal Advisor
        </div>
      </div>
    </div>

            <div>
              <p className="firstP">Adv. Suhani</p>
              <p className="secondP">Legal advisor , Corporate Advisor </p>
              <p className="secondP">English, Hindi, Punjabi</p>

              <div className="two-Sec" style={{ marginTop: "0" }}>
                <p className="secondP">Exp: 21 yrs</p>
                <div style={{ position: "relative" }}>
          <img src="./Group (2).png" alt="" />
          <div
            style={{
              position: "absolute",
              top: "5px",
              left: "25%",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <img
              src="./Star 2.png"
              alt=""
              style={{ height: "12px", width: "10px" }}
            />
            <div style={{ color: "white", fontSize: "14px" }}>4.5</div>
          </div>
        </div>
              </div>
            </div>
          </div>

          <button style={{ fontSize: "20px", fontWeight:700 , width:"120px" }}>Consult</button>

          <div className="NonthThird">
            <div>
              <p>/ Hearing Fees</p>
              <p>
                {" "}
                <span style={{ color: "red" ,  textDecoration: "line-through", }}>₹3300/Hearing </span>{" "}
                ₹3300/Hearing{" "}
              </p>
            </div>

            <div style={{ borderLeft: "1px solid black", paddingLeft: "10px" }}>
              <p>Mins of consultation</p>
              <p>665644 mins</p>
            </div>
          </div>

          <p className="NinthFourth">Advocate Suhani Expertise</p>

          <div className="NinthFifth">
            <div>
              <img src="./Images/99.png" alt="" />
              <p>
                Legal <br /> Advisor
              </p>
            </div>
            <div>
              <img src="./Images/99.png" alt="" />
              <p>
                Corporate <br /> Advisor
              </p>
            </div>
          </div>

          <p className="NinthFourth">Advocate Suhani Skills</p>
          <div className="NinthFifth">
            <div>
              <img src="./Images/99.png" alt="" />
              <p>
                Legal <br /> Advisor
              </p>
            </div>
            <div>
              <img src="./Images/99.png" alt="" />
              <p>
                Real estate <br /> Lawyer
              </p>
            </div>
            <div>
              <img src="./Images/99.png" alt="" />
              <p>
                Corporate <br /> Lawyer
              </p>
            </div>
            <div>
              <img src="./Images/99.png" alt="" />
              <p>
                Legal <br /> Advisor
              </p>
            </div>
          </div>

          <div className="descRip">
            <p className="head">About Me</p>
            <p className="desc">
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful c
            </p>
          </div>

          <div className="Stars">
            <StarRating2 rating="4.5"/>
            <p>4.95</p>
          </div>

          <p style={{ marginLeft: "7%", marginTop: "0" , fontFamily : 'Open Sans' }}>
            Based on 1348 Reviews
          </p>

          <div className="NinthSixth">
            <div className="under">
              <div className="left">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt=""
                />
                <div>
                  <p>Russie Taylor</p>
                  <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>

              <div className="right">
                <p className="first" >Cannulation</p>
                <p className="second">15 March,2021</p>
              </div>
            </div>

            <p className="Alloy">Installation of alloy wheel</p>
          </div>

          <div className="consult">
            <div>
            <i class="fa-regular fa-message"></i>
              <p>Consult Now</p>
            </div>
            <div> <p> {'>'} </p> </div>
          </div>
          <div className="consult">
            <div>
            <i class="fa-regular fa-calendar"></i>
              <p>Availability</p>
            </div>
            <div> <p> {'>'} </p> </div>
          </div>
          <div className="consult">
            <div>
            <i class="fa-solid fa-video"></i>
              <p>Consultancy Cost @300/min</p>
            </div>
            <div> <p> {'>'} </p> </div>
          </div>
          <div className="consult">
            <div><p>Status (Active)</p>
            </div>
            <div>

              <div className="toogle-btn">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(Ninth);
