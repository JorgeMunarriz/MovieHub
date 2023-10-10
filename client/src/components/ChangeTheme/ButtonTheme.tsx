

import React, { useState } from "react";
import "./buttonTheme.styles.css";
import { BsCircleHalf, BsFillMoonStarsFill, BsSunsetFill } from "react-icons/bs";

/**
 * The functionality for switching between light dark and auto themes
 */

interface ThemeButtonProps {
  theme: string;
  selectedTheme: string;
  onClick: () => void;
  children: React.ReactNode;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ theme, selectedTheme, onClick, children }) => {
  const isActive = theme === selectedTheme;

  return (
    <button type="button" className={`dropdown_item  ${isActive ? "bg_danger" : ""}`} data-bs-theme-value={theme} aria-pressed={isActive} onClick={onClick}>
      {children}
      {isActive && (
        <svg className="bi ms-auto" width="1em" height="1em">
          <use href="#check2"></use>
        </svg>
      )}
    </button>
  );
};

export const ButtonTheme: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<string>("auto");
  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const changeTheme = (theme: string) => {
    setSelectedTheme(theme);
    const body = document.getElementById("body") as HTMLBodyElement;
    body?.setAttribute("class", theme);
    body.classList.add("body")
    setIsOpen(false);
  };

  const handleThemeButtonClick = (theme: string) => {
    changeTheme(theme);
    
  };

  const currentHour = new Date().getHours();
  const isDayTime = currentHour >= 8 && currentHour < 18;
  const defaultTheme = isDayTime ? "light" : "dark";

  return (
    <>
      <div className="dropdown">
        
        <button className="btn_open" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)  " onClick={() => handleClickOpen()}>
          <BsCircleHalf />
        </button>
        {isOpen ? (
          <ul className="show" aria-labelledby="bd-theme">
            <ThemeButton theme="light" selectedTheme={selectedTheme} onClick={() => handleThemeButtonClick("light")}>
              <BsSunsetFill />
              Light
            </ThemeButton>
            <ThemeButton theme="dark" selectedTheme={selectedTheme} onClick={() => handleThemeButtonClick("dark")}>
              <BsFillMoonStarsFill />
              {"     "}
              Dark
            </ThemeButton>
            <ThemeButton theme="auto" selectedTheme={selectedTheme} onClick={() => handleThemeButtonClick(defaultTheme)}>
              <BsCircleHalf />
              {"    "}
              Auto
            </ThemeButton>
          </ul>
        ) : (
          <ul className="dropdown_menu"></ul>
        )}
      </div>
    </>
  );
};
