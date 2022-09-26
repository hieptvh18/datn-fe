import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTeam } from '../../feature/TeamSlice';

const SpecialiezdTeam = () => {
    const team = useSelector(team => team.team.value);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listTeam())
    }, []);
    return (
        <div className="footer infoDoctor">
            <div className="flex column-gap-5">
                {team?.map((item) => {
                    return <div className="surface-200">
                        <div className="h-full">
                            <div className="h-full flex flex-column">
                                <div className="w-full flex">
                                    <img
                                        style={{ height: '300px' }}
                                        src={item.image}
                                    />
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