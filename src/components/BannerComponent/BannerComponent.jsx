import React from 'react';
import Imagebanner from '../../assets/imgbanner.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BannerComponent.css';

const BannerComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <Slider {...settings} className="mt-10">
      {[...Array(4)].map((_, index) => (
        <div key={index}>
          <img src={Imagebanner} className="w-full max-h-96 object-contain" alt={`Banner ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};



export default BannerComponent;
