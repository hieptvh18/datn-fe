import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import React, { useEffect, useState } from 'react'
import { getNews } from '../../api/news';
import './styles.scss'

const WidgetNew = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        const newss = async () =>{
            const {data} = await getNews()
            setNews(data)
        }
        newss()
    }, []);
    const dm = news?.data?.map(item =>{
        return <>
            <div className='subNews'>
        <div className='flex justify-content-center align-items-center gap-3 '>
            <div className='col-3'> <img width='100%' src='http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/post_02-160x160.jpg' /></div>
            <div className='col-8 py-4'>
                <span className='text-400'>Tháng 12, 2022</span>
                <a href='/news/detail'><div>Tooth extraction aftercare: A how-to guide</div></a>

            </div>
        </div>
        </div>
        <hr />
        </>
    })
    return (
        <div className='widgetNews col'>
            <div className='borderWidget'>
                <div className='recentPost'>Bài viết liên quan</div>
                <hr />
                {dm}
                {/* <div className='recentPost'>Archives</div> */}
                {/* <div>
                    <div className='flex justify-content-between px-3 align-items-center gap-3 '>
                        <div className=''>Tháng 12</div>
                        <span className=''>(3)</span>
                    </div>
                    <hr className='my-3' />
                    <div className='flex justify-content-between px-3 align-items-center gap-3 '>
                        <div className=''>Tháng 11</div>
                        <span className=''>(2)</span>
                    </div>
                    <hr className='my-3' />
                    <div className='flex justify-content-between px-3 align-items-center gap-3 '>
                        <div className=''>Tháng 10</div>
                        <span className=''>(4)</span>
                    </div>
                    <hr className='my-3' />
                    <div className='flex justify-content-between px-3 align-items-center gap-3 '>
                        <div className=''>Tháng 9</div>
                        <span className=''>(3)</span>
                    </div>
                    <hr className='my-3' />
                </div> */}
                {/* <div className='recentPost'>Categories</div> */}
                {/* <div>
                    <Dropdown className='w-full py-2' value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select a Category" />
                </div> */}
                {/* <div className='recentPost'>Tags</div> */}
                {/* <div className='flex flex-wrap gap-3'>
                    <a href='#'><Button label="Đau răng" className='py-3 text-2xl ' aria-label="Submit" /></a>
                    <a href='#'><Button label="Đau đầu" className='py-3 text-2xl' aria-label="Submit" /></a>
                    <a href='#'><Button label="Đau bụng" className='py-3 text-2xl' aria-label="Submit" /></a>
                    <a href='#'><Button label="Submit" className='py-3 text-2xl' aria-label="Submit" /></a>
                    <a href='#'><Button label="Submit" className='py-3 text-2xl' aria-label="Submit" /></a>
                    <a href='#'><Button label="Submit" className='py-3 text-2xl' aria-label="Submit" /></a>
                    <a href='#'><Button label="Submit" className='py-3 text-2xl' aria-label="Submit" /></a>
                    <a href='#'><Button label="Submit" className='py-3 text-2xl' aria-label="Submit" /></a>
                    <a href='#'><Button label="Submit" className='py-3 text-2xl' aria-label="Submit" /></a>
                    <a href='#'><Button label="Submit" className='py-3 text-2xl' aria-label="Submit" /></a>
                    <a href='#'><Button label="Submit" className='py-3 text-2xl' aria-label="Submit" /></a>
                </div> */}
            </div>
        </div>
    )
}

export default WidgetNew