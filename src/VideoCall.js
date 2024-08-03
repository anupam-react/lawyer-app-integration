import React, { useEffect, useState } from "react";
import AgoraUIKit from 'agora-react-uikit';
import { initAgora, joinChannel, leaveChannel, publishTracks, unpublishTracks } from "./agoraService";
import { updateApiData } from "./utils";
import { useParams } from "react-router-dom";

const VideoCall = () => {
  const [videoCall, setVideoCall] = useState(true);
  const {id}  = useParams()
  const rtcProps = {
    appId: '8aed948fbc254c6ea0c7db73791ae484', 
    channel: id, 
    token: null, // enter your channel token as a string 
  }; 
  const callbacks = {
    EndCall: async() =>{
      const appoinmentId = sessionStorage.getItem("appoinmentId")
      await updateApiData(`https://shlok-mittal-lawyer-backend.vercel.app/api/v1/customer/appointmentEnd/${appoinmentId}`)
       setVideoCall(false)
      },
  };
  return videoCall ? (
    <div style={{display: 'flex', width: '100%', height: '100vh'}}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <button onClick={async() =>{ 
      const appoinmentId = sessionStorage.getItem("appoinmentId")
      await updateApiData(`https://shlok-mittal-lawyer-backend.vercel.app/api/v1/customer/appointmentJoin/${appoinmentId}`)
      setVideoCall(true)}}>Join</button>

  );
};

export default VideoCall;



