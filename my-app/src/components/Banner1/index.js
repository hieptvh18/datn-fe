import React from "react";
import "./styles.scss";

const Banner1 = () => {
  return (
    <div
      className="w-full bg-img h-750 relative cs-before-bg"
      style={{
        background:
          "url(https://res.cloudinary.com/dbpw1enlu/image/upload/v1663820210/featured_image_shop_cart_t3ozko.jpg)",
        height: "600px",
      }}
    >
      <div className="relative w-default mx-auto h-full">
        <div className="px-5 justify-content-between flex align-items-center h-full">
          <div className="w-full md:w-7">
            <h2 className="c-primary1 text-5xl lg:text-8xl md:text-7xl ">Tầm nhìn, sứ mệnh</h2>
            <p className="mt-4">
              Sứ mệnh của chúng tôi là giúp mọi người có một nụ cười tươi sáng
              và tự tìn nhất. Bằng những nỗ lực và lắng nghe khách hàng, chúng
              tôi tin rằng tay nghề bác sĩ tốt, quy trình nha khoa chuẩn, thái
              độ thân thiện sẽ giúp chúng tôi hoàn thành sứ mệnh cao cả này.
            </p>
            <hr className="hr w-full mt-6" />
            <div className="flex column-gap-5 mt-5">
              <div className="pointer">
                <i className="pi pi-telegram" style={{ fontSize: "2em", color: "#0088CC" }}></i>
              </div>
              <div className="pointer">
                <i className="pi pi-twitter" style={{ fontSize: "2em", color: "#1da1f2" }}></i>
              </div>
              <div className="pointer">
                <i className="pi pi-linkedin" style={{ fontSize: "2em", color: "#007bb5" }}></i>
              </div>
            </div>

            <div className="grid mt-8 w-full row-gap-3">
                <div className="col-6 md:col-3 text-center ">
                    <div>
                        <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663822959/tooth_phone_rit1w4.png" width="50px"/>
                    </div>
                    <p>Luôn sẵn sàng</p>
                </div>
                <div className="col-6 md:col-3 text-center ">
                    <div>
                        <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663822968/clinic_zwfbqm.png" width="50px"/>
                    </div>
                    <p>Thiết bị hiện đại</p>
                </div>
                <div className="col-6 md:col-3 text-center ">
                    <div>
                        <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663822978/dental-insurance_5_ukkfaq.png" width="50px"/>
                    </div>
                    <p>Tận tình chăm sóc</p>
                </div>
                <div className="col-6 md:col-3 text-center ">
                    <div>
                        <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663822996/dentist-tools_v0hqvp.png" width="50px"/>
                    </div>
                    <p>Kỹ năng tốt</p>
                </div>
            </div>
          </div>

          <div className="h-full hidden md:block">
            <div className="h-full flex align-items-end">
              <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663821286/dental-1_qude5p.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
