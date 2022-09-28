import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputNumber } from 'primereact/inputnumber';
import React, { useState } from "react";
import "./styles.scss";
import { InputTextarea } from "primereact/inputtextarea";
import { Controller, useForm } from "react-hook-form";
import classNames from "classnames";

const BookingBanner = () => {

  const { control, handleSubmit, formState: { errors } } = useForm()
  const getFormErrorMessage = (name) => {
    return errors[name] && <small className="p-error">{errors[name].message}</small>
  };
  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div className="wrapper-booking-banner">
      <h2 className="c-primary1 font-normal text-6xl ">
        ĐĂNG KÝ TƯ VẤN MIỄN PHÍ
      </h2>
      <div className="border-top-1 border-300 mt-4">
        <div className="mt-6 flex align-item-center column-gap-4">
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663406464/img-booking_tdyggn.png"
              width={200}
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex row-gap-5 flex-column">
            <div>
              <div className="p-float-label">
                <Controller name="name" control={control} rules={{ required: "Bạn phải nhập họ tên!" }}
                  render={({ field, fieldState }) => (

                    <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid }, 'w-full py-3 border-300 text-2xl')} />

                  )} />
                <label className={classNames({ 'p-error': errors.name }, 'text-1xl')} htmlFor="inputtext">Họ và tên *</label>
              </div>
              {getFormErrorMessage('name')}
            </div>

            <div>
              <div className="p-float-label">
                <Controller name="phone" control={control} rules={{ required: "Bạn phải nhập số điện thoại!" }}
                  render={({ field, fieldState }) => (

                    <InputText id={field.phone} {...field} className={classNames({ 'p-invalid': fieldState.invalid }, 'w-full py-3 border-300 text-2xl')} />


                  )} />
                <label className={classNames({ 'p-error': errors.name }, 'text-1xl')}>Số điện thoại *</label>
              </div>
              {getFormErrorMessage('phone')}
            </div>
            <div className="p-float-label">
              <Controller name="content" control={control}
                render={({ field, fieldState }) => (

                  <InputTextarea id={field.content} {...field} value="" className="w-full py-3" rows={5} autoResize />

                )} />
              <label className="text-1xl" htmlFor="">Vấn đề bạn gặp phải</label>
            </div>
            <button type="submit" className="text-white py-4 text-2xl border-round-lg bg-primary1 pointer-events-auto">Gửi cho chúng tôi</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingBanner;
