import { Column, DataTable } from 'primereact'
import React, { useEffect, useState } from 'react'
import './styles.scss'
const MedicalRecord = () => {
    const data = [
        { "id": "1000", "stt": "1", "symptom": "Viêm nha chu", "treatment-procedure": "Phẫu thuật ghép mô mềm", "doctor": "Nguyễn Công An", "price": 1650000, "category": "Accessories", "quantity": 1, "inventoryStatus": "INSTOCK", "rating": 5 },
        { "id": "1001", "stt": "2", "symptom": "Viêm tủy răng", "treatment-procedure": "Hàn kín hệ thống ống tủy bằng Gutta percha nguội có sử dụng trâm xoay máy", "doctor": "Hàn Mặc Tử", "price": 1090000, "category": "Accessories", "quantity": 61, "inventoryStatus": "INSTOCK", "rating": 4 },
        { "id": "1002", "stt": "3", "symptom": "Răng ê buốt", "treatment-procedure": " Gel capsaicin giảm ê buốt răng", "doctor": "Hà Thị Thúy", "price": 300000, "category": "Fitness", "quantity": 1, "inventoryStatus": "LOWSTOCK", "rating": 3 },
    ];
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(data);
    }, []);


    return (
        <div className=''>
            <header className='my-7'>
                <div style={{ width: '80%', margin: '0 auto' }}>
                    <div>NHA KHOA ĐỨC NGHĨA</div>
                    <div>Địa chỉ: Số 5 Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội</div>
                    <div>Điện thoại: 0372559888</div>
                    <div>Email: ducnghia@gmail.com</div>
                    <div>Website: nhakhoaducnghia.com.vn</div>
                </div>
            </header>
            <hr className='mx-2' style={{ height: '2px', background: 'black' }} />
            <main className='my-7'>
                <div style={{ width: '98%', margin: '0 auto' }}>
                    <div className='mainHeader flex justify-content-between align-center '>
                        <div>DN00112112</div>
                        <div>Hà Nội, ngày 10 tháng 11 năm 2022</div>
                    </div>
                    <h1 className='text-center py-8'>Hồ sơ khám bênh</h1>
                    <div><strong>Họ và tên</strong>: Vũ Hồng Thắng - <strong>Năm sinh:</strong>1989 </div>
                    <div><strong>Địa chỉ:</strong>Ngõ 12 - Cầu Diễn - Bắc Từ Liêm - Hà Nội</div>
                    <div><strong>Điện thoại:</strong>0349418411 - <strong>Email:</strong></div>
                    <DataTable className='my-7 text-2xl' value={products} responsiveLayout="stack" breakpoint="960px">
                        <Column field="code" header="Lần khám" />
                        <Column field="name" header="Triệu chứng/Chuẩn đoán" />
                        <Column field="category" header="Thủ thuật điều trị" />
                        <Column field="quantity" header="Bác sĩ" />
                        <Column field="inventoryStatus" header="Đơn giá" />
                        <Column field="rating" header="Thành tiền" />
                    </DataTable>
                </div>
            </main>
            <footer></footer>
        </div>
    )
}

export default MedicalRecord