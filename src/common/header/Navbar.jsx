import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="d_flex container-navbar">
          <div className="categories d_flex">
            <span className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <AiFillCloseCircle /> : <AiOutlineMenu />}
            </span>
          </div>

          <div className="navlink container-navbar">
            <ul
              className={
                MobileMenu
                  ? "nav-links-MobileMenu shadowBox"
                  : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to="/" className="navlink-color">
                  home
                </Link>
              </li>
              <li>
                <Link to="/" className="navlink-color">
                  pages
                </Link>
              </li>
              <li>
                <Link to="/" className="navlink-color">
                  user account
                </Link>
              </li>
              <li>
                <Link to="/" className="navlink-color">
                  vendor account
                </Link>
              </li>
              <li>
                <Link to="/" className="navlink-color">
                  track my order
                </Link>
              </li>
              <li>
                <Link to="/" className="navlink-color">
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
