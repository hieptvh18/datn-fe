import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAllTeam, listTeam } from '../../feature/TeamSlice';
import { NavLink } from 'react-router-dom'
import './styles.scss'
const SpecialiezdTeam = () => {
    const team = useSelector(team => team.team.value);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listAllTeam())
    }, []);
    return (
        <div className="mx-auto w-default px-5">
            <div className="flex flex-column md:flex-row row-gap-6 md:column-gap-5 -mt-8 px-7 md:px-0">
                {team.data?.map((item, index) => {
                    if(index < 4){
                        return <div className="surface-200 w-full list-4top-item" key={index}>
                            <div className="w-full">
                                <div className="w-full flex flex-column">
                                    <div className="w-full relative box-img">
                                        <img
                                            className='flex w-full'
                                            src='http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-01.jpg'
                                        />
                                        <NavLink to={'/doi-ngu-nhan-vien'}>
                                            <button className='bg-primary1 text-white font-normal px-4 py-3 text-2xl border-round-lg pointer absolute btn-read-more'>
                                                Read More
                                                <i className='pi pi-angle-right text-2xl ml-2'></i>
                                            </button>
                                        </NavLink>
                                    </div>
                                    <div className="px-6">
                                        <div style={{ fontFamily: 'var(--fontRoboto)' }} className="title pt-5 font-medium" >{item.fullname}</div>
                                        <hr className="hr" />
                                        <div className="text-600 text-2xl pt-5">
                                            {item.specialist}
                                        </div>
                                        <div className="text-600 text-2xl pt-5">
                                            Giám đốc bệnh viện Thẩm mỹ Hàn Quốc 2016- 2018 chuyên sâu thẩm mỹ toàn diện cơ thể ngực, bụng, khuôn mặt.,
                                            Tốt nghiệp khoa chỉnh hình tại Úc năm 2004.,
                                            Tốt nghiệp Chuyên khoa Phẫu thuật hàm mặt 1999-2010 tại Viện Răng Hàm Mặt Trung Ương TP.HCM.,
                                            Tốt nghiệp Thạc sĩ năm 2007.,
                                            Học Tiến sĩ năm 2007-2010.
                                        </div>
                                        <ul className="flex pb-5 pt-7 lg:pt-7">
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-facebook text-5xl icon"></i>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-youtube text-5xl text-red-500 icon"></i>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-twitter text-5xl icon"></i>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-telegram text-5xl icon"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    }
                })}
            </div>
        </div>
    )
}

export default SpecialiezdTeam