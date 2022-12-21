import './styles.scss'
import { Avatar } from 'primereact/avatar';
import React, { useEffect, useState } from 'react'
import { Button } from 'primereact/button';
import WidgetNew from '../../components/WidgetNew';
import { useDispatch, useSelector } from 'react-redux';
import { listNews } from '../../feature/NewsSlice';
import { NavLink } from 'react-router-dom';
import { getNews } from '../../api/news';

const NewsPage = () => {
    const [news, setNews] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        const newss = async () =>{
            const {data} = await getNews()
            setNews(data)
        }
        newss()
    }, []);
    const dm = news?.data?.map(items => {
        return <>
            <div>
                <div className='grid w-full'>
                    <div className='text-center col-12 md:col-2 hidden md:block'>
                        <Avatar image={'http://nhakhoaducnghia.xyz/' + items?.image_news[0]?.image} className="mr-2 w-11rem h-11rem" size="xlarge" shape="circle" />
                        <div className='font-bold'>by {items?.news_author['fullname']}
                        </div>
                        <span className='text-xl text-500'>{items?.created_at}</span>
                    </div>
                    <div className='col-12 md:col-10'>
                        <img className='cs-img-news' width='100%' src={items?.image_news.map((e) => { return `http://nhakhoaducnghia.xyz/${e.image}` })} />
                        <div className='flex align-items-center gap-3 md:gap-7 '>
                            <div className='my-2'>
                                <i className="pi pi-tags text-4xl tags-icon"></i>
                                <span className='text-1xl text-700'>Nhanh chóng</span>
                            </div>
                            <div className='my-2'>
                                <span className='text-1xl text-700'>Phòng Ngừa</span>
                            </div>
                            <div className='my-2'>
                                <span className='text-1xl text-700'>Tiện lợi</span>
                            </div>
                            <div className='my-2'>
                                <i className="pi pi-comment text-4xl tags-icon"></i>
                            </div>
                        </div>
                        <div className=''>
                            <div className='textTitle pb-4 text-6xl'>{items?.title}</div>
                        </div>
                        <div className='flex justify-content-between  align-items-center px-4'>
                            <div>
                                <ul className="flex pb-5 pt-7 lg:pt-7">
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
                            <div>
                                <NavLink to={`/news/detail/${items?.id}`}><Button icon="pi pi-angle-right" label="Đọc thêm" iconPos="right" className='py-4 px-8 text-2xl' aria-label="Submit" /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='my-8 bg-grey-500' />
        </>
    })
    return (
        <>
            {/* Banner */}
            <div className='w-full'>
                <div className='imageBanner'>
                    <div className='cell px-6'>
                        <div className='cellNews w-default'>
                            <div className='pb-5 text-3xl'>NHA KHOA ĐỨC NGHĨA</div>
                            <div className='pb-3 text-7xl'>Tin Tức</div>
                            <hr className='hr mb-4' />
                            <div>Nha khoa Đức Nghĩa là một trong những nha khoa lớn và uy tín nhất trên cả nước hiện nay.  Bên cạnh đội ngũ chuyên gia nha khoa hàng đầu, giàu kinh nghiệm thì trang thiết bị y tế, ứng dụng các công nghệ tiên tiến bậc nhất trên thế giới. </div>
                        </div>
                    </div>
                </div>
                <div className='content paddingBottom'>
                    <div className='w-default mx-auto px-5'>
                        <div className=''>
                            {dm}
                        </div>
                        {/* <WidgetNew /> */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default NewsPage