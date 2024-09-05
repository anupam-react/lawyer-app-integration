/** @format */

import { Modal } from "react-bootstrap";

import { createApiData, fetchApiData, getDateFromISOString } from "../utils";

import { useEffect, useState } from "react";
import { successToast } from "../Component/Toast";
import Select from "react-select";

function BillModal(props) {

const [isSelect , setSelect] = useState("Home")
const [billTo , setBillTo] = useState("")
const [customerId , setCustomerId] = useState("")
const [houseNo , setHouseNo] = useState("")
const [mobileNumber , setMobileNumber] = useState("")
const [completeAddress , setCompleteAddress] = useState("")
const [pinCode , setPin] = useState("")
const [selectedUser, setSelectedUser] = useState(null);
const [allUsers  , setAllUsers] = useState([])

const handleChange = (option) => {
  setSelectedUser(option)
  setCustomerId(option?.value);
};


const getAllCase = async ()=>{
    const caseData = await fetchApiData('https://flyweisgroup.com/api/api/v1/lawyer/case/all')
    setAllUsers(caseData?.data)

  }
  console.log(allUsers)

  const handleSendBill = async (event) => {
    event.preventDefault();
    const formData = {
        billTo,
        pinCode,
        houseNo,
        mobileNumber,
        completeAddress,
        addressType: isSelect
    };
console.log(formData)
    try {
      const response = await createApiData(
        `https://flyweisgroup.com/api/api/v1/lawyer/createBill/${customerId}`,
        formData
      );
      successToast("Send Bill Successfully");
      props.onHide()
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  useEffect(()=>{
    getAllCase()
  },[])


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
            <p className="head">Send Bill</p>
            <i class="fa-solid fa-x" onClick={() => props.onHide()}></i>
           <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Bill to*</label>
                <input type="text" value={billTo} onChange={(e)=> setBillTo(e.target.value)} style={{borderRadius:"8px", padding:"5px"}}/>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Select Customer</label>
                <Select
                        className="item"
                        
                        styles={{ width: "20px" }}
                        value={selectedUser}
                        options={allUsers?.map(d => ({
                          value: d?.userId?._id,
                          label: d?.userId?.fullName || d?.userId?.firstName + " " + d?.userId?.lastName
                        }))}
                        defaultValue={allUsers?.[0]?.userId?._id}
                        onChange={handleChange}
                    />
              {/* <select name="" id=""  value={customerId} onChange={(e)=> setCustomerId(e.target.value)}>
                {allUsers?.map((d, i)=>(
                    <option value={d?.userId?._id}>{d?.userId?.fullName || d?.userId?.firstName + " " + d?.userId?.lastName }</option>

                ))}
              </select> */}
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Pincode*</label>
                <input type="text" value={pinCode} onChange={(e)=> setPin(e.target.value)} style={{borderRadius:"8px" , padding:"5px"}} placeholder="e.g. 440009"/>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>House Number and building*</label>
                <input type="text"  value={houseNo} onChange={(e)=> setHouseNo(e.target.value)} style={{borderRadius:"8px" , padding:"5px"}} placeholder="e.g. oberoi height"/>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Mobile Number*</label>
                <input type="text" value={mobileNumber} onChange={(e)=> setMobileNumber(e.target.value)} style={{borderRadius:"8px" , padding:"5px"}} placeholder=""/>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Complete Address* </label>
                <input type="text" value={completeAddress} onChange={(e)=> setCompleteAddress(e.target.value)} style={{borderRadius:"8px" , padding:"5px"}} placeholder=""/>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Address type*</label>
                <div style={{display:"flex", justifyContent:"space-between"}}>
         <div onClick={()=> setSelect("Home")} className={isSelect === "Home" ? "select-address" : "nonselect-address"}>
            Home
         </div>
         <div onClick={()=> setSelect("Work")} className={isSelect === "Work" ? "select-address" : "nonselect-address"}>
         Work
         </div>
         <div onClick={()=> setSelect("Other")} className={isSelect === "Other" ? "select-address" : "nonselect-address"}>
         Other
         </div>
        
                </div>
            </div>
           </div>
           <button onClick={handleSendBill}>Proceed To Buy</button>
            </div>
        </Modal.Body>
      </Modal>
    </>

  );
}

export default BillModal;
