"use client";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemeChanger = () => {
  const themeValues = ["dark", "light", "cupcake", "bumblebee", "dracula"];

  useEffect(() => {
    themeChange(false);
  }, []);

  const changeTheme = (theme) => {
    themeChange(theme);
  };

  return (
    <select
      className="main"
      data-choose-theme
      onChange={(e) => changeTheme(e.target.value)}
    >
      <option className="main" value="">
        my theme!
      </option>
      {themeValues.map((value) => (
        <option
          className="main"
          key={value.toLowerCase()}
          value={value.toLowerCase()}
        >
          {value}
        </option>
      ))}
    </select>
  );
};

export default ThemeChanger;
