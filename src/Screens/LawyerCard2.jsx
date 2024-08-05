import React from "react";
import useInstantAppointment from "../hooks/useInstantAppointment";
import { useNavigate } from "react-router-dom";

const LawyerCard2 = ({
  unique,
  data,
  setSingleInstantLawyer = () => {},
  setSingleLawyer = () => {},
}) => {
  const { handleInstantAppointment }= useInstantAppointment();
  const navigate = useNavigate()
  return (
    <div
      className="two-sec"
      style={{ cursor: "pointer" }}
      onClick={() => {
        setSingleInstantLawyer({ ...data });
        setSingleLawyer({ ...data });
      }}
      key={unique}
    >
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
           {/* {data?.expertises?.[0]} */}
          </div>
        </div>
      </div>
      <div className="mid">
        <p
          style={{
            fontSize: "20px",
            fontWeight: 900,
          }}
        >
          Advocate. {data?.fullName || data?.firstName + " " + data?.lastName}
          <span style={{ fontSize:"24px", color:"#FF0000"  }}>.</span>
        </p>
        <span style={{ fontWeight: 700 }}>{data?.categoryId?.[0]?.name}</span>
        <br />
        {data?.languages?.map((d, i) => (
          <span key={i} style={{ fontWeight: 500, fontSize: "12px" }}>
            {d + ", "}
          </span>
        ))}
        <div className="two">
          <span style={{ fontWeight: 700 }}>Exp: {data?.experiance}</span>
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
                style={{ height: "12px", width: "10px" }}
              />
              <div style={{ color: "white", fontSize: "12px" }}>
                {data?.rating}
              </div>
            </div>
          </div>
        </div>
        <div>
          <span>₹{data?.consultancyCost}/min</span>
          <span style={{color:"#FF0808" , textDecoration: "line-through", marginLeft:"20px"}}>₹20/min</span>
        </div>
      </div>

      <div className="right" style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
        <div>
          <p>Wait time - 2h:8 m</p>
        </div>
        <button onClick={()=>{
          navigate(`/payment-instant/${data?._id}`)
          // handleInstantAppointment()
        }
        } style={{ fontSize: "18px", fontWeight: 700, padding:"5px 0px", width: "120px" , marginBottom:"10px" }}>
         Request
        </button>
      </div>
    </div>
  );
};

export default LawyerCard2;
