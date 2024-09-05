import React from 'react'
import "./style.scss";
import { getDateFromISOString } from '../../utils';
import { useNavigate } from 'react-router-dom';

const ConsultCard = ({data}) => {
  const navigate = useNavigate()
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
          <span key={i}>{d +  ', '}</span>
          )}
        </div>
        <div style={{ color:"#0F2C64" }}>Data: {getDateFromISOString(data?.appointmentDate)}</div>
        <div style={{ color:"#0F2C64" }}>Time: {data?.appointmentTime}</div>
      </div>

      <div className="consult-Reason">
        {/* <div  style={{ fontWeight:"normal" }}>Type:</div> */}
         <div >
          {data?.appointmentType === "voice-call" ? (
            <button style={{  backgroundColor: "#0F2C64", color: "white",fontWeight: 700 , padding:"8px 14px" , border:"none", borderRadius:"5px"}} onClick={()=> navigate(`/voiceCall/${data?.meetingId}`)}>
              <img src="../Group.png" alt="" style={{width:"30px" , height:"20px"}}/>
              <span style={{paddingLeft:"5px"}}>Voice Call</span>
            </button>
          ) : data?.appointmentType === "chat" ? (
            <button style={{  backgroundColor: "#0F2C64", color: "white",fontWeight: 700 , padding:"8px 14px" , border:"none", borderRadius:"5px"}} onClick={()=> navigate(`/chat/${data?.userId?._id}`)}>
              <img src="../Group (1).png" alt=""  style={{width:"20px" , height:"20px"}}/>
              <span style={{paddingLeft:"5px"}}>Chat</span>
            </button>
          ) : (
            <button style={{  backgroundColor: "#0F2C64", color: "white",fontWeight: 700 , padding:"8px 14px" , border:"none", borderRadius:"5px"}} onClick={()=> navigate(`/videocall/${data?.meetingId}`)}>
              <img src="../Group.png" alt=""  style={{width:"30px" , height:"20px"}}/>
              <span style={{paddingLeft:"5px"}}>Video Call</span>
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default ConsultCard