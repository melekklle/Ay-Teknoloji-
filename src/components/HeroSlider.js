import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function HeroSlider() {
  const sliderRef = useRef(null);

  const slides = [
    { img: "https://picsum.photos/id/1015/1200/500", title: "Yazılım Çözümleri", subtitle: "Profesyonel ve güvenilir" },
    { img: "https://picsum.photos/id/1016/1200/500", title: "Web Tasarım", subtitle: "Modern ve mobil uyumlu" },
    { img: "https://picsum.photos/id/1018/1200/500", title: "Danışmanlık", subtitle: "Projelerinizde destek" }
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="hero-slider-container">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <img src={slide.img} alt={slide.title} />
            <div className="hero-text">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Thumbnail Navigation */}
      <div className="hero-thumbnails">
        {slides.map((slide, index) => (
          <img 
            key={index} 
            src={slide.img} 
            alt={slide.title} 
            onClick={() => sliderRef.current.slickGoTo(index)} 
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
