import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FooterPage from '../../components/FooterPage';
import { listMenuServices } from '../../feature/MenuServices'
import './styles.scss'
const ServicePage = () => {
    const service = useSelector(data => data.menuServices.value)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listMenuServices())
    }, []);
    return (
        <div className='w-100% mx-auto'>
            <div className='imageBanner'>
                <div className='cellEquipment'>
                    <div className='cellNewEquipment'>
                        <div style={{ fontFamily: 'var(--fontArsenal)' }} className='pb-3 text-8xl'>Danh sách dịch vụ</div>
                        <hr className='hr mb-4' />
                        <div>Nha khoa Đức Nghĩa cung cấp đa dạng các dịch vụ thăm khám, phẫu thuật, điều trị các bệnh về răng với các công nghệ, thiết bị hiện đại, thường xuyên được cập nhật. Các gói khám và điều trị tại Nha khoa Đức Nghĩa được thiết kế tối ưu cho từng nhóm bệnh nhân với nguy cơ bệnh lý khác nhau. Tùy thuộc vào độ tuổi, triệu chứng và nguy cơ mắc bệnh, bệnh nhân sẽ được tư vấn gói khám và điều trị phù hợp.</div>
                    </div>
                </div>
            </div>
            <div className='content-equipment'>
                {service?.map((data, index) => {
                    return <div className='grid gap-8 mb-8' key={index}>
                        <div className='col-12 md:col-5 lg:col-5'>
                            <img width='100%' src={data.image} />
                        </div>
                        <div className='col-12 md:col-6 lg:col-6'>
                            <div style={{ fontFamily: 'var(--fontArsenal)', color: 'var(--primary)' }} className='pb-5 text-6xl'>{index + 1}. {data.label}</div>
                            <div style={{ fontFamily: 'var(--fontRoboto)' }} className='pb-5'>{data.content}</div>
                            <div>{data.items.map((data, index) => {
                                return <ul style={{ listStyle: 'none' }}>
                                    <a href='#'><li className='service-items'>{data.label}</li></a>
                                </ul>
                            })}</div>
                            <div style={{ width: '100px' }}><a href='#' className='service-watch-detail'>Xem chi tiết</a> </div>
                        </div>
                    </div>
                })}
            </div>
            <FooterPage />
        </div>
    )
}

export default ServicePage