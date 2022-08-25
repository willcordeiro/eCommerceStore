import React from "react";
import logo from "../../assets/icons8-flower-playing-cards-48.png";
function Search() {
  return (
    <>
      <section className="seach">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="" />
          </div>
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search and hit enter..."
            />
            <span>All Category</span>
          </div>
          <div className="icon f_flex width">
            <i className="fa-fa-user icons_circle"></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
