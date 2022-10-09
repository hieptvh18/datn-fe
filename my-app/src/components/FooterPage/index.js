import React from 'react'
import "./styles.scss"
import image1 from '../../assets/image/dental.png'
import image2 from '../../assets/image/dental-implant.png'
import image3 from '../../assets/image/dental-insurance (8).png'
import image4 from '../../assets/image/dental-insurance (4).png'
import image5 from '../../assets/image/dental-insurance (5).png'
import image6 from '../../assets/image/dental-insurance (3).png'
import image7 from '../../assets/image/dental-insurance (1).png'
import image8 from '../../assets/image/dental-insurance (7).png'

const FooterPage = () => {
    return (
        <div className='footer-service'>
            <div className='footer-service-content flex justify-content-between align-center flex-wrap gap-4'>
                <div className='my-5' style={{ flex: '0 0 20%' }}>
                    <div className='flex gap-4'>
                        <img width='100px' height='100px' src={image1} />
                        <div style={{ fontFamily: 'var(--fontRoboto)' }} className='py-3'>
                            <p style={{ fontWeight: '600' }}>Nha khoa tổng quát</p>
                            <span className='text-xl text-600'>Quá trình dữ liệu nghiên cứu nhiệm vụ song song có năng lực.</span>
                        </div>
                    </div>
                </div>
                <div className='my-5' style={{ flex: '0 0 20%' }}>
                    <div className='flex gap-4'>
                        <img width='100px' height='100px' src={image2} />
                        <div style={{ fontFamily: 'var(--fontRoboto)' }} className='py-3'>
                            <p style={{ fontWeight: '600' }}>Cấy ghép</p>
                            <span className='text-xl text-600'>Tận dụng dữ liệu hội tụ san bằng tài nguyên khác.</span>
                        </div>
                    </div>
                </div>
                <div className='my-5' style={{ flex: '0 0 20%' }}>
                    <div className='flex gap-4'>
                        <img width='100px' height='100px' src={image3} />
                        <div style={{ fontFamily: 'var(--fontRoboto)' }} className='py-3'>
                            <p style={{ fontWeight: '600' }}>Phẫu thuật nha khoa</p>
                            <span className='text-xl text-600'>Thu hút khách hàng nền tảng hàng đầu theo quy trình đã được thử nghiệm đầy đủ.</span>
                        </div>
                    </div>
                </div>
                <div className='my-5' style={{ flex: '0 0 20%' }}>
                    <div className='flex gap-4'>
                        <img width='100px' height='100px' src={image4} />
                        <div style={{ fontFamily: 'var(--fontRoboto)' }} className='py-3'>
                            <p style={{ fontWeight: '600' }}>Căn chỉnh</p>
                            <span className='text-xl text-600'>Nội dung do người dùng tạo trong thời gian thực.</span>
                        </div>
                    </div>
                </div>
                <div className='my-5' style={{ flex: '0 0 20%' }}>
                    <div className='flex gap-4'>
                        <img width='100px' height='100px' src={image5} />
                        <div style={{ fontFamily: 'var(--fontRoboto)' }} className='py-3'>
                            <p style={{ fontWeight: '600' }}>Làm trắng</p>
                            <span className='text-xl text-600'>Ươm các tiêu chuẩn về lợi ích có thể mở rộng kênh tuyệt vời.</span>
                        </div>
                    </div>
                </div>
                <div className='my-5' style={{ flex: '0 0 20%' }}>
                    <div className='flex gap-4'>
                        <img width='100px' height='100px' src={image6} />
                        <div style={{ fontFamily: 'var(--fontRoboto)' }} className='py-3'>
                            <p style={{ fontWeight: '600' }}>Niềng răng</p>
                            <span className='text-xl text-600'>Tổng hợp các lược đồ tích hợp với mạng.</span>
                        </div>
                    </div>
                </div>
                <div className='my-5' style={{ flex: '0 0 20%' }}>
                    <div className='flex gap-4'>
                        <img width='100px' height='100px' src={image7} />
                        <div style={{ fontFamily: 'var(--fontRoboto)' }} className='py-3'>
                            <p style={{ fontWeight: '600' }}>Chân giả</p>
                            <span className='text-xl text-600'>Cách mạng hóa các nguồn toàn cầu thông qua các dịch vụ nha khoa.</span>
                        </div>
                    </div>
                </div>
                <div className='my-5' style={{ flex: '0 0 20%' }}>
                    <div className='flex gap-4'>
                        <img width='100px' height='100px' src={image8} />
                        <div style={{ fontFamily: 'var(--fontRoboto)' }} className='py-3'>
                            <p style={{ fontWeight: '600' }}>Bảo vệ răng</p>
                            <span className='text-xl text-600'>Tính toán sự đổi mới toàn diện thay vì dữ liệu trung tâm.</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FooterPage