import React from "react";
import cl from "./HighlightedSpan.module.css";

const HighlightedSpan = ({ children }) => {
  return <span className={cl.highlightedSpan}>{children}</span>;
};

export default HighlightedSpan;
