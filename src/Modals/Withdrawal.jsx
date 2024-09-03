/** @format */

import { Modal } from "react-bootstrap";

import { createApiData, } from "../utils";

import { useEffect, useState } from "react";
import { successToast } from "../Component/Toast";

function Withdrawal(props) {

const [paymentMethod , setPaymentMethod] = useState("BANK")
const [amount , setAmount] = useState("")
const [ifsc , setifsc] = useState("")
const [accountNumber , setAccountNumber] = useState("")
const [name , setName] = useState("")
const [upiId , setupiId] = useState("")
const [mobileNumber , setMobileNumber] = useState("")
const [message  , setMessage] = useState([])



  const handleSendRequest = async (event) => {
    event.preventDefault();
    const formData = {
      paymentMethod,
      amount,
      ifsc,
      accountNumber,
      name,
      upiId,
      mobileNumber,
      message
    };
console.log(formData)
    try {
      const response = await createApiData(
        'https://flyweisgroup.com/api/api/v1/user/withdrawRequest',
        formData
      );
      successToast("Send Withdrawal Request");
      props.onHide()
      setPaymentMethod("BANK")
      setAmount("")
      setifsc("")
      setAccountNumber("")
      setName("")
      setupiId("")
      setMobileNumber("")
      setMessage("")
    } catch (error) {
      console.log(error);
      return error;
    }
  };




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
            <p className="head">Withdrawal Request</p>
            <i class="fa-solid fa-x" onClick={() => props.onHide()}></i>
           <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
           <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Payment Method</label>
                <div style={{display:"flex", justifyContent:"space-between"}}>
         <div onClick={()=> setPaymentMethod("BANK")} className={paymentMethod === "BANK" ? "select-address" : "nonselect-address"}>
         BANK
         </div>
         <div onClick={()=> setPaymentMethod("UPI")} className={paymentMethod === "UPI" ? "select-address" : "nonselect-address"}>
         UPI
         </div>
         <div onClick={()=> setPaymentMethod("GOOGLE_PAY")} className={paymentMethod === "GOOGLE_PAY" ? "select-address" : "nonselect-address"}>
         GOOGLE_PAY
         </div>
        
            </div>
            </div>
        {paymentMethod === "BANK" && 
        <>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Name</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} style={{borderRadius:"8px", padding:"5px"}}/>
            </div>
           
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Mobile Number*</label>
                <input type="text" value={mobileNumber} onChange={(e)=> setMobileNumber(e.target.value)} style={{borderRadius:"8px" , padding:"5px"}} placeholder=""/>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>IFSC </label>
                <input type="text" value={ifsc} onChange={(e)=> setifsc(e.target.value)} style={{borderRadius:"8px" , padding:"5px"}} placeholder=""/>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Account Number</label>
                <input type="text" value={accountNumber} onChange={(e)=> setAccountNumber(e.target.value)} style={{borderRadius:"8px" , padding:"5px"}} placeholder=""/>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Amount</label>
                <input type="text" value={amount} onChange={(e)=> setAmount(e.target.value)} style={{borderRadius:"8px" , padding:"5px"}} placeholder=""/>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Message</label>
                <input type="text" value={message} onChange={(e)=> setMessage(e.target.value)} style={{borderRadius:"8px" , padding:"5px"}} placeholder=""/>
            </div>
            </>
        
        }    
        {paymentMethod === "UPI" && 
        <>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Name</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} style={{borderRadius:"8px", padding:"5px"}}/>
            </div>
           
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Mobile Number*</label>
                <input type="text" value={mobileNumber} onChange={(e)=> setMobileNumber(e.target.value)} style={{borderRadius:"8px" , padding:"5px"}} placeholder=""/>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>UPI Id </label>
                <input type="text" value={upiId} onChange={(e)=> setupiId(e.target.value)} style={{borderRadius:"8px" , padding:"5px"}} placeholder=""/>
            </div>
           
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Amount</label>
                <input type="text" value={amount} onChange={(e)=> setAmount(e.target.value)} style={{borderRadius:"8px" , padding:"5px"}} placeholder=""/>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Message</label>
                <input type="text" value={message} onChange={(e)=> setMessage(e.target.value)} style={{borderRadius:"8px" , padding:"5px"}} placeholder=""/>
            </div>
            </>
        
        }    
        {paymentMethod === "GOOGLE_PAY" && 
        <>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Name</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} style={{borderRadius:"8px", padding:"5px"}}/>
            </div>
           
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Mobile Number*</label>
                <input type="text" value={mobileNumber} onChange={(e)=> setMobileNumber(e.target.value)} style={{borderRadius:"8px" , padding:"5px"}} placeholder=""/>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Amount</label>
                <input type="text" value={amount} onChange={(e)=> setAmount(e.target.value)} style={{borderRadius:"8px" , padding:"5px"}} placeholder=""/>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Message</label>
                <input type="text" value={message} onChange={(e)=> setMessage(e.target.value)} style={{borderRadius:"8px" , padding:"5px"}} placeholder=""/>
            </div>
            </>
        
        }    
           
           </div>
           <button onClick={handleSendRequest}>Send Request</button>
            </div>
        </Modal.Body>
      </Modal>
    </>

  );
}

export default Withdrawal;
