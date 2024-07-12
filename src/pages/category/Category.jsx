import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/newsCard/NewsCard";
import Spinner from "../../components/spinner/Spinner";
import style from "../category/Category.module.css";

const Category = () => {
  const { state } = useLocation();

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY;

  const url = `https://newsapi.org/v2/top-headlines?q=${state.category} &apikey=${apiKey}`;
  const filterUrl = `https://newsapi.org/v2/top-headlines?country=${filter}&category=${state.category} &apikey=${apiKey}`;

  const getData = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      setLoading(false);
      return setNews(data.articles);
    } catch (err) {
      throw new err();
    }
  };
  useEffect(() => {
    getData(url);
  }, [url]);
  const handelSubmit = (e) => {
    e.preventDefault();
    getData(filterUrl);
    setFilter("");
  };
  return (
    <div className={style.container}>
      <div className={style.left}>
        category
        <form action="" className={style.form} onSubmit={handelSubmit}>
          <input
            type="text"
            placeholder="Eg:Nepal"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button type="submit" className={style.btn}>
            Filter Country
          </button>
        </form>
      </div>

      <div className={style.right}>
        {loading && <Spinner />}

        {news?.map((items, index) => {
          return <NewsCard key={index} {...items} />;
        })}
      </div>
    </div>
  );
};

export default Category;
