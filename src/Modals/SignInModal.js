/** @format */

import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useCusomerLogin from "../hooks/useCusomerLogin";
import AdminSignInModal from "./AdminSignInModal";
import useAdminLogin from "../hooks/useAdminLogin";

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
    isChecked,
    handleCheckboxChange,
    handleRegister,
    handleLogin,
    handleAdminLogin
  } = useCusomerLogin();

  const [second, setSecond] = useState(false);
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
          {second ? (
            <>
              <div className="SignInModal">
                <div className="twoBtn">
                  <button onClick={() => setSecond(false)}>Login</button>
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
          ) : (
            <>
              <div className="SignInModal">
                <div className="twoBtn">
                  <button className="btn1">Login</button>
                  <button onClick={() => setSecond(true)}>Sign Up</button>
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
                    <div className="google-button">
                      <img src="../Images/40.png" alt="" />
                      <span>Google</span>
                    </div>
                    <div className="google-button">
                      <img src="../Images/41.png" alt="" />
                      <span>Facebook</span>
                    </div>
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
                  <p style={{ marginTop: "10px" }}>Forgot Password</p>
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
