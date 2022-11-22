import React, { useEffect, useRef, useState } from "react";
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
import logo from "../../assets/image/logo.png"
const cx = classNames.bind(styles);


const HeaderIndex = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [change, setChange] = useState(false)
  const isUser = JSON.parse(localStorage.getItem('user'))
  const menuServices = useSelector(data => data.menuServices.value)
  useEffect(() => {
    dispatch(listMenuServices())
  }, [change])
  const menu = menuServices.map(item => {
    if(item.parent_id === 0){
      return (
        {
          label: item.service_name,
          items:
            menuServices.map(i => {
              if(i.parent_id === item.id){
                return {
                  label: i.service_name,
                  command: (event) => {
                    navigate('/new/abc')
                  },
                }
              }
              return false
            })
        }
      )
    }
    return false
  });
  const menu1 = menu.map(i => {
    if (i){
      return ({
        label: i.label,
        items: i.items.filter(e => e !== false)
      })
    }
    return false
  })
  const menu2 = menu1.filter(i => i !== false)
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
      items: [...menu2]
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
            <img src={logo} style={{ width: "150px" }} />
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
        {!isUser ? <Popup trigger={<Button label="Đăng nhập" className="p-button-link text-2xl" />} modal
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
          <SplitButton label={isUser?.username} model={infoAccount} className="p-button-text"></SplitButton>
          <Button label="Đăng xuất" onClick={() => {
            setChange(true)
            dispatch(Logout())
          }} className="p-button-link text-2xl" />
        </div>}
      </div>
    </div>
  );
};

export default HeaderIndex;
