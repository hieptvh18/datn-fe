import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import BannerHome from "../../components/BannerHome";
import BookingBanner from "../../components/BookingBanner";
import List4Top from "../../components/List4Top";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { TabView, TabPanel } from 'primereact/tabview';
// import moment from "moment/moment";
import { Dialog } from "primereact/dialog";
import FeedBack from "../../components/FeedBack";
import SpecialiezdTeam from "../../components/SpecialiezdTeam";
import { listMenuServices } from "../../feature/MenuServices";
import { listService } from "../../feature/ServiceSlice";
import { addAccounts } from "../../api/account";
import GGMap from "../../components/Maps";
import dataBanner from "./dataBanner.json"

const HomePage = () => {
  const toast = useRef(null);
  const dispatch = useDispatch();
  const bannerHome = dataBanner
  const menuServices = useSelector(data => data.service.value)
  const websetting = useSelector((data) => data.Websetting.value?.data)
  const services = menuServices.data?.map(item => {
    return {
      "name": item.service_name,
      "code": item.id
    }
  });
  useEffect(() => {
    dispatch(listService())
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

  const onSubmit = async (data) => {
    const service = data.service_id;
    try {
      await addAccounts({ ...data, service_id: service })
      setFormData(data);
      setShowMessage(true);
    } catch (error) {
      toast.current.show({ severity: 'error', summary: 'Lỗi!', detail: `${error.response.data.message}`, life: 3000 });
    }

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
      <Toast ref={toast} />
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
            Tên là <b>{formData.fullname}</b>
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
              <div className=" md:flex md:align-items-center">
                <div className="md:px-5">
                  <div className="">
                    <div className="colorPrimary text-5xl pt-3">
                      Đặt Lịch Khám Của Bạn Với
                    </div>
                    <div className="colorPrimary1 text-7xl font-bold pb-4">
                      Đức Nghĩa
                    </div>
                    <div style={{ fontFamily: 'var(--fontRoboto)' }} className="font-medium text-xl md:text-2xl">
                      Có một trường hợp khẩn cấp? Hãy đặt trước với chúng tôi bằng biểu mẫu đơn giản dưới đây và các dịch vụ phân phối vượt trội trong khi các ứng dụng hỗ trợ web. Liên tục tái hiện các quy trình tích hợp thông qua vốn tri thức kỹ thuật tốt
                    </div>
                  </div>
                  <hr className="hr my-6 w-full" />

                  <TabView className="bg-opacity-0">
                    <TabPanel header="Kinh nghiệm làm việc">
                        <li className="text-xl mb-2 font-medium">Lãnh đạo không dây theo phong cách chuyên nghiệp hơn là những trải nghiệm trong tương lai.</li>
                        <li className="text-xl mb-2 font-medium">Quy trình kiểm tra nhấp chuột và vữa hoạt động mạnh mẽ trong khi các sản phẩm được sản xuất thế hệ tiếp theo.</li>
                        <li className="text-xl mb-2 font-medium">Nhiệt tình kết nối cơ sở hạ tầng có tác động cao trong dài hạn với dịch vụ khách hàng hiệu quả.</li>
                        <li className="text-xl mb-2 font-medium">Tự động phát minh lại các cơ hội và giao diện phổ biến dựa trên thị trường.</li>
                        <li className="text-xl mb-2 font-medium">Hăng hái tạo ra một loạt thị trường ngách mở rộng thông qua các sản phẩm mạnh mẽ.</li>
                        <li className="text-xl mb-2 font-medium">Thực hiện một cách phù hợp các dịch vụ điện tử có tầm nhìn xa so với sự sẵn sàng chiến lược của web.</li>
                        <li className="text-xl mb-2 font-medium">Bắt buộc nắm lấy kinh doanh điện tử được trao quyền sau vốn trí tuệ thân thiện với người dùng.</li>
                        <li className="text-xl mb-2 font-medium">Hiện thực hóa các quy trình front-end một cách tương tác với sự hội tụ hiệu quả.</li>
                        <li className="text-xl mb-2 font-medium">Phối hợp cung cấp các phương pháp trao quyền dựa trên hiệu suất trong khi chuyên môn phân tán.</li>
                    </TabPanel>
                    <TabPanel header="Kiểm tra y tế">
                    <li className="text-xl mb-2 font-medium">Tích hợp một cách khách quan các lĩnh vực chủ đề chiến lược toàn doanh nghiệp với cơ sở hạ tầng được chức năng hóa.</li>
                        <li className="text-xl mb-2 font-medium">Tương tác sản xuất các công nghệ cao cấp trong khi các vectơ chất lượng phụ thuộc lẫn nhau.</li>
                        <li className="text-xl mb-2 font-medium">Tận dụng mạnh mẽ trải nghiệm của doanh nghiệp thông qua các thị trường 24/7.</li>
                        <li className="text-xl mb-2 font-medium">Quy trình kiểm tra nhấp chuột và vữa hoạt động mạnh mẽ trong khi các sản phẩm được sản xuất thế hệ.</li>
                        <li className="text-xl mb-2 font-medium">Nhiệt tình kết nối cơ sở hạ tầng có tác động cao trong dài hạn với dịch vụ khách hàng hiệu quả.</li>
                        <li className="text-xl mb-2 font-medium">Tự động phát minh lại các cơ hội và giao diện phổ biến dựa trên thị trường.</li>
                        <li className="text-xl mb-2 font-medium">Hăng hái tạo ra một loạt thị trường ngách mở rộng thông qua các sản phẩm mạnh mẽ.</li>
                        <li className="text-xl mb-2 font-medium">Bắt buộc nắm lấy kinh doanh điện tử được trao quyền sau vốn trí tuệ thân thiện với người dùng.</li>
                        <li className="text-xl mb-2 font-medium">Hiện thực hóa các quy trình front-end một cách tương tác với sự hội tụ hiệu quả.</li>
                    </TabPanel>
                    <TabPanel header="Giải thưởng và thành tích">
                        <li className="text-xl mb-2 font-medium">Phối hợp cung cấp các phương pháp trao quyền dựa trên hiệu suất trong khi chuyên môn phân tán.</li>
                        <li className="text-xl mb-2 font-medium">Thực hiện một cách phù hợp các dịch vụ điện tử có tầm nhìn xa so với sự sẵn sàng chiến lược của web.</li>
                        <li className="text-xl mb-2 font-medium">Tích hợp một cách khách quan các lĩnh vực chủ đề chiến lược toàn doanh nghiệp với cơ sở hạ tầng được chức năng hóa.</li>
                        <li className="text-xl mb-2 font-medium">Tương tác sản xuất các công nghệ cao cấp trong khi các vectơ chất lượng phụ thuộc lẫn nhau.</li>
                        <li className="text-xl mb-2 font-medium">Tận dụng mạnh mẽ trải nghiệm của doanh nghiệp thông qua các thị trường 24/7.</li>
                        <li className="text-xl mb-2 font-medium">žMa trận duy nhất mang lại giá trị hợp lý về mặt kinh tế thông qua công nghệ hợp tác.</li>
                        <li className="text-xl mb-2 font-medium">Nhiệm vụ song song hiệu quả đã nghiên cứu đầy đủ dữ liệu và cải tiến quy trình doanh nghiệp.</li>
                        <li className="text-xl mb-2 font-medium">Tận dụng mạnh mẽ trải nghiệm của doanh nghiệp thông qua các thị trường 24/7.</li>
                        <li className="text-xl mb-2 font-medium">Hợp tác đẩy nhanh các sản phẩm được sản xuất có chất lượng thông qua các kết quả tập trung vào khách hàng.</li>
                        
                    </TabPanel>
                  </TabView>

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
            <GGMap />
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
              <a href={'tel:' + websetting?.phones} className="text-600 mt-5">{websetting?.phones}</a>
              <p className="text-600">Gọi cho chúng tôi bất cứ lúc nào 24/7</p>
            </div>

            <div className="col-12 md:col-6 lg:col flex flex-column align-items-center justify-content-center">
              <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1664963443/hospital_location_kf4fkx.png" width="80px" />
              <h3 style={{ fontFamily: 'var(--fontRoboto)' }} className="text-4xl font-medium mt-3">Địa chỉ</h3>
              <p className="text-600 mt-5">{websetting?.address}</p>
              <p className="text-600"> Hà Nội</p>
            </div>

            <div className="col-12 md:col-6 lg:col flex flex-column align-items-center justify-content-center">
              <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1664333732/dentist-chair_oavr3q.png" width="80px" />
              <h3 style={{ fontFamily: 'var(--fontRoboto)' }} className="text-4xl font-medium mt-3">Điện thoại đặt lịch</h3>
              <a href={'tel:' + websetting?.phones} className="text-600 mt-5">{websetting?.phones}</a>
              <p className="text-600">Chúng tôi luôn sẵn sàng</p>
            </div>

            <div className="col-12 md:col-6 lg:col flex flex-column align-items-center justify-content-center">
              <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1664963466/mail_hospital_x4c7hu.png" width="80px" />
              <h3 style={{ fontFamily: 'var(--fontRoboto)' }} className="text-4xl font-medium mt-3">Gửi email cho chúng tôi</h3>
              <a href={'mailto:' + websetting?.email} className="text-600 mt-5">{websetting?.email}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
