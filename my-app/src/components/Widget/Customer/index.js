import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.scss'
const WidgetCustomer = () => {
    return (
        <div className='col-12 md:col-3 lg:col-3'>
            <div className='relative'>
                <div className='widgetCustomer relative '>
                </div>
                <div className='info'>
                    <div className='uppercase text-white text-4xl'>Câu hỏi thường gặp</div>
                    <NavLink className='text-white underline font-light' to={'/cau-hoi-thuong-gap'}>Xem chi tiết</NavLink>
                </div>
            </div>
            <div className='relative'>
                <div className='widget1Customer relative '>
                </div>
                <div className='info'>
                    <div className='uppercase text-white text-4xl'>Đội ngũ bác sĩ</div>
                    <NavLink className='text-white underline font-light' to={'/doi-ngu-nhan-vien'}>Xem chi tiết</NavLink>
                </div>
            </div>
            <div className='relative'>
                <div className='widget2Customer relative '>
                </div>
                <div className='info'>
                    <div className='uppercase text-white text-4xl'>Hệ thống trang thiết bị</div>
                    <NavLink className='text-white underline font-light' to={'/trang-thiet-bi'}>Xem chi tiết</NavLink>
                </div>
            </div>
        </div>
    )
}

export default WidgetCustomer