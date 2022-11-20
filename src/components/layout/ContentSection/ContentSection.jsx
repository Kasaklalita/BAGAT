import React from "react";
import MainContainer from "../../UI/MainContainer/MainContainer";
import cl from "./ContentSection.module.css";

const ContentSection = ({ children, title }) => {
  return (
    <div className={cl.contentSection}>
      <MainContainer>
        <h1 className={cl.title}>{title}</h1>
        <div className="content">{children}</div>
      </MainContainer>
    </div>
  );
};

export default ContentSection;
