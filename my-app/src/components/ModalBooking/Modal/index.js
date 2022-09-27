import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addAccount } from '../../../feature/AccountSlice'
import { Dialog } from 'primereact/dialog';
import "./styles.scss"
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';

const ModalBooking = () => {
    const dispatch = useDispatch()
    const [statusBooking, setStatusBooking] = useState(false)
    const [formData, setFormData] = useState({});
    const [showMessage, setShowMessage] = useState(false);
    const { control, register, handleSubmit, formState: { errors }, reset } = useForm()
    const onSubmit = data => {
        console.log(1);
        dispatch(addAccount({ ...data }))
        setFormData(data)
        console.log(formData);
        setShowMessage(true);
        reset()
    }
    let today = new Date();
    let invalidDates = [today];
    const dialogFooter = <div className="flex justify-content-center"><Button style={{ color: 'var(--primary1)', fontSize: '18px' }} label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    return (
        <>
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex justify-content-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--primary)' }}></i>
                    <h1 style={{ paddingTop: '5px', color: 'var(--primary1)' }}>Đặt lịch khám thành công!</h1>
                    <p style={{ lineHeight: 1.5, fontSize: '14px' }}>
                        Tài khoản của bạn được tạo dưới số điện thoại <b>{formData.phone}</b> <br />
                        Tên là <b>{formData.fullName}</b>!
                    </p>
                </div>
            </Dialog>
            <form onSubmit={handleSubmit(onSubmit)} className={`fixed right-0 top-30 z-999 flex btn-booking ${statusBooking ? 'active' : ''}`}>
                <div onClick={() => setStatusBooking(!statusBooking)} className='cs-text-booking bg-primary1 px-4 py-3 border-round-left-2xl pointer flex flex-column align-items-center justify-content-center text-white font-medium'>
                    <div>
                    {statusBooking ?
                            <img src='https://res.cloudinary.com/dbpw1enlu/image/upload/v1663991580/svgviewer-png-output_6_pzvllg.png' />
                         :
                            <img src='https://winsmile.vn/public/template/frontend/img/icon_17.png' />
                         }
                    </div>
                    <div className='mt-2'>ĐĂNG</div>
                    <div>KÝ</div>
                    <div>NHẬN</div>
                    <div>LỊCH</div>
                    <div>KHÁM</div>
                </div>
                <div style={{width: "250px"}} className='flex flex-column'>
                    <input name="fullname" {...register('fullName', { required: true })} className='w-full h-full px-4 text-2xl border-bottom-1 border-top-1 border-400' placeholder='Họ tên *' />
                    <input name="phone" {...register('phone', { required: true })} className='w-full h-full px-4 text-2xl border-bottom-1 border-400' placeholder='Số điện thoại *' />
                    <input name="date" {...register('date', { required: true })} type="text" className='w-full h-full px-4 text-2xl border-bottom-1 border-400 ' placeholder='Email ' />
                    <textarea name="content" {...register('content')} className='w-full h-full px-4 text-2xl border-bottom-1 border-400' placeholder='Nội dung *' />
                </div>
                <button type='submit' className='hover-btn flex flex-column justify-content-center row-gap-4 px-4 bg-primary1 align-items-center pointer text-white text-2xl font-medium'>
                    <img src='https://winsmile.vn/public/template/frontend/img/icon_18.png' />
                    GỬI
                </button>
            </form>
        </>
    )
}

export default ModalBooking