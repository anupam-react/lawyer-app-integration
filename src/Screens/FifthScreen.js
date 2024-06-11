/** @format */

import React, { useEffect } from "react";
import Footer from "../Component/Footer";
import Navbar2 from "../Component/Navbar2";
import useSupport from "../hooks/useSupport";
import useQuery from "../hooks/useQuery";

const FifthScreen = () => {
  const { support } = useSupport()
  const {  
    name,
    setName,
    email,
    setEmail,
    mobile,
    setMobile,
    query,
    setQuery,
    handleRequest
  } = useQuery()

  useEffect(() => {
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
              <p>{support?.email}</p>
            </div>
            <div>
              <i class="fa-solid fa-phone"></i>
              <p>{support?.mobileNumber}</p>
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
              <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div>
              <label>Email Address</label>
              <br />
              <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div>
              <label>Mobile Number</label>
              <br />
              <input type="text" value={mobile} onChange={(e)=> setMobile(e.target.value)}/>
            </div>
            <div>
              <label>Details</label>
              <br />
              <textarea value={query} onChange={(e)=> setQuery(e.target.value)}/>
            </div>
            <button onClick={handleRequest}>Submit</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FifthScreen;
