import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useAdminLogin from "../hooks/useAdminLogin";

const AdminSignInModal = ({ selectedOption2, handleSingUpChange }) => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    firstLineAddress,
    setFirstLineAddress,
    secondLineAddress,
    setSecondLineAddress,
    country,
    setCountry,
    state,
    setState,
    district,
    setDistrict,
    pincode,
    setPincode,
    languages,
    setLanguages,
    barCertificateNo,
    setBarCertificateNo,
    experiance,
    setExperiance,
    barRegistrationImage,
    barCertificateImage,
    aadhar,
    barRegistrationNo,
    setBarRegistrationNo,
    skills,
    setSkills,
    isChecked,
    handleCheckboxChange,
    handleRegister,
    handleBarRegistrationImageChange,
    handleBarCertificateImageChange,
    handleAadharChange,
  } = useAdminLogin();
  const [second, setSecond] = useState(false);
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("Costumer");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <form>
        <div className="icons">
          <div className="google-button">
            <img src="../Images/40.png" alt="" />
            <span>Google</span>
          </div>
          <div className="google-button">
            <img src="../Images/41.png" alt="" />
            <span>Facebook</span>
          </div>
        </div>

        <div className="form-conatiner">
          <div>
            <select value={selectedOption2} onChange={handleSingUpChange}>
              <option value="Costumer">Costumer </option>
              <option value="Lawyer">Lawyer </option>
            </select>
          </div>
          <div>
            <i class="fa-solid fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ paddingLeft: "65px" }}
            />
          </div>

          <div>
            <i class="fa-solid fa-user"></i>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ paddingLeft: "65px" }}
            />
          </div>

          <div>
            <i class="fa-solid fa-phone"></i>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ paddingLeft: "65px" }}
            />
          </div>

          <div>
            <i class="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingLeft: "65px" }}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="First line address"
              value={firstLineAddress}
              onChange={(e) => setFirstLineAddress(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Second line address"
              value={secondLineAddress}
              onChange={(e) => setSecondLineAddress(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="District"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Pin code"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Languages Known"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Bar Registration number"
              value={barRegistrationNo}
              onChange={(e) => setBarRegistrationNo(e.target.value)}
            />
          </div>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Bar Registration number"
              style={{ paddingRight: "40px" }}
              value={barRegistrationImage?.name}
            />
            <label for="bar-file">
              <img
                src="./Vector (5).png"
                alt=""
                style={{ position: "absolute", top: "60%", right: "6%" }}
              />
            </label>
            <input
              type="file"
              id="bar-file"
              style={{ display: "none" }}
              name=""
              onChange={handleBarRegistrationImageChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Bar Certificate"
              value={barCertificateNo}
              onChange={(e) => setBarCertificateNo(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Law Experiance"
              value={experiance}
              onChange={(e) => setExperiance(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Bar Certificate"
              style={{ paddingRight: "40px" }}
              value={barCertificateImage?.name}
            />
            <label for="bar-file1">
              <img
                src="./Vector (5).png"
                alt=""
                style={{ position: "absolute", top: "60%", right: "6%" }}
              />
            </label>
            <input
              type="file"
              id="bar-file1"
              style={{ display: "none" }}
              name=""
              onChange={handleBarCertificateImageChange}
            />
          </div>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Adaahar"
              value={aadhar?.name}
              style={{ paddingRight: "40px" }}
            />
            <label for="bar-file2">
              <img
                src="./Vector (5).png"
                alt=""
                style={{ position: "absolute", top: "60%", right: "6%" }}
              />
            </label>
            <input
              type="file"
              id="bar-file2"
              style={{ display: "none" }}
              name=""
              onChange={handleAadharChange}
            />
          </div>
        </div>

        <button className="login" onClick={handleRegister}>
          Sign Up
        </button>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <input
            type="checkbox"
            style={{
              width: "20px",
              height: "20px",
              marginTop: "5px",
            }}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p>
            I agree with all{" "}
            <span style={{ color: "red" }}>terms & condition</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AdminSignInModal;
