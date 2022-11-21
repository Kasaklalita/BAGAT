import React from "react";
import cl from "./AdvantagesGrid.module.css";

const AdvantagesGrid = ({ children }) => {
  return <div className={cl.advantagesGrid}>{children}</div>;
};

export default AdvantagesGrid;
