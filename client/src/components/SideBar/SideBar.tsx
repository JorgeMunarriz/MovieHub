import { SideBarStyles } from "./sidebar.styles";

export const SideBar = () => {
  return (
    <SideBarStyles>
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
    </SideBarStyles>
  );
};
