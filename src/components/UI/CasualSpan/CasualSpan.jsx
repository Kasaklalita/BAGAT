import React from "react";
import cl from "./CasualSpan.module.css";

const CasualSpan = ({ children }) => {
  return <span className={cl.casualSpan}>{children}</span>;
};

export default CasualSpan;
