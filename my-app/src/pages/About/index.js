import React from "react";
import Banner1 from "../../components/Banner1";
import ItemProfile from "../../components/ItemProfile";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./styles.scss"
import Next from "../../components/btnSlick/Next";
import Prev from "../../components/btnSlick/Pre";



const AboutPage = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true,
    nextArrow: <Next />,
    prevArrow: <Prev />
  }
  return (
    <div>
      <Banner1 />
      <div className="w-full">
        <div className="w-default mx-auto px-5 mt-7">
          <div className="flex align-items-center flex-column">
            <h3 className="c-primary1 text-7xl" style={{letterSpacing: "0.7px"}}>Đội Ngũ Bác Sĩ</h3>
            <p className="mt-6 w-7 line-height-3 text-center text-3xl">
              Đội ngũ bác sĩ của nha khoa Đức Nghĩa đều là các bác sĩ tốt nghiệp
              tại các trường đào tạo y khoa hàng đầu như Đại học Y Hà Nội. Với
              nhiều năm kinh nghiệm và hơn hết là sự tận tâm trong công việc để
              cống hiến hết mình trong công việc.
            </p>
          </div>
          <div className="mt-8 px-8">
            <div className="cs-slick">
              <Slider {...settings}>
                <ItemProfile/>      
                <ItemProfile/>      
                <ItemProfile/>      
                <ItemProfile/>      
                <ItemProfile/>      
                <ItemProfile/>      
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
