import React from "react";
import cl from "./OurCondition.module.css";

const OurCondition = ({ text }) => {
  return (
    <div className={cl.ourCondition}>
      <div className={cl.icon}></div>
      <p className={cl.description}>{text}</p>
    </div>
  );
};

export default OurCondition;
