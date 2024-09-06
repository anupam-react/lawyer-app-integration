import React, { useEffect, useRef, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { useRecoilState } from "recoil";
import { Metting } from "./Component/Atoms/caseAtom";
import useLawyerProfile from "./hooks/useLawyerProfile";
import useCustomerProfile from "./hooks/useCustomerProfile";
import { createApiData, fetchApiData, updateApiData } from "./utils";
// Environment variables for Agora App ID and Token

const VoiceCall = () => {
  const [localTrack, setLocalTrack] = useState(null);
  const [remoteUsers, setRemoteUsers] = useState({});
  const [isJoined, setIsJoined] = useState(false);
  const [metting, setMetting] = useRecoilState(Metting);
  const [userInfo, setUserInfo] = useState();
  const [seconds, setSeconds] = useState(0);
  const { UserInfo } = useCustomerProfile();

 

  const client = useRef(null);

  const getUserInfo = async () => {
    const userData = await fetchApiData(
      `https://flyweisgroup.com/api/api/v1/admin/User/${metting?.lawyer}`
    );

    setUserInfo(userData?.data);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const totalPay =
    userInfo?.consultancyCost + Math.round(userInfo?.consultancyCost / 18);

  useEffect(() => {
    let interval;
    if (isJoined) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isJoined]);

  const minutes = Math.ceil(seconds / 60);

  const appId = "d7e8eab417054fe58809c9e1b2bac21e"; // Using environment variable
  const token = null; // Using environment variable
  const channel = "test"; // Channel name

  useEffect(() => {
    const init = async () => {
      client.current = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
      client.current.on("user-published", handleUserPublished);
      client.current.on("user-unpublished", handleUserUnpublished);
    };

    init();

    // return () => {
    //   // Cleanup logic
    //   if (localTrack) {
    //     localTrack.close();
    //   }
    //   client.current.leave();
    // };
  }, [localTrack]);

  const joinAndSubscribe = async () => {
    try {
      // Join the channel
      await client.current.join(appId, channel, token, null);

      console.log("Successfully joined the channel");

      // Now, you can subscribe to streams
      client.current.on("user-published", async (user, mediaType) => {
        await client.current.subscribe(user, mediaType);
        console.log("Subscribed to the user's stream successfully");
        setIsJoined(true);
        // Handle the received stream

        if (mediaType === "audio") {
          const remoteAudioTrack = user.audioTrack;
          remoteAudioTrack.play(); // Plays the audio
        }
        const appoinmentId = sessionStorage.getItem("appoinmentId");
        await updateApiData(
          `https://flyweisgroup.com/api/api/v1/customer/appointmentJoin/${appoinmentId}`
        );
      });
    } catch (error) {
      console.error("Error joining channel or subscribing to streams:", error);
    }
  };

  const joinChannel = async () => {
    try {
      // Join the channel
      await client.current.join(appId, channel, token, null);
      // Create microphone track
      const microphoneTrack = await AgoraRTC.createMicrophoneAudioTrack();
      setLocalTrack(microphoneTrack);
      // Publish local track
      await client.current.publish([microphoneTrack]);
      const appoinmentId = sessionStorage.getItem("appoinmentId");
      await updateApiData(
        `https://flyweisgroup.com/api/api/v1/customer/appointmentJoin/${appoinmentId}`
      );
      setIsJoined(true); // Update state to indicate user has joined
    } catch (error) {
      console.error("Error joining Agora channel:", error);
    }
  };

  const leaveChannel = async () => {
    if (localTrack) {
      localTrack.close(); // Close local track
      setLocalTrack(null);
    }
    const appoinmentId = sessionStorage.getItem("appoinmentId");
    await updateApiData(
      `https://flyweisgroup.com/api/api/v1/customer/appointmentEnd/${appoinmentId}`
    );
    if (UserInfo?.userType !== "LAWYER") {
      await createApiData(
        "https://flyweisgroup.com/api/api/v1/user/removeMoney",
        { amount: minutes * totalPay }
      );
    }
    await client.current.leave();
    // Leave the channel
    setIsJoined(false); // Update state to indicate user has left
    setRemoteUsers({}); // Clear remote users
  };

  const handleUserPublished = async (user, mediaType) => {
    await client.current.subscribe(user, mediaType);
    if (mediaType === "audio") {
      const remoteAudioTrack = user.audioTrack;
      setRemoteUsers((prev) => ({ ...prev, [user.uid]: remoteAudioTrack }));
      remoteAudioTrack.play(); // Play remote audio
    }
  };

  const handleUserUnpublished = (user) => {
    setRemoteUsers((prev) => {
      const updatedUsers = { ...prev };
      delete updatedUsers[user.uid];
      return updatedUsers;
    });
  };

  return (
    <div>
      <div>
        <h3>Local Audio</h3>
        <p>Your microphone is {isJoined ? "active" : "inactive"}.</p>
        {!isJoined ? (
          <>
            {UserInfo?.userType === "LAWYER" ? (
              <button
                style={{
                  padding: "10px 20px",
                  marginLeft: "10px",
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                }}
                onClick={joinChannel}
              >
                Join Channel
              </button>
            ) : (
              <button
                style={{
                  padding: "10px 20px",
                  marginLeft: "10px",
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                }}
                onClick={joinAndSubscribe}
              >
                Join Channel
              </button>
            )}
          </>
        ) : (
          <button
            style={{
              padding: "10px 20px",
              marginLeft: "10px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
            onClick={leaveChannel}
          >
            Leave Channel
          </button>
        )}
      </div>
      <div>
        <h3>{UserInfo?.userType === "LAWYER" ? "User" : "Lawyer"}</h3>
        <h4>{UserInfo?.userType === "LAWYER" ? UserInfo?.fullName : userInfo?.fullName}</h4>
        {Object.keys(remoteUsers).map((uid) => (
          <div key={uid}>
         
            <p>Audio is playing...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoiceCall;
