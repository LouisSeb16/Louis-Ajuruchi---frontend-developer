import React from "react";
import style from "@/styles/home/index.module.scss";
import { homePage_data } from "./data";

const Capsules = () => {
  const { capsules } = homePage_data;
  return (
    <div className={`container-fluid ${style.capsules}`}>
      <h6>DISCOVER</h6>
      <div className="container">
        <div className="row">
          <div className="col-md-6" id={style.col}>
            <h1>{capsules.title}</h1>
            <img src="/images/home/shuttle1.jpg" alt="" />
          </div>
          <div className="col-md-6">
            <img src="/images/home/shuttle2.jpg" alt="" />
            <p>{capsules.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capsules;
