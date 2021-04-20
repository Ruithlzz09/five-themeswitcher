import React, { useContext } from "react";
import ThemeContext from "../context/themeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${theme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API theem toggler</h1>
      <p>This is a nice paragraph</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#fff",
          border: `${currentTheme.border}`,
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default HeroSection;
