import React from "react";
import cl from "./ProsItem.module.css";

const ProsItem = ({ title, description }) => {
  return (
    <div className={cl.prosItem}>
      <h1 className={cl.title}>{title}</h1>
      <p className={cl.description}>{description}</p>
      <div className={cl.splitter} />
    </div>
  );
};

export default ProsItem;
