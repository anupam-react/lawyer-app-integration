/** @format */

import React from "react";
import HOC from "./User/HOC";
import useUpcomingAppointment from "../hooks/useUpcomingAppointment";
import ConsultCustomer from "./User/ConsultCustomer";

const TenScreen = () => {
  const { upcomingAppointment } = useUpcomingAppointment()
  return (
    <>
      <h4 className="centerNinthHeading">My Lawyers</h4>

      <div className="NinthFirst">
        <div className="left">
        <div className="two-sec">
          <div>
                      <img
                        src=""
                        alt=""
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "20px",
                        }}
                      />
                      <div style={{ position: "relative" }}>
                        <img
                          src="./Group 9457.png"
                          alt=""
                          style={{width: "90px",
                          height: "60px", marginTop: "-40px" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "-15px",
                            right: "14%",
                            color: "white",
                            fontSize:"10px",
                            fontWeight: 600,
                          }}
                        >
                          Legal Advisor
                        </div>
                      </div>
                    </div>
            <div className="mid">
              <h3>Advocate. Yash</h3>
              <h4>Legal Property Lawyer</h4>
              <h5>English, Hindi, Panjabi</h5>
              <div className="two">
                <span style={{ fontWeight:600 }}>Exp: 21 yrs</span>
                <div style={{ position: "relative" }}>
                          <img src="./Group (2).png" alt="" />
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "18%",
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <img
                              src="./Star 2.png"
                              alt=""
                              style={{ height: "12px" , width:"10px"}}
                            />
                            <div style={{ color: "white" , fontSize:"12px"}}>4.5</div>
                          </div>
                        </div>
              </div>

              <h6>30 min. consultation</h6>
            </div>

            <div className="right">
              <h4>consultation fee</h4>
              <h5>₹2000</h5>

              <button>Consult now</button>
            </div>
          </div>
          <div className="two-sec">
          <div>
                      <img
                        src=""
                        alt=""
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "20px",
                        }}
                      />
                      <div style={{ position: "relative" }}>
                        <img
                          src="./Group 9457.png"
                          alt=""
                          style={{width: "90px",
                          height: "60px", marginTop: "-40px" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "-15px",
                            right: "14%",
                            color: "white",
                            fontSize:"10px",
                            fontWeight: 600,
                          }}
                        >
                          Legal Advisor
                        </div>
                      </div>
                    </div>
            <div className="mid">
              <h3>Advocate. Yash</h3>
              <h4>Legal Property Lawyer</h4>
              <h5>English, Hindi, Panjabi</h5>
              <div className="two">
                <span style={{ fontWeight:600 }}>Exp: 21 yrs</span>
                <div style={{ position: "relative" }}>
                          <img src="./Group (2).png" alt="" />
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "18%",
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <img
                              src="./Star 2.png"
                              alt=""
                              style={{ height: "12px" , width:"10px"}}
                            />
                            <div style={{ color: "white" , fontSize:"12px"}}>4.5</div>
                          </div>
                        </div>
              </div>

              <h6>30 min. consultation</h6>
            </div>

            <div className="right">
              <h4>consultation fee</h4>
              <h5>₹2000</h5>

              <button>Consult now</button>
            </div>
          </div>
        <div className="two-sec">
          <div>
                      <img
                        src=""
                        alt=""
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "20px",
                        }}
                      />
                      <div style={{ position: "relative" }}>
                        <img
                          src="./Group 9457.png"
                          alt=""
                          style={{width: "90px",
                          height: "60px", marginTop: "-40px" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "-15px",
                            right: "14%",
                            color: "white",
                            fontSize:"10px",
                            fontWeight: 600,
                          }}
                        >
                          Legal Advisor
                        </div>
                      </div>
                    </div>
            <div className="mid">
              <h3>Advocate. Yash</h3>
              <h4>Legal Property Lawyer</h4>
              <h5>English, Hindi, Panjabi</h5>
              <div className="two">
                <span style={{ fontWeight:600 }}>Exp: 21 yrs</span>
                <div style={{ position: "relative" }}>
                          <img src="./Group (2).png" alt="" />
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "18%",
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <img
                              src="./Star 2.png"
                              alt=""
                              style={{ height: "12px" , width:"10px"}}
                            />
                            <div style={{ color: "white" , fontSize:"12px"}}>4.5</div>
                          </div>
                        </div>
              </div>

              <h6>30 min. consultation</h6>
            </div>

            <div className="right">
              <h4>consultation fee</h4>
              <h5>₹2000</h5>

              <button>Consult now</button>
            </div>
          </div>
        </div>
            <ConsultCustomer data={upcomingAppointment?.[0]} />
     
      </div>
    </>
  );
};

export default HOC(TenScreen);
