import React, { useContext, useEffect, useState } from "react";
import style from "../Home/Home.module.css";
import NewsCard from "../../components/newsCard/NewsCard";
import Spinner from "../../components/spinner/Spinner";
import Slider from "../../components/slider/Slider";
import axios from "axios";
import Themes from "../../components/thems/Themes";
import { ThemeContext } from "../../context/Theme.context";

const Home = () => {
  const [news, setNews] = useState([]);
  console.log(news);
  const [loading, setLoading] = useState(false);

  const apikey = process.env.REACT_APP_API_KEY;

  const url = `https://newsapi.org/v2/top-headlines?country=us&apikey=${apikey}`;

  const getNews = async () => {
    setLoading(true);
    try {
      const responce = await axios(url);
      setLoading(false);
      return setNews(responce.data.articles);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkmode;

  return (
    <div
      className={style.contaner}
      style={{ backgroundColor: darkMode ? "orange" : "white" }}
    >
      <Themes />
      <div className={style.slider}>
        <Slider sliderNews={news} />
      </div>
      <div className={style.homeCard}>
        {loading && <Spinner />}

        {news?.map((items, index) => (
          <NewsCard key={index} {...items} />
        ))}
      </div>
    </div>
  );
};

export default Home;
