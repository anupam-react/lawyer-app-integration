import { io } from "socket.io-client";

// Your server URL
const SERVER_URL = "wss://flyweisgroup.com";

// Your access token

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

export async function sendMesage(id,message ) {
    socket.emit('sendMessage', {
        to: id,
        chat: {
         "messageType": "text",
         "message": message
     }
    })
}

export async function viewChat(id) {
    socket.emit('viewChat', {
        id:id   
    })
}
export async function chatList(id) {
    socket.emit('chatList', {
    id: id,
    isUnread: true  
    })
}


export default socket;
