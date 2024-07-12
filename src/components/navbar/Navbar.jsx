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
              navigate("/category", { state: { category: "General" } })
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
              navigate("/category", { state: { category: "Health" } })
            }
          >
            Health
          </li>
          <li
            onClick={() =>
              navigate("/category", { state: { category: "Science" } })
            }
          >
            Science
          </li>
          <li
            onClick={() =>
              navigate("/category", { state: { category: "Sport" } })
            }
          >
            Sport
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Navbar;
