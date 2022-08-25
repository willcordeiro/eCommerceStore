import React from "react";
import "./Header.css";
function head() {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label htmlFor="">+88012 3457 7894</label>
            <i className="fa fa-envelope"></i>
            <label>test@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ'S</label>
            <label>Need Helps</label>
            <span>🏴</span>
            <label htmlFor="">EN</label>
            <span>🏴</span>
            <label htmlFor="">USD</label>
          </div>
        </div>
      </section>
    </>
  );
}

export default head;
