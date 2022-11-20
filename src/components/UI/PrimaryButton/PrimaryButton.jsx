import React from "react";
import cl from "./PrimaryButton.module.css";

const PrimaryButton = ({ text }) => {
  return <button className={cl.primaryButton}>{text}</button>;
};

export default PrimaryButton;
