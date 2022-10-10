import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listEquipment } from '../../feature/EquipmentsSlice'
import "./styles.scss"
const EquipmentPage = () => {
    const equipment = useSelector(data => data.equipment.value)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listEquipment())
    }, []);
    return (
        <div className='w-100% mx-auto'>
            <div className='imageBanner'>
                <div className='cellEquipment'>
                    <div className='cellNewEquipment'>
                        <div style={{ fontFamily: 'var(--fontArsenal)' }} className='pb-3 text-8xl'>Hệ thống trang thiết bị tiên tiến nhất</div>
                        <hr className='hr mb-4' />
                        <div>Với mục tiêu hỗ trợ đắc lực cho các Bác sỹ trong việc đưa ra các chẩn đoán chính xác và chỉ định điều trị phù hợp cũng như áp dụng các công nghệ phẫu thuật mới nhất để mang lại hiệu quả điều trị tối đa cho bệnh nhân, Bệnh viện mắt quốc tế Nhật Bản luôn chú trọng trong việc trang bị các máy móc, thiết bị thăm khám, kiểm tra và máy móc phẫu thuật hiện đại, tân tiến nhất.</div>
                    </div>
                </div>
            </div>
            <div className='content-equipment'>
                {equipment?.map((data, index) => {
                    return <div className='grid gap-8 mb-8' key={index}>
                        <div className='col-12 md:col-5 lg:col-5'>
                            <img width='100%' src={data.image} />
                        </div>
                        <div className='col-12 md:col-6 lg:col-6'>
                            <div style={{ fontFamily: 'var(--fontArsenal)' }} className='pb-5 text-6xl'>{index + 1}. {data.name}</div>
                            <div style={{ fontFamily: 'var(--fontRoboto)' }} className=''>{data.title}</div>
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default EquipmentPage