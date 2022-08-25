import React from "react";
import Ndata from "./Ndata";
import "./style.css";
const Cart = () => {
  return (
    <>
      <div className="content Cart-container product">
        {Ndata.map((val, index) => {
          return (
            <div className="box" key={index}>
              <div className="img">
                <img src={val.cover} alt="" className="CartImages" />
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
