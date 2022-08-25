import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tdata from "./Tdata";

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <>
              <div className="box product topCart-container" key={index}>
                <div className="nametop d_flex product-col">
                  <span className="tleft">{value.para}</span>
                </div>
                <div className="img">
                  <img src={value.cover} alt="" className="img-center" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default TopCart;
