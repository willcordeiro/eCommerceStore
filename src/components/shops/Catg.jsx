import React from "react";
import { BiJoystick } from "react-icons/bi";
const Catg = () => {
  const data = [
    {
      cateImg: <BiJoystick />,
      cateName: "Apple",
    },
    {
      cateImg: <BiJoystick />,
      cateName: "Samsung",
    },
    {
      cateImg: <BiJoystick />,
      cateName: "Oppo",
    },
    {
      cateImg: <BiJoystick />,
      cateName: "Vivo",
    },
    {
      cateImg: <BiJoystick />,
      cateName: "Redimi",
    },
    {
      cateImg: <BiJoystick />,
      cateName: "Sony",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Brands</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className="box f_flex category-container" key={index}>
              <span className="cateIcon">{value.cateImg}</span>
              <span className="cateName">{value.cateName}</span>
            </div>
          );
        })}
        <div className="box box2 buttonBrand category-container">
          <button className="buttonBrand">View All Brands</button>
        </div>
      </div>
    </>
  );
};

export default Catg;
