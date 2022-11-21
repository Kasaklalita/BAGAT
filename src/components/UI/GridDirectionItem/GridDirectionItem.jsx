import React from "react";
import cl from "./GridDirectionItem.module.css";
import HighlightedLink from "../HighlightedLink/HighlightedLink.jsx";

const GridDirectionItem = ({ title }) => {
  return (
    <div className={cl.gridDirectionItem}>
      <div className={cl.image}></div>
      <h1 className={cl.title}>{title}</h1>
      <HighlightedLink text="Узнать подробнее" to="/" />
    </div>
  );
};

export default GridDirectionItem;
