/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";
import ThankYouModal from "../Modals/ThankYouModal";

const EightScreen = () => {
  const [ThankYouOpen, setThankYouOpen] = useState(false);

  const navigate = useNavigate();

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
        <img src="./Images/logo2.png" onClick={() => navigate("/")} alt="" />
        <i class="fa-solid fa-x" onClick={() => GoBack()}></i>
      </div>

      <div className="eightSecond">
        <button>Your Order Summary</button>
      </div>

      <div className="eightThird">
        <div className="left">
          <p className="head">Order Details</p>
          <form>
            <div className="inputGroup">
              <p>Email</p>
              <input type="text" />
            </div>
            <div className="inputGroup">
              <p>Name</p>
              <input type="text" />
            </div>
            <div className="inputGroup">
              <p>Mobile Number</p>
              <input type="text" />
            </div>
            <div className="inputGroup">
              <p>State</p>
              <input type="text" />
            </div>
            <div className="inputGroup">
              <p>Consultation Date</p>
              <input type="text" />
            </div>
          </form>
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
            <button onClick={() => setThankYouOpen(true)}>Pay Now</button>
          </div>

          <img src="./Images/92.png" alt="" style={{ marginTop: "20px" }} className='paymentImage' />
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

export default EightScreen;
