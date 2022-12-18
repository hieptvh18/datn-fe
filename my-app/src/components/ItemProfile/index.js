import React from 'react'
import "./styles.scss"

const ItemProfile = ({data}) => {
  return (
    <div className='border-2 border-round-2xl cs-itemProfile w-full' >
        <div className='before-c-primary relative overflow-hidden border-round-2xl bg-img flex align-align-items-center justify-content-center pt-5 m-3 ' style={{background: "url(https://res.cloudinary.com/dbpw1enlu/image/upload/v1663820210/featured_image_shop_cart_t3ozko.jpg)"}}>
            <img className='relative' src={'http://nhakhoaducnghia.xyz/' + data?.avatar} width="150px"/>
        </div>
        <div className='text-center px-5'>
            <p className='text-3xl c-primary1 font-medium mt-4'>{data?.fullname}</p>
            <p className='text-500 text-lg font-medium'>{data?.admin_level?.name}</p>
            <p className='text-600 text-1xl mt-4 mb-4' dangerouslySetInnerHTML={{ __html: data?.admin_level?.description }} />
        </div>
    </div>
  )
}

export default ItemProfile