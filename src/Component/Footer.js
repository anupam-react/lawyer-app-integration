/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import useFooter from "../hooks/useFooter";
import useSupport from "../hooks/useSupport";

const Footer = () => {
  const navigate = useNavigate();
  const { 
    policy ,  
     legal,
    government,
    catInfo
   } = useFooter()
   const { support } = useSupport()
  return (
    <>
      <div className="footer">
        <div className="upper">
          <div>
            <p className="head specialHead">Policy</p>
            <p className="desc">
           {policy[0]?.content}
            </p>
            <img
              src="./Images/logo2.png"
              alt="logo"
              className="upperImg"
              onClick={() => navigate("/")}
            />
          </div>

          <div>
            <ul>
              <p className="head">Legal Services</p>
              {legal?.map((d, i)=>(
                <li key={i}>{">"}{d?.category}</li>

              ))}
           
            </ul>
          </div>

          <div>
            <ul>
              <p className="head">Government Registrations</p>
              {government?.map((d, i)=>(
                <li key={i}>{">"}{d?.category}</li>

              ))}
          
            </ul>
          </div>

          <div>
            <ul>
              <p className="head">Book Consultation</p>
              {catInfo?.map((d, i)=>(
                <li key={i}>{">"}{d?.name}</li>

              ))}
              
            </ul>
          </div>

          <div className="downWard">
            <p className="head"> Contact Info</p>
          </div>

          <div className="downWard">
            <ul style={{ display: "flex", gap: "10px" }}>
              <li>
                <i class="fa-solid fa-location-dot"></i>
              </li>
              <li>
                {" "}
                302, D 247/A4 Procapitus Business Park, <br />
                Sector 63, Noida Uttar Pradesh, <br />
                201301
              </li>
            </ul>
          </div>

          <div className="downWard">
            <ul style={{ display: "flex", gap: "10px" }}>
              <li>
                <i class="fa-solid fa-phone"></i>
              </li>
              <li>{support?.mobileNumber}</li>
            </ul>
          </div>

          <div className="downWard">
            <ul style={{ display: "flex", gap: "10px" }}>
              <li>
                <i class="fa-solid fa-envelope"></i>
              </li>
              <li>{support?.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
