/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentModal from "../../Modals/PaymentModal";

const UserSide = () => {
  const navigate = useNavigate();
  const [paymentModal, setPaymentModal] = useState(false);

  const handleLogOut = ()=> {
    sessionStorage.removeItem("token");
    navigate('/')
  }

  return (
    <>
      <PaymentModal show={paymentModal} onHide={() => setPaymentModal(false)} />

      <div className="UserSideBar">
        <div className="two-Sec">
          <div className="left" >
            <div style={{display:"flex" , alignItems:"center" , gap:"14px" , cursor:"pointer"}} onClick={handleLogOut}>
            <i class="fa-solid fa-right-from-bracket"></i>
            <p>Log out</p>

            </div>
          </div>

          <div
            className="right"
            onClick={() => setPaymentModal(true)}
            style={{ cursor: "pointer" }}
          >
            <img src="./Images/95.png" alt="" />
            <p>₹5,000</p>
          </div>
        </div>

        <div className="center">
          <img src="./Images/97.png" alt="" />
          <p>Suhani Shukla</p>
          <div className="empty"></div>
        </div>

        <button onClick={() => navigate("/ten")}>My Lawyers</button>
        <button onClick={() => navigate("/ninth")}>
          Upcoming Consultation
        </button>
        <button onClick={() => navigate("/eleven")}>Instant Appointment</button>
        <button onClick={() => navigate("/twelve")}> Saved Documents</button>
        <button onClick={() => navigate("/ten")}>Book Appointment</button>
        <button onClick={() => navigate("/thirteen")}>Legal Services</button>
        <button className="lastOne">
          {" "}
          <i class="fa-solid fa-play"></i> Download our app now
        </button>
      </div>
    </>
  );
};

export default UserSide;
