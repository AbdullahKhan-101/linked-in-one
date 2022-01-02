import React from "react";
import "./InputOption.css";

const InputOption = ({ color, Icon, title }) => {
  return (
    <div className="inputOption">
      <Icon style={{ color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;
