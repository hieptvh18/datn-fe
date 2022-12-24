import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listAllTeam } from '../../feature/TeamSlice';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import "./styles.scss";
const Team = () => {
    const teams = useSelector(team => team.team.value);
    const [teamData, setTeamData] = useState([]);
    const [change, setChange] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        setChange(true)
        dispatch(listAllTeam())
        setTeamData(teams.data);
    }, [teamData]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '540px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const teamTemplate = (team) => {
        return (<>
            <div className="product-item">
                <div className="product-item-content text-center">
                    <div className="mb-3">
                        <img width='15%' src={`http://nhakhoaducnghia.xyz/${team?.avatar}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className="product-image" />
                    </div>
                    <div>
                        <h4 className="mb-1 text-white text-4xl pt-2 pb-4">{team?.fullname}</h4>
                        <div className='px-8 text-left text-white text-xl'>
                            <div className='' dangerouslySetInnerHTML={{ __html: team?.description?.slice(0, 400) }} />
                        </div>
                    </div>

                </div>
            </div>
        </>)
    }
    return (
        <>
            <div className='w-100% mx-auto'>
                <div className='banner-teams text-center'>
                    <div className='font-semi pt-7 pb-3' style={{ color: 'var(--primary)', fontSize: '38px', fontFamily: 'var(--fontArsenal)' }}>
                        Đội ngũ bác sĩ hàng đầu
                    </div>
                    <span className='font-light' style={{ fontFamily: 'var(--fontRoboto)' }}>“Chúng tôi đặt mình vào vị trí của người bệnh để lắng nghe, thấu hiểu và sẻ chia.”</span>
                    <img className='block mx-auto' width='60%' src='https://jieh.vn/upload/images/doctor/31.png' />
                </div>
                <div className='text-center w-default mx-auto'>
                    <div className='py-8 px-8'>Nha khoa Đức Nghĩa hội tụ các bác sỹ nha khoa giàu kinh nghiệm đến từ Việt Nam và Nhật Bản. Với mục tiêu nâng cao chất lượng khám chữa bệnh, mang lại hiệu quả điều trị tốt ưu cho người bệnh, đội ngũ Bác sỹ thường xuyên được cập nhật các công nghệ, phương pháp điều trị mới trong nhãn khoa thông qua các khóa đào tạo, các hội thảo trong nước và quốc tế.</div>
                    <div style={{ margin: '0 100px' }} className='grid '>
                        <div className='col-12 md:col-6 lg:col '>
                            <p style={{ color: 'var(--primary1)', fontSize: '60px', fontWeight: 'bold' }}>08</p>
                            <span>Bác sĩ nha khoa</span>
                        </div>
                        <div className='col-12 md:col-6 lg:col '>
                            <p style={{ color: 'var(--primary1)', fontSize: '60px', fontWeight: 'bold' }}>70.000+</p>
                            <span>Lượt thăm khám</span>
                        </div>
                        <div className='col-12 md:col-6 lg:col '>
                            <p style={{ color: 'var(--primary1)', fontSize: '60px', fontWeight: 'bold' }}>30.000+</p>
                            <span>Ca phẫu thuật thành công</span>
                        </div>
                    </div>
                </div>
                <div className='w-default mx-auto detail-doctor'>
                    {teams?.data?.map((item, index) => {
                        if (index < 2) {
                            return (
                                <div className='px-8 grid mt-8'>
                                    <div className='col-12 md:col-6 lg:col md:text-left mb-6 text-center'>
                                        <div className='image-doctor'>
                                            <img style={{ borderBottom: '3px solid var(--primary)', verticalAlign: 'middle' }} width='80%' src={item?.avatar ? 'http://nhakhoaducnghia.xyz/' + item.avatar : 'https://jieh.vn/upload/images/doctor/Bac%20sy%20Hattori%20Tadashi.png'} />
                                        </div>
                                    </div>
                                    <div className='col-12 md:col-6 lg:col'>
                                        <div style={{ color: 'var(--primary)', fontFamily: 'var(--fontArsenal)' }} className='text-6xl'>Giáo sư, Bác sỹ <br /> {item?.fullname}</div>
                                        <div className='my-5'>VIỆN TRƯỞNG DANH DỰ</div>
                                        <div className='' dangerouslySetInnerHTML={{ __html: item?.description }} />
                                    </div>
                                </div>
                            )
                        }
                    })}

                </div>
                <div style={{ backgroundColor: 'var(--primary1)' }} className='w-full mt-8 py-8 '>
                    <div className='text-center w-default mx-auto'>
                        <Carousel value={teamData} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel px-4" circular
                            autoplayInterval={3000} itemTemplate={teamTemplate} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Team