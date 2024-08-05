/** @format */

import { Modal } from "react-bootstrap";

import { updateApiData } from "../utils";

import { useState } from "react";
import { successToast } from "../Component/Toast";

function UpdateLawyerprofile(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [firstLineAddress, setFirstLineAddress] = useState("");
  const [secondLineAddress, setSecondLineAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [languages1, setLanguages1] = useState("");
  const [languages2, setLanguages2] = useState("");
  const [skills, setSkills] = useState("");
  const [barCertificateNo, setBarCertificateNo] = useState("");
  const [barRegistrationNo, setBarRegistrationNo] = useState("");
  const [experiance, setExperiance] = useState("");
  const [bio, setBio] = useState("");
  const [hearingFee, setHearingFee] = useState("");
  const [minofconsultance, setMinofconsultance] = useState("");
  const [consultancyCost, setConsultancyCost] = useState("");

  const handleUpdate = async (event) => {
    event.preventDefault();

    console.log(email, password);
    const formData = new FormData();
   if(email) formData.append("email", email);
   if(password) formData.append("password", password);
   if(name) formData.append("fullName", name);
   if(phone) formData.append("phone", phone);
   if(image) formData.append("image", image);
   if(firstLineAddress) formData.append("firstLineAddress", firstLineAddress);
   if(secondLineAddress) formData.append("secondLineAddress", secondLineAddress);
   if(country) formData.append("country", country);
   if(state) formData.append("state", state);
   if(district) formData.append("district", district);
   if(pincode) formData.append("pincode", pincode);
   if(barCertificateNo) formData.append("barCertificateNo", barCertificateNo);
   if(barRegistrationNo) formData.append("barRegistrationNo", barRegistrationNo);
   if(experiance) formData.append("experiance", experiance);
   if(languages1) formData.append("languages[0]", languages1);
   if(languages2) formData.append("languages[1]", languages2);
   if(bio) formData.append("bio", bio);
   if(hearingFee) formData.append("hearingFee", hearingFee);
   if(minofconsultance) formData.append("minofconsultance", minofconsultance);
   if(consultancyCost) formData.append("consultancyCost", consultancyCost);
    try {
      const response = await updateApiData(
        "https://shlok-mittal-lawyer-backend.vercel.app/api/v1/lawyer/update",
        formData
      );
      successToast("Update Successfully");
    } catch (error) {
      console.log(error);
      return error;
    }
    props.onHide()
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
                  value={email}
                  style={{ borderRadius: "8px", padding: "5px" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={phone}
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
                  placeholder="First line address"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={firstLineAddress}
                  onChange={(e) => setFirstLineAddress(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Second line address"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={secondLineAddress}
                  onChange={(e) => setSecondLineAddress(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Country"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="State"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="District"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Pin code"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Languages Known1"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={languages1}
                  onChange={(e) => setLanguages1(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Languages Known2"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={languages2}
                  onChange={(e) => setLanguages2(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Bar Registration number"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={barRegistrationNo}
                  onChange={(e) => setBarRegistrationNo(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Bar Certificate"
                  style={{ padding: "5px", borderRadius: "8px" }}
                  value={barCertificateNo}
                  onChange={(e) => setBarCertificateNo(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Law Experiance"
                  style={{ padding: "5px", borderRadius: "8px" }}
                  value={experiance}
                  onChange={(e) => setExperiance(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Bio"
                  style={{ padding: "5px", borderRadius: "8px" }}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="hearing fee"
                  style={{ padding: "5px", borderRadius: "8px" }}
                  value={hearingFee}
                  onChange={(e) => setHearingFee(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="min of consultance"
                  style={{ padding: "5px", borderRadius: "8px" }}
                  value={minofconsultance}
                  onChange={(e) => setMinofconsultance(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Consultancy Cost"
                  style={{ padding: "5px", borderRadius: "8px" }}
                  value={consultancyCost}
                  onChange={(e) => setConsultancyCost(e.target.value)}
                />
              </div>
     
            </div>
            <button onClick={handleUpdate}>Update</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateLawyerprofile;
