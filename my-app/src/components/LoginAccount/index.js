
import React, { useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import { classNames } from 'primereact/utils';
import './styles.scss';
import { Controller, useForm } from 'react-hook-form';
import { Login } from '../../feature/AuthSlice';
import { useDispatch } from 'react-redux';

const LoginAccount = () => {
    const [showMessage, setShowMessage] = useState(false);

    const { control, formState: { errors }, handleSubmit, reset } = useForm();
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(Login(data))
        setShowMessage(true);
        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

    return (
        <div>
            <div className='px-5 py-6'>
                <h2 className='text-center c-primary text-6xl'>ĐĂNG NHẬP</h2>
                <p className='text-center font-italic text-500 text-1xl'>Chào mừng đến với nha khoa Đức Nghĩa</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" mt-7">
                        <div className="p-inputgroup p">
                            <span className="p-float-label border-bottom-1 border-300  p-input-icon-right">
                                <i className="pi pi-phone text-2xl" />
                                <Controller name="phone" control={control} rules={{ required: 'Số điện thoại bắt buộc nhập' }} render={({ field, fieldState }) => (
                                    <InputText id={field.name} {...field} className='cs-ip-login pb-2 text-2xl' type="text" />
                                )} />
                                <label htmlFor="phone" className={classNames({ 'p-error': errors.phone })}>Số điện thoại</label>
                            </span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="p-inputgroup">
                            <span className="p-float-label border-bottom-1 border-300  p-input-icon-right">
                                <i className="pi pi-key text-2xl" />
                                <Controller name="password" control={control} rules={{ required: 'Mật khẩu bắt buộc nhập' }} render={({ field, fieldState }) => (
                                    <InputText id={field.name} {...field} className='cs-ip-login pb-2 text-2xl' type="password" />
                                )} />
                                <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Mật khẩu</label>
                            </span>
                        </div>
                    </div>
                    <div className='flex justify-content-center align-items-center'>
                        <button className='text-center px-7 py-3 mt-6 pointer bg-primary1 text-white text-3xl font-normal' style={{ borderRadius: "20px" }}>Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginAccount