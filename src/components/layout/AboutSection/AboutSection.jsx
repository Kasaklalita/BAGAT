import React from "react";
import ContentSection from "../ContentSection/ContentSection";
import cl from "./AboutSection.module.css";
import PrimaryButton from "../../UI/PrimaryButton/PrimaryButton";

const AboutSection = () => {
  return (
    <ContentSection title="Узнайте нас ближе">
      <div className={cl.content}>
        <div className={cl.contentItem}>
          <div className={cl.left}>
            <h1 className={cl.title}>Мы международная транспортная компания</h1>
            <PrimaryButton text="Подробнее" />
          </div>
          <div className={cl.right}>
            <span className={cl.description}>BAGAT — это </span>
            <span className={cl.highlightedDescription}>
              экспедиционная компания{" "}
            </span>
            <span className={cl.description}>
              с собственным перегрузочным терминалом на ст. Семянувка (граница
              Польши с Беларусью). Благодаря профессионализму персонала и
              выгодному расположению, мы способны предложить экспедирование
              сложных и объёмных грузов. География перевозок, доступных
              клиентам, не ограничивается Польшей. Мы организуем получение
              заказов в ряде стран Европы и на других континентах.
            </span>
          </div>
        </div>
        <div className={cl.contentItem}>
          <div className={cl.left}>
            <h1 className={cl.title}>
              Транспортно-экспедиционная компания, которой можно доверить свой
              бизнес
            </h1>
            <div>
              <span className={cl.highlightedDescription}>
                Экспедирование грузов
              </span>
              <span className={cl.description}>
                {" "}
                — это услуга, в которой в первую очередь заинтересованы
                владельцы коммерческих фирм. Мы рады предложить бизнесменам
                безопасную транспортировку разнообразных товаров. В список
                опций, доступных нашим клиентам, входит перевозка генеральных и
                проектных грузов с привлечением спецтранспорта.
              </span>
            </div>
            <PrimaryButton text="Оставить заявку" />
          </div>
          <div className={cl.right}>
            <div style={{ marginBottom: "28px" }}>
              <span className={cl.description}>
                Автопарк составлен из автомобилей, разработанных для перевозки
                грузов с разными размерами и свойствами. Поэтому у нас в
                распоряжении всегда есть автотранспорт, подходящий для
                безопасной отправки любого груза. Помимо грузовиков мы
                привлекаем грузовые самолёты и железнодорожный транспорт
                (платформы, угольные вагоны, крытые 120–158 м3, изотермические
                вагоны-термосы). Для продвижения по водным маршрутам доступна
                перевозка генеральных грузов морем.
              </span>
            </div>
            <div>
              <span className={cl.description}>
                Благодаря такому набору транспортных средств, мы организовываем{" "}
              </span>
              <span className={cl.highlightedDescription}>
                своевременную и безопасную доставку любых грузов
              </span>
              <span className={cl.description}>
                . Для экспедирования принимаются заказы с бытовой техникой и
                электроникой, строительными материалами, машинами и агрегатами,
                производственными линиями, сырьём и многим другим.
              </span>
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
  );
};

export default AboutSection;
