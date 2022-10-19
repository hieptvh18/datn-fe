import React, { useEffect, useState } from "react";
import "./styles.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import BannerHome from "../../components/BannerHome";
import BookingBanner from "../../components/BookingBanner";
import List4Top from "../../components/List4Top";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { addAccount } from "../../feature/AccountSlice";
import classNames from "classnames";
import { InputTextarea } from "primereact/inputtextarea";
// import moment from "moment/moment";
import Map from "../../components/Maps";
import { Dialog } from "primereact/dialog";
import FeedBack from "../../components/FeedBack";
import SpecialiezdTeam from "../../components/SpecialiezdTeam";
import { getBannerHome } from "../../feature/BannerHomeSlice";
import { listMenuServices } from "../../feature/MenuServices";

const HomePage = () => {
  const dispatch = useDispatch();
  const bannerHome = useSelector(data => data.bannerHome.value)
  const menuServices = useSelector(data => data.service.value)
  const services = menuServices.data?.map(item => {
    return {
      "name": item.service_name,
      "code": item.id
    }
  });
  useEffect(() => {
    dispatch(getBannerHome())
    dispatch(listMenuServices)
  }, [])

  const { control, handleSubmit, formState: { errors }, reset } = useForm();
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  };
  const dates = [...Array(30)].map((_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - i)
    return d
  })

  const onSubmit = (data) => {
    const service = data.service_id.id;
    dispatch(addAccount({ ...data, service: service }));
    setFormData(data);
    setShowMessage(true);
    reset();
  };

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    );
  };
  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"

        onClick={() => setShowMessage(false)}
      />
    </div>
  );
  return (
    <>
      <div className="relative">
        <div>
          <Slider {...settings}>
            {bannerHome?.map((item, index) =>
              <BannerHome key={index} title={item.title} subTitle={item.subTitle} bgImg={item.bgImg} titleBtn={item.titleBtn} linkPost={item.linkPost} item={item.item} />
            )}
          </Slider>
        </div>
        <div className="w-default absolute -mt-8 md:-mt-0 md:-cs-bottom-25 left-50 -translate-x-50 z-1 flex align-items-center justify-content-center">
          <div className="flex px-0 md:px-5 flex-column lg:flex-row md:flex-row">
            <div className="bg-primary2 text-center p-5 z-2 md:my-8 lg:w-6 md:w-6 sm:w-full">
              <hr className="hr my-7 w-4 m-auto"></hr>
              <p className="text-white font-normal line-height-3 sm:text-3xl lg:text-5xl">
                Triết lý của ĐỨC NGHĨA sẽ giúp bạn khỏe mạnh, hạnh phúc vì chúng
                tôi hiểu vai trò quan trọng trong sức khỏe răng miệng của bạn.
              </p>
              <hr className="hr my-7 w-4 m-auto"></hr>
              <img
                className="w-3"
                src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663399845/signature_tqtnbs.png"
              />
            </div>
            <div className="cs-w-booking cs-box-dow bg-white z-1 flex justify-content-center md:justify-content-end w-full md:w-8 lg:w-8">
              <div
                style={{ width: "calc(100% - 100%/7)" }}
                className="py-7 px-0 md:px-7"
              >
                <BookingBanner />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background:
            "url(https://res.cloudinary.com/dbpw1enlu/image/upload/v1663491749/background_dpo5ge.jpg)",
        }}
        className="res-mobile h-800px md:relative bg-img"
      >
        <div className="md:absolute -cs-bottom-70px z-1 w-full">
          <List4Top />
        </div>
      </div>
      {/* Specialiezd team */}
      <div
        style={{
          background:
            "url(http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/background-3.jpg)"
        }}
        className="bg-img w-full cs-mt-280px h-900px"
      >
        <div className="relative w-default mx-auto">
          <div className="lg:w-5 md:w-6 px-8 md:px-0 w-full text-center absolute Specialized">
            <div className="contact font-normal text-4xl md:text-5xl xl:text-6xl">NHA KHOA ĐỨC NGHĨA</div>
            <div className="denticare font-bold text-6xl md:text-7xl xl:text-8xl">ĐỘI NGŨ CỦA CHÚNG TÔI</div>
            <hr className="hr my-7 w-4 m-auto" />
            <div className="text-3xl md:text-3xl">
              Chúng tôi là một đội ngũ nha sĩ, nhân viên vệ sinh và lễ tân làm việc cùng nhau để đảm bảo rằng bạn nhận được sự điều trị tốt nhất mà bạn yêu cầu vào thời điểm phù hợp với bạn.
            </div>
            <hr className="hr my-7 w-4  m-auto" />
            <img
              style={{ width: "20%" }}
              src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/02/img-signature.png"
            />
          </div>
        </div>
      </div>
      <SpecialiezdTeam />
      {/* Book at your service */}
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="flex justify-content-center flex-column pt-6 px-3">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "5rem", color: "var(--primary)" }}
          ></i>
          <h1 style={{ paddingTop: "5px", color: "var(--primary1)" }}>
            Đặt lịch khám thành công!
          </h1>
          <p style={{ lineHeight: 1.5, fontSize: "14px" }}>
            Tài khoản của bạn được tạo dưới số điện thoại{" "}
            <b>{formData.phone}</b> <br />
            Tên là <b>{formData.fullName}</b>!
          </p>
        </div>
      </Dialog>
      <div
        style={{
          background:
            "url(http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/03/background-doctor.jpg)"
        }}
        className="bg-img mt-8 md:mt-0 imageBooking overflow-hidden h-800px"
      >
        <div className="h-full px-5">
          <div className="w-default relative m-auto h-full">
            <div className="flex flex-column-reverse row-gap-8 lg:flex-row flex-column md:justify-content-center lg:justify-content-between md:align-item-center lg:align-content-start h-full">
              <div className="w-full flex align-items-end md:hidden lg:flex">
                <div className="">
                  <img className="w-full h-full grid" src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/doctor.png" />
                </div>
              </div>
              <div className=" flex align-items-center">
                <div className="px-5">
                  <div>
                    <div className="colorPrimary text-5xl pt-3">
                      Đặt Lịch Khám Của Bạn Với
                    </div>
                    <div className="colorPrimary1 text-7xl font-bold pb-4">
                      Đức Nghĩa
                    </div>
                    <div style={{ fontFamily: 'var(--fontRoboto)' }} className="font-medium text-2xl">
                      Có một trường hợp khẩn cấp? Hãy đặt trước với chúng tôi bằng biểu mẫu đơn giản dưới đây và các dịch vụ phân phối vượt trội trong khi các ứng dụng hỗ trợ web. Liên tục tái hiện các quy trình tích hợp thông qua vốn tri thức kỹ thuật tốt
                    </div>
                  </div>
                  <hr className="hr my-6 w-full" />
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="p-fluid grid">
                      <div className="field col-12 md:col-6">
                        <span className="p-float-label">
                          <Controller
                            name="fullname"
                            control={control}
                            rules={{ required: "Họ và tên bắt buộc nhập!" }}
                            render={({ field, fieldState }) => (
                              <InputText
                                style={{ height: "50px", fontSize: "17px" }}
                                id={field.name}
                                {...field}

                                className={classNames({
                                  "p-invalid": fieldState.invalid,
                                })}
                              />
                            )}
                          />
                          <label
                            htmlFor="fullName"
                            className={classNames({
                              "p-error": errors.fullName,
                            })}
                          >
                            Họ và tên
                          </label>
                        </span>
                        {getFormErrorMessage("fullName")}
                      </div>
                      <div className="field col-12 md:col-6">
                        <span className="p-float-label">
                          <Controller
                            name="phone"
                            control={control}
                            rules={{
                              required: "Số điện thoại bắt buộc nhập!",
                              pattern: {
                                value:
                                  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i,
                                message: "Nhập đúng định dạnh số điện thoại",
                              },
                            }}
                            render={({ field, fieldState }) => (
                              <InputText
                                style={{ height: "50px", fontSize: "17px" }}
                                id={field.name}
                                {...field}

                                className={classNames({
                                  "p-invalid": fieldState.invalid,
                                })}
                              />
                            )}
                          />
                          <label
                            htmlFor="phone"
                            className={classNames({ "p-error": errors.phone })}
                          >
                            Số điện thoại
                          </label>
                        </span>
                        {getFormErrorMessage("phone")}
                      </div>
                      <div className="field col-12 md:col-6">
                        <span className="p-float-label">
                          <Controller
                            name="service_id"
                            control={control}
                            render={({ field, fieldState }) => (
                              <Dropdown
                                id={field.name}
                                value={field.value}
                                style={{ height: "50px", fontSize: "17px" }}
                                {...field}
                                options={services}
                                optionLabel="name"
                                onChange={(e) => field.onChange(e.value)}
                                className={classNames({
                                  "p-invalid": fieldState.invalid,
                                })}
                              />
                            )}
                          />
                          <label
                            htmlFor="service"
                            className={classNames({
                              "p-error": errors.service,
                            })}
                          >
                            Dịch vụ
                          </label>
                        </span>
                      </div>
                      <div className="field col-12 md:col-6">
                        <span className="p-float-label">
                          <Controller
                            name="date"
                            control={control}
                            render={({ field, fieldState }) => (
                              <Calendar
                                style={{ height: "50px", fontSize: "17px" }}
                                id={field.name}
                                {...field}
                                className={classNames({
                                  "p-invalid": fieldState.invalid,
                                })}
                                disabledDates={dates}
                                onChange={(e) => field.onChange(e.value)}
                                dateFormat="dd/mm/yy"
                                showIcon
                              />
                            )}
                          />
                          <label
                            htmlFor="date"
                            className={classNames({ "p-error": errors.date })}
                          >
                            Ngày khám
                          </label>
                        </span>
                      </div>
                      <div className="field col-12 md:col-6 m-auto">
                        <Button
                          type="submit"
                          label="Đặt lịch ngày bây giờ"
                          className="py-4 text-3xl"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feed back client */}

      <FeedBack />

      {/* ContactDentiCare */}
      <div className="paddingBottom mt-8">
        <div className="text-700 text-center">
          <span className="contact font-bold text-7xl mr-2">Liên Hệ với</span>
          <span className="denticare font-bold text-7xl ">Nha Khoa Đức Nghĩa</span>
          <div className="text-800 text-2xl mt-3 mb-8">
            Globally incubate standards compliant channels before scalable
            benefits.
            <br /> Quickly disseminate superior deliverables whereas web-enabled
            applications.{" "}
          </div>
        </div>

        <div className="mb-8 w-full">
          <div style={{ height: "400px" }}>
            <Map />
          </div>
        </div>

      </div>
      {/* section info */}
      <div className="w-default mx-auto">
        <div className="w-full px-5 mb-8">
          <div className="grid row-gap-3">
            <div className="col-12 md:col-6 lg:col flex flex-column align-items-center justify-content-center">
              <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1664338250/phone_hospital_g3ew1o.png" width="80px" />
              <h3 style={{ fontFamily: 'var(--fontRoboto)' }} className="text-4xl font-medium  mt-3">Điện thoại liên hệ</h3>
              <p className="text-600 mt-5">0372559460</p>
              <p className="text-600">Gọi cho chúng tôi bất cứ lúc nào 24/7</p>
            </div>

            <div className="col-12 md:col-6 lg:col flex flex-column align-items-center justify-content-center">
              <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1664963443/hospital_location_kf4fkx.png" width="80px" />
              <h3 style={{ fontFamily: 'var(--fontRoboto)' }} className="text-4xl font-medium mt-3">Địa chỉ</h3>
              <p className="text-600 mt-5">Số 5 Trịnh Văn Bô, Xuân Phương</p>
              <p className="text-600">Nam Từ Liên, Hà Nội</p>
            </div>

            <div className="col-12 md:col-6 lg:col flex flex-column align-items-center justify-content-center">
              <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1664333732/dentist-chair_oavr3q.png" width="80px" />
              <h3 style={{ fontFamily: 'var(--fontRoboto)' }} className="text-4xl font-medium mt-3">Điện thoại đặt lịch</h3>
              <p className="text-600 mt-5">0372559888</p>
              <p className="text-600">Chúng tôi luôn sẵn sàng</p>
            </div>

            <div className="col-12 md:col-6 lg:col flex flex-column align-items-center justify-content-center">
              <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1664963466/mail_hospital_x4c7hu.png" width="80px" />
              <h3 style={{ fontFamily: 'var(--fontRoboto)' }} className="text-4xl font-medium mt-3">Gửi email cho chúng tôi</h3>
              <p className="text-600 mt-5">nghiatdph14539@fpt.edu.vn</p>
              <p className="text-600">tuanna14620@fpt.edu.vn</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
