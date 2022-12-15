import { Accordion, AccordionTab, TabPanel, TabView } from 'primereact'
import React from 'react'
import WidgetCustomer from '../../components/Widget/Customer'
import './styles.scss'
const QAPage = () => {
    return (
        <>
            <div style={{ margin: '50px 0' }} className='mx-auto'>
                <div className='mx-auto px-5 w-default'>
                    <div className='grid'>
                        <div className='col-12 md:col-9 lg:col-9'>
                            <h1 style={{ color: 'var(--primary)' }}> Giải đáp các thắc mắc về dịch vụ tại Nha khoa Đức nghĩa</h1>
                            <TabView className='my-5'>
                                <TabPanel className='text-3xl' header="Khám và tư vấn bệnh lý">
                                    <Accordion className='' multiple activeIndex={[0]}>
                                        <AccordionTab className='text-2xl' header="Tôi có bị đau khi phục hình răng giả không">
                                            <p >Trả lời:  Thông thường bạn sẽ cảm thấy hơi khó chịu ở vùng nướu quanh phục hình cầu và mão răng. Nhạy cảm với áp lực và nhiệt độ đôi khi xảy ra một vài ngày điều trị. Đừng ngần ngại gọi ngay cho nha sĩ hướng dẫn cách xử lý…</p>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Khi nào thuốc tê tan hết?">
                                            <p className='pb-5'>Trả lời:  Thuốc tê thường tan hết sau 3 đến 4 giờ đối với hàm dưới và 2 đến 3 giờ đối với hàm trên.</p>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Tôi phải làm gì nếu hàm tạm rớt ra?">
                                            <p>Trả lời:  Nên tránh thức ăn cứng và dính trong suốt thời gian đeo răng tạm. Nếu răng tạm rớt ra hãy gọi ngay cho chúng tôi để gắn lại hoặc bôi keo dán hàm lên răng tạm.</p>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Implant là gì?">
                                            <p className='pb-5'>Trả lời:  Implant nha khoa là một cốt bằng titanium nhỏ dùng để thay thế phần chân răng bị mất. Nó sẽ dính vào xương theo thời gian và có thể thay thế một hoặc nhiều răng đã bị nổ đi, không còn chân răng.</p>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Mức độ thành công của Implant?">
                                            <p>Trả lời:  Hơn 3 thập kỷ áp dụng kỹ thuật cắm ghép Implant và hơn 1 triệu bệnh nhân đã được điềi trị, các phục hình trên Implant Nobel Biocare rất thành công. Theo số liệu thống kê, tỉ lệ thàng công.</p>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Tôi có thể nhai với răng - Implant như là với răng thật không?">
                                            <p>Trả lời:  Được. Sau 1 thời gian, bạn có thể nhai như với răng thật.</p>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Ưu điểm của phục hình Implant đối với hàm giả và cầu răng cổ điển?">
                                            <p>Trả lời:  Cải thiện tính thẩm mỹ: khi bạn mất răng , cả thân chân răng sẽ làm teo phần xương hàm nơi đó và làm khuôn mặt bạn trở nên già đi. Phục hình Implant giúp ngăn cản quá trình tiêu xương này, trong khi các phục hình cổ điển không có ưu điểm này.<br />

                                                Bảo vệ các răng thật: với kỹ thuật cổ điển, nha sĩ phải mài 2 răng bên cạnh để làm trụ cho phục hình, phục hình Implant không làm hư các răng còn tốt bên cạnh răng mất.<br />

                                                Giải pháp vĩnh viễn: Phục hình Implant vững chắc và tiện lợi. Thông thường, nó phục vụ cho bạn suốt cả cuộc đời.</p>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Chỉnh hình răng là gì?">
                                            <p>Trả lời:  Chỉnh hình răng là quá trình chẩn đoán, ngăn ngừa và điều trị những bất thường về răng, hàm, mặt. Thuật ngữ sai khớp cắn để chỉ những trường hợp răng mọc sai vị trí, chen chúc hoặc nhô ra thụt vào, tương quan 2 hàm bất thường. Việc chỉnh hình răng bao gồm việc thiết kế, sử dụng và điều chỉnh các khí cụ chỉnh nha, thường gọi là mắc cài, để điều trị và điều chỉnh các vấn đề này.</p>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Kết quả của việc không điều trị chỉnh nha?">
                                            <p>Trả lời:  Không điều trị các vấn đề bất thường về răng có thể gây sâu răng, nha chu, tiêu xương hàm, vấn đề khớp và mất răng. Điều này gây ra do việc khó vệ sinh các răng lệch lạc, ăn nhai không đúng làm rối loạn hoạt động của khớp thái dương hàm.</p>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Chỉnh nha cho người lớn có được không ?">
                                            <p>Trả lời:  Việc chỉnh hình răng có thể thành công ở bất cứ độ tuổi nào. Những năm gần đây số bệnh nhân lớn tuổi đến điều trị chỉnh nha ngày càng nhiều. Thực tế, cứ 5 người đến chỉnh nha thì có 1 người lớn. Trước đây, người ta cho rằng việc chỉnh nha chỉ áp dụng cho trẻ em, nhưng thực ra những mô , tế bào của người lớn liên quan đến việc di chuyển răng là tương tự như ở trẻ em.</p>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Chỉnh nha bằng mắc cài dán mặt trong răng là gì?">
                                            <p>Trả lời:  Đó là việc các mắc cài dùng để chỉnh răng được dán ở mặt trong răng thay vì dán ở mặt ngoài. Điều này giúp việc chỉnh hình răng có thể được thực hiện mà không gây mất thẩm mỹ cho bệnh nhân trong quá trình điều trị.
                                            </p>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Nên ăn những thức ăn nào khi chỉnh nha?">
                                            <p>Trả lời:  Khi mang mắc cài trong quá trình điều trị chỉnh nha, bạn có thể gặp một ít khó khăn trong khi ăn và vệ sinh răng miệng. Bạn nên ăn những thức ăn tương đối mềm; những trái cây như táo, lê...bạn nên cắt nhỏ ra để ăn. Tránh những thức ăn dẻo như kẹo dừa, kẹo chingum ...vì dễ sút mắc cài và đồ ngọt, chips, uống soda, các loại thức ăn có đường và giàu tinh bột sinh ra axít... có thể gây sâu răng và làm phát triển các bệnh về lợi.</p>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Tôi phải vệ sinh răng miệng như thế nào sau khi chỉnh nha?">
                                            <p>Trả lời:  Khi mang khí cụ chỉnh nha, việc giữ vệ sinh răng miệng là vô cùng quan trọng vì có các khoảng trống nhỏ là nơi đóng các mảng thức ăn dễ gây sâu răng và viêm nướu . Vì vậy, sau mỗi bữa ăn hăy đánh răng kỹ bằng kem đánh răng có chứa chất fluor và bàn chải lông mịn; dùng bàn chải kẽ và chỉ nha khoa để làm sạch giữa các mắc cài, khâu và dây thép. Định kỳ sáu tháng nên đến Nha sĩ cạo vôi để giúp cho lợi và răng khỏe mạnh. Ngoài ra, nếu giữ vệ sinh không sạch thì men răng có thể bị ố xung quanh các mắc cài, dây thép.</p>
                                        </AccordionTab>
                                    </Accordion>
                                </TabPanel>
                                <TabPanel className='text-3xl' header="Câu hỏi khác">
                                    <Accordion className='' multiple activeIndex={[0]}>
                                        <AccordionTab className='text-2xl' header="Bệnh viện có các chương trình uy đãi như thế nào?">
                                            <p >Chương trình khuyến mãi sẽ có vào những dịp ngày lễ, tết và những ngày kỉ niệm của nha khoa</p>
                                            <p className='text-red-500 font-bold'>Khách hàng có thể nhận khuyến mãi 10% khi đến Nha khoa làm răng Implant trong tháng 12 này!</p>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Thời gian nên đi khám định kì răng miệng là bao lâu?">
                                            <p >6 tháng là thời gian thích hợp mà bạn nen đi khám răng định kì. Khoảng thời gian này phù hợp để bác sĩ phát hiện ra các triệu chứng ở răng miệng bạn và có các liệu pháp điều trị phù hợp, tránh biến chứng nguy hiểm</p>
                                        </AccordionTab>

                                    </Accordion>
                                </TabPanel>
                            </TabView>

                        </div>
                        <WidgetCustomer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default QAPage