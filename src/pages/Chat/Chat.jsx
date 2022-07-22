import React, { useState } from "react";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import Conversation from "../../components/Coversation/Coversation";
import NavIcons from "../../components/NavIcons/NavIcons";
import ChatBox from "../../components/ChatBox/ChatBox";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userChats } from "../../api/ChatRequests";

import "./Chat.css";

const Chat = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [chats, setChats] = useState([]);

  // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);

  return (
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div
                onClick={() => {
                  //   setCurrentChat(chat);
                }}
              >
                <Conversation
                  data={chat}
                  currentUserId={user._id}
                  //   online={checkOnlineStatus(chat)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          {" "}
          <NavIcons />
        </div>
        {/*Chat Body */}
        <ChatBox />
      </div>
    </div>
  );
};

export default Chat;
