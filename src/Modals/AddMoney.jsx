/** @format */

import { Modal } from "react-bootstrap";

import { createApiData, } from "../utils";

import { useCallback, useState } from "react";
import useRazorpay from "react-razorpay";
import { successToast } from "../Component/Toast";
import useLawyerProfile from "../hooks/useLawyerProfile";

function AddMoney(props) {
  const { cusomerInfo  } = useLawyerProfile();


const [amount , setAmount] = useState("")
const [Razorpay, isLoaded] = useRazorpay();

const handlePayment =  useCallback( async () => {
  // const order = await createOrder(params);

  const options = {
    key: "rzp_test_SIyQ7CGdRlVT9y",
    amount: amount * 100,
    currency: "INR",
    name: "Lawbstar",
    description: "Test Transaction",
    image: "./Images/logo.png",
  //   order_id: order.id,
  handler: async (response) => {
    try {
     const paymentId = response.razorpay_payment_id;
     console.log(paymentId)
     const addMoney = await createApiData('https://flyweisgroup.com/api/api/v1/user/addMoney', {amount: amount , id: paymentId})
     console.log(addMoney);
    } catch (err) {
      console.log(err);
    }
  },
    prefill: {
      name: cusomerInfo?.fullName ,
      email: cusomerInfo?.email,
      contact: cusomerInfo?.phone,
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
  props.onHide()
}, [Razorpay , amount]);



//   const handleSendRequest = async (event) => {
//     event.preventDefault();
//     const formData = {
//       paymentMethod,
//       amount,
//       ifsc,
//       accountNumber,
//       name,
//       upiId,
//       mobileNumber,
//       message
//     };
// console.log(formData)
//     try {
//       const response = await createApiData(
//         'https://flyweisgroup.com/api/api/v1/user/withdrawRequest',
//         formData
//       );
//       successToast("Send AddMoney Request");
//       props.onHide()
//       setPaymentMethod("BANK")
//       setAmount("")
//       setifsc("")
//       setAccountNumber("")
//       setName("")
//       setupiId("")
//       setMobileNumber("")
//       setMessage("")
//     } catch (error) {
//       console.log(error);
//       return error;
//     }
//   };




  return (
    <>
      <Modal
        {...props}
        size="sl"
        aria-labelledby="contained-modal-title-vcenter"
        className="newModal"
        centered
      >
        <Modal.Body>
          <div className="paymentModal">
            <p className="head">ADD MONEY TO Wallet</p>
            <i class="fa-solid fa-x" onClick={() => props.onHide()}></i>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Amount</label>
                <input type="text" value={amount} onChange={(e)=> setAmount(e.target.value)} style={{borderRadius:"8px" , padding:"5px"}} placeholder=""/>
            </div>
           
           <button onClick={handlePayment}>Add</button>
            </div>
        </Modal.Body>
      </Modal>
    </>

  );
}

export default AddMoney;
