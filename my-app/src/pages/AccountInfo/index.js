
import { Chip } from 'primereact/chip';
import React, { useEffect, useState } from 'react'
import { getUserById } from "../../api/auth";
import { DataTable } from 'primereact/datatable';
import { useDispatch, useSelector } from 'react-redux';
import { Column } from 'primereact/column';
import { Navigate } from 'react-router-dom';

const AccountInfo = () => {
    const [info, setInfo] = useState([])
    const user = useSelector(data => data.user.value?.data)
    const phone = user?.phone;
    console.log(user);
    useEffect(() => {
        const get = async (phone) =>{
            const {data} =  await getUserById(phone)
            setInfo(data.data)
        }
        get(phone)
    }, []);
    const bodyBA = (rowData) =>{
        return <a className='px-3 py-2 text-white bg-primary1' href={`/ho-so-benh-an/${rowData.token_url}/${rowData.id}`} target="_blank">Xem bệnh án</a>
    }
    return (
        user ? 
        <div className="surface-0 w-default m-auto my-8 px-6" style={{ fontFamily: 'var(--fontRoboto)' }}>
            <div className="font-bold text-7xl text-blue-700 mb-3">Hồ sơ bệnh án</div>
            <div className="text-500 mb-5">Thông tin cá nhân, tình trạng bệnh và lịch sử khám</div>
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Họ và tên</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{user?.name}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">

                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Ngày sinh</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{user?.birthday}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">

                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Giới tính</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{user?.gender == 2 ? "Nữ" : "Nam"}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">

                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Số điện thoại</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{user?.phone}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">

                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Địa chỉ</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{user?.address}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">

                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Hồ sơ bệnh án :</div>
                </li>
                <DataTable value={info} responsiveLayout="scroll">
                        <Column className='text-xl' field='date' header="Ngày khám"></Column>
                        <Column className='text-xl' body={bodyBA}  header="Chi tiết"></Column>
                </DataTable>

            </ul>
        </div>
        :
        <Navigate to={'/'}/>
    )
}

export default AccountInfo;