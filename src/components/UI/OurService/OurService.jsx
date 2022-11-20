import React from "react";
import cl from "./OurService.module.css";

const OurService = ({ number, title, description }) => {
  return (
    <div className={cl.ourService}>
      <h1 className={cl.number}>{number}</h1>
      <h1 className={cl.title}>{title}</h1>
      <p className={cl.description}>{description}</p>
    </div>
  );
};

export default OurService;
