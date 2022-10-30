import { Column, DataTable } from 'primereact'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listUserById } from '../../feature/AuthSlice';
import './styles.scss'
const MedicalRecord = () => {
    const infoAccounts = useSelector(data => data.user.value?.data);
    const user = JSON.parse(localStorage.getItem('user'))
    const patientId = user.data['id'];
    const phone = user.data['phone'];
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listUserById([phone, patientId]))
    }, []);
    const data = [
        { "id": "1000", "stt": "1", "symptom": "Viêm nha chu", "treatment-procedure": "Phẫu thuật ghép mô mềm", "doctor": "Nguyễn Công An", "price": 1650000, "total": 1650000, },
        { "id": "1001", "stt": "2", "symptom": "Viêm tủy răng", "treatment-procedure": "Hàn kín hệ thống ống tủy bằng Gutta percha nguội có sử dụng trâm xoay máy", "doctor": "Hàn Mặc Tử", "price": 1090000, "total": 1090000, },
        { "id": "1002", "stt": "3", "symptom": "Răng ê buốt", "treatment-procedure": " Gel capsaicin giảm ê buốt răng", "doctor": "Hà Thị Thúy", "price": 300000, "total": 300000, },
    ];
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(data);
    }, []);


    return (
        <div className='' style={{ fontFamily: 'var(--fontFamily)' }}>
            <header style={{ backgroundColor: 'var(--primary)' }} className='p-7'>
                <div className='grid'>
                    <div>
                        <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663124409/denticare-logo_umln3a.png" width="170px" />
                    </div>
                    <div className='text-white' style={{ width: '80%', margin: '0 auto' }}>
                        <div className='font-bold'>NHA KHOA ĐỨC NGHĨA</div>
                        <div>Địa chỉ: Số 5 Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội</div>
                        <div>Điện thoại: 0372559888</div>
                        <div>Email: ducnghia@gmail.com</div>
                        <div>Website: nhakhoaducnghia.com.vn</div>
                    </div>
                </div>

            </header>
            <main style={{ backgroundColor: 'var(--primary1)' }} className='py-7'>
                <div className='text-white' style={{ width: '98%', margin: '0 auto' }}>
                    <div className='mainHeader flex justify-content-between align-center '>
                        <div>ID:DN00112112</div>
                        <div>Hà Nội, ngày 10 tháng 11 năm 2022</div>
                    </div>
                    <h1 className='text-center py-8'>Hồ sơ khám bệnh</h1>
                    <div><strong>Họ và tên: </strong>{infoAccounts.customer_name} - <strong>Năm sinh:</strong>{infoAccounts.birthday} </div>
                    <div><strong>Địa chỉ: </strong>{infoAccounts.address}</div>
                    <div><strong>Điện thoại: </strong>{infoAccounts.phone} - <strong>Email:</strong>{infoAccounts.email}</div>
                    <DataTable className='my-7 text-2xl' value={products} responsiveLayout="stack" breakpoint="960px">
                        <Column field="stt" header="STT" />
                        <Column field="symptom" header="Triệu chứng/Chuẩn đoán" />
                        <Column field="treatment-procedure" header="Thủ thuật điều trị" />
                        <Column field="doctor" header="Bác sĩ" />
                        <Column field="price" header="Đơn giá" />
                        <Column field="total" header="Thành tiền" />
                    </DataTable>
                    <div className='grid'>
                        <div className='col-12 md:col-8 ld:col-8'>
                            <div className='mb-5'>
                                <h3>Lịch hẹn:</h3>
                                <span>11:00, ngày 13/10/2022</span><br />
                                <span>Nội dung: Hẹn lịch khám lại</span>
                            </div>
                            <div className='mb-5'>
                                <h3>Lời dặn:</h3>
                                <span>Kiêng ăn đồ dễ gây nhiễm màu như chè, cà phê, thuốc lá, rượu vàng,... và hạn chế ăn đồ quá cứng, quá nóng, quá lạnh sau khi tẩy răng trắng ít nhất 2 tuần</span>
                            </div>

                        </div>
                        <div className='col-12 md:col-4 ld:col-4 ld:text-right md:text-right'>
                            <div><strong>Tổng chi phí: </strong>{Number(4000000).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
                            <div><strong>Khuyễn mãi: </strong> 10%</div>
                            <div><strong>Đã thanh toán: </strong> {Number(3600000).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>

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