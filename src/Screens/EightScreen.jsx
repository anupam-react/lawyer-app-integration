/** @format */

import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Component/Footer";
import ThankYouModal from "../Modals/ThankYouModal";
import useBookAppointment from "../hooks/useBookAppointment";
import useRazorpay from "react-razorpay";
import { createApiData, fetchApiData } from "../utils";

const Order = () => {
  const [ThankYouOpen, setThankYouOpen] = useState(false);
  const [userInfo, setUserInfo] = useState()
  const [appointmentDate, setAppointmentDate] = useState()
  const [appointmentType, setAppointmentType] = useState()
  const [appointmentTime, setAppointmentTime] = useState()


  const {id} = useParams()

  const getUserInfo = async ()=>{
    const userData = await fetchApiData(`https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/User/${id}`)
    setUserInfo(userData?.data)
  }

  useEffect(()=>{
    getUserInfo()
   
  },[id])
  const totalPay =  userInfo?.consultancyCost + Math.round(userInfo?.consultancyCost /18)
 console.log(totalPay)



  const [Razorpay, isLoaded] = useRazorpay();

  const handlePayment =  useCallback( async () => {
    // const order = await createOrder(params);

    const options = {
      key: "rzp_test_SIyQ7CGdRlVT9y",
      amount: totalPay * 100,
      currency: "INR",
      name: "Lawbstar",
      description: "Test Transaction",
      image: "../Images/logo.png",
    //   order_id: order.id,
    handler: async (response) => {
      try {
        const paymentId = response.razorpay_payment_id;
        console.log(paymentId)
        const formData = {
          lawyerId: id,
          appointmentDate: appointmentDate,
          appointmentType: appointmentType,
          appointmentTime: appointmentTime
        }
        await createApiData(
          "https://shlok-mittal-lawyer-backend.vercel.app/api/v1/customer/create/Appointment",
          formData
        );
        await createApiData(
          "https://shlok-mittal-lawyer-backend.vercel.app/api/v1/user/payNowForWebsite",
          {amount: `${totalPay}`,
          reciverId: id,
          id:paymentId
          }
        );
       } catch (err) {
         console.log(err);
       }
     
      
    },
      prefill: {
        name: userInfo?.fullName,
        email: userInfo?.email,
        contact: userInfo?.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay , totalPay]);

  // useEffect(() => {
  //   if (isLoaded) {
  //     handlePayment();
  //   }
  // }, [isLoaded, handlePayment])

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
              <input type="text" value={appointmentType} name="appointmentType" onChange={(e)=>setAppointmentType(e.target.value)}/>
            </div>
            <div className="inputGroup">
              <p>Consultation Time</p>
              <input type="time" value={appointmentTime} name="appointmentTime" onChange={(e)=>setAppointmentTime(e.target.value)}/>
            </div>
            <div className="inputGroup">
              <p>Consultation Date</p>
              <input type="date" value={appointmentDate} name="appointmentDate" onChange={(e)=>setAppointmentDate(e.target.value)}/>
            </div>
          </div>
          {/* <div style={{display:"flex", justifyContent:"center" , marginTop:"30px"}}>
          <button onClick={()=>handleBookAppointment(id)} style={{ fontSize: "18px", borderRadius:"10px", border:"none", backgroundColor:"white", fontWeight: 700, padding:"8px 0px", width: "150px" , marginBottom:"10px" }}>
          Book Consult
        </button>

          </div> */}
        </div>

        <div className="right">
          <div className="upper">
            <p className="head">Your Order Summary</p>
            <hr />

            <p className="head2">Payment Details</p>
            <div className="main">
              <div className="two-Sec">
                <p>Booking Charges</p>
                <p>₹{userInfo?.consultancyCost}</p>
              </div>
              <input type="text" placeholder="Enter promo code here" />
            </div>
            <div className="main">
              <div className="two-Sec">
                <p>IGST (18%)</p>
                <p>₹{Math.round(userInfo?.consultancyCost /18)}</p>
              </div>
            </div>

            <hr />

            <div className="main">
              <div className="two-Sec">
                <p style={{ color: "black" }}>TOTAL PAYABLE AMOUNT</p>
                <p style={{ color: "black" }}>₹{totalPay}</p>
              </div>
            </div>

            <p className="desc">
              You will be redirected to secure PayU payment page
            </p>
            <button
              style={{ padding: "5px 0px" }}
              onClick={handlePayment}
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
