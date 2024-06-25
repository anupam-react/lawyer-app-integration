/** @format */

import React, { useEffect, useState } from "react";
import HOC from "./User/HOC";
import useUpcomingAppointment from "../hooks/useUpcomingAppointment";
import ConsultCustomer from "./User/ConsultCustomer";
import { fetchApiData } from "../utils";

const TenScreen = () => {
  const [ myLawyer , setMyLawyer] = useState([])
  const { upcomingAppointment } = useUpcomingAppointment()

  const getAllLawyer = async ()=>{
    const data = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/customer/getmyLawyer')
    setMyLawyer(data?.data)

  }

  useEffect(()=>{
    getAllLawyer()
  },[])

  return (
    <>
      <h4 className="centerNinthHeading">My Lawyers</h4>

      <div className="NinthFirst">
        <div className="left">
          {myLawyer?.map((data, i)=>(
        <div className="two-sec" key={i}>
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
                          {data?.lawyer?.categoryId?.[0]?.name}
                        </div>
                      </div>
                    </div>
            <div className="mid">
              <h3>Advocate.{data?.lawyer?.fullName || data?.lawyer?.firstName + " " + data?.lawyer?.lastName }</h3>
              <h4>{data?.lawyer?.categoryId?.[0]?.type}</h4>
              {data?.lawyer?.languages?.map((d, i) => (
          <span key={i} style={{ fontWeight: 500, fontSize: "12px" }}>
            {d + ", "}
          </span>
        ))}
              <div className="two">
                <span style={{ fontWeight:600 }}>Exp: {data?.lawyer?.experiance}yrs</span>
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
                            <div style={{ color: "white" , fontSize:"12px"}}>{data?.lawyer?.rating}</div>
                          </div>
                        </div>
              </div>

              <h6>{data?.lawyer?.minofconsultance}min. consultation</h6>
            </div>

            <div className="right">
              <h4>consultation fee</h4>
              <h5>₹{data?.lawyer?.consultancyCost}</h5>

              <button>Consult now</button>
            </div>
          </div>

          ))}
     
        </div>
            <ConsultCustomer data={upcomingAppointment?.[0]} />
     
      </div>
    </>
  );
};

export default HOC(TenScreen);
