import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Controller, useForm } from 'react-hook-form'
import { addFeedBack } from '../../../api/feedback'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'

const FormFeedBack = ({close}) => {
    const { register, handleSubmit, formState:{errors}, reset } = useForm()
    const [showMessage, setShowMessage] = useState(false);
    const [isError, setIsError] = useState(false);
    const onSubmit = async (data) =>{
        try {
            await addFeedBack(data)
            setIsError(false)
            
        } catch (error) {
            setIsError(true)
        }
        setShowMessage(true)
        reset()
    }
    const dialogFooter = <div className="flex justify-content-center"><Button style={{ color: 'var(--primary1)', fontSize: '18px' }} label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
  return (
    <>
        <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
            {isError ? 
                <div className="flex align-items-center justify-content-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--primary)' }}></i>
                    <h1 style={{ paddingTop: '5px', color: 'var(--primary1)' }}>Gửi phản hồi không thành công !</h1>
                    <p style={{ lineHeight: 1.5, fontSize: '14px' }}>
                        Vui lòng thử lại !
                    </p>
                </div>
            :
                <div className="flex align-items-center justify-content-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--primary)' }}></i>
                    <h1 style={{ paddingTop: '5px', color: 'var(--primary1)' }}>Gửi phản hồi thành công !</h1>
                    <p style={{ lineHeight: 1.5, fontSize: '14px' }}>
                        Cảm ơn bạn đã phản hồi cho chúng tôi ! Nha khoa Đức Nghĩa xin cảm ơn bạn
                    </p>
                </div>
            }
        </Dialog>
        <div className='w-full'>
            <div className='text-center relative cs-bg-primary2 py-4'>
                <p className='text-white text-3xl'>Nha Khoa Đức Nghĩa</p>
                <i onClick={close} className="pi pi-times text-3xl text-white absolute right-0 top-50 -translate-y-50 mr-3 pointer"></i>
            </div>
            <div className='surface-200 z-1 px-7 pb-5 pt-8'>
                <div className='bg-white z-2 border-round-2xl'>
                    <div className='flex justify-content-center'>
                        <img className='-mt-6' src='https://res.cloudinary.com/dbpw1enlu/image/upload/v1666150579/z3663214686616_65f9b3ce3bcc68cf56ed607a5e59ceb0_d1vawg.png' width="50px"/>
                    </div>
                    <div className='px-5'>
                        <p className='text-2xl text-center mt-3'>Nha khoa Đức Nghĩa luôn luôn lắng nghe luôn luôn thấu hiểu khách hàng</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-column mt-3'>
                                <label className='text-2xl'>Họ tên: <i className='text-red-500'>*</i></label>
                                <input {...register('customer_name', {required: true, maxLength: 50})} name='customer_name' className='cs-input-feedback'/>
                                <p style={{color: 'red'}}>{errors.customer_name?.type === 'required' && "Vui lòng nhập tên quý khách !"}</p>
                                <p style={{color: 'red'}}>{errors.customer_name?.type === 'maxLength' && "Bạn không được nhập quá 50 ký tự"}</p>
                            </div>
                            <div className='flex flex-column mt-3'>
                                <label className='text-2xl'>E-mail:</label>
                                <input {...register('customer_email')} type="email" name='customer_email' className='cs-input-feedback'/>
                            </div>
                            <div className='flex flex-column mt-3'>
                                <label className='text-2xl'>Nội dung:</label>
                                <textarea {...register('content')} name='content' rows="5" cols="40" style={{resize: "none"}} className='cs-input-feedback'></textarea>
                            </div>
                            <div className='flex justify-content-center align-items-center'>
                                <button className='border-round-xl pointer px-6 py-3 my-6 text-2xl bg-primary2 text-white' type='submit'>Phản hồi</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormFeedBack