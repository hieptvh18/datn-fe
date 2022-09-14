import React from "react";
import { Outlet } from "react-router-dom";
import FooterIndex from "../../components/FooterIndex";
import HeaderIndex from "../../components/HeaderIndex";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles)
const WebsiteLayout = () => {
  return (
    <div className={cx('wrapper-layout')}>
      <header className={cx('wrapper-main-header')}>
        <HeaderIndex />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterIndex />
      </footer>
    </div>
  );
};

export default WebsiteLayout;
