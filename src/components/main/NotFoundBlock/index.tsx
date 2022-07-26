import React from "react";
import "./notFound.scss";
export const NotFoundBlock: React.FC = () => {
  return (
    <div className="container">
      <div className="notfound-wrap">
        <h2 className="notfound-title">
          😕 <br /> Ничего не найдено
        </h2>
        <p className="notfound-text">
          К сожалению данная страница отсутствует в нашем <br />{" "}
          интернет-магазине
        </p>
      </div>
    </div>
  );
};
