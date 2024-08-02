import React, { useEffect, useState } from "react";
import AgoraUIKit from 'agora-react-uikit';
import { initAgora, joinChannel, leaveChannel, publishTracks, unpublishTracks } from "./agoraService";

const VoiceCall = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: '8aed948fbc254c6ea0c7db73791ae484', 
    channel: 'test', 
    token: null, // enter your channel token as a string 
  }; 
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div style={{display: 'flex', width: '100%', height: '100vh'}}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} videoCall/>
    </div>
  ) : (
    <button onClick={() => setVideoCall(true)}>Join</button>

  );
};

export default VoiceCall;



