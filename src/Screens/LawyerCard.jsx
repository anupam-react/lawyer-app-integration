import React from "react";
import { useNavigate } from "react-router-dom";

const LawyerCard = ({
  unique,
  data,
  setSingleInstantLawyer = () => {},
  setSingleLawyer = () => {},
  isBook = false
}) => {
  console.log(data?.categoryId);
  const navigate = useNavigate("");

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
            {data?.categoryId?.[0]?.type}
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
        </p>
        {/* {data?.categoryId?.map((d, i) => (
          <span key={i} style={{ fontWeight: 700 }}>
            {d?.name + ", "}
          </span>
        ))} */}
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

        <h6>{data?.minofconsultance} min. consultation</h6>
      </div>

      <div className="right">
        <div style={{ color: "#FF0808", fontSize: "14px" }}>
          consultation fee
        </div>
        <div style={{ color: "#FF0808", fontSize: "20px", fontWeight: 900 }}>
          ₹{data?.consultancyCost}
        </div>

        <button
          onClick={() => navigate(`/payment/${data?._id}`)}
          style={{
            fontSize: "14px",
            fontWeight: 700,
            padding: "5px 0px",
            width: "120px",
          }}
        >
      { isBook ?   "Book Now" : "Consult Now"}
        </button>
      </div>
    </div>
  );
};

export default LawyerCard;
