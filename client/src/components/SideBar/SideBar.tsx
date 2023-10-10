import { useState } from "react";
import { SideBarStyles } from "./sidebar.styles";
import { BsFilterSquareFill, BsSearch, BsX } from "react-icons/bs";
import { SetURLSearchParams } from "react-router-dom";

interface QueryProps {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  handleChangeParams: (e: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
}

export const SideBar = ({ handleChangeParams, query }: QueryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearchTitle, setIsOpenSearchTitle] = useState(false);
  const [isOpenSearchRating, setIsOpenSearchRating] = useState(false);
  const [isOpenSearchYear, setIsOpenSearchYear] = useState(false);

  // const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get("q") || "";

  // const handleChangeParams = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchParams({ q: target.value });
  // };

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
    const sidebar = document.getElementById("sidebarId");
    sidebar?.classList.toggle("active");
  };
  const toggleSearch = (type: string) => {
    if (type === "title") {
      setIsOpenSearchTitle(!isOpenSearchTitle);
    }
    if (type === "rating") {
      setIsOpenSearchRating(!isOpenSearchRating);
    }
    if (type === "year") {
      setIsOpenSearchYear(!isOpenSearchYear);
    }
  };
  return (
    <SideBarStyles>
      <button className="buttonOpenCloseSidebar" onClick={toggleSideBar}>
        {!isOpen ? <BsFilterSquareFill /> : <BsX />}
      </button>

      <div className="sidebar" id="sidebarId">
        <div className="sidebar__header">
          <h4 className="sidebar__header-title">Filters:</h4>
        </div>
        <div className="sidebar__main">
          <ul className="sidebar__main-filters">
            <li className="sidebar__main-filters-list">
              <button className="sidebar__main-filters-list-button" onClick={() => toggleSearch("title")}>
                Title
              </button>
              {isOpenSearchTitle && (
                <div className="sidebar__main-filters-list-div">
                  <label className="sidebar__main-filters-list-div-label" htmlFor="titleInput"></label>
                  <input type="search" className="sidebar__main-filters-list-div-input" placeholder="Search" id="titleInput" value={query} onChange={handleChangeParams} />
                  <button className="sidebar__main-filters-list-div-buttonSearch">
                    <BsSearch />
                  </button>
                </div>
              )}
            </li>
            <li className="sidebar__main-filters-list">
              <button className="sidebar__main-filters-list-button" onClick={() => toggleSearch("rating")}>
                Rating
              </button>
              {isOpenSearchRating && (
                <div className="sidebar__main-filters-list-div">
                  <label className="sidebar__main-filters-list-div-label" htmlFor="ratingInput"></label>
                  <input type="search" className="sidebar__main-filters-list-div-input" placeholder="Search" id="ratingInput" value={query} onChange={handleChangeParams} />
                  <button className="sidebar__main-filters-list-div-buttonSearch">
                    <BsSearch />
                  </button>
                </div>
              )}
            </li>
            <li className="sidebar__main-filters-list">
              <button className="sidebar__main-filters-list-button" onClick={() => toggleSearch("year")}>
                Year
              </button>
              {isOpenSearchYear && (
                <div className="sidebar__main-filters-list-div">
                  <label className="sidebar__main-filters-list-div-label" htmlFor="yearInput"></label>
                  <input type="search" className="sidebar__main-filters-list-div-input" placeholder="Search" id="yearInput" value={query} onChange={handleChangeParams} />
                  <button className="sidebar__main-filters-list-div-buttonSearch">
                    <BsSearch />
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </SideBarStyles>
  );
};
