import './styles.scss'
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';

import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import WidgetNew from '../../components/WidgetNew';

const NewsDetail = () => {
    return (
        <>
            {/* Banner */}
            <div className='w-full'>
                <div className='imageBanner'>
                    <div className='cell'>
                        <div className='cellNews'>
                            <div className='flex align-items-center gap-4 '>
                                <div className='my-2'>
                                    <i className="pi pi-tags text-4xl tags-icon"></i>
                                    <span className='text-1xl white pr-3'>News</span> |
                                </div>
                                <div className='my-2'>
                                    <span className='text-1xl white pr-3'>Prevention</span> |
                                </div>
                                <div className='my-2'>
                                    <span className='text-1xl white'>Text</span>
                                </div>
                                <div className='my-2'>
                                    <i className="pi pi-comment text-4xl tags-icon"></i>
                                </div>
                            </div>
                            <div className='pb-3 text-8xl'>Tooth extraction aftercare: A how-to guide</div>
                            <hr className='hr py-1 w-2 mb-7' />
                            <div className='flex align-items-center gap-6 '>
                                <div className='my-2 align-items'>
                                    <i className="pi pi-clock text-3xl tags-icon"></i>
                                    <span className='text-1xl white'>12 Tháng 9, 2022</span>
                                </div>
                                <div className='my-2 align-items'>
                                    <i className="pi pi-user text-3xl tags-icon"></i>
                                    <span className='text-1xl white'>by Everest Whiting
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content paddingBottom'>
                    <div className='flex flex-wrap gap-8'>
                        <div className='col-8'>
                            <div>
                                Nha sĩ hoặc bác sĩ phẫu thuật nha khoa sẽ thực hiện nhổ răng tại phòng khám của họ và sau đó cung cấp cho người đó một số hướng dẫn để chăm sóc khu vực này khi vết thương lành.<br /><br />

                                Trong cuộc hẹn, bác sĩ nha khoa sẽ tiêm thuốc tê mạnh vào khu vực xung quanh răng để người bệnh không cảm thấy đau đớn. Sau đó, họ sẽ sử dụng một loạt các dụng cụ để nới lỏng chiếc răng trước khi nhổ nó ra.<br /><br />

                                Sau khi loại bỏ răng, họ sẽ đặt gạc lên vị trí nhổ răng để giúp kiểm soát chảy máu và thúc đẩy quá trình đông máu. <br /><br />

                                Tìm hiểu thêm về chăm sóc sau khi nhổ răng trong bài viết này. Chúng tôi cũng cung cấp lịch trình chữa bệnh chung và giải thích khi nào cần nói chuyện với nha sĩ. <br />
                            </div>
                            <h2 className='py-5' >Aftercare</h2>
                            <div>
                                Việc chăm sóc sau khi nhổ răng có thể thay đổi một chút tùy thuộc vào một số yếu tố.<br /><br />

                                Chúng bao gồm răng mà nha sĩ đã lấy ra, vì một số răng có chân răng sâu hơn những răng khác và mất nhiều thời gian để lành hơn. Tuy nhiên, hầu hết mọi người nhận thấy rằng cơn đau giảm sau khoảng 3 ngày.<br /><br />

                                Một trong những khía cạnh quan trọng nhất của chăm sóc sau đó là duy trì cục máu đông hình thành trong ổ răng nơi chiếc răng đã từng ở.<br /><br />

                                Chăm sóc cục máu đông này là chìa khóa cho quá trình chữa bệnh, và nó giúp ngăn ngừa các biến chứng đau đớn, chẳng hạn như ổ khô.<br />
                            </div>
                            <img className='w-full py-5' src='http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/02/timeline.jpg' />
                            <h2 className='py-5' >Ngày 1-2</h2>
                            <div>
                                Phần lớn các chăm sóc sau khi nhổ răng trong vài ngày đầu tiên tập trung vào việc hình thành cục máu đông và chăm sóc miệng nói chung.<br /><br />

                                Như một số chuyên gia lưu ý, chảy máu ở mức độ thấp trong tối đa 24 giờ sau khi nhổ răng là hoàn toàn bình thường. Tuy nhiên, chảy máu tích cực sau thời điểm này cần được điều trị.<br /><br />

                                Dưới đây là một số mẹo bổ sung cho 2 ngày chăm sóc đầu tiên:<br /><br />
                            </div>
                            <ul className='ml-5' >
                                <li className='pb-2'><b>Nghỉ ngơi nhiều:</b> Nên nghỉ ngơi ít nhất trong 24 giờ đầu tiên sau khi nhổ răng.</li>
                                <li className='pb-2'><b>Thay gạc khi cần thiết:</b> Điều quan trọng là để miếng gạc đầu tiên trong miệng ít nhất vài giờ để cục máu đông hình thành. Sau đó, bạn có thể thay băng gạc thường xuyên nếu cần.</li>
                                <li className='pb-2'><b>Tránh súc miệng:</b> Cố gắng hết sức có thể, hãy tránh súc, ngoáy hoặc súc miệng bất cứ thứ gì trong miệng khi khu vực này vẫn còn đông máu. Những hành động này có thể đánh bật bất kỳ cục máu đông nào đang hình thành và ảnh hưởng đến thời gian lành thương.</li>
                                <li className='pb-2'><b>Không dùng ống hút:</b> Dùng ống hút tạo áp lực nhiều lên vết thương đang lành, dễ làm tan cục máu đông.</li>
                                <li className='pb-2'><b>Không khạc nhổ:</b> Khạc nhổ cũng tạo ra áp lực trong miệng, có thể làm tan cục máu đông.</li>
                                <li className='pb-2'><b>Tránh xì mũi hoặc hắt hơi:</b> ếu bác sĩ phẫu thuật loại bỏ một chiếc răng từ nửa trên của miệng, xì mũi hoặc hắt hơi có thể tạo ra áp lực trong đầu có thể đánh bật cục máu đông đang phát triển. Tránh xì mũi và hắt hơi nếu có thể.</li>
                                <li className='pb-2'><b>Không hút thuốc: </b> Hút thuốc tạo ra áp lực trong miệng tương tự như khi dùng ống hút. Mặc dù tốt nhất là tránh hút thuốc trong toàn bộ quá trình chữa bệnh, nhưng điều quan trọng là không hút thuốc trong vài ngày đầu tiên khi cục máu đông hình thành.</li>
                                <li className='pb-2'><b>Uống thuốc giảm đau: </b> Thuốc giảm đau không kê đơn có thể giúp giảm đau và viêm.</li>
                                <li className='pb-2'><b>Dùng bất kỳ loại thuốc nào mà nha sĩ đề nghị:  </b> Bác sĩ phẫu thuật nha khoa có thể yêu cầu các loại thuốc kê đơn cho những trường hợp loại bỏ phức tạp. Điều quan trọng là phải hoàn thành toàn bộ quá trình điều trị.</li>
                            </ul>
                            <img className='w-full py-5' src='http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/featured_image_shop-640x367.jpg' />
                            <h2 className='py-5' >Ngày 3-10</h2>
                            <div>
                                Sau khi cục máu đông hình thành, điều quan trọng là phải giữ nó ở vị trí an toàn và thực hiện thêm một số bước vệ sinh răng miệng để giúp ngăn ngừa các vấn đề khác.<br /><br />

                                Lời khuyên cho việc chăm sóc sau giữa ngày thứ ba và ngày thứ 10 bao gồm:<br /><br />
                            </div>
                            <ul className='ml-5' >
                                <li className='pb-2'><b>Súc miệng bằng nước muối: </b> Khi cục máu đông đã ổn định, nhẹ nhàng súc miệng bằng dung dịch nước muối ấm hoặc một chút muối trong nước ấm. Hỗn hợp này giúp tiêu diệt vi khuẩn trong miệng, có thể ngăn ngừa nhiễm trùng khi miệng lành lại.</li>
                                <li className='pb-2'><b>Chải và dùng chỉ nha khoa như bình thường:</b> Chải và dùng chỉ nha khoa như bình thường, nhưng lưu ý tránh hoàn toàn chiếc răng đã nhổ. Dung dịch nước muối và bất kỳ loại nước súc miệng có tẩm thuốc nào mà nha sĩ khuyên dùng phải đủ để làm sạch khu vực này.</li>
                                <li className='pb-2'><b>Ăn thức ăn mềm:</b>Trong toàn bộ quá trình chữa bệnh, mọi người nên ăn thức ăn mềm, không cần nhai nhiều và khó bị mắc kẹt trong ổ trống. Cân nhắc ăn các món súp, sữa chua, nước sốt táo và các loại thực phẩm tương tự. Tránh bánh mì nướng cứng, khoai tây chiên và thức ăn có chứa hạt.</li>

                            </ul>
                            <h2 className='py-5' >Chăm sóc cho nhiều răng</h2>
                            <div>Đôi khi, bác sĩ phẫu thuật nha khoa sẽ cần phải nhổ nhiều hơn một chiếc răng cùng một lúc. Khi nhổ nhiều răng, bác sĩ phẫu thuật có nhiều khả năng đề nghị gây mê toàn thân thay vì sử dụng thuốc gây tê cục bộ.<br /><br />

                                Do đó, người đó sẽ bất tỉnh trong suốt quá trình. Nha sĩ cũng sẽ cung cấp cho họ một số hướng dẫn đặc biệt trước khi nhổ răng, chẳng hạn như tránh thức ăn trong một thời gian nhất định. Sau khi làm thủ tục, người đó sẽ cần người khác chở họ về nhà.<br /><br />

                                Chăm sóc nhiều lần nhổ răng có thể là một thách thức, đặc biệt nếu chúng nằm ở các bên khác nhau của miệng. Bác sĩ nha khoa có thể có những hướng dẫn cụ thể cho những trường hợp này và họ có thể yêu cầu tái khám ngay sau khi nhổ răng.<br /><br />

                                Họ cũng có thể sử dụng các chất hỗ trợ đông máu ở các vị trí chiết xuất. Đây là những mảnh nhỏ của vật liệu tự nhiên giúp đông máu. Cơ thể phá vỡ các chất hỗ trợ đông máu một cách an toàn và hấp thụ chúng theo thời gian.<br /><br />
                            </div>
                            <div className='flex justify-content-between align-items-center'>
                                <a href='/news' style={{ color: 'var(--primary)' }} >Xem thêm nhiều bài viết khác</a>
                                <ul className="flex">
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-facebook text-6xl icon"></i>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-youtube text-6xl text-red-500 icon"></i>

                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-twitter text-6xl icon"></i>

                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-telegram text-6xl icon"></i>

                                    </li>
                                </ul>

                            </div>
                            <div className='flex justify-content-between align-items my-7' style={{ backgroundColor: 'var(--primary)', padding: '5px' }}>
                                <div className='col-3 flex align-items-center justify-content-center'>
                                    <Avatar image="http://2.gravatar.com/avatar/ef1f2f737b64dffb6136ed943a2fe65b?s=144&d=mm&r=g" className="w-12rem h-12rem " style={{ border: '4px solid white' }} size="xlarge" shape="circle" />
                                </div>
                                <div style={{ backgroundColor: 'white' }} className='col-9 p-7'>
                                    <h2 style={{ color: 'var(--primary1)' }}>Everest Whiting
                                    </h2>
                                    <div>Trao quyền một cách thích hợp cho các kỹ năng lãnh đạo năng động sau các cổng thông tin doanh nghiệp. Các chuỗi cung ứng tương tác cơ tim trên toàn cầu với các vectơ chất lượng đặc biệt. Toàn cầu cách mạng hóa các nguồn toàn cầu thông qua các dịch vụ có thể tương tác.</div>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-content-between align-items my-7 gap-7'>
                                <div className='flex align-items-center'>
                                    <div className='mr-3'>
                                        <Avatar image="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/post_08-160x160.jpg" className="w-8rem h-8rem " size="xlarge" shape="circle" />
                                    </div>
                                    <div className='my-3'>
                                        <p className='text-500'>Trước</p>
                                        <div className='btPrevNextTitle' >
                                            Làm thế nào miếng dán làm trắng có thể làm hỏng răng của bạn
                                        </div>
                                    </div>
                                </div>
                                <div className='flex align-items-center'>
                                    <div className='text-right my-3'>
                                        <p className='text-500'>Tiếp theo</p>
                                        <div className='btPrevNextTitle' >
                                            Làm thế nào miếng dán làm trắng có thể làm hỏng răng của bạn
                                        </div>
                                    </div>
                                    <div className='ml-3'>
                                        <Avatar image="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/02/single-service-2-160x160.jpg" className="w-8rem h-8rem " size="xlarge" shape="circle" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <WidgetNew />
                    </div>

                </div>
            </div>
        </>
    )
}

export default NewsDetail