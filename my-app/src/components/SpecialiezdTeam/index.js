import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTeam } from '../../feature/TeamSlice';
import {NavLink} from 'react-router-dom'
import './styles.scss'
const SpecialiezdTeam = () => {
    const team = useSelector(team => team.team.value);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listTeam())
    }, []);
    return (
        <div className="mx-auto w-default px-5">
                <div className="flex flex-column md:flex-row row-gap-6 md:column-gap-5 -mt-8 px-7 md:px-0">
                    {team?.map((item) => {
                        return <div className="surface-200 w-full list-4top-item">
                            <div className="w-full">
                                <div className="w-full flex flex-column">
                                    <div className="w-full relative box-img">
                                        <img
                                            className='flex w-full'
                                            src={item.image}
                                        />
                                        <NavLink to={''}>
                                            <button className='bg-primary1 text-white font-normal px-4 py-3 text-2xl border-round-lg pointer absolute btn-read-more'>
                                                Read More 
                                                <i className='pi pi-angle-right text-2xl ml-2'></i>
                                            </button>
                                        </NavLink>
                                    </div>
                                    <div className="px-6">
                                        <div className="title pt-5 font-medium">{item.name}</div>
                                        <hr className="hr" />
                                        <div className="text-600 text-2xl pt-5">
                                            {item.specialist}
                                        </div>
                                        <div className="text-600 text-2xl pt-5">
                                            {item.position}
                                        </div>
                                        <ul className="flex pb-5 pt-7 lg:pt-7">
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-facebook text-5xl icon"></i>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-youtube text-5xl text-red-500 icon"></i>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-twitter text-5xl icon"></i>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-telegram text-5xl icon"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
        </div>
    )
}

export default SpecialiezdTeam