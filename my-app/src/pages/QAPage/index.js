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
                                <TabPanel className='text-3xl' header="Quy trình phẫu thuật">
                                    <Accordion className='' multiple activeIndex={[0]}>
                                        <AccordionTab className='text-2xl' header="Đặt lịch khám như thế nào ?">
                                            <p >Trả lời: </p>
                                            <div className='py-5'>
                                                <ul className='pl-6'>
                                                    <li>Bạn nên đặt hẹn với Nha khoa tối thiểu trước 1 ngày.</li>
                                                    <li>Số điện thoại đặt hẹn: 024 3715 3666/ 024 3715 2666 (7h-19h hàng ngày)</li>
                                                    <li>Hoặc đặt lịch online qua website của bệnh viện: http://nhakhoaducnghia/dat-lich-kham</li>
                                                </ul>
                                            </div>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Đặt lịch khám">
                                            <p className='pb-5'>Chúng tôi khuyến khích Quý khách đặt hẹn trước tối thiểu 8 giờ (theo giờ làm việc) trước khi tới thăm khám để Bệnh viện có thể sắp xếp lịch hẹn phù hợp và đảm bảo chất lượng phục vụ cho Quý khách.    </p>
                                            <p >Quý khách có thể đặt lịch khám theo một trong các cách sau:</p>
                                            <div className='py-5'>
                                                <strong>1. Đặt hẹn trực tuyến</strong>
                                                <ul className='pl-6'>
                                                    <li>Qua website: https://jieh.vn/make-an-appointment</li>
                                                    <li>Qua Fanpage: https://fb.com/book/JIEH32PDC/</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <strong>2. Đặt hẹn qua số điện thoại</strong>
                                                <ul className='pl-6'    >
                                                    <li>Điện thoại: +84-24-3715-3666 (Thời gian từ 7:00 – 12:00 và 13:00 – 19:00 hàng ngày)</li>
                                                    <li>Hotline: +84-90-224-2291 (Thứ 2 đến thứ 6 từ 8:00 – 17:00 và Thứ 7 từ 8:00 – 12:00 thứ 7)</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>3. Đặt hẹn trực tiếp tại</strong>
                                                <ul className='pl-6'    >
                                                    <li>Nha khoa Đức Nghĩa</li>
                                                    <li>Địa chỉ: 32 Phó Đức Chính, Trúc Bạch, Ba Đình, Hà Nội</li>
                                                </ul>
                                            </div>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Quy trình khám chữa bệnh tại Nha khoa Đức Nghĩa">
                                            <div className='pb-5'>
                                                <strong>BƯỚC 1: ĐẾN LỄ TÂN (TẦNG 1)</strong>
                                                <ul className='pl-6'>
                                                    <li>Đăng ký khám</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <strong>BƯỚC 2: BÁC SỸ KHÁM VÀ TƯ VẤN (TẦNG 3 HOẶC TẦNG 4)</strong>
                                                <ul className='pl-6'    >
                                                    <li>Bác sỹ khám, tư vấn hoặc chỉ định thực hiện chẩn đoán hình ảnh và xét nghiệm bổ sung.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>BƯỚC 3: KẾT LUẬN (TẦNG 3 HOẶC TẦNG 4)</strong>
                                                <ul className='pl-6'    >
                                                    <li>Bác sỹ chẩn đoán, tư vấn và chỉ định phương pháp điều trị.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>BƯỚC 4: THANH TOÁN (TẦNG 1)</strong>
                                                <ul className='pl-6'    >
                                                    <li>Bệnh nhân nộp phí tại quầy thu ngân</li>
                                                </ul>
                                            </div>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Quyền và nghĩa vụ của người bệnh">
                                            <p className='pb-5'>(Theo Luật khám chữa bệnh số 40/2009/QH12)</p>
                                            <p className='font-bold' >QUYỀN CỦA NGƯỜI BỆNH</p>
                                            <div className='py-5'>
                                                <strong>Điều 7. Quyền được khám bệnh, chữa bệnh có chất lượng phù hợp với điều kiện thực tế</strong>
                                                <ul className='pl-6'>
                                                    <li>Được tư vấn, giải thích về tình trạng sức khỏe, phương pháp điều trị và dịch vụ khám bệnh, chữa bệnh phù hợp với bệnh.</li>
                                                    <li>Được điều trị bằng phương pháp an toàn, hợp lý và có hiệu quả theo các quy định chuyên môn kỹ thuật.</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <strong>Điều 8. Quyền được tôn trọng bí mật riêng tư</strong>
                                                <ul className='pl-6'    >
                                                    <li>Được giữ bí mật thông tin về tình trạng sức khỏe và đời tư được ghi trong hồ sơ bệnh án.</li>
                                                    <li>Thông tin quy định tại khoản 1 Điều này chỉ được phép công bố khi người bệnh đồng ý hoặc để chia sẻ thông tin, kinh nghiệm nhằm nâng cao chất lượng chẩn đoán, chăm sóc, điều trị người bệnh giữa những người hành nghề trong nhóm trực tiếp điều trị cho người bệnh hoặc trong trường hợp khác được pháp luật quy định.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 9. Quyền được tôn trọng danh dự, bảo vệ sức khỏe trong khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Được cung cấp thông tin, giải thích, tư vấn đầy đủ về tình trạng bệnh, kết quả, rủi ro có thể xảy ra để lựa chọn phương pháp chẩn đoán và điều trị.</li>
                                                    <li>Được tôn trọng về tuổi tác, giới tính, dân tộc, tín ngưỡng.</li>
                                                    <li>Không bị phân biệt giàu nghèo, địa vị xã hội.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 10. Quyền được lựa chọn trong khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Không bị kỳ thị, phân biệt đối xử hoặc bị ép buộc khám bệnh, chữa bệnh, trừ trường hợp quy định tại khoản 1 Điều 66 của Luật này.</li>
                                                    <li>Chấp nhận hoặc từ chối tham gia nghiên cứu y sinh học về khám bệnh, chữa bệnh.</li>
                                                    <li>Được lựa chọn người đại diện để thực hiện và bảo vệ quyền, nghĩa vụ của mình trong khám bệnh, chữa bệnh.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 11. Quyền được cung cấp thông tin về hồ sơ bệnh án và chi phí khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Được cung cấp thông tin tóm tắt về hồ sơ bệnh án nếu có yêu cầu bằng văn bản, trừ trường hợp pháp luật có quy định khác.</li>
                                                    <li>Được cung cấp thông tin về giá dịch vụ khám bệnh, chữa bệnh, giải thích chi tiết về các khoản chi trong hoá đơn thanh toán dịch vụ khám bệnh, chữa bệnh.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 12. Quyền được từ chối chữa bệnh và ra khỏi cơ sở khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Được từ chối xét nghiệm, sử dụng thuốc, áp dụng thủ thuật hoặc phương pháp điều trị nhưng phải cam kết tự chịu trách nhiệm bằng văn bản về việc từ chối của mình, trừ trường hợp quy định tại khoản 1 Điều 66 của Luật này.</li>
                                                    <li>Được ra khỏi cơ sở khám bệnh, chữa bệnh khi chưa kết thúc điều trị nhưng phải cam kết tự chịu trách nhiệm bằng văn bản về việc ra khỏi cơ sở khám bệnh, chữa bệnh trái với chỉ định của người hành nghề, trừ trường hợp quy định tại khoản 1 Điều 66 của Luật này.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 13. Quyền của người bệnh bị mất năng lực hành vi dân sự, không có năng lực hành vi dân sự, hạn chế năng lực hành vi dân sự hoặc người chưa thành niên từ đủ 6 tuổi đến chưa đủ 18 tuổi</strong>
                                                <ul className='pl-6'    >
                                                    <li>Trường hợp người bệnh bị mất năng lực hành vi dân sự, không có năng lực hành vi dân sự, hạn chế năng lực hành vi dân sự hoặc người chưa thành niên từ đủ 6 tuổi đến chưa đủ 18 tuổi thì người đại diện hợp pháp của người bệnh quyết định việc khám bệnh, chữa bệnh.</li>
                                                    <li>Trường hợp cấp cứu, để bảo vệ tính mạng, sức khỏe của người bệnh, nếu không có mặt người đại diện hợp pháp của người bệnh thì người đứng đầu cơ sở khám bệnh, chữa bệnh quyết định việc khám bệnh, chữa bệnh.</li>
                                                </ul>
                                            </div>
                                            <p className='font-bold py-5' >QUYỀN CỦA NGƯỜI BỆNH</p>
                                            <div className=''>
                                                <strong>Điều 14. Nghĩa vụ tôn trọng người hành nghề</strong>
                                                <ul className='pl-6'    >
                                                    <li>Tôn trọng và không được có hành vi xâm phạm danh dự, nhân phẩm, sức khỏe, tính mạng của người hành nghề và nhân viên y tế khác.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 15. Nghĩa vụ chấp hành các quy định trong khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Cung cấp trung thực thông tin liên quan đến tình trạng sức khỏe của mình, hợp tác đầy đủ với người hành nghề và cơ sở khám bệnh, chữa bệnh.</li>
                                                    <li>Chấp hành chỉ định chẩn đoán, điều trị của người hành nghề, trừ trường hợp quy định tại Điều 12 của Luật này.</li>
                                                    <li>Chấp hành và yêu cầu người nhà của mình chấp hành nội quy của cơ sở khám bệnh, chữa bệnh, quy định của pháp luật về khám bệnh, chữa bệnh.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 16. Nghĩa vụ chi trả chi phí khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Người bệnh có trách nhiệm chi trả chi phí khám bệnh, chữa bệnh, trừ trường hợp được miễn, giảm theo quy định của pháp luật. Trường hợp người bệnh tham gia bảo hiểm y tế thì việc thanh toán chi phí khám bệnh, chữa bệnh được thực hiện theo quy định của pháp luật về bảo hiểm y tế.</li>
                                                </ul>
                                            </div>
                                        </AccordionTab>
                                    </Accordion>
                                </TabPanel>
                                <TabPanel className='text-3xl' header="Khám và tư vấn bệnh lý">
                                    <Accordion className='' multiple activeIndex={[0]}>
                                        <AccordionTab className='text-2xl' header="Thời gian làm việc">
                                            <p >Bệnh viện mắt quốc tế Nhật Bản làm việc từ thứ 2 đến Chủ nhật.</p>
                                            <div className='py-5'>
                                                <strong>Thời gian</strong>
                                                <ul className='pl-6'>
                                                    <li>Buổi sáng: từ 7:00 đến 12:00</li>
                                                    <li>Buổi chiều: từ 13:00 đến 19:00</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <strong>Ngày nghỉ</strong>
                                                <ul className='pl-6'    >
                                                    <li>Quốc khánh (2/9)</li>
                                                    <li>Tết dương lịch (1/1)</li>
                                                    <li>Tết âm lịch </li>
                                                </ul>
                                            </div>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Đặt lịch khám">
                                            <p className='pb-5'>Chúng tôi khuyến khích Quý khách đặt hẹn trước tối thiểu 8 giờ (theo giờ làm việc) trước khi tới thăm khám để Bệnh viện có thể sắp xếp lịch hẹn phù hợp và đảm bảo chất lượng phục vụ cho Quý khách.    </p>
                                            <p >Quý khách có thể đặt lịch khám theo một trong các cách sau:</p>
                                            <div className='py-5'>
                                                <strong>1. Đặt hẹn trực tuyến</strong>
                                                <ul className='pl-6'>
                                                    <li>Qua website: https://jieh.vn/make-an-appointment</li>
                                                    <li>Qua Fanpage: https://fb.com/book/JIEH32PDC/</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <strong>2. Đặt hẹn qua số điện thoại</strong>
                                                <ul className='pl-6'    >
                                                    <li>Điện thoại: +84-24-3715-3666 (Thời gian từ 7:00 – 12:00 và 13:00 – 19:00 hàng ngày)</li>
                                                    <li>Hotline: +84-90-224-2291 (Thứ 2 đến thứ 6 từ 8:00 – 17:00 và Thứ 7 từ 8:00 – 12:00 thứ 7)</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>3. Đặt hẹn trực tiếp tại</strong>
                                                <ul className='pl-6'    >
                                                    <li>Nha khoa Đức Nghĩa</li>
                                                    <li>Địa chỉ: 32 Phó Đức Chính, Trúc Bạch, Ba Đình, Hà Nội</li>
                                                </ul>
                                            </div>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Quy trình khám chữa bệnh tại Nha khoa Đức Nghĩa">
                                            <div className='pb-5'>
                                                <strong>BƯỚC 1: ĐẾN LỄ TÂN (TẦNG 1)</strong>
                                                <ul className='pl-6'>
                                                    <li>Đăng ký khám</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <strong>BƯỚC 2: BÁC SỸ KHÁM VÀ TƯ VẤN (TẦNG 3 HOẶC TẦNG 4)</strong>
                                                <ul className='pl-6'    >
                                                    <li>Bác sỹ khám, tư vấn hoặc chỉ định thực hiện chẩn đoán hình ảnh và xét nghiệm bổ sung.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>BƯỚC 3: KẾT LUẬN (TẦNG 3 HOẶC TẦNG 4)</strong>
                                                <ul className='pl-6'    >
                                                    <li>Bác sỹ chẩn đoán, tư vấn và chỉ định phương pháp điều trị.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>BƯỚC 4: THANH TOÁN (TẦNG 1)</strong>
                                                <ul className='pl-6'    >
                                                    <li>Bệnh nhân nộp phí tại quầy thu ngân</li>
                                                </ul>
                                            </div>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Quyền và nghĩa vụ của người bệnh">
                                            <p className='pb-5'>(Theo Luật khám chữa bệnh số 40/2009/QH12)</p>
                                            <p className='font-bold' >QUYỀN CỦA NGƯỜI BỆNH</p>
                                            <div className='py-5'>
                                                <strong>Điều 7. Quyền được khám bệnh, chữa bệnh có chất lượng phù hợp với điều kiện thực tế</strong>
                                                <ul className='pl-6'>
                                                    <li>Được tư vấn, giải thích về tình trạng sức khỏe, phương pháp điều trị và dịch vụ khám bệnh, chữa bệnh phù hợp với bệnh.</li>
                                                    <li>Được điều trị bằng phương pháp an toàn, hợp lý và có hiệu quả theo các quy định chuyên môn kỹ thuật.</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <strong>Điều 8. Quyền được tôn trọng bí mật riêng tư</strong>
                                                <ul className='pl-6'    >
                                                    <li>Được giữ bí mật thông tin về tình trạng sức khỏe và đời tư được ghi trong hồ sơ bệnh án.</li>
                                                    <li>Thông tin quy định tại khoản 1 Điều này chỉ được phép công bố khi người bệnh đồng ý hoặc để chia sẻ thông tin, kinh nghiệm nhằm nâng cao chất lượng chẩn đoán, chăm sóc, điều trị người bệnh giữa những người hành nghề trong nhóm trực tiếp điều trị cho người bệnh hoặc trong trường hợp khác được pháp luật quy định.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 9. Quyền được tôn trọng danh dự, bảo vệ sức khỏe trong khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Được cung cấp thông tin, giải thích, tư vấn đầy đủ về tình trạng bệnh, kết quả, rủi ro có thể xảy ra để lựa chọn phương pháp chẩn đoán và điều trị.</li>
                                                    <li>Được tôn trọng về tuổi tác, giới tính, dân tộc, tín ngưỡng.</li>
                                                    <li>Không bị phân biệt giàu nghèo, địa vị xã hội.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 10. Quyền được lựa chọn trong khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Không bị kỳ thị, phân biệt đối xử hoặc bị ép buộc khám bệnh, chữa bệnh, trừ trường hợp quy định tại khoản 1 Điều 66 của Luật này.</li>
                                                    <li>Chấp nhận hoặc từ chối tham gia nghiên cứu y sinh học về khám bệnh, chữa bệnh.</li>
                                                    <li>Được lựa chọn người đại diện để thực hiện và bảo vệ quyền, nghĩa vụ của mình trong khám bệnh, chữa bệnh.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 11. Quyền được cung cấp thông tin về hồ sơ bệnh án và chi phí khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Được cung cấp thông tin tóm tắt về hồ sơ bệnh án nếu có yêu cầu bằng văn bản, trừ trường hợp pháp luật có quy định khác.</li>
                                                    <li>Được cung cấp thông tin về giá dịch vụ khám bệnh, chữa bệnh, giải thích chi tiết về các khoản chi trong hoá đơn thanh toán dịch vụ khám bệnh, chữa bệnh.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 12. Quyền được từ chối chữa bệnh và ra khỏi cơ sở khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Được từ chối xét nghiệm, sử dụng thuốc, áp dụng thủ thuật hoặc phương pháp điều trị nhưng phải cam kết tự chịu trách nhiệm bằng văn bản về việc từ chối của mình, trừ trường hợp quy định tại khoản 1 Điều 66 của Luật này.</li>
                                                    <li>Được ra khỏi cơ sở khám bệnh, chữa bệnh khi chưa kết thúc điều trị nhưng phải cam kết tự chịu trách nhiệm bằng văn bản về việc ra khỏi cơ sở khám bệnh, chữa bệnh trái với chỉ định của người hành nghề, trừ trường hợp quy định tại khoản 1 Điều 66 của Luật này.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 13. Quyền của người bệnh bị mất năng lực hành vi dân sự, không có năng lực hành vi dân sự, hạn chế năng lực hành vi dân sự hoặc người chưa thành niên từ đủ 6 tuổi đến chưa đủ 18 tuổi</strong>
                                                <ul className='pl-6'    >
                                                    <li>Trường hợp người bệnh bị mất năng lực hành vi dân sự, không có năng lực hành vi dân sự, hạn chế năng lực hành vi dân sự hoặc người chưa thành niên từ đủ 6 tuổi đến chưa đủ 18 tuổi thì người đại diện hợp pháp của người bệnh quyết định việc khám bệnh, chữa bệnh.</li>
                                                    <li>Trường hợp cấp cứu, để bảo vệ tính mạng, sức khỏe của người bệnh, nếu không có mặt người đại diện hợp pháp của người bệnh thì người đứng đầu cơ sở khám bệnh, chữa bệnh quyết định việc khám bệnh, chữa bệnh.</li>
                                                </ul>
                                            </div>
                                            <p className='font-bold py-5' >QUYỀN CỦA NGƯỜI BỆNH</p>
                                            <div className=''>
                                                <strong>Điều 14. Nghĩa vụ tôn trọng người hành nghề</strong>
                                                <ul className='pl-6'    >
                                                    <li>Tôn trọng và không được có hành vi xâm phạm danh dự, nhân phẩm, sức khỏe, tính mạng của người hành nghề và nhân viên y tế khác.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 15. Nghĩa vụ chấp hành các quy định trong khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Cung cấp trung thực thông tin liên quan đến tình trạng sức khỏe của mình, hợp tác đầy đủ với người hành nghề và cơ sở khám bệnh, chữa bệnh.</li>
                                                    <li>Chấp hành chỉ định chẩn đoán, điều trị của người hành nghề, trừ trường hợp quy định tại Điều 12 của Luật này.</li>
                                                    <li>Chấp hành và yêu cầu người nhà của mình chấp hành nội quy của cơ sở khám bệnh, chữa bệnh, quy định của pháp luật về khám bệnh, chữa bệnh.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 16. Nghĩa vụ chi trả chi phí khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Người bệnh có trách nhiệm chi trả chi phí khám bệnh, chữa bệnh, trừ trường hợp được miễn, giảm theo quy định của pháp luật. Trường hợp người bệnh tham gia bảo hiểm y tế thì việc thanh toán chi phí khám bệnh, chữa bệnh được thực hiện theo quy định của pháp luật về bảo hiểm y tế.</li>
                                                </ul>
                                            </div>
                                        </AccordionTab>
                                    </Accordion>
                                </TabPanel>
                                <TabPanel className='text-3xl' header="Câu hỏi khác">
                                    <Accordion className='' multiple activeIndex={[0]}>
                                        <AccordionTab className='text-2xl' header="Bệnh viện có các chương trình uy đãi như thế nào?">
                                            <p >Bệnh viện mắt quốc tế Nhật Bản làm việc từ thứ 2 đến Chủ nhật.</p>
                                            <div className='py-5'>
                                                <strong>Thời gian</strong>
                                                <ul className='pl-6'>
                                                    <li>Buổi sáng: từ 7:00 đến 12:00</li>
                                                    <li>Buổi chiều: từ 13:00 đến 19:00</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <strong>Ngày nghỉ</strong>
                                                <ul className='pl-6'    >
                                                    <li>Quốc khánh (2/9)</li>
                                                    <li>Tết dương lịch (1/1)</li>
                                                    <li>Tết âm lịch </li>
                                                </ul>
                                            </div>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Đặt lịch khám">
                                            <p className='pb-5'>Chúng tôi khuyến khích Quý khách đặt hẹn trước tối thiểu 8 giờ (theo giờ làm việc) trước khi tới thăm khám để Bệnh viện có thể sắp xếp lịch hẹn phù hợp và đảm bảo chất lượng phục vụ cho Quý khách.    </p>
                                            <p >Quý khách có thể đặt lịch khám theo một trong các cách sau:</p>
                                            <div className='py-5'>
                                                <strong>1. Đặt hẹn trực tuyến</strong>
                                                <ul className='pl-6'>
                                                    <li>Qua website: https://jieh.vn/make-an-appointment</li>
                                                    <li>Qua Fanpage: https://fb.com/book/JIEH32PDC/</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <strong>2. Đặt hẹn qua số điện thoại</strong>
                                                <ul className='pl-6'    >
                                                    <li>Điện thoại: +84-24-3715-3666 (Thời gian từ 7:00 – 12:00 và 13:00 – 19:00 hàng ngày)</li>
                                                    <li>Hotline: +84-90-224-2291 (Thứ 2 đến thứ 6 từ 8:00 – 17:00 và Thứ 7 từ 8:00 – 12:00 thứ 7)</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>3. Đặt hẹn trực tiếp tại</strong>
                                                <ul className='pl-6'    >
                                                    <li>Nha khoa Đức Nghĩa</li>
                                                    <li>Địa chỉ: 32 Phó Đức Chính, Trúc Bạch, Ba Đình, Hà Nội</li>
                                                </ul>
                                            </div>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Quy trình khám chữa bệnh tại Nha khoa Đức Nghĩa">
                                            <div className='pb-5'>
                                                <strong>BƯỚC 1: ĐẾN LỄ TÂN (TẦNG 1)</strong>
                                                <ul className='pl-6'>
                                                    <li>Đăng ký khám</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <strong>BƯỚC 2: BÁC SỸ KHÁM VÀ TƯ VẤN (TẦNG 3 HOẶC TẦNG 4)</strong>
                                                <ul className='pl-6'    >
                                                    <li>Bác sỹ khám, tư vấn hoặc chỉ định thực hiện chẩn đoán hình ảnh và xét nghiệm bổ sung.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>BƯỚC 3: KẾT LUẬN (TẦNG 3 HOẶC TẦNG 4)</strong>
                                                <ul className='pl-6'    >
                                                    <li>Bác sỹ chẩn đoán, tư vấn và chỉ định phương pháp điều trị.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>BƯỚC 4: THANH TOÁN (TẦNG 1)</strong>
                                                <ul className='pl-6'    >
                                                    <li>Bệnh nhân nộp phí tại quầy thu ngân</li>
                                                </ul>
                                            </div>
                                        </AccordionTab>
                                        <AccordionTab className='text-2xl' header="Quyền và nghĩa vụ của người bệnh">
                                            <p className='pb-5'>(Theo Luật khám chữa bệnh số 40/2009/QH12)</p>
                                            <p className='font-bold' >QUYỀN CỦA NGƯỜI BỆNH</p>
                                            <div className='py-5'>
                                                <strong>Điều 7. Quyền được khám bệnh, chữa bệnh có chất lượng phù hợp với điều kiện thực tế</strong>
                                                <ul className='pl-6'>
                                                    <li>Được tư vấn, giải thích về tình trạng sức khỏe, phương pháp điều trị và dịch vụ khám bệnh, chữa bệnh phù hợp với bệnh.</li>
                                                    <li>Được điều trị bằng phương pháp an toàn, hợp lý và có hiệu quả theo các quy định chuyên môn kỹ thuật.</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <strong>Điều 8. Quyền được tôn trọng bí mật riêng tư</strong>
                                                <ul className='pl-6'    >
                                                    <li>Được giữ bí mật thông tin về tình trạng sức khỏe và đời tư được ghi trong hồ sơ bệnh án.</li>
                                                    <li>Thông tin quy định tại khoản 1 Điều này chỉ được phép công bố khi người bệnh đồng ý hoặc để chia sẻ thông tin, kinh nghiệm nhằm nâng cao chất lượng chẩn đoán, chăm sóc, điều trị người bệnh giữa những người hành nghề trong nhóm trực tiếp điều trị cho người bệnh hoặc trong trường hợp khác được pháp luật quy định.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 9. Quyền được tôn trọng danh dự, bảo vệ sức khỏe trong khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Được cung cấp thông tin, giải thích, tư vấn đầy đủ về tình trạng bệnh, kết quả, rủi ro có thể xảy ra để lựa chọn phương pháp chẩn đoán và điều trị.</li>
                                                    <li>Được tôn trọng về tuổi tác, giới tính, dân tộc, tín ngưỡng.</li>
                                                    <li>Không bị phân biệt giàu nghèo, địa vị xã hội.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 10. Quyền được lựa chọn trong khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Không bị kỳ thị, phân biệt đối xử hoặc bị ép buộc khám bệnh, chữa bệnh, trừ trường hợp quy định tại khoản 1 Điều 66 của Luật này.</li>
                                                    <li>Chấp nhận hoặc từ chối tham gia nghiên cứu y sinh học về khám bệnh, chữa bệnh.</li>
                                                    <li>Được lựa chọn người đại diện để thực hiện và bảo vệ quyền, nghĩa vụ của mình trong khám bệnh, chữa bệnh.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 11. Quyền được cung cấp thông tin về hồ sơ bệnh án và chi phí khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Được cung cấp thông tin tóm tắt về hồ sơ bệnh án nếu có yêu cầu bằng văn bản, trừ trường hợp pháp luật có quy định khác.</li>
                                                    <li>Được cung cấp thông tin về giá dịch vụ khám bệnh, chữa bệnh, giải thích chi tiết về các khoản chi trong hoá đơn thanh toán dịch vụ khám bệnh, chữa bệnh.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 12. Quyền được từ chối chữa bệnh và ra khỏi cơ sở khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Được từ chối xét nghiệm, sử dụng thuốc, áp dụng thủ thuật hoặc phương pháp điều trị nhưng phải cam kết tự chịu trách nhiệm bằng văn bản về việc từ chối của mình, trừ trường hợp quy định tại khoản 1 Điều 66 của Luật này.</li>
                                                    <li>Được ra khỏi cơ sở khám bệnh, chữa bệnh khi chưa kết thúc điều trị nhưng phải cam kết tự chịu trách nhiệm bằng văn bản về việc ra khỏi cơ sở khám bệnh, chữa bệnh trái với chỉ định của người hành nghề, trừ trường hợp quy định tại khoản 1 Điều 66 của Luật này.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 13. Quyền của người bệnh bị mất năng lực hành vi dân sự, không có năng lực hành vi dân sự, hạn chế năng lực hành vi dân sự hoặc người chưa thành niên từ đủ 6 tuổi đến chưa đủ 18 tuổi</strong>
                                                <ul className='pl-6'    >
                                                    <li>Trường hợp người bệnh bị mất năng lực hành vi dân sự, không có năng lực hành vi dân sự, hạn chế năng lực hành vi dân sự hoặc người chưa thành niên từ đủ 6 tuổi đến chưa đủ 18 tuổi thì người đại diện hợp pháp của người bệnh quyết định việc khám bệnh, chữa bệnh.</li>
                                                    <li>Trường hợp cấp cứu, để bảo vệ tính mạng, sức khỏe của người bệnh, nếu không có mặt người đại diện hợp pháp của người bệnh thì người đứng đầu cơ sở khám bệnh, chữa bệnh quyết định việc khám bệnh, chữa bệnh.</li>
                                                </ul>
                                            </div>
                                            <p className='font-bold py-5' >QUYỀN CỦA NGƯỜI BỆNH</p>
                                            <div className=''>
                                                <strong>Điều 14. Nghĩa vụ tôn trọng người hành nghề</strong>
                                                <ul className='pl-6'    >
                                                    <li>Tôn trọng và không được có hành vi xâm phạm danh dự, nhân phẩm, sức khỏe, tính mạng của người hành nghề và nhân viên y tế khác.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 15. Nghĩa vụ chấp hành các quy định trong khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Cung cấp trung thực thông tin liên quan đến tình trạng sức khỏe của mình, hợp tác đầy đủ với người hành nghề và cơ sở khám bệnh, chữa bệnh.</li>
                                                    <li>Chấp hành chỉ định chẩn đoán, điều trị của người hành nghề, trừ trường hợp quy định tại Điều 12 của Luật này.</li>
                                                    <li>Chấp hành và yêu cầu người nhà của mình chấp hành nội quy của cơ sở khám bệnh, chữa bệnh, quy định của pháp luật về khám bệnh, chữa bệnh.</li>
                                                </ul>
                                            </div>
                                            <div className='pt-5'>
                                                <strong>Điều 16. Nghĩa vụ chi trả chi phí khám bệnh, chữa bệnh</strong>
                                                <ul className='pl-6'    >
                                                    <li>Người bệnh có trách nhiệm chi trả chi phí khám bệnh, chữa bệnh, trừ trường hợp được miễn, giảm theo quy định của pháp luật. Trường hợp người bệnh tham gia bảo hiểm y tế thì việc thanh toán chi phí khám bệnh, chữa bệnh được thực hiện theo quy định của pháp luật về bảo hiểm y tế.</li>
                                                </ul>
                                            </div>
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