import React, { useEffect, useState } from "react";
import AgoraUIKit from 'agora-react-uikit';
import { updateApiData } from "./utils";
import { useParams } from "react-router-dom";
import { Metting } from "./Component/Atoms/caseAtom";
import { useRecoilState } from "recoil";

const VideoCall = () => {
  const [videoCall, setVideoCall] = useState(true);
  const [metting, setMetting] = useRecoilState(Metting);
  const {id}  = useParams()
  const rtcProps = {
    appId: 'd7e8eab417054fe58809c9e1b2bac21e', 
    channel: id, 
    token: null, // enter your channel token as a string 
  }; 
  const callbacks = {
    EndCall: async() =>{
      const appoinmentId = sessionStorage.getItem("appoinmentId")
      await updateApiData(`https://flyweisgroup.com/api/api/v1/customer/appointmentEnd/${appoinmentId}`)
       setVideoCall(false)
      },
  };
  return videoCall ? (
    <div style={{display: 'flex', width: '100%', height: '100vh'}}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <button style={{padding:"10px 20px", marginLeft:"10px", backgroundColor:"blue", color:"white", border:"none", borderRadius:"8px"}} onClick={async() =>{ 
      const appoinmentId = sessionStorage.getItem("appoinmentId")
      await updateApiData(`https://flyweisgroup.com/api/api/v1/customer/appointmentJoin/${appoinmentId}`)
      setVideoCall(true)}}>Join</button>

  );
};

export default VideoCall;



