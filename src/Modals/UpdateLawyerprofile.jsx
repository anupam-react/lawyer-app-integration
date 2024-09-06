/** @format */

import { Modal } from "react-bootstrap";

import { fetchApiData, updateApiData } from "../utils";

import { useEffect, useState } from "react";
import { successToast } from "../Component/Toast";
import Select from "react-select";

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
  const [languages, setLanguages] = useState([]);
  const [barCertificateNo, setBarCertificateNo] = useState("");
  const [barRegistrationNo, setBarRegistrationNo] = useState("");
  const [experiance, setExperiance] = useState("");
  const [bio, setBio] = useState("");
  const [hearingFee, setHearingFee] = useState("");
  const [minofconsultance, setMinofconsultance] = useState("");
  const [consultancyCost, setConsultancyCost] = useState("");
  const [language, setLanguage] = useState();
  const [selectedLang, setSelectedLang] = useState(null);

  async function fetchLanguage() {
    const data = await fetchApiData(
      "https://flyweisgroup.com/api/api/v1/admin/Language/All"
    );
    setLanguage(data?.data);
  }

  useEffect(() => {
    fetchLanguage();
  }, []);
  const handleLanguage = (option) => {
    console.log(option);
    setSelectedLang(option);
    setLanguages(option?.map((d) => d?.value));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    console.log(email, password);
    const formData = new FormData();
    if (email) formData.append("email", email);
    if (password) formData.append("password", password);
    if (name) formData.append("fullName", name);
    if (phone) formData.append("phone", phone);
    if (image) formData.append("image", image);
    if (firstLineAddress) formData.append("firstLineAddress", firstLineAddress);
    if (secondLineAddress)
      formData.append("secondLineAddress", secondLineAddress);
    if (country) formData.append("country", country);
    if (state) formData.append("state", state);
    if (district) formData.append("district", district);
    if (pincode) formData.append("pincode", pincode);
    if (barCertificateNo) formData.append("barCertificateNo", barCertificateNo);
    if (barRegistrationNo)
      formData.append("barRegistrationNo", barRegistrationNo);
    if (experiance) formData.append("experiance", experiance);
    if(languages?.length) languages?.map((d, i) => formData.append(`languages[${i}]`, d));
    if (bio) formData.append("bio", bio);
    if (hearingFee) formData.append("hearingFee", hearingFee);
    if (minofconsultance) formData.append("minofconsultance", minofconsultance);
    if (consultancyCost) formData.append("consultancyCost", consultancyCost);
    try {
      const response = await updateApiData(
        "https://flyweisgroup.com/api/api/v1/lawyer/update",
        formData
      );
      successToast("Update Successfully");
      props.onHide();
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
                  onChange={(e) => setImage(e.target.files[0])}
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
                  value={firstLineAddress || props?.data?.firstLineAddress}
                  onChange={(e) => setFirstLineAddress(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Second line address"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={secondLineAddress  || props?.data?.secondLineAddress}
                  onChange={(e) => setSecondLineAddress(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Country"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={country || props?.data?.country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="State"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={state || props?.data?.state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="District"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={district || props?.data?.district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Pin code"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={pincode || props?.data?.pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
              <div style={{ paddingRight: "30px" }}>
                <Select
                  isMulti
                  className="basic-multi-select"
                  placeholder="Select Languages"
                  styles={{ width: "20px" }}
                  value={selectedLang}
                  options={language?.map((user) => ({
                    value: user?.language,
                    label: user?.language,
                  }))}
                  defaultValue={language?.[0]?._id}
                  onChange={handleLanguage}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Bar Registration number"
                  style={{ borderRadius: "8px", padding: "5px" }}
                  value={barRegistrationNo || props?.data?.barRegistrationNo}
                  onChange={(e) => setBarRegistrationNo(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Bar Certificate"
                  style={{ padding: "5px", borderRadius: "8px" }}
                  value={barCertificateNo || props?.data?.barCertificateNo}
                  onChange={(e) => setBarCertificateNo(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Law Experiance"
                  style={{ padding: "5px", borderRadius: "8px" }}
                  value={experiance || props?.data?.experiance}
                  onChange={(e) => setExperiance(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Bio"
                  style={{ padding: "5px", borderRadius: "8px" }}
                  value={bio || props?.data?.bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="hearing fee"
                  style={{ padding: "5px", borderRadius: "8px" }}
                  value={hearingFee || props?.data?.hearingFee}
                  onChange={(e) => setHearingFee(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="min of consultance"
                  style={{ padding: "5px", borderRadius: "8px" }}
                  value={minofconsultance || props?.data?.minofconsultance}
                  onChange={(e) => setMinofconsultance(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Consultancy Cost"
                  style={{ padding: "5px", borderRadius: "8px" }}
                  value={consultancyCost || props?.data?.consultancyCost}
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
