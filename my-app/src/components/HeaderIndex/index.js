import React, { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { Menubar } from "primereact/menubar";
import { Popup } from "reactjs-popup";
import LoginAccount from "../LoginAccount";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../feature/AuthSlice";
import { SplitButton } from 'primereact/splitbutton';
import { Navigate, NavLink, useNavigate } from "react-router-dom"
const cx = classNames.bind(styles);


const HeaderIndex = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUser = useSelector(data => data.user.value.user)
  const infoAccount = [
    {
      label: 'Thông tin',
      url: '/account/info'
    },
    {
      label: 'Bệnh án',
      url: '/account/info'
    }
  ]
  const items = [
    {
      label: 'Trang chủ',
      command: (event) => {
        navigate('/')
      }
    },
    {
      label: "Về chúng tôi",
      command: (event) => {
        navigate('/about')
      }
    },
    {
      label: "Bài viết",
      command: (event) => {
        navigate('/news')
      }
    },
    {
      label: "Bệnh án",
      command: (event) => {
        navigate('/infoaccount')
      }
    }
  ];
  
  return (
    <div className={cx("wrapper-header")}>
      <div className={cx("wrapper-header1")}>
        <div className={cx("wrapper-main-logo")}>
          <NavLink to="/">
            <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663124409/denticare-logo_umln3a.png" width="170px"/>
          </NavLink>
        </div>
        <div className={cx("wrapper-timeline")}>
          <div className={cx("wrapper-timer-wroking")}>
            <div className={cx("timer-img")}>
              <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1664338250/phone_hospital_g3ew1o.png" width="40px" />
            </div>
            <div className={cx("timer-wrapper-text")}>
              <p className={cx("timer-text1")}>415-205-5550</p>
              <p className={cx("timer-text2")}>24/7 Emergency Phone</p>
            </div>
          </div>
          <div className={cx("wrapper-timer-wroking")}>
            <div className={cx("timer-img")}>
              <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1664338205/clock_y7w724.png" width="40px" />
            </div>
            <div className={cx("timer-wrapper-text")}>
              <p className={cx("timer-text1")}>Monday - Friday</p>
              <p className={cx("timer-text2")}>9:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-content-between align-items-center'>
        <Menubar className="wrapper-menu" model={items} />
        {isUser == null ? <Popup trigger={<Button label="Đăng nhập" className="p-button-link text-2xl" />} modal
          nested>
          {close => (
            <div className="modal" >
              <button className={cx("close")} onClick={close}>
                <i className="pi pi-times" style={{ 'fontSize': '20px', }}></i>
              </button>
              <LoginAccount />
              <br />
            </div>
          )}
        </Popup> : <div className="flex align-items-center">
          <SplitButton label={isUser.username} model={infoAccount} className="p-button-text"></SplitButton>
          <Button label="Đăng xuất" onClick={() => dispatch(Logout())} className="p-button-link text-2xl" />
        </div>}

      </div>
    </div>
  );
};

export default HeaderIndex;
