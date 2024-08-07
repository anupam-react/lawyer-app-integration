/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentModal from "../../Modals/PaymentModal";
import PaymentModalUser from "../../Modals/PaymentModalUser";


const UserSide = ({UserInfo, WalletInfo}) => {

  const navigate = useNavigate();
  const [paymentModal, setPaymentModal] = useState(false);

  const handleLogOut = ()=> {
    sessionStorage.removeItem("token");
    navigate('/')
  }

  return (
    <>
      <PaymentModalUser show={paymentModal} onHide={() => setPaymentModal(false)} />

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
            <img src="../Images/95.png" alt="" />
            <p>₹{WalletInfo}</p>
          </div>
        </div>

        <div className="center">
        <div style={{ position: "relative", marginBottom: "20px" }}>
            <img
              src={UserInfo?.image}
              alt=""
              onClick={() => navigate("/user-profile")}
              style={{
                width: "120px",
                cursor: "pointer",
                height: "120px",
                borderRadius: "50%",
              }}
            />
            <div style={{ position: "relative" }}>
              <img
                src="./Group (3).png"
                alt=""
                style={{ marginTop: "-20px", marginRight: "50px" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-5%",
                  right: "22%",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <img
                  src="./Star 2 (1).png"
                  alt=""
                  style={{ height: "fit-content" }}
                />
                <div style={{ color: "#0F2C64", fontWeight: 700 }}>
                  {UserInfo?.rating}
                </div>
              </div>
            </div>
          </div>
          <p>{UserInfo?.fullName || UserInfo?.firstName + ' '+ UserInfo?.lastName}</p>
          <div className="empty"></div>
        </div>

        <button onClick={() => navigate("/ten")}>My Lawyers</button>
        <button onClick={() => navigate("/ninth")}>
          Upcoming Consultation
        </button>
        <button onClick={() => navigate("/eleven")}>Instant Appointment</button>
        <button onClick={() => navigate("/twelve")}> Saved Documents</button>
        <button onClick={() => navigate("/book-appointment")}>Book Appointment</button>
        <button onClick={() => navigate("/thirteen")}>Legal Services</button>
        <button className="lastOne">
        <img src="./Vector (6).png" alt="" />
        <div>
           Download
           <br />
         <span style={{fontSize:"16px"}}> our app now</span> 

        </div>
        </button>
      </div>
    </>
  );
};

export default UserSide;
