import React from "react";
import ContentSection from "../ContentSection/ContentSection";
import cl from "./WorkingWithUsSection.module.css";

const WorkingWithUsSection = () => {
  return (
    <ContentSection title="Удобство работы с нами">
      <h1 className={cl.title}>
        BAGAT — экспедиторская компания с собственным перегрузочным терминалом
      </h1>
    </ContentSection>
  );
};

export default WorkingWithUsSection;
