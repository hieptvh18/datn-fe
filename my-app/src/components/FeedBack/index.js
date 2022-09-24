import React from 'react'
import Slider from 'react-slick'
import ItemFeedBack from './ItemFeedBack'

const FeedBack = () => {
    const settings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="ft-slick__dots--custom"></div>
        )
    };
  return (
    <div className='w-full bg-img' style={{background: "url(https://res.cloudinary.com/dbpw1enlu/image/upload/v1663491749/background_dpo5ge.jpg)"}}>
        <div className='w-default mx-auto'>
            <div className='px-5 mt-8 pb-8 fb-slick'>
                <h2 className='text-7xl font-normal c-primary1 py-8 text-center'>Khách hàng nói gì về ĐỨC NGHĨA </h2>
                <Slider {...settings}>
                    <ItemFeedBack/>
                    <ItemFeedBack/>
                    <ItemFeedBack/>
                    <ItemFeedBack/>
                    <ItemFeedBack/>
                    <ItemFeedBack/>
                    <ItemFeedBack/>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default FeedBack