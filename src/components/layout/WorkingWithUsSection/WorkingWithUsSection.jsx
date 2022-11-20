import React from "react";
import ContentSection from "../ContentSection/ContentSection";
import cl from "./WorkingWithUsSection.module.css";

const WorkingWithUsSection = () => {
  return (
    <ContentSection title="Удобство работы с нами">
      <h1 className={cl.title}>
        BAGAT — экспедиторская компания с собственным перегрузочным терминалом
      </h1>
      <div className={cl.descriptionContainer}>
        <div className={cl.left}></div>
      </div>
    </ContentSection>
  );
};

export default WorkingWithUsSection;
