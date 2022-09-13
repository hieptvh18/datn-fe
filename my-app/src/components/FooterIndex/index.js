
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'primereact/button'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.scss'

const FooterIndex = () => {
    return (
        <div>
            <div className="footer">
                <div className="grid ">
                    <div className="col-12 pb-8 lg:col">
                        <div className=" h-full">
                            <div className="h-full flex flex-column">
                                <div className="title">DentiCare</div>
                                <hr className="hr" />
                                <div className="text-500 text-xl pt-5">A team of dentists working to ensure you receive the best treatment.
                                </div>
                                <ul className="list-none p-0 m-0 flex-grow-1 pt-5">
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-phone text-2xl icon"></i>
                                        <span className='text-2xl'>415-205-5550</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-envelope text-2xl icon"></i>
                                        <span className='text-2xl'>emergencies@denticare.com
                                        </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-globe text-2xl icon"></i>
                                        <span className='text-2xl'>denticate.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 lg:col">
                        <div className=" h-full">
                            <div className="  h-full flex flex-column">
                                <div className="title">About</div>
                                <hr className="hr" />

                                <ul className="list-none p-0 m-0 flex-grow-1 pt-5">
                                    <li className="flex align-items-center mb-3">

                                        <a href='#'><span className='text-2xl'>Our Dental Team</span></a>
                                    </li>
                                    <li className="flex align-items-center mb-3">

                                        <a href='#'><span className='text-2xl'>Pricing & Pricelist</span></a>
                                    </li>
                                    <li className="flex align-items-center mb-3">

                                        <a href='#'><span className='text-2xl'>Solutions</span></a>
                                    </li>
                                    <li className="flex align-items-center mb-3">

                                        <a href='#'><span className='text-2xl'>Dental Services</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 lg:col">
                        <div className=" h-full">
                            <div className="  h-full flex flex-column">
                                <div className="title">Our Awards</div>
                                <hr className="hr" />
                                <div className="text-500 text-xl pt-5">DentiCare is a multiple award winner
                                </div>
                                <ul className="list-none p-0 m-0 flex-grow-1 pt-5">
                                    <li className="flex align-items-center mb-3">

                                        <span className='text-2xl'>Best Practice & Team <strong>2016</strong> </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">

                                        <span className='text-2xl'>Best Patient Care <strong>2014</strong>
                                        </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">

                                        <span className='text-2xl'>Best Patient Care <strong>2017</strong></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 lg:col">
                        <div className=" h-full">
                            <div className="  h-full flex flex-column">
                                <div className="title">Social Networks</div>
                                <hr className="hr" />
                                <div className="text-500 text-xl pt-5">Visit DentiCare on these social links and connect with us. Make sure to follow our accounts for regular updates.
                                </div>
                                <ul className="flex pb-5 pt-7 lg:pt-7">
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-facebook text-7xl icon"></i>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-youtube text-7xl text-red-500 icon"></i>

                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-twitter text-7xl icon"></i>

                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-telegram text-7xl icon"></i>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className='flex flex-wrap justify-content-between align-items-center subFooter py-5'>
                <div className='text-white'>Copyright 2020 by <strong>BoldThemes.</strong> All rights reserved.</div>

                <div className="pt-5 lg:pt-0">
                    <div className=" flex gap-5 uppercase text-white ">
                        <NavLink to="/product" className='text-white' >Sản phẩm</NavLink>

                        <NavLink to="/new" className='text-white' >Tin tức</NavLink>

                        <NavLink to="#" className='text-white' >Giới Thiệu</NavLink>
                        <NavLink to="/contact" className='text-white' >Liên hệ</NavLink>

                    </div>
                </div>


            </div>
        </div>

    )
}

export default FooterIndex