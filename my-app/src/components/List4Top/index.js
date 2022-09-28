import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listService } from '../../feature/ServiceSlice';

const List4Top = () => {
    const service = useSelector(service => service.service.value);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listService())
    }, []);
    return (
        <div className='w-default px-5'>
            <div className='flex justify-content-between align-content-center'>
                <div>
                    <h3 className='c-primary text-6xl font-medium'>Trải nghiệm</h3>
                    <h2 className='c-primary1 text-8xl -mt-3'>Dịch vụ của chúng tôi</h2>
                </div>
                <div className='text-center'>
                    <button className='bg-primary2 text-white px-6 py-5 border-round-lg'>View All Services</button>
                </div>
            </div>
            <div className='flex column-gap-4 mt-5'>
                {service?.map((item) => {
                    return <div className='w-full'>
                        <div className='w-full flex'>
                            <img className='w-full' src={item.image} width={200} />
                        </div>
                        <div style={{minHeight: "300px"}} className=' cs-box-dow bg-primary1 px-6 pt-8 pb-6 text-white'>
                            <p className='text-5xl mb-4 font-normal'>{item.service_name}</p>
                            <span className=''>{item.title}</span>
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default List4Top