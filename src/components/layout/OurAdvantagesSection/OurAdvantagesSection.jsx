import React from "react";
import cl from "./OurAdvantagesSection.module.css";
import ContentSection from "../ContentSection/ContentSection.jsx";
import PrimaryTitle from "../../UI/PrimaryTitle/PrimaryTitle.jsx";
import HighlightedLink from "../../UI/HighlightedLink/HighlightedLink.jsx";
import HighlightedSpan from "../../UI/HighlightedSpan/HighlightedSpan.jsx";
import CasualSpan from "../../UI/CasualSpan/CasualSpan.jsx";
import AdvantagesGrid from "../AdvantagesGrid/AdvantagesGrid.jsx";
import ProsItem from "../../UI/ProsItem/ProsItem.jsx";
import OurCondition from "../../UI/OurCondition/OurCondition.jsx";

const OurAdvantagesSection = () => {
  return (
    <ContentSection title="Наши преимущества">
      <div className={cl.titleContainer}>
        <div className={cl.left}>
          <PrimaryTitle></PrimaryTitle>
          <HighlightedLink text="Смотреть презентацию компании" to="/" />
          <HighlightedLink text="Отзывы" to="/" />
        </div>
        <div className={cl.right}>
          <HighlightedSpan>
            Мы оказываем экспедиторские услуги с 2010 года{" "}
          </HighlightedSpan>
          <CasualSpan>
            , и за этот срок мы сформировали точное понимание того, что нужно
            заказчикам. Поэтому мы предоставляем каждому клиенту персонального
            менеджера, который поможет вам при обращении в любой день недели и
            время дня. Также мы отличаемся от конкурентов тщательным выбором
            субподрядчиков. Чтобы доставка генеральных грузов проходила без
            нареканий, возможные партнёры проверяются на соответствие
            требованиям безопасности.
          </CasualSpan>
        </div>
      </div>
      <AdvantagesGrid>
        <ProsItem title="55" description="Профессионалов в команде" />
        <ProsItem title="15 млн €" description="Оборот в 2020 году" />
        <ProsItem title="7500+" description="Отгрузок ежегодно" />
      </AdvantagesGrid>
      <div className={cl.ourConditions}>
        <PrimaryTitle>Предлагаем лучшие условия на рынке</PrimaryTitle>
      </div>
      <div className={cl.ourAdvantages}>
        <OurCondition text="Доставляем грузы безопасно и в полном объёме" />
        <OurCondition text="BAGAT — компания со страхованием ответственности экспедитора и собственным перегрузочным комплексом" />
        <OurCondition text="Без опозданий — вы получаете товар точно в оговоренные сроки" />
        <OurCondition text="Все субподрядчики проходят многоступенчатую проверку" />
        <OurCondition text="Персональный менеджер — на связи с вами в режиме 24/7" />
        <OurCondition text="Помощь от профессионалов в любой ситуации и информирование о продвижении груза каждый день" />
      </div>
    </ContentSection>
  );
};

export default OurAdvantagesSection;
