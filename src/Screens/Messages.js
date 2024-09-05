import { useState, useEffect } from "react";
import socket, { sendMesage, viewChat } from "../socket";
import { useParams } from "react-router-dom";
import { fetchApiData } from "../utils";
const Messages = () => {
  const [message, setMessage] = useState("");
  const [messagesInfo, setMessagesInfo] = useState([]);
  const [userInfo, setUserInfo] = useState();

  const { id } = useParams();

  const getUserInfo = async () => {
    const userData = await fetchApiData(
      `https://flyweisgroup.com/api/api/v1/admin/User/${id}`
    );
    console.log(userData);
    setUserInfo(userData?.data);
  };

  const handleSend = async () => {
    if (message) {
      await sendMesage(id, message);
      setTimeout(() => {
        viewChat(id);
      }, 1000);
      setMessage("");
    }
  };
  setTimeout(() => {
    viewChat(id);
  }, 2000);


  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    socket.on("userConnected", (data) => {
      console.log("User connected:", data);
    });
    viewChat(id);
    console.log("chatId", id);
    socket.on("viewChat", (data) => {
      console.log("viewChat List", data);
      setMessagesInfo(data?.chat?.chats);
    });
    getUserInfo();
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ fontSize: "30px", fontWeight: "600" }}>
          Chat
          <br />
        </div>
      </div>
      <div
        style={{
          height: "650px",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            border: "1px solid black",
            height: "100vh",
            borderRadius: "10px",
            margin: "0px 10px",
          }}
        >
          <div
            style={{
              height: "100px",
              display: "flex",
              alignItems: "center",
              borderBottom: "1px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyItems: "center",
                justifyContent: "center",
                width: "100%",
                marginLeft: "10px",
                gap: "10px",
              }}
            >
              <div className="" style={{ fontSize: "20px" }}>
                <img
                  src={userInfo?.image}
                  alt=""
                  style={{
                    borderRadius: "50px",
                    width: "30px",
                    height: "30px",
                    margin: "0px 10px",
                  }}
                />
                {userInfo?.fullName || userInfo?.firstName + userInfo?.lastName}
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "rgb(240 249 255)",
              height: "580px",
              overflow: "scroll",
              position: "relative",
            }}
          >
            <div
              style={{ padding: "20px", height: "490px", overflow: "scroll" }}
            >
              {messagesInfo?.map((message, index) => (
                <div
                  key={index}
                  className={`${
                    message.sender?._id !== id
                      ? "chat-input-Active"
                      : "chat-input-inactive"
                  }`}
                >
                  {message?.message}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                placeholder="Message..."
                style={{}}
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
                style={{
                  backgroundColor: "rgb(59 130 246)",
                  color: "white",
                  height: "50px",
                  width: "100px",
                  borderRadius: "10px",
                }}
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
