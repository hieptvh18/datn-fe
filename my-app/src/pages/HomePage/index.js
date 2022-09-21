import React, { useState } from "react";
import Slider from "react-slick";
import "./styles.scss";
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
// import moment from "moment/moment";
import Maps from "../../components/Maps";
import Map from "../../components/Maps";



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
    console.log('sáas', formData);
  const settings = {
    dots: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
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
                  <div style={{background: "url(http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/doctor.png)"}} className="bg-img w-full h-full">
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
                  <div className="p-fluid grid">
                    <div className="field col-12 md:col-6">
                      <span className="p-float-label">
                        <InputText id="inputtext" className="py-4 text-2xl" />
                        <label htmlFor="inputtext">Họ và tên</label>
                      </span>
                    </div>
                    <div className="field col-12 md:col-6">
                      <span className="p-float-label">
                        <InputText id="inputtext" className=" py-4 text-2xl" />
                        <label htmlFor="inputtext">Số điện thoại</label>
                      </span>
                    </div>
                    <div className="field col-12 md:col-6">
                      <span className="p-float-label">
                        <Dropdown
                          className=" py-3 text-2xl"
                          aria-setsize
                          inputId="dropdown"
                          value={value11}
                          options={cities}
                          onChange={(e) => setValue11(e.value)}
                          optionLabel="name"
                        />
                        <label htmlFor="dropdown">Chọn bác sĩ</label>
                      </span>
                    </div>
                    <div className="field col-12 md:col-6">
                      <span className="p-float-label ">
                        <Calendar
                          style={{ height: "50px" }}
                          id="calendar"
                          value={value5}
                          onChange={(e) => setValue5(e.value)}
                        />
                        <label htmlFor="calendar">Calendar</label>
                      </span>
                    </div>
                    <div className="field col-12 md:col-6 m-auto">
                      <Button
                        label="Book Appponment Now"
                        className="py-4 text-3xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <Map/>
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
