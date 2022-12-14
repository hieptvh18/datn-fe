import './styles.scss'
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import WidgetNew from '../../components/WidgetNew';
import { listNewsById } from '../../feature/NewsSlice';

const NewsDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const newsDetail = useSelector(data => data.news.value)
    useEffect(() =>{
        dispatch(listNewsById(id))
    }, [])
    return (
        <>
            {/* Banner */}
            <div className='w-full cs-img-newss'>
                <div className='imageBanner'>
                    <div className='cell'>
                        <div className='cellNews w-default mx-auto'>
                            <div className='flex align-items-center gap-4 px-5 md:px-7'>
                                <div className='my-2'>
                                    <i className="pi pi-tags text-4xl tags-icon"></i>
                                    <span className='text-1xl white pr-3'>Tin Tức</span> |
                                </div>
                                <div className='my-2'>
                                    <span className='text-1xl white pr-3'>Tiện lợi</span> |
                                </div>
                                <div className='my-2'>
                                    <span className='text-1xl white'>Phòng Ngừa</span>
                                </div>
                                <div className='my-2'>
                                    <i className="pi pi-comment text-4xl tags-icon"></i>
                                </div>
                            </div>
                            <div className='pb-3 text-6xl md:text-8xl px-7'>{newsDetail?.data?.title}</div>
                            <hr className='hr py-1 w-2 mb-7 mx-7' />
                            <div className='flex align-items-center gap-6 px-7'>
                                <div className='my-2 align-items'>
                                    <i className="pi pi-clock text-3xl tags-icon"></i>
                                    <span className='text-1xl white'>{newsDetail?.data?.created_at}</span>
                                </div>
                                <div className='my-2 align-items'>
                                    <i className="pi pi-user text-3xl tags-icon"></i>
                                    <span className='text-1xl white'>by {newsDetail?.data?.news_author?.fullname}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content paddingBottom'>
                    <div className='flex flex-wrap gap-8'>
                        <div className='col-12 w-default mx-auto px-8'>
                            <div dangerouslySetInnerHTML={{ __html: newsDetail?.data?.content }} />
                        </div>
                        {/* <WidgetNew /> */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default NewsDetail