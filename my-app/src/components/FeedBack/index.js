import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'
import { listFeedback } from '../../feature/FeedbackSlice'
import ItemFeedBack from './ItemFeedBack'

const FeedBack = () => {

    const feedback = useSelector(data => data.feedback.value.data);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listFeedback())
    }, []);
    const settings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ],
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="ft-slick__dots--custom"></div>
        ),
    };
    return (
        <div className='w-full bg-img' style={{ background: "url(https://res.cloudinary.com/dbpw1enlu/image/upload/v1663491749/background_dpo5ge.jpg)" }}>
            <div className='w-default mx-auto'>
                <div className='px-5 mt-8 pb-8 fb-slick'>
                    <h2 className='text-6xl md:text-7xl font-normal c-primary1 py-8 text-center'>Khách hàng nói gì về ĐỨC NGHĨA </h2>
                    <Slider {...settings}>
                        {feedback?.map((item, index) => {
                            return <ItemFeedBack key={index} {...item} />
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default FeedBack