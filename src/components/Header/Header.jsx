import React, { useState } from "react";
import styles from "../Header/Header.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();

    navigate("/search", { state: search });
    setSearch("");
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>OAK News</h1>

        <form className={styles.search} action="" onSubmit={handelSubmit}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">SEARCH</button>
        </form>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
