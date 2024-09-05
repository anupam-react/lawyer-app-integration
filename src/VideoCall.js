import React, { useEffect, useState } from "react";
import AgoraUIKit from 'agora-react-uikit';
import { createApiData, fetchApiData, updateApiData } from "./utils";
import { useParams } from "react-router-dom";
import { Metting } from "./Component/Atoms/caseAtom";
import { useRecoilState } from "recoil";

const VideoCall = () => {
  const [videoCall, setVideoCall] = useState(true);
  const [metting, setMetting] = useRecoilState(Metting);
  const [userInfo, setUserInfo] = useState();
  const {id}  = useParams()

  const [seconds, setSeconds] = useState(0);
  console.log(metting)

  const getUserInfo = async () => {
    const userData = await fetchApiData(
      `https://flyweisgroup.com/api/api/v1/admin/User/${metting?.lawyer}`
    );
    console.log(userData);
    setUserInfo(userData?.data);
  };

  useEffect(()=>{
    getUserInfo()
  },[])

  const totalPay =
  userInfo?.consultancyCost + Math.round((userInfo?.consultancyCost) / 18);


  useEffect(() => {
    let interval;
    if (videoCall) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [videoCall]);

  const minutes = Math.ceil(seconds / 60);

  console.log(minutes)

  const rtcProps = {
    appId: 'd7e8eab417054fe58809c9e1b2bac21e', 
    channel: id, 
    token: null, // enter your channel token as a string 
  }; 
  const callbacks = {
    EndCall: async() =>{
      const appoinmentId = sessionStorage.getItem("appoinmentId")
      await updateApiData(`https://flyweisgroup.com/api/api/v1/customer/appointmentEnd/${appoinmentId}`)
      await createApiData('https://flyweisgroup.com/api/api/v1/user/removeMoney',{amount : minutes * totalPay})
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



