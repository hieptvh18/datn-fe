import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import "./styles.scss";

const BookingBanner = () => {
  const [value5, setValue5] = useState(null);
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  return (
    <div className="wrapper-booking-banner">
      <h2 className="c-primary1 font-normal text-7xl ">
        Book Your Appointment
      </h2>
      <div className="border-top-1 border-300 mt-4">
        <div className="mt-6 flex align-content-center column-gap-4">
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663406464/img-booking_tdyggn.png"
              width={200}
            />
          </div>
          <div className="w-full flex row-gap-5 flex-column">
              <div className="p-float-label">
                <InputText className="w-full py-4 border-300 text-2xl" id="inputtext"/>
                <label className="text-1xl" htmlFor="inputtext">Your email address *</label>
              </div>
              <div className="p-float-label">
                <Dropdown className="w-full py-2 border-300 text-2xl" options={cities} optionLabel="name" id="dropdown"/>
                <label className="text-1xl" htmlFor="inputtext">Select your dentist</label>
              </div>
              <div className="p-float-label">
                <Calendar value={value5} onChange={(e) => setValue5(e.value)} className="w-full border-300 cs-input-calendar" id="Calendar"/>
                <label className="text-1xl" htmlFor="inputtext">Calendar *</label>
              </div>
              <button className="text-white py-4 text-2xl border-round-lg bg-primary1 pointer-events-auto">Book your dentist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingBanner;
