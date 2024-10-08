/** @format */

import { Modal } from "react-bootstrap";

import { updateApiData } from "../utils";

import { useState } from "react";
import { successToast } from "../Component/Toast";

function UpdateCustomerProfile(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [kyc, setkyc] = useState("");
  const [whatAppNotification, setWhatAppNotification] = useState(false);
  const [blogNotification, setBlogNotification] = useState(false);
  
  const handleUpdate = async (event) => {
    event.preventDefault();

    console.log(email, password);
    const formData = new FormData();
    if(email) formData.append("email", email);
    if(password) formData.append("password", password);
    if(name) formData.append("fullName", name);
    if(phone) formData.append("phone", phone);
    if(image) formData.append("image", image);
    if(kyc) formData.append("kyc", kyc);
    if(whatAppNotification) formData.append("whatAppNotification", whatAppNotification);
    if(blogNotification) formData.append("blogNotification", blogNotification);
   
    try {
      const response = await updateApiData(
        "https://flyweisgroup.com/api/api/v1/customer/update",
        formData
      );
      successToast("Update Successfully");
      props.onHide()
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
            <p className="head">Update Profile</p>
            <i class="fa-solid fa-x" onClick={() => props.onHide()}></i>

            <div className="form-conatiner">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email || props?.data?.email}
                  style={{ borderRadius: "8px", padding: "5px" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={name || props?.data?.fullName}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={phone || props?.data?.phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Image"
                  style={{ padding: "5px", borderRadius: "8px" }}
                  value={image?.name}
                />
                <label for="bar-file">
                  <img
                    src="../Vector (5).png"
                    alt=""
                    style={{ position: "absolute", top: "10%", left: "70%" }}
                  />
                </label>
                <input
                  type="file"
                  id="bar-file"
                  style={{ display: "none" }}
                  name=""
                  onChange={(e)=> setImage(e.target.files[0])}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Password"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="kyc"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={kyc || props?.data?.kyc}
                  onChange={(e) => setkyc(e.target.value)}
                />
              </div>
              <div>
              <input type="checkbox"  style={{  marginRight: "5px" }} onChange={()=> setWhatAppNotification(!whatAppNotification)}   checked={whatAppNotification || props?.data?.whatAppNotification} />
              <label for="vehicle1">WhatApp Notification </label>
              </div>
              <div>
              <input type="checkbox"  style={{  marginRight: "5px" }} onChange={()=> setBlogNotification(!blogNotification)}   checked={blogNotification || props?.data?.blogNotification} />
              <label for="vehicle1">Blog Notification</label>
              </div>
            </div>
            <button onClick={handleUpdate}>Update</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateCustomerProfile;
