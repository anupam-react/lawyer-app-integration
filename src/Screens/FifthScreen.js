/** @format */

import React, { useEffect } from "react";
import Footer from "../Component/Footer";
import Navbar2 from "../Component/Navbar2";

const FifthScreen = () => {

  useEffect(() => {
    alert('dsad')
    window.scrollTo(0,0)
  },[])

  
  return (
    <>
      <Navbar2 />

      <div className="fifthScreen">
        <div className="left">
          <h2>Contact Us</h2>
          <p className="desc"> 
            Contact us for any query regarding your legal issues. Our expert
            legal team will connect <br /> with you at the earliest.
          </p>

          <div className="two-sec">
            <div>
              <i class="fa-solid fa-envelope"></i>
              <p>support@advo.in</p>
            </div>
            <div>
              <i class="fa-solid fa-phone"></i>
              <p>+91-88514-92215</p>
            </div>
          </div>

          <div className="two-sec">
            <div>
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <p>
              Fourth Floor, Plot No 80, Sector 44, <br />
              Gurugram, Haryana 122003
            </p>
            </div>
          </div>

          <img src='./Images/69.png' alt='' />
        </div>

        <div className="right">
          <form>
            <div>
              <label>Name</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Email Address</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Mobile Number</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Details</label>
              <br />
              <textarea />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FifthScreen;
