import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import FooterIndex from "../../components/FooterIndex";
import HeaderIndex from "../../components/HeaderIndex";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import ModalBooking from "../../components/ModalBooking/Modal";

const cx = classNames.bind(styles)
const WebsiteLayout = () => {

  return (
    <div className={cx('wrapper-layout')}>
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
    </div>
  );
};

export default WebsiteLayout;
