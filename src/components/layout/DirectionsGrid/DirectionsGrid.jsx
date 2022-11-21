import React from "react";
import cl from "./DirectionsGrid.module.css";
import GridDirectionItem from "../../UI/GridDirectionItem/GridDirectionItem.jsx";

const DirectionsGrid = () => {
  return (
    <div className={cl.directionsGrid}>
      <GridDirectionItem title="Грузоперевозки в Россию" />
      <GridDirectionItem title="Грузоперевозки в Казахстан" />
      <GridDirectionItem title="Грузоперевозки в Узбекистан" />
      <GridDirectionItem title="Грузоперевозки в Кыргызстан" />
      <GridDirectionItem title="Грузоперевозки в Монголию" />
      <GridDirectionItem title="Грузоперевозки в Туркменистан" />
      <GridDirectionItem title="Грузоперевозки в Таджикистан" />
      <GridDirectionItem title="Грузоперевозки в Азербайджан" />
      <GridDirectionItem title="Грузоперевозки в Грузию" />
    </div>
  );
};

export default DirectionsGrid;
