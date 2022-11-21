import React from "react";
import cl from "./HighlightedLink.module.css";

const HighlightedLink = ({ text, to }) => {
  return (
    <a href={to} className={cl.highlightedLink}>
      {text}
    </a>
  );
};

export default HighlightedLink;
