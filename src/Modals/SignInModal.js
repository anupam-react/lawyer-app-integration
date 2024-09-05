/** @format */

import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useCusomerLogin from "../hooks/useCusomerLogin";
import AdminSignInModal from "./AdminSignInModal";
import { auth, provider, signInWithPopup } from '../firebase-config';
import axios from "axios";

function SignInModal(props) {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    otp, setOtp,
    newPass , setNewPass,
    confirmPass , setConfirmPass,
    isChecked,
    handleCheckboxChange,
    handleRegister,
    handleLogin,
    handleAdminLogin,
    handleGoogleLoginUser,
    handleGoogleLoginLawyer,
  } = useCusomerLogin();

  const [active, setActive] = useState(0);

  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("Costumer");
  const [selectedOption2, setSelectedOption2] = useState("Costumer");

  console.log(selectedOption2);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSingUpChange = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleGoogleSignInUser = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User Info:', user);
      handleGoogleLoginUser(user)
      // Handle the logged-in user information (e.g., send it to your backend or store it in state)
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };
  const handleGoogleSignInLawyer = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User Info:', user);
      handleGoogleLoginLawyer(user)
      // Handle the logged-in user information (e.g., send it to your backend or store it in state)
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };


  const handleGenerateCustomerOtp = async(event)=>{
    event.preventDefault();
    const formData = {
      email
    };
    try {
      const response = await axios.post(
        "https://flyweisgroup.com/api/api/v1/customer/forgetPassword",
        formData
      );
      setActive(3)
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  const handleGenerateLawyerOtp = async(event)=>{
    event.preventDefault();
    const formData = {
      email
    };
    try {
      const response = await axios.post(
        "https://flyweisgroup.com/api/api/v1/lawyer/forgetPassword",
        formData
      );
      setActive(3)
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  const handleCustomerVerifyOtp = async(event)=>{
    event.preventDefault();
    const formData = {
      email, otp
    };
    try {
      const response = await axios.post(
        "https://flyweisgroup.com/api/api/v1/customer/forgotVerifyotp",
        formData
      );
      console.log(response?.data)
      sessionStorage.setItem("customerId", response?.data?.data?.userId)
      setActive(4)
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  const handleLawyerVerifyOtp = async(event)=>{
    event.preventDefault();
    const formData = {
      email, otp
    };
    try {
      const response = await axios.post(
        "https://flyweisgroup.com/api/api/v1/lawyer/forgotVerifyotp",
        formData
      );
      sessionStorage.setItem("lawyerId", response?.data?.data?.userId)
      setActive(4)
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  const handleCustomerResetPass = async(event)=>{
    event.preventDefault();
    const id =  sessionStorage.getItem("customerId");
    if(newPass !== confirmPass || newPass === "" || confirmPass === "" ) return;
    const formData = {
      newPassword : newPass, confirmPassword: confirmPass
    };
    try {
      const response = await axios.post(
        `https://flyweisgroup.com/api/api/v1/customer/changePassword/${id}`,
        formData
      );
      setActive(0)
    } catch (error) {
      console.log(error);

      return error;
    }
  }
  const handleLawyerResetPass = async(event)=>{
    event.preventDefault();
    const id =  sessionStorage.getItem("lawyerId");
    if(newPass !== confirmPass || newPass === "" || confirmPass === "" ) return;
    const formData = {
      newPassword : newPass, confirmPassword: confirmPass
    };
    try {
      const response = await axios.post(
        `https://flyweisgroup.com/api/api/v1/lawyer/changePassword/${id}`,
        formData
      );
      setActive(0)
    } catch (error) {
      console.log(error);
 
      return error;
    }
  }

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
          {active === 1 && (
            <>
              <div className="SignInModal">
                <div className="twoBtn">
                  <button onClick={() => setActive(0)}>Login</button>
                  <button className="btn1">Sign Up</button>
                </div>

                {selectedOption2 === "Costumer" ? (
                  <form>
                    <div>
                      <select
                        value={selectedOption2}
                        onChange={handleSingUpChange}
                      >
                        <option value="Costumer">Costumer </option>
                        <option value="Lawyer">Lawyer </option>
                      </select>
                    </div>
                    <br />

                    {/* <div className="icons">
                      <div className="google-button" style={{cursor:"pointer"}} onClick={handleGoogleSignInUser}>
                        <img src="../Images/40.png" alt="" />
                        <span>Google</span>
                      </div>
                    
                    </div> */}

                    <div className="divRelative">
                      <i class="fa-solid fa-envelope"></i>
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ paddingLeft: "65px" }}
                      />
                    </div>

                    <div className="divRelative">
                      <i class="fa-solid fa-user"></i>
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ paddingLeft: "65px" }}
                      />
                    </div>
                    <div className="divRelative">
                      <i class="fa-solid fa-phone"></i>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{ paddingLeft: "65px" }}
                      />
                    </div>
                    <div className="divRelative">
                      <i class="fa-solid fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ paddingLeft: "65px" }}
                      />
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
                ) : (
                  <AdminSignInModal
                    selectedOption2={selectedOption2}
                    handleSingUpChange={handleSingUpChange}
                  />
                )}
              </div>
            </>
          )  
        } 
           {active === 0 && (
            <>
              <div className="SignInModal">
                <div className="twoBtn">
                  <button className="btn1">Login</button>
                  <button onClick={() => setActive(1)}>Sign Up</button>
                </div>

                <form>
                  <div>
                    <select
                      value={selectedOption}
                      onChange={handleSelectChange}
                    >
                      <option value="Costumer">Costumer </option>
                      <option value="Lawyer">Lawyer </option>
                    </select>
                  </div>
                  <br />

                  <div className="icons">
                    <div className="google-button" style={{cursor:"pointer"}} onClick={
                      selectedOption === "Costumer"
                        ? handleGoogleSignInUser
                        : handleGoogleSignInLawyer
                    } >
                      <img src="../Images/40.png" alt="" />
                      <span>Google</span>
                    </div>
                  
                  </div>
                  <div className="divRelative">
                    <i class="fa-solid fa-envelope"></i>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ paddingLeft: "65px" }}
                    />
                  </div>
                  <div className="divRelative"> 
                    <i class="fa-solid fa-lock"></i>
                    <input
                      type="password"
                      placeholder="********"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ paddingLeft: "65px" }}
                    />
                  </div>
                  <button
                    className="login"
                    onClick={
                      selectedOption === "Costumer"
                        ? handleLogin
                        : handleAdminLogin
                    }
                  >
                    LOG IN
                  </button>
                  <p onClick={()=>setActive(2)} style={{ marginTop: "10px" , fontWeight:600 , color:"#1D1D1D", cursor:"pointer" }}>Forgot Password</p>
                </form>
              </div>
            </>
          )}
           {active === 2 && (
            <>
              <div className="SignInModal">
              <p style={{fontSize:"22px" , fontWeight:"bold"}}>Generate OTP</p>

                <form>
        
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
                
                  <button
                    className="login"
                    onClick={
                      selectedOption === "Costumer"
                        ? handleGenerateCustomerOtp
                        : handleGenerateLawyerOtp
                    
                    }
                  >
                    Next
                  </button>

                </form>
              </div>
            </>
          )}
           {active === 3 && (
            <>
              <div className="SignInModal">
              <p style={{fontSize:"22px" , fontWeight:"bold"}}>Verify OTP</p>

                <form>
        
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
                    
                    <input
                      type="text"
                      placeholder="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      
                    />
                  </div>
                
                  <button
                    className="login"
                    onClick={
                      selectedOption === "Costumer"
                        ? handleCustomerVerifyOtp
                        : handleLawyerVerifyOtp
                    
                    }
                  >
                    Verify
                  </button>

                </form>
              </div>
            </>
          )}
           {active === 4 && (
            <>
              <div className="SignInModal">
              <p style={{fontSize:"22px" , fontWeight:"bold"}}>Reset Password</p>

                <form>
        
                  <div>
      
                    <input
                      type="text"
                      placeholder="New Password"
                     value={newPass}
                     onChange={(e)=> setNewPass(e.target.value)}
                
                    />
                  </div>
                  <div>
                    
                    <input
                     type="text"
                      placeholder="Confirm Password"
                      value={confirmPass}
                     onChange={(e)=> setConfirmPass(e.target.value)}
                      
                    />
                  </div>
                
                  <button
                    className="login"
                    onClick={
                      selectedOption === "Costumer"
                        ? handleCustomerResetPass
                        : handleLawyerResetPass
                  
                    }
                  >
                    Done
                  </button>

                </form>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignInModal;
