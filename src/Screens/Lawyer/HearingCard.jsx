import React from "react";
import "./style.scss";
const HearingCard = ({data}) => {
  return (
    <div className="hearing-container">
      <img
        src={data?.userId?.image}
        alt=""
        style={{ borderRadius: "50%", width: "90px", height: "60px" }}
      />
      <div>
        <div className="hearing-title">
          <div className="hearing-name"> {data?.userId?.fullName || data?.userId?.firstName}</div>
          <div className="hearing-booked">30 min Booked</div>
        </div>
        <div className="hearing-Reason">
          <div  style={{ fontWeight:"normal" }}>Reason:</div>
          <div>{data?.case?.caseTitle}</div>
        </div>
        <div className="hearing-bottom">
          <div className="hearing-Language">
            <div style={{ fontWeight:"normal" }}>Language:</div>
            {data?.userId?.languages?.map((d,i)=>
          <span key={i}>{d}</span>
          )}
          </div>
          <div style={{ color:"#0F2C64" }}>Time: {data?.case?.hearingTime}</div>
        </div>
      </div>
    </div>
  );
};

export default HearingCard;
