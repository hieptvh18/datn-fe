
import { Chip } from 'primereact/chip';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listUserById } from '../../feature/AuthSlice';

const AccountInfo = () => {
    const infoAccounts = useSelector(data => data.user.value?.data);
    const user = JSON.parse(localStorage.getItem('user'))
    const patientId = user.data['id'];
    const phone = user.data['phone'];
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listUserById(phone, patientId))
    }, []);
    return (
        <div className="surface-0 w-default m-auto my-8" style={{ fontFamily: 'var(--fontRoboto)' }}>
            <div className="font-bold text-7xl text-blue-700 mb-3">Hồ sơ bệnh án</div>
            <div className="text-500 mb-5">Thông tin cá nhân, tình trạng bệnh và lịch sử khám</div>
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Họ và tên</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{infoAccounts.customer_name}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">

                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Ngày sinh</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{infoAccounts.birthday}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">

                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Giới tính</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{infoAccounts.gender}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">

                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Số điện thoại</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{infoAccounts.phone}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">

                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Số căn cước công dân</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{infoAccounts.cmnd}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">

                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Địa chỉ</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{infoAccounts.address}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">

                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Đã sử dụng dịch vụ</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{infoAccounts.service_patients?.map((e) => e.service_name)} </div>
                    <div className="w-6 md:w-2 flex justify-content-end">

                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Thuốc kê khai</div>
                    <div className='flex-column'>
                        {infoAccounts.patient_products?.map((item, index) => {
                            return <div key={index} className='flex align-items-center gap-8 mb-3'>
                                <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                                    {item.name}
                                </div>
                                <Chip label={"uống 2 lần, sáng và tối sau khi ăn"} className="mr-2 text-2xl " />
                            </div>
                        })}
                    </div>

                    <div className="w-6 md:w-2 flex justify-content-end">

                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Hẹn khám lại</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">26-11-2022</div>
                    <div className="w-6 md:w-2 flex justify-content-end">

                    </div>
                </li>
            </ul>
        </div >

    )
}

export default AccountInfo;