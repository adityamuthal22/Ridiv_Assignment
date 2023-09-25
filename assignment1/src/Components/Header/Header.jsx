import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={`${styles.header}`}>
      <h1>Blog App</h1>
      <div className={styles.headerLink}>
        <Link to={"/"}>Homepage</Link>
        <Link to="/aboutPage">About Page</Link>
      </div>
    </div>
  );
}

export default Header;
