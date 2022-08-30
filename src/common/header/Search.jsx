import React, { useState } from "react";
import logo from "../../components/assets/images/logo.svg";
import { Link } from "react-router-dom";
import { HiFire } from "react-icons/hi";
const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const [searchBar, setSeachbar] = useState(false);

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className={searchBar ? "logo width none" : "logo width"}>
            <HiFire className="logo" />
            CW
          </div>

          <div
            className="search-box f_flex"
            style={{ display: `${searchBar ? "block" : ""}` }}
          >
            <input type="text" placeholder="Search and hit enter..." />
          </div>

          <div className="icon f_flex width">
            <div className="search-Bar" onClick={() => setSeachbar(!searchBar)}>
              <i className="fa fa-search icon-circle hover-navbar-icons"></i>
            </div>
            <i className="fa fa-user icon-circle hover-navbar-icons"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle hover-navbar-icons"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
