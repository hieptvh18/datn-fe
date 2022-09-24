import React, { useState } from "react";
import "./styles.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import image12 from "../../assets/image/image12.png";
import image13 from "../../assets/image/image13.png";
import image14 from "../../assets/image/image14.png";
import image15 from "../../assets/image/image15.png";
import image11 from "../../assets/image/image 11.png";

import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import BannerHome from "../../components/BannerHome";
import BookingBanner from "../../components/BookingBanner";
import List4Top from "../../components/List4Top";
import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { addAccount } from "../../feature/AccountSlice";
import classNames from "classnames";
import { InputTextarea } from 'primereact/inputtextarea';
// import moment from "moment/moment";
import Maps from "../../components/Maps";
import Map from "../../components/Maps";
import { Dialog } from "primereact/dialog";
import FeedBack from "../../components/FeedBack";



const HomePage = () => {
  const [value11, setValue11] = useState(null);
  const [value5, setValue5] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const dispatch = useDispatch()
  const { control, handleSubmit, formState: { errors }, reset } = useForm()
  const onSubmit = data => {
    dispatch(addAccount({ ...data }));
    setFormData(data)
    setShowMessage(true);
    reset()
  }
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const getFormErrorMessage = (name) => {
    return errors[name] && <small className="p-error">{errors[name].message}</small>
  };
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  };
  const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
  return (
    <>
      <div className="relative">
        <div>
          <Slider {...settings}>
            <BannerHome />
            <BannerHome />
            <BannerHome />
          </Slider>
        </div>
        <div className="w-default absolute -cs-bottom-25 left-50 -translate-x-50 z-1 flex align-items-center justify-content-center">
          <div className="flex px-5">
            <div className="bg-primary2 text-center p-5 z-2 mx-0 my-8 w-6">
              <hr className="hr my-7 w-4 m-auto"></hr>
              <p className="text-white font-normal line-height-4 text-5xl">
                My family trusts Dr Fischer completely, he’s been with us for
                years and as helped us on numerous occasions
              </p>
              <hr className="hr my-7 w-4 m-auto"></hr>
              <img
                className="w-3"
                src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663399845/signature_tqtnbs.png"
              />
            </div>
            <div className="cs-w-booking bg-white w-8 z-1 flex justify-content-end">
              <div
                style={{ width: "calc(100% - 100%/7)" }}
                className="py-7 px-7"
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
        className="h-800px relative bg-img"
      >
        <div className="absolute -cs-bottom-70px left-50 -translate-x-50 z-1">
          <List4Top />
        </div>
      </div>
      {/* Specialiezd team */}
      <div
        style={{
          background:
            "url(http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/background-3.jpg)",
          height: "900px"
        }}
        className="bg-img w-full"
      >
        <div className="relative w-default mx-auto">
          <div className="w-4 text-center absolute Specialized">
            <div className="contact font-medium text-6xl">DentiCare</div>
            <div className="denticare font-bold text-8xl">Specialized Team</div>
            <hr className="hr my-7 w-4 m-auto" />
            <div>
              We are a team of dentists, hygienists and receptionists who work
              together to ensure that you receive the best treatment that you
              require at a very time that suits you.
            </div>
            <hr className="hr my-7 w-4  m-auto" />
            <img
              style={{ width: "20%" }}
              src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/02/img-signature.png"
            />
          </div>
        </div>
      </div>
      <div className="footer infoDoctor">
        <div className="flex column-gap-5">
          <div className="surface-200">
            <div className=" h-full">
              <div className="h-full flex flex-column">
                <div className="w-full flex">
                  <img
                    style={{ width: "100%" }}
                    src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-01.jpg"
                  />
                </div>
                <div className="px-6">
                  <div className="title pt-5 font-medium">Alex Terrel</div>
                  <hr className="hr" />
                  <div className="text-600 text-2xl pt-5">
                    Senior Orthodontist
                  </div>
                  <div className="text-600 text-2xl pt-5">
                    Appropriately empower dynamic leadership skills after
                    business portals. Globally myocardinate interactive supply
                    chains with quality.
                  </div>
                  <ul className="flex pb-5 pt-7 lg:pt-7">
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-facebook text-5xl icon"></i>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-youtube text-5xl text-red-500 icon"></i>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-twitter text-5xl icon"></i>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-telegram text-5xl icon"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="surface-200">
            <div className=" h-full">
              <div className="h-full flex flex-column">
                <div className="w-full flex">
                  <img
                    style={{ width: "100%" }}
                    src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-01.jpg"
                  />
                </div>
                <div className="px-6">
                  <div className="title pt-5 font-medium">Alex Terrel</div>
                  <hr className="hr" />
                  <div className="text-600 text-2xl pt-5">
                    Senior Orthodontist
                  </div>
                  <div className="text-600 text-2xl pt-5">
                    Appropriately empower dynamic leadership skills after
                    business portals. Globally myocardinate interactive supply
                    chains with quality.
                  </div>
                  <ul className="flex pb-5 pt-7 lg:pt-7">
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-facebook text-5xl icon"></i>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-youtube text-5xl text-red-500 icon"></i>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-twitter text-5xl icon"></i>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-telegram text-5xl icon"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="surface-200">
            <div className=" h-full">
              <div className="h-full flex flex-column">
                <div className="w-full flex">
                  <img
                    style={{ width: "100%" }}
                    src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-01.jpg"
                  />
                </div>
                <div className="px-6">
                  <div className="title pt-5 font-medium">Alex Terrel</div>
                  <hr className="hr" />
                  <div className="text-600 text-2xl pt-5">
                    Senior Orthodontist
                  </div>
                  <div className="text-600 text-2xl pt-5">
                    Appropriately empower dynamic leadership skills after
                    business portals. Globally myocardinate interactive supply
                    chains with quality.
                  </div>
                  <ul className="flex pb-5 pt-7 lg:pt-7">
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-facebook text-5xl icon"></i>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-youtube text-5xl text-red-500 icon"></i>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-twitter text-5xl icon"></i>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-telegram text-5xl icon"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="surface-200">
            <div className=" h-full">
              <div className="h-full flex flex-column">
                <div className="w-full flex">
                  <img
                    style={{ width: "100%" }}
                    src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-01.jpg"
                  />
                </div>
                <div className="px-6">
                  <div className="title pt-5 font-medium">Alex Terrel</div>
                  <hr className="hr" />
                  <div className="text-600 text-2xl pt-5">
                    Senior Orthodontist
                  </div>
                  <div className="text-600 text-2xl pt-5">
                    Appropriately empower dynamic leadership skills after
                    business portals. Globally myocardinate interactive supply
                    chains with quality.
                  </div>
                  <ul className="flex pb-5 pt-7 lg:pt-7">
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-facebook text-5xl icon"></i>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-youtube text-5xl text-red-500 icon"></i>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-twitter text-5xl icon"></i>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-telegram text-5xl icon"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Book at your service */}
      <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
        <div className="flex justify-content-center flex-column pt-6 px-3">
          <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--primary)' }}></i>
          <h1 style={{ paddingTop: '5px', color: 'var(--primary1)' }}>Đặt lịch khám thành công!</h1>
          <p style={{ lineHeight: 1.5, fontSize: '14px' }}>
            Tài khoản của bạn được tạo dưới số điện thoại <b>{formData.phone}</b> <br />
            Tên là <b>{formData.fullName}</b>!
          </p>
        </div>
      </Dialog>
      <div style={{
        background: "url(http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/03/background-doctor.jpg)",
        height: "800px"
      }} className="bg-img imageBooking overflow-hidden">
        <div className="h-full">
          <div className="w-default relative m-auto h-full">
            <div className="flex justify-content-between align-content-start h-full">
              <div className="w-full">
                <div className="mt-8"></div>
                <div className="w-full h-full">
                  <div style={{ background: "url(http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/doctor.png)" }} className="bg-img w-full h-full">
                  </div>
                </div>

              </div>
              <div className=" flex align-items-center">
                <div className="px-5">
                  <div>
                    <div className="colorPrimary text-5xl pt-3">
                      Book Your Visit At
                    </div>
                    <div className="colorPrimary1 text-7xl font-bold pb-4">
                      Đức Nghĩa
                    </div>
                    <div className="font-medium text-2xl">
                      Have an emergency? Do book with us with this simple form
                      below and superior deliverables whereas web-enabled
                      applications. Continually reintermediate integrated
                      processes through technically sound intellectual capital.
                    </div>
                  </div>
                  <hr className="hr my-6 w-full" />
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="p-fluid grid">
                      <div className="field col-12 md:col-6">
                        <span className="p-float-label">
                          <Controller name="fullName" control={control} rules={{ required: 'Họ và tên bắt buộc nhập!' }} render={({ field, fieldState }) => (
                            <InputText style={{ height: '50px', fontSize: '17px' }} id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                          )} />
                          <label htmlFor="fullName" className={classNames({ 'p-error': errors.fullName })}>Họ và tên</label>
                        </span>
                        {getFormErrorMessage('fullName')}
                      </div>
                      <div className="field col-12 md:col-6">
                        <span className="p-float-label">
                          <Controller name="phone" control={control} rules={{ required: 'Số điện thoại bắt buộc nhập!', pattern: { value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i, message: 'Nhập đúng định dạnh số điện thoại' } }} render={({ field, fieldState }) => (
                            <InputText style={{ height: '50px', fontSize: '17px' }} id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                          )} />
                          <label htmlFor="phone" className={classNames({ 'p-error': errors.phone })}>Số điện thoại</label>
                        </span>
                        {getFormErrorMessage('phone')}
                      </div>
                      <div className="field col-12 md:col-6">
                        <span className="p-float-label">
                          <Controller name="content" control={control} render={({ field, fieldState }) => (
                            <InputTextarea id={field.name} style={{ height: '50px', fontSize: '17px' }} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                          )} />
                          <label htmlFor="content" className={classNames({ 'p-error': errors.content })}>Nội dung</label>
                        </span>
                      </div>
                      <div className="field col-12 md:col-6">
                        <span className="p-float-label">
                          <Controller name="date" control={control} render={({ field, fieldState }) => (
                            <Calendar style={{ height: '50px', fontSize: '17px' }} id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} onChange={(e) => field.onChange(e.value)} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                          )} />
                          <label htmlFor="date" className={classNames({ 'p-error': errors.date })}>Ngày khám</label>
                        </span>
                      </div>
                      <div className="field col-12 md:col-6 m-auto">
                        <Button
                          type="submit"
                          label="Book Appponment Now"
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
      
      <FeedBack/>

      {/* ContactDentiCare */}
      <div className="paddingBottom mt-8">
        <div className="text-700 text-center">
          <span className="contact font-medium text-7xl mr-2">Contact</span>
          <span className="denticare font-bold text-7xl ">DentiCare</span>
          <div className="text-800 text-2xl mt-3 mb-8">
            Globally incubate standards compliant channels before scalable
            benefits.
            <br /> Quickly disseminate superior deliverables whereas web-enabled
            applications.{" "}
          </div>
        </div>

        <div className="mb-8 w-full">
          <div className="flex w-default mx-auto px-5">
            <div className="w-full">
              <Map />
            </div>
            <div className="workingHours px-6 py-4 -ml-6">
              <div className="mb-5">
                <h2 className="text-white">Working Hours</h2>
                <p className="text-300">
                  Check out DentiCare’s Office hours to plan your visit.
                </p>
              </div>
              <div>
                <div className="flex justify-content-between align-items-center mb-3">
                  <div className="text-white col-5">Monday</div>
                  <div className="text-right col-4">
                    <div className="text-300  font-semibold">8AM-9PM</div>
                  </div>

                  <Button label="Book" className="button" icon="pi pi-clock" />
                </div>
                <div className="flex justify-content-between align-items-center mb-3">
                  <div className="text-white col-5">Tuesday</div>
                  <div className="text-right col-4">
                    <div className="text-300  font-semibold">8AM-9PM</div>
                  </div>
                  <Button label="Book" className="button" icon="pi pi-clock" />
                </div>
                <div className="flex justify-content-between align-items-center mb-3">
                  <div className="text-white col-5 ">Wednesday</div>
                  <div className="text-right col-4">
                    <div className="text-300  font-semibold">8AM-9PM</div>
                  </div>
                  <Button label="Book" className="button" icon="pi pi-clock" />
                </div>
                <div className="flex justify-content-between align-items-center mb-3">
                  <div className="text-white col-5">Thursday</div>
                  <div className="text-right col-4">
                    <div className="text-300  font-semibold">8AM-9PM</div>
                  </div>
                  <Button label="Book" className="button" icon="pi pi-clock" />
                </div>
                <div className="flex justify-content-between align-items-center mb-3">
                  <div className="text-white col-5 ">Friday</div>
                  <div className="text-right col-4">
                    <div className="text-300  font-semibold">8AM-9PM</div>
                  </div>
                  <Button label="Book" className="button" icon="pi pi-clock" />
                </div>
                <div className="flex justify-content-between align-items-center mb-3">
                  <div className="text-white col-5">Saturday-Sunday</div>
                  <div className="text-right col-4">
                    <div className="text-300  font-semibold">Close</div>
                  </div>
                  <Button label="Book" className="button" icon="pi pi-clock" />
                </div>
              </div>
              <div className="text-white text-5xl font-bold mt-5 mb-2">
                Need Flexible Time?
              </div>
              <Button label="Suggest Checkup Time" className="buttonBig" />
            </div>
          </div>
        </div>

        <div className="sectionContact">
          <div className="grid mb-8  ">
            <div className="col-12 md:col-6 lg:col-3">
              <div className="text-center">
                <div className="mb-3">
                  <div>
                    <img src={image12} />
                    <div className="text-900 font-bold text-3xl">
                      Emergency Phone
                    </div>
                  </div>
                </div>
                <div className="text-600 text-2xl mb-1">415-205-5550</div>
                <div className="text-600 text-2xl mb-">
                  Call us Anytime 24/7
                </div>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <div className="text-center">
                <div className="mb-3">
                  <div>
                    <img src={image13} />
                    <div className="text-900 font-bold text-3xl">Address</div>
                  </div>
                </div>
                <div className="text-600 text-2xl mb-1">
                  500 Linden Ave, South San Francisco,
                  <br />
                  CA 94080, United States
                </div>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <div className="text-center">
                <div className="mb-3">
                  <div>
                    <img src={image14} />
                    <div className="text-900 font-bold text-3xl">
                      Book By Phone
                    </div>
                  </div>
                </div>
                <div className="text-600 text-2xl mb-1">415-205-5550</div>
                <div className="text-600 text-2xl mb-">405-222-5551</div>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <div className="text-center">
                <div className="mb-3">
                  <div>
                    <img src={image15} />
                    <div className="text-900 font-bold text-3xl">Email Us</div>
                  </div>
                </div>
                <div className="text-600 text-2xl mb-1">
                  office@denticare.com
                </div>
                <div className="text-600 text-2xl mb-">
                  emergencies@denticare.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
