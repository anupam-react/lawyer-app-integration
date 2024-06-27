/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Component/Footer";
import ThankYouModal from "../Modals/ThankYouModal";
import useBookAppointment from "../hooks/useBookAppointment";

const Order = () => {
  const [ThankYouOpen, setThankYouOpen] = useState(false);
  const { appointmentType, handleBookAppointment, handleChange}= useBookAppointment()

  const navigate = useNavigate();

  const {id} = useParams()

  const GoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ThankYouModal
        show={ThankYouOpen}
        onHide={() => setThankYouOpen(false)}
      />

      <div className="eightFirst">
        <img src="../Images/logo2.png" onClick={() => navigate("/")} alt="" />
        <i class="fa-solid fa-x" onClick={() => GoBack()}></i>
      </div>

      <div className="eightSecond">
        <button>Your Order Summary</button>
      </div>

      <div className="eightThird">
        <div className="left">
          <p className="head">Order Details</p>
          <div>
            <div className="inputGroup">
              <p>Consultation Type</p>
              <input type="text" value={appointmentType?.appointmentType} name="appointmentType" onChange={handleChange}/>
            </div>
            <div className="inputGroup">
              <p>Consultation Time</p>
              <input type="time" value={appointmentType?.appointmentTime} name="appointmentTime" onChange={handleChange}/>
            </div>
            <div className="inputGroup">
              <p>Consultation Date</p>
              <input type="date" value={appointmentType?.appointmentDate} name="appointmentDate" onChange={handleChange}/>
            </div>
          </div>
          <div style={{display:"flex", justifyContent:"center" , marginTop:"30px"}}>
          <button onClick={()=>handleBookAppointment(id)} style={{ fontSize: "18px", borderRadius:"10px", border:"none", backgroundColor:"white", fontWeight: 700, padding:"8px 0px", width: "150px" , marginBottom:"10px" }}>
          Book Consult
        </button>

          </div>
        </div>

        <div className="right">
          <div className="upper">
            <p className="head">Your Order Summary</p>
            <hr />

            <p className="head2">Payment Details</p>
            <div className="main">
              <div className="two-Sec">
                <p>Booking Charges</p>
                <p>₹2,000</p>
              </div>
              <input type="text" placeholder="Enter promo code here" />
            </div>
            <div className="main">
              <div className="two-Sec">
                <p>IGST (18%)</p>
                <p>₹360</p>
              </div>
            </div>

            <hr />

            <div className="main">
              <div className="two-Sec">
                <p style={{ color: "black" }}>TOTAL PAYABLE AMOUNT</p>
                <p style={{ color: "black" }}>₹2,360</p>
              </div>
            </div>

            <p className="desc">
              You will be redirected to secure PayU payment page
            </p>
            <button
              style={{ padding: "5px 0px" }}
              onClick={() => setThankYouOpen(true)}
            >
              Pay Now
            </button>
          </div>

          <img
            src="../Images/92.png"
            alt=""
            style={{ marginTop: "20px" }}
            className="paymentImage"
          />
          <div className="down">
            <div className="two-sec">
              <img src="./Images/93.png" alt="" />
              <p>Advo Assurance</p>
            </div>
            <div className="two-sec2">
              <i class="fa-solid fa-lock"></i>
              <p>Fixed One-time Quote</p>
            </div>
            <div className="two-sec2">
              <i class="fa-solid fa-lock"></i>
              <p>Dedicated Case Manager</p>
            </div>
            <div className="two-sec2">
              <i class="fa-solid fa-lock"></i>
              <p>Timely Delivery</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Order;
