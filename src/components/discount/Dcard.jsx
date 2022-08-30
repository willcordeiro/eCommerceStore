import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "./Ddata";
import "../newarrivals/style.css";
import "./Dcard.css";

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <>
              <div className=" grid-container-dCord dCord-container">
                <div className="product container-discounts " key={index}>
                  <div className="img">
                    <img src={value.cover} alt="" className="img-center" />
                  </div>
                  <h4>{value.name}</h4>
                  <span>{value.price}</span>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default Dcard;
