
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'primereact/button'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './styles.scss'

const FooterIndex = () => {
    const websetting = useSelector((data) => data.Websetting.value?.data)
    return (
        <>
            <div className='bg-img pt-8'
                style={{ background: "url(https://res.cloudinary.com/dbpw1enlu/image/upload/v1663491749/background_dpo5ge.jpg)" }}
            >
                <div className='w-default px-5 mx-auto'>
                    <div className="grid">
                        <div className="col-12 md:col-6 lg:col">
                            <div className=" h-full">
                                <div className="h-full flex flex-column">
                                    <div className="title">Nha Khoa Đức Nghĩa</div>
                                    <hr className="hr" />
                                    <div className="text-500 text-xl pt-5">Một nhóm các nha sĩ làm việc để đảm bảo bạn nhận được điều trị tốt nhất.
                                    </div>
                                    <ul className="list-none p-0 m-0 flex-grow-1 pt-5">
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-phone text-2xl icon"></i>
                                            <span className='text-2xl'>{websetting?.phones}</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-envelope text-2xl icon"></i>
                                            <span className='text-2xl'>{websetting?.email}
                                            </span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-globe text-2xl icon"></i>
                                            <span className='text-2xl'>{websetting?.base_url}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12  md:col-6 lg:col">
                            <div className=" h-full">
                                <div className="  h-full flex flex-column">
                                    <div className="title">Về chúng tôi</div>
                                    <hr className="hr" />
                                    <ul className="list-none p-0 m-0 flex-grow-1 pt-5">
                                        <li className="flex align-items-center mb-3">

                                            <a href='#'><span className='text-2xl'>Đội ngũ nha bác sĩ</span></a>
                                        </li>
                                        <li className="flex align-items-center mb-3">

                                            <a href='#'><span className='text-2xl'>Cơ sở vật chất</span></a>
                                        </li>
                                        <li className="flex align-items-center mb-3">

                                            <a href='#'><span className='text-2xl'>Đam mê nhiệt huyết</span></a>
                                        </li>
                                        <li className="flex align-items-center mb-3">

                                            <a href='#'><span className='text-2xl'>Trang thiết bị hiện đại</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12  md:col-6 lg:col">
                            <div className=" h-full">
                                <div className="  h-full flex flex-column">
                                    <div className="title">Giải thưởng</div>
                                    <hr className="hr" />
                                    <div className="text-500 text-xl pt-5">Đức Nghĩa giành nhiều giải thưởng
                                    </div>
                                    <ul className="list-none p-0 m-0 flex-grow-1 pt-5">
                                        <li className="flex align-items-center mb-3">

                                            <span className='text-2xl'>Phòng khám chất lượng tốt <strong>2016</strong> </span>
                                        </li>
                                        <li className="flex align-items-center mb-3">

                                            <span className='text-2xl'>Đội ngũ bác sĩ chuyên nghiệp <strong>2014</strong>
                                            </span>
                                        </li>
                                        <li className="flex align-items-center mb-3">

                                            <span className='text-2xl'>Giải thưởng vì cộng đồng <strong>2017</strong></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12  md:col-6 lg:col">
                            <div className=" h-full">
                                <div className="  h-full flex flex-column">
                                    <div className="title">Mạng xã hội</div>
                                    <hr className="hr" />
                                    <div className="text-500 text-xl pt-5">Truy cập ĐỨC NGHĨA trên các liên kết xã hội này và kết nối với chúng tôi. Đảm bảo theo dõi tài khoản của chúng tôi để cập nhật thường xuyên
                                    </div>
                                    <ul className="flex pb-5 pt-7 lg:pt-7">
                                        <li className="flex align-items-center mb-3">
                                            <a href={websetting?.facebook_url} target={'_blank'}>
                                                <i className="pi pi-facebook text-7xl icon"></i>
                                            </a>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <a href={websetting?.youtobe_url} target={'_blank'}>
                                                <i className="pi pi-youtube text-7xl text-red-500 icon"></i>

                                            </a>

                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <a href={websetting?.twitter_url} target={'_blank'}>

                                                <i className="pi pi-twitter text-7xl icon"></i>
                                            </a>

                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <a href={websetting?.instagram_url} target={'_blank'}>
                                                <i className="pi pi-telegram text-7xl icon"></i>

                                            </a>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-primary2 py-5'>
                <div className='flex px-5 justify-content-center align-items-center w-default mx-auto'>
                    <div className='text-white'>Bản quyền 2020 bởi <strong>Team 14 FPOLY.</strong> Đã đăng ký bản quyền.</div>
                </div>

            </div>
        </>

    )
}

export default FooterIndex