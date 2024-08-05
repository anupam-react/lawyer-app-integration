import { useState, useEffect } from "react";
import socket from "../socket";
import { useParams } from "react-router-dom";
 const Messages = () => {


  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const {id} = useParams()

  const handleSend = () => {
    if (message) {
      console.log("heelelo" , message , id)
        socket.emit('sendMessage', {
          to: id,
          chat: {
           "messageType": "text",
           "message": message
       }
      })
      
      setMessage('');
    }
  };

  return (
    <div>
      <div style={{display: "flex", justifyContent:"center"}}>
        <div style={{fontSize:"30px", fontWeight:"600"}}>
         Chat
          <br />
        </div>
      </div>
      <div style={{height:"650px", marginTop:"20px", display:"flex" , justifyContent:"center"}}>

        <div style={{ width:"90%" , border:"1px solid black", height:"100vh", borderRadius:"10px", margin:"0px 10px"}}>
          <div style={{height:"100px", display:"flex" , alignItems:"center" , borderBottom:"1px"}}>
            <div style={{display:"flex" , justifyItems:"center", justifyContent:"center", width:"100%", marginLeft:"10px", gap:"10px"}}>
              <div className="" style={{ fontSize:"20px"}}>
                <img src="" alt="" style={{borderRadius:"50px" , width:"30px" , height:"30px", margin:"0px 10px"}} />
                Mr. Shlok <span style={{color:'#979797'}}>(Advocate)</span>
              </div>
              <div style={{ fontSize:"20px"}}>
                <img src="" alt="" style={{borderRadius:"50px" , width:"30px" , height:"30px", margin:"0px 10px"}} />
                Mr. Client <span style={{color:'#979797'}}>(User)</span>
              </div>
            </div>
          </div>
          <div style={{backgroundColor:"rgb(240 249 255)", height:"580px", overflow:"scroll", position:"relative"}}>
            <div style={{padding:"20px" , height:"490px", overflow:"scroll",}}>
              {messages?.map((message, index) => (
                <div
                  key={index}
                  className={`${
                    message.sender
                      ? "chat-input-Active"
                      : "chat-input-inactive"
                  }`}
                >
                  {message}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                placeholder="Message..."
                style={{ }}
                className="chat-input-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
              />
              <button
                onClick={handleSend}
                style={{backgroundColor:"rgb(59 130 246)" , color:"white", height:"50px", width:"100px", borderRadius:"10px"}}
                className="bg-blue-500 text-white h-[50px] w-[20vw] rounded-r-full"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
