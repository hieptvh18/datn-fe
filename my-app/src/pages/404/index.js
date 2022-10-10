import './styles.scss'
import React from 'react'
import { Button } from 'primereact/button'

const Page404 = () => {
    return (
        <>
            <div className='image404'>
                <div className='cell flex'>
                    <div className='cellContent text-center'>
                        <div className='font-light'>We are sorry, page not found.</div>
                        <div className='text-8xl py-4'>Error 404.</div>
                        <a href='/'><Button label="Back to home" className='text-2xl py-4 px-8' aria-label="Submit" /></a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Page404