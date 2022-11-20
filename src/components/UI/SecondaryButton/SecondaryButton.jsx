import React from "react";
import cl from "./SecondaryButton.module.css";
const SecondaryButton = ({ text }) => {
  return <button className={cl.secondaryButton}>{text}</button>;
};

export default SecondaryButton;
