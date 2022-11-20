import React from "react";
import ContentSection from "../ContentSection/ContentSection";
import cl from "./AboutSection.module.css";
import PrimaryButton from "../../UI/PrimaryButton/PrimaryButton";
import CasualSpan from "../../UI/CasualSpan/CasualSpan";
import HighlightedSpan from "../../UI/HighlightedSpan/HighlightedSpan";
import PrimaryTitle from "../../UI/PrimaryTitle/PrimaryTitle";

const AboutSection = () => {
  return (
    <ContentSection title="Узнайте нас ближе">
      <div className={cl.content}>
        <div className={cl.contentItem}>
          <div className={cl.left}>
            <PrimaryTitle>Мы международная транспортная компания</PrimaryTitle>
            <PrimaryButton text="Подробнее" />
          </div>
          <div className={cl.right}>
            <CasualSpan>BAGAT — это </CasualSpan>
            <HighlightedSpan>экспедиционная компания </HighlightedSpan>
            <CasualSpan>
              с собственным перегрузочным терминалом на ст. Семянувка (граница
              Польши с Беларусью). Благодаря профессионализму персонала и
              выгодному расположению, мы способны предложить экспедирование
              сложных и объёмных грузов. География перевозок, доступных
              клиентам, не ограничивается Польшей. Мы организуем получение
              заказов в ряде стран Европы и на других континентах.
            </CasualSpan>
          </div>
        </div>
        <div className={cl.contentItem}>
          <div className={cl.left}>
            <PrimaryTitle>
              Транспортно-экспедиционная компания, которой можно доверить свой
              бизнес
            </PrimaryTitle>
            <div>
              <HighlightedSpan>Экспедирование грузов</HighlightedSpan>
              <CasualSpan>
                {" "}
                — это услуга, в которой в первую очередь заинтересованы
                владельцы коммерческих фирм. Мы рады предложить бизнесменам
                безопасную транспортировку разнообразных товаров. В список
                опций, доступных нашим клиентам, входит перевозка генеральных и
                проектных грузов с привлечением спецтранспорта.
              </CasualSpan>
            </div>
            <PrimaryButton text="Оставить заявку" />
          </div>
          <div className={cl.right}>
            <div style={{ marginBottom: "28px" }}>
              <CasualSpan>
                Автопарк составлен из автомобилей, разработанных для перевозки
                грузов с разными размерами и свойствами. Поэтому у нас в
                распоряжении всегда есть автотранспорт, подходящий для
                безопасной отправки любого груза. Помимо грузовиков мы
                привлекаем грузовые самолёты и железнодорожный транспорт
                (платформы, угольные вагоны, крытые 120–158 м3, изотермические
                вагоны-термосы). Для продвижения по водным маршрутам доступна
                перевозка генеральных грузов морем.
              </CasualSpan>
            </div>
            <div>
              <CasualSpan>
                Благодаря такому набору транспортных средств, мы организовываем{" "}
              </CasualSpan>
              <HighlightedSpan>
                своевременную и безопасную доставку любых грузов
              </HighlightedSpan>
              <CasualSpan>
                . Для экспедирования принимаются заказы с бытовой техникой и
                электроникой, строительными материалами, машинами и агрегатами,
                производственными линиями, сырьём и многим другим.
              </CasualSpan>
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
  );
};

export default AboutSection;
