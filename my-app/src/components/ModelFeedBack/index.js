import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import FormFeedBack from './FormFeedBack'
import classNames from 'classnames';
import './styles.scss'

const ModelFeedBack = () => {
  return (
    <div>
        <Popup modal trigger={open => <div className={`fixed bg-primary2 cs-box-dow pointer px-4 py-2 border-round-xl align-items-center justify-content-between ${open ? " hidden" : "flex"}`} style={{left: "20px", bottom: "50px", zIndex: "9999999999"}}>
        <svg className='mt-2' fill="#fff" width="40" height="40" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="m10.414 18-3.707 3.707C6.077 22.337 5 21.891 5 21V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3zm-1.121-1.707A1 1 0 0 1 10 16h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v13.586zM11 8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0 3a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0 3a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"/></svg>
        <p className='text-white font-normal'>Feed Back</p>
    </div>}>
            {close => <FormFeedBack close={close}/>}
        </Popup>
    </div>
  )
}

export default ModelFeedBack