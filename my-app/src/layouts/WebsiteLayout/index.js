import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import FooterIndex from "../../components/FooterIndex";
import HeaderIndex from "../../components/HeaderIndex";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import ModalBooking from "../../components/ModalBooking/Modal";
import ScrollToTop from "react-scroll-to-top";
import ModelFeedBack from "../../components/ModelFeedBack";
import ContactMessage from "../../components/ContactMessage";
import { useDispatch, useSelector } from "react-redux";
import { websettings } from "../../feature/WebsettingSlice";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const WebsiteLayout = () => {

  const websetting = useSelector((data) => data.Websetting.value)
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(websettings())
  },[])
  return (
    <div>
      <header>
        <HeaderIndex />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterIndex />
      </footer>
      <ModalBooking />
      <ScrollToTop smooth />
      <ModelFeedBack />
      <ContactMessage/>
      <ToastContainer autoClose={1200}/>
    </div>
  );
};

export default WebsiteLayout;
