import React from "react";

interface LoaderProps {
  text: string;
}

const Loader: React.FC<LoaderProps> = ({ text }) => {
  return <p style={{ textAlign: "center", marginTop: "16px" }}>{text}</p>;
};

export default Loader;
