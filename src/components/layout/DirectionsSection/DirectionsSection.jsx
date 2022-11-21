import React from "react";
import cl from "./DirectionSection.module.css";
import ContentSection from "../ContentSection/ContentSection.jsx";
import PrimaryTitle from "../../UI/PrimaryTitle/PrimaryTitle.jsx";
import CasualSpan from "../../UI/CasualSpan/CasualSpan.jsx";
import HighlightedSpan from "../../UI/HighlightedSpan/HighlightedSpan.jsx";
import DirectionsGrid from "../DirectionsGrid/DirectionsGrid.jsx";

const DirectionsSection = () => {
  return (
    <ContentSection title="Приоритетные направления">
      <PrimaryTitle>
        Из Западной Европы в Росиию и другие страны СНГ{" "}
      </PrimaryTitle>
      <div className={cl.descriptionContainer}>
        <div className={cl.left}>
          <CasualSpan>
            С 2010 года мы разработали широчайшую сеть маршрутов.{" "}
          </CasualSpan>
          <HighlightedSpan>
            Среди приоритетных направлений работы — международные грузоперевозки
            из Западной Европы во все страны СНГ
          </HighlightedSpan>
          <CasualSpan>
            {" "}
            (включая Россию), а также в государства дальневосточного региона, в
            Монголию.
          </CasualSpan>
        </div>
        <div className={cl.right}>
          <CasualSpan>
            Транзитом через РФ мы перевозим заказы в Среднюю Азию. В Казахстан,
            Туркменистан, Узбекистан грузы перемещаются ж/д составами или
            автотранспортом. Доставка проходит без промежуточной погрузки,
            загрузки, что сильно ускоряет и упрощает процесс.
          </CasualSpan>
          <CasualSpan>
            {" "}
            Наша логистическая компания проводит международные грузоперевозки и
            по обратным маршрутам.
          </CasualSpan>
        </div>
      </div>
      <DirectionsGrid />
    </ContentSection>
  );
};

export default DirectionsSection;
