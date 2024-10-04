import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBanner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };

    return (
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://apollosports.pk/wp-content/uploads/2024/03/Ca-Banner.jpg" className="w-100" alt="Banner 1" />
                </div>
                <div className="item">
                    <img src="https://apollosports.pk/wp-content/uploads/2024/02/Untitled-1.jpg" className="w-100" alt="Banner 2" />
                </div>
                <div className="item">
                    <img src="https://apollosports.pk/wp-content/uploads/2024/08/Head-Speed-Banner.jpg" className="w-100" alt="Banner 3" />
                </div>
               
            </Slider>
        </div>
    );
};

export default HomeBanner;
