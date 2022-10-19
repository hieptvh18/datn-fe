import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import FooterIndex from "../../components/FooterIndex";
import HeaderIndex from "../../components/HeaderIndex";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import ModalBooking from "../../components/ModalBooking/Modal";
import ScrollToTop from "react-scroll-to-top";
import ModelFeedBack from "../../components/ModelFeedBack";

const cx = classNames.bind(styles)
const WebsiteLayout = () => {

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
    </div>
  );
};

export default WebsiteLayout;
