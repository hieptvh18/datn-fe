import { Column, DataTable } from 'primereact'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { listUserById } from '../../feature/AuthSlice';
import { getPatientRecords } from '../../feature/PatientRecords';
import './styles.scss'
const MedicalRecord = () => {
    const patientRecords = useSelector(data => data.PatientRecords.value?.data)
    const datas = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPatientRecords(datas))
    }, [])
    const date = patientRecords?.date.split("-");
    console.log(patientRecords);
    const totalPrice = () => {
        let price = 0
        let total = []
        const priceProduct = patientRecords?.patient_products?.map(item => {
            return total.push(Number(item.price))
        });
        const pricePatients = patientRecords?.service_patients?.map(item => {
            return total.push(Number(item.price))
        });
        total.forEach(item => {
            price += item
        })

        return price
    }


    return (
        <div className='' style={{ fontFamily: 'var(--fontRoboto)' }}>
            <header style={{ backgroundColor: 'var(--primary)' }} className='p-7'>
                <div className='grid'>
                    
                    <div className='text-white text-center' style={{ width: '80%', margin: '0 auto' }}>
                        <div className='font-bold'>NHA KHOA ĐỨC NGHĨA</div>
                        <div>Địa chỉ: Số 5 Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội</div>
                        <div>Điện thoại: 0372559888</div>
                        <div>Email: ducnghia@gmail.com</div>
                        <div>Website: nhakhoaducnghia.com.vn</div>
                    </div>
                </div>

            </header>
            <main style={{ backgroundColor: 'var(--primary1)' }} className='py-7 px-8'>
                <div className='text-white' style={{ width: '98%', margin: '0 auto' }}>
                    <div className='mainHeader flex justify-content-between align-center '>
                    <div>
                        {/* <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1669093073/deign_logo_d%E1%BB%B1_%C3%A1n_t%E1%BB%91t_nghi%E1%BB%87p_1_2_mc52bf.png" width="170px" /> */}
                    </div>
                        <div>Hà Nội, ngày {date?.length ? date[2] : ""} tháng {date?.length ? date[1] : ""} năm {date?.length ? date[0] : ""}</div>
                    </div>
                    <h1 className='text-center py-8'>Hồ sơ khám bệnh</h1>
                    <div className='grid '>
                        <div className='col-12'>
                            <div className='mt-2'><strong>Họ và tên: </strong> {patientRecords?.customer_name}</div>
                            <div className='mt-2'><strong>Năm sinh:</strong> {patientRecords?.birthday}</div>
                            <div className='mt-2'><strong>Địa chỉ: </strong>{patientRecords?.address}</div>
                            <div className='mt-2'><strong>Điện thoại: </strong>{patientRecords?.phone}</div>
                            <div className='mt-2 flex column-gap-3'><strong>Bác sĩ khám: </strong>
                                {patientRecords?.patient_doctors?.map(item =>
                                    <span className='bg-primary1 px-1 border-round-lg'>{item.fullname}</span>
                                )}
                            </div>

                        </div>
                    </div>
                    <div className='my-7'>
                        <h3 className='pb-2'>Đơn thuốc:</h3>
                        <DataTable className=' text-2xl' value={patientRecords?.patient_products} responsiveLayout="stack" breakpoint="960px">
                            <Column header="STT" body={(_, { rowIndex }) => rowIndex + 1} />
                            <Column field="name" header="Tên thuốc" />
                            <Column field="name" header="Hướng dẫn sử dụng" />
                            <Column field="name" header="Mô tả" />
                            <Column header="Bảng giá" body={(_, { i }) => Number(_.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })} />
                        </DataTable>
                    </div>
                    <div className='my-7'>
                        <h3 className='pb-2'>Dịch vụ sử dụng</h3>
                        <DataTable className=' text-2xl' value={patientRecords?.service_patients} responsiveLayout="stack" breakpoint="960px">
                            <Column header="STT" body={(_, { rowIndex }) => rowIndex + 1} />
                            <Column field="service_name" header="Dịch vụ sử dụng" />
                            <Column header="Bảng giá" body={(_, { i }) => Number(_.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })} />
                        </DataTable>
                    </div>
                    <div className='grid'>
                        <div className='col-12 md:col-8 ld:col-8'>
                            <div className='mb-5'>
                                <h3>Lịch hẹn:</h3>
                                <span>11:00, ngày 13/10/2022</span><br />
                                <span>Nội dung: Hẹn lịch khám lại</span>
                            </div>
                            <div className='mb-5'>
                                <h3>Chuẩn đoán và lời dặn:</h3>
                                <span>{patientRecords?.description}</span>
                            </div>

                        </div>
                        <div className='col-12 md:col-4 ld:col-4 ld:text-right md:text-right'>
                            <div><strong>Tổng chi phí: </strong>{totalPrice().toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
                            <div><strong>Đã thanh toán: </strong> {totalPrice().toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>

                        </div>
                    </div>
                </div>
            </main>
            <footer style={{ backgroundColor: 'var(--primary)' }} className='py-5 text-white text-center'>
                Cảm ơn bạn đã sự dụng dịch vụ tại Nha khoa Đức nghĩa
                <div >Bản quyền 2020 bởi <strong>Team 14 FPOLY.</strong> Đã đăng ký bản quyền.</div>
            </footer>
        </div>
    )
}

export default MedicalRecord