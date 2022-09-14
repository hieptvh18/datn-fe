import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { Menubar } from "primereact/menubar";
const cx = classNames.bind(styles);

const items = [
  {
    label: "HOME",
    items: [
      {
        label: "New",
        icon: "pi pi-fw pi-plus",
        items: [
          {
            label: "Bookmark",
            icon: "pi pi-fw pi-bookmark",
          },
          {
            label: "Video",
            icon: "pi pi-fw pi-video",
          },
        ],
      },
      {
        label: "Delete",
        icon: "pi pi-fw pi-trash",
      },
      {
        separator: true,
      },
      {
        label: "Export",
        icon: "pi pi-fw pi-external-link",
      },
    ],
  },
  {
    label: "SERVICES",
    items: [
      {
        label: "Left",
        icon: "pi pi-fw pi-align-left",
      },
      {
        label: "Right",
        icon: "pi pi-fw pi-align-right",
      },
      {
        label: "Center",
        icon: "pi pi-fw pi-align-center",
      },
      {
        label: "Justify",
        icon: "pi pi-fw pi-align-justify",
      },
    ],
  },
  {
    label: "CONTACT",
    items: [
      {
        label: "New",
        icon: "pi pi-fw pi-user-plus",
      },
      {
        label: "Delete",
        icon: "pi pi-fw pi-user-minus",
      },
      {
        label: "Search",
        icon: "pi pi-fw pi-users",
        items: [
          {
            label: "Filter",
            icon: "pi pi-fw pi-filter",
            items: [
              {
                label: "Print",
                icon: "pi pi-fw pi-print",
              },
            ],
          },
          {
            icon: "pi pi-fw pi-bars",
            label: "List",
          },
        ],
      },
    ],
  },
  {
    label: "PROFILE",
    items: [
      {
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Save",
            icon: "pi pi-fw pi-calendar-plus",
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
      {
        label: "Archieve",
        icon: "pi pi-fw pi-calendar-times",
        items: [
          {
            label: "Remove",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
    ],
  },
  {
    label: "NEWS",
  },
];


const HeaderIndex = () => {
  return (
    <div className={cx("wrapper-header")}>
      <div className={cx("wrapper-header1")}>
        <div className={cx("wrapper-main-logo")}>
          <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663124409/denticare-logo_umln3a.png" />
        </div>
        <div className={cx("wrapper-timeline")}>
          <div className={cx("wrapper-timer-wroking")}>
              <div className={cx("timer-img")}>
                  <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663127402/image_1_tpkkww.png"/>
              </div>
              <div className={cx("timer-wrapper-text")}>
                  <p className={cx("timer-text1")}>415-205-5550</p>
                  <p className={cx("timer-text2")}>24/7 Emergency Phone</p>
              </div>
          </div>
          <div className={cx("wrapper-timer-wroking")}>
              <div className={cx("timer-img")}>
                  <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663127408/image_2_nat93t.png"/>
              </div>
              <div className={cx("timer-wrapper-text")}>
                  <p className={cx("timer-text1")}>Monday - Friday</p>
                  <p className={cx("timer-text2")}>9:00 AM - 9:00 PM</p>
              </div>
          </div>
        </div>
      </div>
      <div className={cx("wrapper-header2")}>
        <Menubar className={cx("wrapper-menu")} model={items} />
      </div>
    </div>
  );
};

export default HeaderIndex;
