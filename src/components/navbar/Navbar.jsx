import React from "react";
import style from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <ul className={style.topul}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <p>Category</p>
        <ul className={style.buttonul}>
          <li
            onClick={() =>
              navigate("/category", { state: { category: "Business" } })
            }
          >
            Business
          </li>
          <li
            onClick={() =>
              navigate("/category", { state: { category: "Business" } })
            }
          >
            General
          </li>
          <li
            onClick={() =>
              navigate("/category", { state: { category: "Business" } })
            }
          >
            Health
          </li>
          <li
            onClick={() =>
              navigate("/category", { state: { category: "Business" } })
            }
          >
            Science
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Navbar;
