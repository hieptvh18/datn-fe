import React, { useEffect, useRef } from "react";
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
import { listMenuServices } from "../../feature/MenuServices";
const cx = classNames.bind(styles);


const HeaderIndex = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUser = useSelector(data => data.user.value)
  const menuServices = useSelector(data => data.menuServices.value)
  useEffect(() => {
    dispatch(listMenuServices())
  }, [])
  const menu = menuServices.map(item => {
    return (
      {
        label: item.label,
        items: item.items.map(i => {
          return (
            {
              label: i.label,
              command: (event) => {
                navigate(`${i.link}`)
              }
            }
          )
        })
      }
    )

  })
  const infoAccount = [
    {
      label: 'Thông tin',
      command: (event) => {
        navigate('/')
      },
    },
    {
      label: 'Bệnh án',
      command: (event) => {
        navigate('/ho-so-benh-nhan')
      },
    }
  ]
  const items = [
    {
      label: "Dịch vụ",
      items: [...menu]
    },
    {
      label: "Về chúng tôi",
      items: [
        {
          label: 'Về chúng tôi',
          command: (event) => {
            navigate('/ve-chung-toi')
          },
        },
        {
          label: 'Đội ngũ nhân viên',
          command: (event) => {
            navigate('/doi-ngu-nhan-vien')
          },
        },
        {
          label: 'Trang thiết bị',
          command: (event) => {
            navigate('/trang-thiet-bi')
          },
        },
      ]
    },
    {
      label: "Bài viết",
      command: (event) => {
        navigate('/tin-tuc')
      }
    },
    {
      label: "Khách hàng",
      items: [
        {
          label: 'Hướng dẫn khách hàng',
          command: (event) => {
            navigate('/huong-dan-khach-hang')
          },
        },
        {
          label: 'Câu hỏi thường gặp',
          command: (event) => {
            navigate('/cau-hoi-thuong-gap')
          },
        },
        {
          label: 'Đánh giá',
          command: (event) => {
            navigate('/danh-gia')
          },
        },
      ]
    }
  ];
  return (
    <div className={cx("wrapper-header", 'w-default')}>
      <div className={cx("wrapper-header1")}>
        <div className={cx("wrapper-main-logo")}>
          <NavLink to="/">
            <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663124409/denticare-logo_umln3a.png" width="170px" />
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
      <div className='flex justify-content-between'>
        <Menubar className="wrapper-menu" model={items} />
        {isUser.length === 0 ? <Popup trigger={<Button label="Đăng nhập" className="p-button-link text-2xl" />} modal
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
