import './styles.scss'
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';

import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';

const NewsPage = () => {

    const [selectedCity1, setSelectedCity1] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    const onCityChange = (e) => {
        setSelectedCity1(e.value);
    }
    return (
        <>
            {/* Banner */}
            <div className='w-full'>
                <div className='imageBanner'>
                    <div className='cell'>
                        <div className='cellNews'>
                            <div className='pb-5 text-3xl'>Home</div>
                            <div className='pb-3 text-7xl'>News</div>
                            <hr className='hr mb-4' />
                            <div>Globally harness multimedia based collaboration and idea-sharing with backend products. <br />Continually whiteboard superior opportunities via covalent scenarios.</div>
                        </div>
                    </div>
                </div>
                <div className='content paddingBottom'>
                    <div className='flex flex-wrap gap-8'>
                        <div className='col-8'>
                            <div className='News flex gap-4 '>
                                <div className='text-center'>
                                    <Avatar image="http://2.gravatar.com/avatar/ef1f2f737b64dffb6136ed943a2fe65b?s=144&d=mm&r=g" className="mr-2 w-11rem h-11rem" size="xlarge" shape="circle" />
                                    <div className='font-bold'>by Everest Whiting
                                    </div>
                                    <span className='text-xl text-500'>October 21, 2019</span>
                                </div>
                                <div>
                                    <img width='100%' src='http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/post_01-1280x640.jpg' />
                                    <div className='flex align-items-center gap-7 '>
                                        <div className='my-2'>
                                            <i className="pi pi-tags text-4xl tags-icon"></i>
                                            <span className='text-1xl text-700'>News</span>
                                        </div>
                                        <div className='my-2'>
                                            <span className='text-1xl text-700'>Prevention</span>
                                        </div>
                                        <div className='my-2'>
                                            <span className='text-1xl text-700'>Text</span>
                                        </div>
                                        <div className='my-2'>
                                            <i className="pi pi-comment text-4xl tags-icon"></i>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='textTitle pb-4'>Tooth extraction aftercare: A how-to guide</div>
                                        <div className='text-700'>Tooth extraction involves completely removing a tooth from the mouth. People may require tooth extraction for many reasons, ranging from tooth decay to crowded teeth.</div>
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
                                            <Button icon="pi pi-angle-right" label="Đọc thêm" iconPos="right" className='py-4 px-8 text-2xl' aria-label="Submit" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='my-8 bg-grey-500' />
                            <div className='News flex gap-4 '>
                                <div className='text-center'>
                                    <Avatar image="http://1.gravatar.com/avatar/46df469fe889ce5b252c36e57f982f57?s=144&d=mm&r=g" className="mr-2 w-11rem h-11rem" size="xlarge" shape="circle" />
                                    <div className='font-bold'>by Everest Whiting
                                    </div>
                                    <span className='text-xl text-500'>October 21, 2019</span>
                                </div>
                                <div>
                                    <img width='100%' src='http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/02/smile.jpg ' />
                                    <div className='flex align-items-center gap-7 '>
                                        <div className='my-2'>
                                            <i className="pi pi-tags text-4xl tags-icon"></i>
                                            <span className='text-1xl text-700'>News</span>
                                        </div>
                                        <div className='my-2'>
                                            <span className='text-1xl text-700'>Prevention</span>
                                        </div>
                                        <div className='my-2'>
                                            <span className='text-1xl text-700'>Text</span>
                                        </div>
                                        <div className='my-2'>
                                            <i className="pi pi-comment text-4xl tags-icon"></i>

                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='textTitle pb-4'>Tooth extraction aftercare: A how-to guide</div>
                                        <div className='text-700'>Tooth extraction involves completely removing a tooth from the mouth. People may require tooth extraction for many reasons, ranging from tooth decay to crowded teeth.</div>
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
                                            <Button icon="pi pi-angle-right" label="Đọc thêm" iconPos="right" className='py-4 px-8 text-2xl' aria-label="Submit" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='my-8 bg-grey-500' />
                            <div className='News flex gap-4 '>
                                <div className='text-center'>
                                    <Avatar image="http://1.gravatar.com/avatar/18bf5f60fe665d4856660da61ad37907?s=144&d=mm&r=g" className="mr-2 w-11rem h-11rem" size="xlarge" shape="circle" />
                                    <div className='font-bold'>by Everest Whiting
                                    </div>
                                    <span className='text-xl text-500'>October 21, 2019</span>
                                </div>
                                <div>
                                    <img width='100%' src='http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/02/timeline_2.jpg' />
                                    <div className='flex align-items-center gap-7 '>
                                        <div className='my-2'>
                                            <i className="pi pi-tags text-4xl tags-icon"></i>
                                            <span className='text-1xl text-700'>News</span>
                                        </div>
                                        <div className='my-2'>
                                            <span className='text-1xl text-700'>Prevention</span>
                                        </div>
                                        <div className='my-2'>
                                            <span className='text-1xl text-700'>Text</span>
                                        </div>
                                        <div className='my-2'>
                                            <i className="pi pi-comment text-4xl tags-icon"></i>

                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='textTitle pb-4'>Tooth extraction aftercare: A how-to guide</div>
                                        <div className='text-700'>Tooth extraction involves completely removing a tooth from the mouth. People may require tooth extraction for many reasons, ranging from tooth decay to crowded teeth.</div>
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
                                            <Button icon="pi pi-angle-right" label="Đọc thêm" iconPos="right" className='py-4 px-8 text-2xl' aria-label="Submit" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='my-8 bg-grey-500' />

                        </div>
                        <div className='widgetNews col'>
                            <div className='borderWidget'>
                                <div className="col-12">
                                    <div className="p-inputgroup">
                                        <InputText className='w-full text-2xl' placeholder="Tìm kiếm...." />
                                        <Button icon="pi pi-search" className="w-4 py-4 " />
                                    </div>
                                </div>
                                <div className='recentPost'>Recent Posts</div>
                                <hr />
                                <div className='subNews'>
                                    <div className='flex justify-content-center align-items-center gap-3 '>
                                        <div className='col-3'> <img width='100%' src='http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/post_02-160x160.jpg' /></div>
                                        <div className='col-8 py-4'>
                                            <span className='text-400'>Tháng 12, 2022</span>
                                            <div>Tooth extraction aftercare: A how-to guide</div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='flex justify-content-center align-items-center gap-3 subNews'>
                                        <div className='col-3'> <img width='100%' src='http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/post_03-160x160.jpg' /></div>
                                        <div className='col-8 py-4'>
                                            <span className='text-400'>Tháng 12, 2022</span>
                                            <div>Tooth extraction aftercare: A how-to guide</div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='flex justify-content-center align-items-center gap-3 subNews'>
                                        <div className='col-3'> <img width='100%' src='http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/post_04-160x160.jpg' /></div>
                                        <div className='col-8 py-4'>
                                            <span className='text-400'>Tháng 12, 2022</span>
                                            <div>Tooth extraction aftercare: A how-to guide</div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='flex justify-content-center align-items-center gap-3 subNews'>
                                        <div className='col-3'> <img width='100%' src='http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/post_05-160x160.jpg' /></div>
                                        <div className='col-8 py-4'>
                                            <span className='text-400'>Tháng 12, 2022</span>
                                            <div>Tooth extraction aftercare: A how-to guide</div>
                                        </div>
                                    </div>
                                    <hr /><div className='flex justify-content-center align-items-center gap-3 subNews'>
                                        <div className='col-3'> <img width='100%' src='http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/post_05-160x160.jpg' /></div>
                                        <div className='col-8 py-4'>
                                            <span className='text-400'>Tháng 12, 2022</span>
                                            <div>Tooth extraction aftercare: A how-to guide</div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className='recentPost'>Archives</div>
                                <div>
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
                                </div>
                                <div className='recentPost'>Categories</div>
                                <div>
                                    <Dropdown className='w-full py-2' value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select a Category" />
                                </div>
                                <div className='recentPost'>Tags</div>
                                <div className='flex flex-wrap gap-3'>
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

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NewsPage