import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styles.scss'
import { listTop4 } from '../../feature/SpecialistSlice';

const List4Top = () => {
    const specialist = useSelector(data => data.specialist.value);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listTop4())
    }, []);
    return (
        <div className='w-default px-5 mx-auto'>
            <div className='flex justify-content-between align-content-center'>
                <div>
                    <h3 className='c-primary md:text-6xl font-medium'>Trải nghiệm</h3>
                    <h2 className='c-primary1 md:text-7xl lg:text-8xl -mt-3'>Dịch vụ của chúng tôi</h2>
                </div>
                <div className='text-center'>
                    <button className='bg-primary2 text-white md:px-6 md:py-5 px-4 py-3 border-round-lg'><a className='text-white' href='/tat-ca-dich-vu'>Tất cả dịch vụ</a></button>
                </div>
            </div>
            <div className='flex flex-column md:flex-row md:column-gap-4 row-gap-6 mt-5 md:px-0 px-7'>
                {specialist.data?.map((item, index) => {
                    if (index < 4) {
                        return <div className='w-full list-4top-item' key={index}>
                            <div className='w-full flex'>
                                {item?.galleries ?
                                    <img className='w-full' src={'http://nhakhoaducnghia.xyz/' + item.galleries[0]?.path} width={200} height={200} />
                                    : <img className='w-full' src='https://res.cloudinary.com/dbpw1enlu/image/upload/v1663499942/post_06-160x160_ni7izy.jpg' width={200} />
                                }
                            </div>
                            <div className='h-300px cs-box-dow bg-primary1 px-6 pt-8 pb-6 text-white'>
                                <p className='md:text-4xl lg:text-5xl text-5xl mb-4 font-normal'>{item.specialist_name}</p>
                                <span className='md:text-1xl text-2xl'>{item.function}</span>
                            </div>
                        </div>
                    }
                })}

            </div>
        </div>
    )
}

export default List4Top