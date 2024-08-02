import AgoraRTC from "agora-rtc-sdk-ng";

const APP_ID = "8aed948fbc254c6ea0c7db73791ae484"; // Replace with your Agora App ID

let client;
let localAudioTrack, localVideoTrack;

export const initAgora = async () => {
  client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  await client.initialize(APP_ID);
};

export const joinChannel = async (channel, token, uid) => {
  await client.join(APP_ID, channel, token, uid);
};

export const leaveChannel = async () => {
  await client.leave();
  if (localAudioTrack) {
    localAudioTrack.close();
  }
  if (localVideoTrack) {
    localVideoTrack.close();
  }
};

export const publishTracks = async (audio, video) => {
  if (audio) {
    localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    await client.publish(localAudioTrack);
  }
  if (video) {
    localVideoTrack = await AgoraRTC.createCameraVideoTrack();
    await client.publish(localVideoTrack);
  }
};

export const unpublishTracks = async () => {
  if (localAudioTrack) {
    await client.unpublish(localAudioTrack);
  }
  if (localVideoTrack) {
    await client.unpublish(localVideoTrack);
  }
};
