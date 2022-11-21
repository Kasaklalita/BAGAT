import React from "react";
import ContentSection from "../ContentSection/ContentSection";
import cl from "./WorkingWithUsSection.module.css";
import PrimaryTitle from "../../UI/PrimaryTitle/PrimaryTitle";
import CasualSpan from "../../UI/CasualSpan/CasualSpan";
import HighlightedSpan from "../../UI/HighlightedSpan/HighlightedSpan";
import AdvantagesGrid from "../AdvantagesGrid/AdvantagesGrid.jsx";
import OurService from "../../UI/OurService/OurService";
import PrimaryButton from "../../UI/PrimaryButton/PrimaryButton";
import ProsItem from "../../UI/ProsItem/ProsItem.jsx";

const WorkingWithUsSection = () => {
  return (
    <ContentSection title="Удобство работы с нами">
      <div className={cl.titleContainer}>
        <PrimaryTitle>
          BAGAT — экспедиторская компания с собственным перегрузочным терминалом
        </PrimaryTitle>
      </div>
      <div className={cl.descriptionContainer}>
        <div className={cl.left}>
          <CasualSpan>
            Мы владеем перегрузочным комплексом на станции Семянувка
            (пограничный переход Семянувка/Свислочь).{" "}
          </CasualSpan>
          <div>
            <CasualSpan>Это позволяет нам предоставлять </CasualSpan>
            <HighlightedSpan>транспортно-экспедиторские услуги</HighlightedSpan>
            <CasualSpan>
              {" "}
              эффективнее, чем могут предложить конкуренты.
            </CasualSpan>
          </div>
          <div>
            <HighlightedSpan>
              Миссия нашей логистической компании
            </HighlightedSpan>
            <CasualSpan>
              {" "}
              – не просто перевозить груз из пункта A в пункт B, а доставить
              товар с максимальными выгодой и удобством для клиента.
            </CasualSpan>
          </div>
        </div>
        <div className={cl.right}>
          <CasualSpan>
            Пункт полностью приспособлен для временного хранения,
            разгрузки/погрузки грузов. Перегрузочный терминал оборудован крытым
            складом, есть собственные подъездные пути. Общая площадь – более 20
            000 кв. м. В наличии погрузчики Linde грузоподъемностью 1,5-5 тонн.
            Объект находится рядом с границей республики Беларусь.
          </CasualSpan>
        </div>
      </div>
      <div className={cl.grid}>
        <AdvantagesGrid>
          <ProsItem
            title="1.5 - 5 тонн"
            description="Грузоподъём. погрузчиков"
          />
          <ProsItem title="25000 м2" description="Площадь терминала" />
          <ProsItem title="1200 м2" description="Площадь крытого склада" />
          <ProsItem title="до 50 тонн" description="Грузоподъём. кранов" />
          <ProsItem title="24/7" description="Мониторинг" />
          <ProsItem title="1520 мм" description="Собственные ж/д пути" />
        </AdvantagesGrid>
      </div>
      <div className={cl.descriptionContainer}>
        <div className={cl.left}>
          <PrimaryTitle>Международные транспортные услуги</PrimaryTitle>
        </div>
        <div className={cl.right}>
          <CasualSpan>
            Наша международная транспортно-экспедиционная компания организует
            грузоперевозку по автомобильным, железнодорожным, морским, воздушным
            путям.
          </CasualSpan>
          <HighlightedSpan>
            {" "}
            Среди услуг нашей фирмы — сложные виды грузоперевозок.
          </HighlightedSpan>
        </div>
      </div>
      <div className={cl.ourServices}>
        <OurService
          number="01"
          title="Безопасная транспортировка негабаритных объектов"
          description="Тяжёлая спецтехника, оборудование для производственных линий, сельхозтехники."
        />
        <OurService
          number="01"
          title="Приём заказов на получение сборных грузов"
          description="Если у вас небольшой груз, вы платите только за место, которое он занимает."
        />
        <OurService
          number="01"
          title="Услуга мультимодальных международных грузоперевозок"
          description="Иногда в рамках одного проекта приходится попеременно использовать несколько видов транспорта. Благодаря профессионализму и наработанному взаимодействию со службами разных стран логистическая компания BAGAT способна это организовать."
        />
      </div>
      <PrimaryButton text="Оставить заявку" />
    </ContentSection>
  );
};

export default WorkingWithUsSection;
