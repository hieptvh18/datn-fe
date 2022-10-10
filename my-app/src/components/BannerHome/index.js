import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const BannerHome = (props) => {
  return (
    <div
      style={{ background: `url(${props.bgImg})` }}
      className="wrapper-banner-home bg-img"
      key={props.key}
    >
      <div className="w-default h-full m-auto flex align-items-center">
        <div className="content-banner-home">
          <h3 className="text-7xl font-normal c-primary">
            {props.title}
          </h3>
          <h1 className="cs-text-banne-home line-height-1">
            {props.subTitle}
          </h1>
          <div className="flex mt-8 res-flex-row">
            {props.item.map((item, index) =>
              <div className="flex column-gap-5" key={index}>
                <div className="img-icon-banner-home">
                  <img src={item.icon} width="50px" />
                </div>
                <div className="">
                  <p className="c-primary1 text-4xl font-medium">{item.title}</p>
                  <p className="text-img-icon-banner-home mt-3 text-500 list-decimal">{item.subTitle}</p>
                </div>
              </div>

            )}
          </div>
          <NavLink to={props.linkPost}>
            <button className="btn-banner-home mt-8">{props.titleBtn}</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
