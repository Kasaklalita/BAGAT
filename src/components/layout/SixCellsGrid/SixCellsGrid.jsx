import React from "react";
import cl from "./SixCellsGrid.module.css";
import ProsItem from "../../UI/ProsItem/ProsItem";

const SixCellsGrid = () => {
  return (
    <div className={cl.sixCellsGrid}>
      <ProsItem title="1.5 - 5 тонн" description="Грузоподъём. погрузчиков" />
      <ProsItem title="25000 м2" description="Площадь терминала" />
      <ProsItem title="1200 м2" description="Площадь крытого склада" />
      <ProsItem title="до 50 тонн" description="Грузоподъём. кранов" />
      <ProsItem title="24/7" description="Мониторинг" />
      <ProsItem title="1520 мм" description="Собственные ж/д пути" />
    </div>
  );
};

export default SixCellsGrid;
