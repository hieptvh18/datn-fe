import React from 'react'
import "./styles.scss"

const ItemProfile = () => {
  return (
    <div className='border-2 border-round-2xl cs-itemProfile w-full' >
        <div className='before-c-primary relative overflow-hidden border-round-2xl bg-img flex align-align-items-center justify-content-center pt-5 m-3 ' style={{background: "url(https://res.cloudinary.com/dbpw1enlu/image/upload/v1663820210/featured_image_shop_cart_t3ozko.jpg)"}}>
            <img className='relative' src='https://res.cloudinary.com/dbpw1enlu/image/upload/v1663821286/dental-1_qude5p.png' width="150px"/>
        </div>
        <div className='text-center px-5'>
            <p className='text-3xl c-primary1 font-medium mt-4'>Dr Tuan Nguyen</p>
            <p className='text-500 text-lg font-medium'>Bác sĩ, thạc sĩ</p>
            <p className='text-600 text-1xl mt-4 mb-4'>Tốt nghiệp Bác sĩ chuyên ngành Răng Hàm Mặt – Đại Học Y Hà Nội. Hơn 3 năm kinh nghiệm cấy ghép Implant với hơn 1000 ca cấy ghép Implant thành công.</p>
        </div>
    </div>
  )
}

export default ItemProfile