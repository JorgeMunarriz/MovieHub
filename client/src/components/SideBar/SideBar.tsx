import { useState } from "react";
import { SideBarStyles } from "./sidebar.styles";
import { BsFilterSquareFill, BsX } from "react-icons/bs";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SideBarStyles>
      <button className="buttonOpenCloseSidebar"  onClick={toggleSideBar}>
       {!isOpen ? ( <BsFilterSquareFill />) : ( <BsX />)}
      </button>
      {isOpen && (
        <div className="sidebar">
          <div className="sidebar__header">
            <h4 className="sidebar__header-title">Filters</h4>
          </div>
          <div className="sidebar__main">
            <ul className="sidebar__main-filters">
              <li className="sidebar__main-filters-list">
                <button className="sidebar__main-filters-list-button">Categories</button>
              </li>
              <li className="sidebar__main-filters-list">
                <button className="sidebar__main-filters-list-button">Rating</button>
              </li>
              <li className="sidebar__main-filters-list">
                <button className="sidebar__main-filters-list-button">Year</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </SideBarStyles>
  );
};
