import { io } from "socket.io-client";

// Your server URL
const SERVER_URL = "wss://flyweisgroup.com";

// Your access token
const ACCESS_TOKEN = sessionStorage.getItem('token');

// Setup socket connection with headers
const socket = io(SERVER_URL, {
   
  extraHeaders: {
    accesstoken: sessionStorage.getItem('token'),
  },
});

// Example of handling connection and events
socket.on("connect", () => {
  console.log("Connected to the server");
});

socket.on("userConnected", (data) => {
  console.log("User connected:", data);
});

socket.on("disconnect", () => {
  console.log("Disconnected from the server");
});

export default socket;
