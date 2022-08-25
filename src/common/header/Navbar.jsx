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
        <div className="container d_flex">
          <div className="categories d_flex ">
            <span className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <AiFillCloseCircle /> : <AiOutlineMenu />}
            </span>
          </div>

          <div className="navlink">
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
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/pages">pages</Link>
              </li>
              <li>
                <Link to="/user">user account</Link>
              </li>
              <li>
                <Link to="/vendor">vendor account</Link>
              </li>
              <li>
                <Link to="/track">track my order</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
