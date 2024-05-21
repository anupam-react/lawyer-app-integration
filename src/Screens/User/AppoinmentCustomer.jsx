import React from "react";
import StarRating2 from "./StarRating2";
import StarRating3 from "./StarRating3";
import useAllLawyers from "../../hooks/useAllLawyers";
import { useNavigate } from "react-router-dom";

const AppoinmentCustomer = ({ data }) => {
  const navigate= useNavigate('')
  return (
    <div>
      <div className="rightFirst">
        <div className="two-Sec">
          <div>
            <img
              src={data?.image}
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
                style={{ width: "90px", height: "60px", marginTop: "-40px" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-15px",
                  right: "14%",
                  color: "white",
                  fontSize: "10px",
                  fontWeight: 600,
                }}
              >
                Legal Advisor
              </div>
            </div>
          </div>

          <div>
            <p className="firstP">
              Adv.{" "}
              {data?.fullName ||
                data?.firstName + " " + data?.lastName}
            </p>
            {data?.expertises?.map((d, i) => (
              <span key={i} className="secondP">
                {d + ", " || "null"}
              </span>
            ))}
            {data?.languages?.map((d, i) => (
              <span key={i} className="secondP">
                {d + ", " || "null"}
              </span>
            ))}

            <div className="two-Sec" style={{ marginTop: "0" }}>
              <p className="secondP">Exp:{data?.experiance}</p>
              <div style={{ position: "relative" }}>
                <img src="./Group (2).png" alt="" />
                <div
                  style={{
                    position: "absolute",
                    top: "5px",
                    left: "25%",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <img
                    src="./Star 2.png"
                    alt=""
                    style={{ height: "12px", width: "10px" }}
                  />
                  <div style={{ color: "white", fontSize: "14px" }}>
                    {data?.rating}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button onClick={()=> navigate(`/payment/${data?._id}`)} style={{ fontSize: "20px", fontWeight: 700, width: "120px" , border:"none"}}>
          Consult
        </button>

        <div className="NonthThird">
          <div>
            <p>/ Hearing Fees</p>
            <p>
              {" "}
              <span style={{ color: "red", textDecoration: "line-through" }}>
                ₹3300/Hearing{" "}
              </span>{" "}
              ₹{data?.hearingFee}/Hearing{" "}
            </p>
          </div>

          <div style={{ borderLeft: "1px solid black", paddingLeft: "10px" }}>
            <p>Mins of consultation</p>
            <p>{data?.minofconsultance} mins</p>
          </div>
        </div>

        <p className="NinthFourth">Advocate Suhani Expertise</p>

        <div className="NinthFifth">
          {data?.expertises?.map((d, i) => (
            <div>
              <img src="./Images/99.png" alt="" />
              <p>{d}</p>
            </div>
          ))}
        </div>

        <p className="NinthFourth">Advocate Suhani Skills</p>
        <div className="NinthFifth">
          {data?.skills?.map((d, i) => (
            <div>
              <img src="./Images/99.png" alt="" />
              <p>{d}</p>
            </div>
          ))}
        </div>

        <div className="descRip">
          <p className="head">About Me</p>
          <p className="desc">{data?.bio}</p>
        </div>

        <div className="Stars">
          <StarRating2 rating={data?.rating} />
          <p>{data?.rating}</p>
        </div>

        <p
          style={{ marginLeft: "7%", marginTop: "0", fontFamily: "Open Sans" }}
        >
          Based on 1348 Reviews
        </p>

        <div className="NinthSixth">
          <div className="under">
            <div className="left">
              <img src="" alt="" style={{ width: "45px", height: "45px" }} />
              <div>
                <p>Russie Taylor</p>
                <StarRating3 rating={5} />
              </div>
            </div>

            <div className="right">
              <p className="first">Cannulation</p>
              <p className="second">15 March,2021</p>
            </div>
          </div>

          <p className="Alloy">Installation of alloy wheel</p>
        </div>

        <div className="consult">
          <div>
            <i class="fa-regular fa-message"></i>
            <p>Consult Now</p>
          </div>
          <div>
            <img src="./Arrow 3.png" alt="" style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="consult">
          <div>
            <i class="fa-regular fa-calendar"></i>
            <p>Availability</p>
          </div>
        </div>
        <div className="consult">
          <div>
            <i class="fa-solid fa-video"></i>
            <p>
              Consultancy Cost{" "}
              <span style={{ marginLeft: "10px" }}>
                @{data?.consultancyCost}/min
              </span>
            </p>
          </div>
        </div>
        <div className="consult">
          <div
            style={{ fontSize: "18px", padding: "12px 0px", fontWeight: 700 }}
          >
            Status (Active)
          </div>
          <div>
            <div className="toogle-btn">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentCustomer;
