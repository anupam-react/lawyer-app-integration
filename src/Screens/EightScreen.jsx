/** @format */

import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Component/Footer";
import ThankYouModal from "../Modals/ThankYouModal";
import useRazorpay from "react-razorpay";
import { createApiData, fetchApiData, updateApiData } from "../utils";
import { useRecoilState } from "recoil";
import { BookAppoint, Metting } from "../Component/Atoms/caseAtom";
import { successToast, warnToast } from "../Component/Toast";
import useCustomerProfile from "../hooks/useCustomerProfile";

const Order = ({isInstant = false}) => {
  const [ThankYouOpen, setThankYouOpen] = useState(false);
  const [appoinment, setAppoinment] = useRecoilState(BookAppoint);
  const [metting, setMetting] = useRecoilState(Metting);
  const [userInfo, setUserInfo] = useState();

  const { WalletInfo } = useCustomerProfile()

  const navigate = useNavigate();

  console.log(appoinment)


  const handleChange = (event) => {
    const { name, value } = event.target;
    setAppoinment((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const { id } = useParams();

  const getUserInfo = async () => {
    const userData = await fetchApiData(
      `https://flyweisgroup.com/api/api/v1/admin/User/${id}`
    );
    setUserInfo(userData?.data);
  };

  useEffect(() => {
    getUserInfo();
  }, [id]);

  const totalPay =
    userInfo?.consultancyCost * 10 + Math.round((userInfo?.consultancyCost * 10) / 18);
  console.log(appoinment);

  const [Razorpay, isLoaded] = useRazorpay();

  // const handlePayment = useCallback(async () => {
  //   // const order = await createOrder(params);

  //   const options = {
  //     key: "rzp_test_SIyQ7CGdRlVT9y",
  //     amount: totalPay * 100,
  //     currency: "INR",
  //     name: "Lawbstar",
  //     description: "Test Transaction",
  //     image: "../Images/logo.png",
  //     //   order_id: order.id,
  //     handler: async (response) => {
  //       try {
  //         const paymentId = response.razorpay_payment_id;
  //         console.log(appoinment);

  //         await createApiData(
  //           "https://flyweisgroup.com/api/api/v1/user/payNowForWebsite",
  //           { amount: `${totalPay}`, reciverId: id, id: paymentId }
  //         );
  //         const appoinmentId = sessionStorage.getItem("appoinmentId")
  //        const data =  await updateApiData(`https://flyweisgroup.com/api/api/v1/customer/appointmentStart/${appoinmentId}`)
  //        if(data?.data?.appointmentType?.toLowerCase() === "chat") navigate(`/chat/${id}`)
  //         else if(data?.data?.appointmentType?.toLowerCase() === "video-call"){

  //       navigate(`/videocall/${data?.data?.meetingId}`)
  //       setMetting(data?.data)
  //       }else{
  //         navigate(`/voiceCall/${data?.data?.meetingId}`)
  //         setMetting(data?.data)
  //       }
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     },
  //     prefill: {
  //       name: userInfo?.fullName,
  //       email: userInfo?.email,
  //       contact: userInfo?.phone,
  //     },
  //     notes: {
  //       address: "Razorpay Corporate Office",
  //     },
  //     theme: {
  //       color: "#3399cc",
  //     },
  //   };

  //   const rzpay = new Razorpay(options);
  //   rzpay.open();
  // }, [Razorpay, totalPay]);




  const handleBookInstantAppointment = async () => {
    console.log(WalletInfo , totalPay)
    if(WalletInfo < totalPay) return warnToast("Insufficient Balance")
    const formData = {
      lawyerId: id,
      appointmentDate: appoinment?.appointmentDate,
      appointmentType: appoinment?.appointmentType,
      appointmentTime: appoinment?.appointmentTime,
    };
    try {
      const response = await createApiData(
        "https://flyweisgroup.com/api/api/v1/customer/create/Appointment",
        formData
      );
      console.log(response)
      sessionStorage.setItem("appoinmentId",response?._id )
      setAppoinment(response?.data)
      successToast("Book Appoinment Successfully")
    } catch (error) {
      console.log(error);
      return error;
    }
    const appoinmentId = sessionStorage.getItem("appoinmentId")
    const data =  await updateApiData(`https://flyweisgroup.com/api/api/v1/customer/appointmentStart/${appoinmentId}`)
    if(data?.data?.appointmentType?.toLowerCase() === "chat") navigate(`/chat/${id}`)
     else if(data?.data?.appointmentType?.toLowerCase() === "video-call"){

   navigate(`/videocall/${data?.data?.meetingId}`)
   setMetting(data?.data)
   }else{
     navigate(`/voiceCall/${data?.data?.meetingId}`)
     setMetting(data?.data)
   }
  };


  const handleBookAppointment = async () => {
    const formData = {
      lawyerId: id,
      appointmentDate: appoinment?.appointmentDate,
      appointmentType: appoinment?.appointmentType,
      appointmentTime: appoinment?.appointmentTime,
    };
    try {
      const response = await createApiData(
        "https://flyweisgroup.com/api/api/v1/customer/create/Appointment",
        formData
      );
      console.log(response)
      sessionStorage.setItem("appoinmentId",response?._id )
      setAppoinment(response?.data)
      successToast("Book Appoinment Successfully")
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  // useEffect(() => {
  //   if (isLoaded) {
  //     handlePayment();
  //   }
  // }, [isLoaded, handlePayment])



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
        {isInstant ? 
        <div className="left">
          <p className="head">Order Details</p>
          <div>
            <div className="inputGroup">
              <p>Consultation Type</p>
              <select id="" value={appoinment?.appointmentType}
                name="appointmentType"
                onChange={handleChange}>
                <option value="video-call">Video Call</option>
                <option value="voice-call">Voice Call</option>
                <option value="chat">Chat</option>
              </select>
            </div>
        
          </div>
   
        </div> 

        :
        <div className="left">
        <p className="head">Order Details</p>
        <div>
          <div className="inputGroup">
            <p>Consultation Type</p>
            <select id="" value={appoinment?.appointmentType}
                name="appointmentType"
                onChange={handleChange}>
                <option value="video-call">Video Call</option>
                <option value="voice-call">Voice Call</option>
                <option value="chat">Chat</option>
              </select>
          </div>
        <div className="inputGroup">
          <p>Consultation Time</p>
          <input
            type="time"
            value={appoinment?.appointmentTime}
            name="appointmentTime"
            onChange={handleChange}
          />
        </div>
        <div className="inputGroup">
          <p>Consultation Date</p>
          <input
            type="date"
            value={appoinment?.appointmentDate}
            name="appointmentDate"
            onChange={handleChange}
          />
        </div>
        </div>
        <div style={{display:"flex", justifyContent:"center" , marginTop:"30px"}}>
        <button onClick={handleBookAppointment} style={{ fontSize: "18px", borderRadius:"10px", border:"none", backgroundColor:"white", fontWeight: 700, padding:"8px 0px", width: "100%" , marginBottom:"10px" }}>
        Book Consult
      </button>

        </div>
      </div> 
        
      }

        {isInstant &&
        <div className="right">
          <div className="upper">
            <p className="head">Your Order Summary</p>
            <hr />

            <p className="head2">Payment Details</p>
            <div className="main">
              <div className="two-Sec">
                <p>Booking Charges</p>
                <p>₹{userInfo?.consultancyCost * 10}</p>
              </div>
              <input type="text" placeholder="Enter promo code here" />
            </div>
            <div className="main">
              <div className="two-Sec">
                <p>IGST (18%)</p>
                <p>₹{Math.round((userInfo?.consultancyCost *10 )/ 18)}</p>
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
              onClick={() => {
          
                handleBookInstantAppointment();
              }}
            >
              Start
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
        }
      </div>

      <Footer />
    </>
  );
};

export default Order;
