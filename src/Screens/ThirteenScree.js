/** @format */

import React from "react";
import HOC from "./User/HOC";
import { useNavigate } from "react-router-dom";
import useHome from "../hooks/useHome";

const ThirteenScree = () => {
  const [isOn, setIsOn] = React.useState(false);

  const navigate = useNavigate('')
  const {  
    legal,
    government,
  }= useHome()

  return (
    <>
      <h4 className="centerNinthHeading">Services</h4>

      <div className="home2btn thirteenFirst">
        <button
          className={`${!isOn ? "btnOn" : ""}`}
          onClick={() => setIsOn(false)}
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
  <div className="homeThreeSec thirteenSecond">
    {legal?.map((d, i)=>( 
        <div className="main" style={{cursor:"pointer"}} key={i}  onClick={()=> navigate(`/service/${d?._id}`)}>
          <div className="first">
            <img src={d?.image} alt="" />
            <p>{d?.category}</p>
          </div>

          <div className="second">
      
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
      <div className="homeThreeSec thirteenSecond">
        {government?.map((d, i)=>(
        <div className="main" style={{cursor:"pointer"}} key={i}  onClick={()=> navigate(`/service/${d?._id}`)}>
          <div className="first">
            <img src={d?.image} alt="" />
            <p>{d?.category}</p>
          </div>

          <div className="second">
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

     
    </>
  );
};

export default HOC(ThirteenScree);
