
import { InputText } from "primereact/inputtext";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./styles.scss";
import { InputTextarea } from "primereact/inputtextarea";
import { Controller, useForm } from "react-hook-form";
import classNames from "classnames";
import { addAdvisories } from '../../feature/AdvisorySlice';
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { listService } from "../../feature/ServiceSlice";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";

const BookingBanner = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm()
  const [showMessage, setShowMessage] = useState(false);
  const menuServices = useSelector(data => data.service.value)
  const dispatch = useDispatch()
  const services = menuServices.data?.map(item => {
    return {
      "name": item.service_name,
      "code": item.id
    }
  });
  const dates = [...Array(30)].map((_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - i)
    return d
  })
  useEffect(() => {
    dispatch(listService())
  }, [])
  const onSubmit = data => {
    // dispatch(addAdvisories(data))
    // setShowMessage(true)
    // reset()
  }
  const getFormErrorMessage = (name) => {
    return errors[name] && <small className="p-error">{errors[name].message}</small>
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
            Đặt tư vấn cùng Đức Nghĩa thành công!
          </h1>
          <p style={{ lineHeight: 1.5, fontSize: "14px" }}>
            Bác sĩ sẽ liên hệ sớm nhất với bạn!
          </p>
        </div>
      </Dialog>
      <div className="wrapper-booking-banner">
        <h2 className="c-primary1 font-normal text-3xl md:text-4xl lg:text-6xl ">
          ĐĂNG KÝ TƯ VẤN MIỄN PHÍ
        </h2>
        <div className="border-top-1 border-300 mt-4">
          <div className="mt-6 flex flex-column md:flex-row align-item-center column-gap-4">
            <div className="text-center lg:block md:hidden">
              <img
                className=""
                src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663406464/img-booking_tdyggn.png"
                width={200}
              />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex row-gap-5 flex-column">
              <div>
                <div className="p-float-label">
                  <Controller name="advisory_name" control={control} rules={{ required: "Bạn phải nhập họ tên!" }}
                    render={({ field, fieldState }) => (

                      <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid }, 'w-full py-3 border-300 text-2xl')} />

                    )} />
                  <label className={classNames({ 'p-error': errors.advisory_name }, 'text-1xl')} htmlFor="advisory_name">Họ và tên *</label>
                </div>
                {getFormErrorMessage('advisory_name')}
              </div>

              <div>
                <div className="p-float-label">
                  <Controller name="advisory_phone" control={control} rules={{
                    required: "Số điện thoại bắt buộc nhập!",
                    pattern: {
                      value:
                        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i,
                      message: "Nhập đúng định dạnh số điện thoại",
                    },
                  }}
                    render={({ field, fieldState }) => (

                      <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid }, 'w-full py-3 border-300 text-2xl')} />


                    )} />
                  <label htmlFor="advisory_name" className={classNames({ 'p-error': errors.advisory_phone }, 'text-1xl')}>Số điện thoại *</label>
                </div>
                {getFormErrorMessage('advisory_phone')}
              </div>
              <div className="p-float-label">
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
                      }, 'w-full border-300 cs-text-booking-banner')}
                    />
                  )}
                />
                <label className="text-1xl" htmlFor="advisory_content">Dịch vụ</label>
              </div>
              <div className="p-float-label">
                <Controller
                  name="date"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Calendar
                      style={{ height: "50px" }}
                      id={field.name}
                      {...field}
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      }, 'w-full border-300 cs-text-booking-banner')}
                      disabledDates={dates}
                      onChange={(e) => field.onChange(e.value)}
                      dateFormat="dd/mm/yy"
                      showIcon
                    />
                  )}
                />
                <label className="text-1xl" htmlFor="advisory_content">Ngày đặt</label>
              </div>
              <button type="submit" className="text-white py-4 text-2xl border-round-lg bg-primary1 pointer-events-auto">Gửi cho chúng tôi</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};

export default BookingBanner;
