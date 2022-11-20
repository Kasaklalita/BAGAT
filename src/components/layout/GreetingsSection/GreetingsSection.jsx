import React from "react";
import MainContainer from "../../UI/MainContainer/MainContainer";
import PrimaryButton from "../../UI/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../UI/SecondaryButton/SecondaryButton";
import cl from "./GreetingsSection.module.css";

const GreetingsSection = () => {
  return (
    <div className={cl.greetingsSection}>
      <MainContainer>
        <h1 className={cl.title}>Автомобильные перевозки</h1>
        <div className={cl.content}>
          <h2 className={cl.subtitle}>Перевозка грузов автотранспортом</h2>
          <p className={cl.description}>
            Транспортировка на грузовых автомобилях — один из самых удобных и
            доступных способов перемещения грузов на небольшие и средние
            расстояния. Поэтому автоперевозки остаются стабильно популярными у
            наших клиентов.
          </p>
          <p className={cl.description}>
            Компания BAGAT наработала многолетний опыт организации международных
            перевозок. Мы гарантируем безопасную доставку тяжеловесных,
            негабаритных, опасных, требующих особых условий грузов.
          </p>
        </div>
        <div className={cl.actions}>
          <PrimaryButton text="Узнать цену" />
          <SecondaryButton text="Подробнее об услуге" />
        </div>
      </MainContainer>
    </div>
  );
};

export default GreetingsSection;
