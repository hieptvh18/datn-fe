import React from 'react'
import "./styles.scss"

const BookingBanner = () => {
  return (
    <div className='wrapper-booking-banner'>
        <h2 className="c-primary1 font-normal text-7xl ">Book Your Appointment</h2>
        <div className='border-top-1 border-300 mt-4'>
            <div className='mt-6 flex align-content-center'>
                <img src='https://res.cloudinary.com/dbpw1enlu/image/upload/v1663406464/img-booking_tdyggn.png' width={200}/>
                <div>
                    <h3>form nè</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingBanner