import React from "react";
import LogoSearch from "../../components/LogoSearch/LogoSearch";

import "./Chat.css";

const Chat = () => {
  return (
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">sdfdsfdfsdf</div>
        </div>
      </div>

      {/* Right Side */}

      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>dfgfdgfdg</div>
      </div>
    </div>
  );
};

export default Chat;
