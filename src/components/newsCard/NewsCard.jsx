import React from "react";
import style from "./NewsCard.module.css";

const NewsCard = ({ title, url, urlToImage, content }) => {
  //   const { title, url, urlToImage, content } = news;
  return (
    <div className={style.card}>
      <img src={urlToImage} alt="" />
      <div className={style.cardDetail}>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className={style.a}>
          <a href={url} className={style.links}>
            Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
