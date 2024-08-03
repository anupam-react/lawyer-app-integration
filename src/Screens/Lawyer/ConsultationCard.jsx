import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const ConsultationCard = ({ data }) => {

  const navigate = useNavigate()
  return (
    <div className="Consultation-container">
      <div className="Consultation-main">
        <div className="file-button">
          <button onClick={()=> navigate('/documents')}>View File</button>
        </div>
        <img
          src={data?.image}
          alt=""
          style={{ borderRadius: "50%", width: "100px", height: "100px" }}
        />
        <div className="consult-name">
          {data?.userId?.fullName || data?.userId?.firstName}
        </div>
        <div className="consult-casename">{data?.case?.caseName}</div>
        <div className="consult-info">{}</div>
        <div className="consult-otherinfo">
        {data?.userId?.languages?.map((d,i)=>
          <span key={i}>{d}</span>
          )}
          <div className="consult-location">
            <div>Location:</div>
            <span style={{ fontWeight: 700, fontSize: "20px" }}>
              {data?.firstLineAddress}
            </span>
          </div>
        </div>
        {/* <div className="consult-buttons">
          {data?.appointmentType === "Call" ? (
            <button>
              <img src="./Group.png" alt="" />
              <span>Voice Call</span>
            </button>
          ) : data?.appointmentType === "Chat" ? (
            <button>
              <img src="./Group (1).png" alt="" />
              <span>Chat</span>
            </button>
          ) : (
            <button onClick={()=> navigate('/videocall')}>
              <img src="./Group.png" alt="" />
              <span>Video Call</span>
            </button>
          )}
        </div> */}
        <div className="consult-time">
          <div>10 min Booked</div>
          <span>Time: {data?.appointmentTime}</span>
        </div>
      </div>
    </div>
  );
};

export default ConsultationCard;
