import React, { useEffect, useState } from "react";
import styles from "../Search/Search.module.css";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/newsCard/NewsCard";

const Search = () => {
  const { state } = useLocation();

  const [news, setnews] = useState("");

  const apikey = process.env.REACT_APP_API_KEY;

  const url = `https://newsapi.org/v2/top-headlines?q=${state} &apikey=${apikey}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setnews(data.articles))
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div className={styles.searchPage}>
      <h1>
        News About:<span>{state.toUpperCase()}</span>
      </h1>

      <div className={styles.searchNews}>
        {!news && <h2>"The Search Item not Found"</h2>}

        {news && news.map((news, index) => <NewsCard key={index} {...news} />)}
      </div>
    </div>
  );
};

export default Search;
