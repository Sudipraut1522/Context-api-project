import React, { useContext } from "react";
import style from "./Themes.module.css";

import { ThemeContext } from "../../context/Theme.context";
import sun from "../../Assets/sun.jpeg";
import moon from "../../Assets/moon.jpg";

const Themes = () => {
  const handelClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  const theme = useContext(ThemeContext);
  return (
    <div className={style.toggle}>
      <img src={sun} alt="sun" className={style.icon} />
      <img src={moon} alt="moon" className={style.icon} />
      <div
        className={style.button}
        onClick={handelClick}
        style={{ left: theme.state.darkmode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Themes;
