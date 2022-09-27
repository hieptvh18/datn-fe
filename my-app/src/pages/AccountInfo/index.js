import { Button } from 'primereact/button'
import { Chip } from 'primereact/chip';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listUserById } from '../../feature/AuthSlice';

const AccountInfo = () => {
    const infoAccounts = useSelector(data => data.user.value)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listUserById(1))
    }, []);
    return (
        <div className="surface-0 w-default m-auto my-8">
            <div className="font-bold text-7xl text-blue-700 mb-3">Hồ sơ bệnh án</div>
            <div className="text-500 mb-5">Thông tin cá nhân, tình trạng bệnh và lịch sự khám</div>
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Họ và tên</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{infoAccounts.username}</div>
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
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{infoAccounts.cccd}</div>
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
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{infoAccounts.used_service}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">

                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Thuốc kê khai</div>
                    <div className='flex-column'>
                        {infoAccounts.used_drug?.map((item, index) => {
                            return <div key={index} className='flex align-items-center gap-8 mb-3'>
                                <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                                    {item.name_drug}
                                </div>
                                <Chip label={item.dosage} className="mr-2 text-2xl " />
                            </div>
                        })}
                    </div>

                    <div className="w-6 md:w-2 flex justify-content-end">

                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Lịch khám lại</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{infoAccounts.appointment_schedule}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">

                    </div>
                </li>
            </ul>
        </div>

    )
}

export default AccountInfo