import React from "react";

interface MessageProps {
  text: string;
}

const Message: React.FC<MessageProps> = ({ text }) => {
  return <p style={{ textAlign: "center", marginTop: "16px" }}>{text}</p>;
};

export default Message;
