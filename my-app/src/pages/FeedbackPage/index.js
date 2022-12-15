import { Accordion, AccordionTab, TabPanel, TabView } from 'primereact'
import React from 'react'
import WidgetCustomer from '../../components/Widget/Customer'
import './styles.scss'
const FeedbackPage = () => {
    return (
        <>
            <div style={{ margin: '50px 0' }} className='mx-auto'>
                <div className='mx-auto px-5 w-default'>
                    <div className='grid'>
                        <div className='col-12 md:col-9 lg:col-12'>
                            <h1 style={{ color: 'var(--primary)' }}> Cảm nhận của khách hàng</h1>
                            <div className='mb-8' style={{ padding: " 0 180px" }} >
                                <div className='flex justify-content-between align-items-start gap-8'>
                                    <div className='pt-7'>
                                        <p className='text-6xl' style={{ fontFamily: 'var(--fontArsenal)' }}>Gói gọn trong 3 từ : nhẹ nhàng, nhanh gọn, thoải mái</p>
                                        Tất cả quá trình trước và sau làm răng Inplant của mình chỉ gói gọn trong 3 từ NHẸ NHÀNG - NHANH GỌN -THOẢI MÁI. Châu không hề có cảm giác đau đớn hay khó chịu gì trong và sau khi làm răng, điều mà mình rất lo lắng trước đó. Tổng thời gian làm chưa đến 1 giờ đồng hồ, thần tốc hơn nữa chính là hồi phục ngay sau 1 đêm ngủ. Bác sỹ thì vô cùng tâm lý, thường xuyên trấn an tinh thần và tận tình hỏi thăm, các chị y tá nhiệt tình và chăm sóc mình rất chu đáo. Không gian bệnh viện cũng sạch sẽ .
                                    </div>
                                    <div>
                                        <img src='https://jieh.vn/upload/images/evaluate/review-benh-vien-mat-quoc-te-nhat-ban-1.png' />
                                        <p style={{ color: 'var(--primary)' }}>CHÂU BÙI - FASHIONISTA</p>
                                    </div>

                                </div>
                            </div>
                            <div className='mb-8' style={{ padding: " 0 180px" }} >
                                <div className='flex justify-content-between align-items-start gap-8'>
                                    <div>
                                        <img src='https://jieh.vn/upload/images/evaluate/review-benh-vien-mat-quoc-te-nhat-ban-2.png' />
                                        <p style={{ color: 'var(--primary)' }}>BÙI PHƯƠNG NGA - Á HẬU VIỆT NAM 2018</p>
                                    </div>
                                    <div className='pt-7'>
                                        <p className='text-6xl' style={{ fontFamily: 'var(--fontArsenal)' }}>Mình đã tự tin hơn sau khi làm răng tại Nha khoa Đức nghĩa</p>
                                        Tất cả quá trình trước và sau làm răng Inplant của mình chỉ gói gọn trong 3 từ NHẸ NHÀNG - NHANH GỌN -THOẢI MÁI. Châu không hề có cảm giác đau đớn hay khó chịu gì trong và sau khi làm răng, điều mà mình rất lo lắng trước đó. Tổng thời gian làm chưa đến 1 giờ đồng hồ, thần tốc hơn nữa chính là hồi phục ngay sau 1 đêm ngủ. Bác sỹ thì vô cùng tâm lý, thường xuyên trấn an tinh thần và tận tình hỏi thăm, các chị y tá nhiệt tình và chăm sóc mình rất chu đáo. Không gian bệnh viện cũng sạch sẽ .
                                    </div>


                                </div>
                            </div>
                            <div style={{ padding: " 0 180px" }} >
                                <div className='flex justify-content-between align-items-start gap-8'>

                                    <div className='pt-7'>
                                        <p className='text-6xl' style={{ fontFamily: 'var(--fontArsenal)' }}>Mình rất hài lòng sau khi sử dụng dịch vụ làm trắng răng tại Nha khoa Đức Nghĩa</p>
                                        Tất cả quá trình trước và sau làm răng Inplant của mình chỉ gói gọn trong 3 từ NHẸ NHÀNG - NHANH GỌN -THOẢI MÁI. Châu không hề có cảm giác đau đớn hay khó chịu gì trong và sau khi làm răng, điều mà mình rất lo lắng trước đó. Tổng thời gian làm chưa đến 1 giờ đồng hồ, thần tốc hơn nữa chính là hồi phục ngay sau 1 đêm ngủ. Bác sỹ thì vô cùng tâm lý, thường xuyên trấn an tinh thần và tận tình hỏi thăm, các chị y tá nhiệt tình và chăm sóc mình rất chu đáo. Không gian bệnh viện cũng sạch sẽ .
                                    </div>
                                    <div>
                                        <img width='280%' src='https://jieh.vn/upload/images/evaluate/review-benh-vien-mat-quoc-te-nhat-ban-3.png' />
                                        <p style={{ color: 'var(--primary)' }}>HANA GIANG ANH - FITNESS COACH</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeedbackPage