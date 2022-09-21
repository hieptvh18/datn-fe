import React from 'react'
import "./styles.scss"

const ModalBooking = () => {
  return (
    <form className='fixed right-0 top-30 z-999 flex btn-booking'>
        <div className='cs-text-booking bg-primary1 px-4 py-3 border-round-left-2xl pointer flex flex-column align-items-center justify-content-center text-white font-medium'>
            <div>
                <img src='https://winsmile.vn/public/template/frontend/img/icon_17.png'/>
            </div>
            <div className='mt-2'>ĐĂNG</div>
            <div>KÝ</div>
            <div>NHẬN</div>
            <div>LỊCH</div>
            <div>KHÁM</div>
        </div>
        <div className='flex flex-column'>
            <input className='w-full h-full px-4 text-2xl border-bottom-1 border-top-1 border-400' placeholder='Họ tên *'/>
            <input className='w-full h-full px-4 text-2xl border-bottom-1 border-400' placeholder='Số điện thoại *'/>
            <input type="date" className='w-full h-full px-4 text-2xl border-bottom-1 border-400 ip-date' placeholder='Ngày *'/>
            <input className='w-full h-full px-4 text-2xl border-bottom-1 border-400' placeholder='Email liên hệ *'/>
        </div>
        <button className='hover-btn flex flex-column justify-content-center row-gap-4 px-4 bg-primary1 align-items-center pointer text-white text-2xl font-medium'>
            <img src='https://winsmile.vn/public/template/frontend/img/icon_18.png'/>
            GỬI
        </button>
    </form>
  )
}

export default ModalBooking