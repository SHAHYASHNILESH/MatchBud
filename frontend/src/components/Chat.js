import React from "react";

const Chat = ({ descendingOrderMessages }) => {
  return (
    <>
      <div className="chat-display">
        {descendingOrderMessages?.map((message, _index) => (
          <div key={_index}>
            <div className="chat-message-header">
              <div className="img-container">
                <img src={message.img} alt={message.name + " profile"} />
              </div>
              <p>{message.name}</p>
            </div>
            <p style={{ textAlign: "right" }}>{message.message}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default Chat;
