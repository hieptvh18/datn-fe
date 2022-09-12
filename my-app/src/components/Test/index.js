import React from "react";
import styles from "./Test.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

const Test = () => {
  return <h1 className={cx('title')}>Test</h1>;
};

export default Test;
