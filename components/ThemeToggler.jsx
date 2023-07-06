"use client";
import { useState, useEffect } from "react";

const ThemeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>

      {/* Rest of your component */}
    </div>
  );
};

export default ThemeToggler;
