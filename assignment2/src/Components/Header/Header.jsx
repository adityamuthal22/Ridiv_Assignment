import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import styles from "./Header.module.css";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const buttonText = theme === "light" ? "Dark Theme" : "Light Theme";
  return (
    <div className={`${styles.header} ${theme}`}>
      <h1>Theme App</h1>
      <div className={styles.headerLink}>
        <p>Homepage</p>
        <p>AboutUs</p>
        <p>ContactUs</p>
        <p>Career</p>
      </div>
      <button className={`${styles.button} ${theme}`} onClick={toggleTheme}>
        {buttonText}
      </button>
    </div>
  );
}

export default Header;
