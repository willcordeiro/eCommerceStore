import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label> +1234 5678 910</label>

            <label> test@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>Need Help?</label>
            <span>🏳️EN</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
