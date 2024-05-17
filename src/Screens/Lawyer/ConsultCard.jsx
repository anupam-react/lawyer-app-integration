import React from 'react'
import "./style.scss";

const ConsultCard = ({data}) => {
  return (
    <div className="consult-container">
    <img
      src="./Ellipse 14.png"
      alt=""
      style={{ borderRadius: "50%", width: "90px", height: "90px" }}
    />
    <div className="consult-main">
        <div className="consult-name">{data?.userId?.fullName || data?.userId?.firstName +" "+data?.userId?.lastName }</div>
      <div className="consult-title">
        <div className="consult-booked">{data?.case?.caseName}</div>
        <div className="consult-booked">30 min Booked</div>
      </div>
     
      <div className="consult-bottom">
        <div className="consult-language">
          {data?.userId?.languages?.map((d,i)=>
          <span key={i}>{d}</span>
          )}
        </div>
        <div style={{ color:"#0F2C64" }}>Time: {data?.appointmentTime}</div>
      </div>

      <div className="consult-Reason">
        <div  style={{ fontWeight:"normal" }}>Reason:</div>
        <div>{data?.case?.caseTitle}</div>
      </div>
    </div>
  </div>
  )
}

export default ConsultCard