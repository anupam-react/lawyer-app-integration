import { useState, useEffect } from "react";
import socket, { chatList, sendMesage, viewChat } from "../socket";
import { useNavigate, useParams } from "react-router-dom";
import { fetchApiData } from "../utils";
import HOC from "./User/HOC";
 const MessagesListUser = () => {

  const [message, setMessage] = useState('');
  const [messagesInfo, setMessagesInfo] = useState([]);
  const [userInfo, setUserInfo] = useState()

  const navigate = useNavigate()

  const getUserInfo = async ()=>{
    const userData = await fetchApiData(`https://flyweisgroup.com/api/api/v1/customer/getProfile`)
    console.log(userData)
    setUserInfo(userData?.data)
  }

  useEffect(()=>{
    getUserInfo()
  },[])

  useEffect(()=>{
    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    socket.on("userConnected", (data) => {
      
      console.log("User connected:", data);
    });

    chatList(userInfo?._id)
    // console.log("chatId", id)
    socket.on("chatList", (data) => {
      setMessagesInfo(data?.chat)
      console.log("Chat List", data);
    });

  },[userInfo?._id])

  return (
    <div>
      <div style={{display: "flex", justifyContent:"center"}}>
        <div style={{fontSize:"30px", fontWeight:"600"}}>
         Chat List
          <br />
        </div>
      </div>
      <div style={{padding:"20px 40px" ,  height:"90vh" , overflow:"scroll"}}>
        <div style={{padding:"10px 20px", borderRadius:"10px", display:"flex" , flexDirection:"column", gap:"20px", background:"#0F2856", border:"1px solid black"}}>
            {messagesInfo?.map((data, i)=>(
              <div onClick={()=>{navigate(`/chat/${data?._id}`)}} key={i} style={{ background:"white" , cursor:"pointer", padding:"10px 20px", color:"white", borderRadius:"10px" , }}>
              <div style={{display:"flex" , gap:"10px"}}>
               <img src={data?.with?.image} alt=""  style={{width:"40px", height:"40px", borderRadius:"50px"}} />
              <p style={{fontWeight:"bold", fontSize:"20px", color:"#0F2C64"}}>{data?.with?.firstName + " " + data?.with?.lastName}</p>
              <p style={{color:"green"}}></p>
   
              </div>
              <p style={{color:"#1D1D1D"}}>{data?.message}</p>
          </div>

            ))}
            
        </div>

    </div>
    </div>
  );
};

export default HOC(MessagesListUser);
