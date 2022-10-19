import { InputText } from 'primereact/inputtext'
import React from 'react'
import classNames from "classnames";
import { Controller, useForm } from 'react-hook-form'

const FormFeedBack = ({close}) => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm()
    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
      };
  return (
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
                    <div>
                        <div className='flex flex-column mt-3'>
                            <label className='text-2xl'>Họ tên: <i className='text-red-500'>*</i></label>
                            <input className='cs-input-feedback' name='name'/>
                        </div>
                        <div className='flex flex-column mt-3'>
                            <label className='text-2xl'>E-mail:</label>
                            <input className='cs-input-feedback' name='name'/>
                        </div>
                        <div className='flex flex-column mt-3'>
                            <label className='text-2xl'>Nội dung:</label>
                            <textarea className='cs-input-feedback' rows="5" cols="40" style={{resize: "none"}}></textarea>
                        </div>
                        <div className='flex justify-content-center align-items-center'>
                            <button className='border-round-xl pointer px-6 py-3 my-6 text-2xl bg-primary2 text-white'>Phản hồi</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormFeedBack