import React from "react";
import style from "@/styles/explore/index.module.scss";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";

const Products = () => {
  return (
    <div className={`container ${style.products}`}>
      <div className="row">
        <div className="col-md-4">
          <div className={style.rocketCard}>
            <div id={style.imgDiv}>
              <BsIcons.BsFillRocketTakeoffFill />
            </div>
            <div id={style.details}>
              <h2>Rocket Name</h2>
              <p>Country</p>
              <div>
                <p>Active</p>
                <span>
                  <MdIcons.MdOutlineStar id={style.icon} /> 40
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={style.rocketCard}>
            <div id={style.imgDiv}>
              <BsIcons.BsFillRocketTakeoffFill />
            </div>
            <div id={style.details}>
              <h2>Rocket Name</h2>
              <p>Country</p>
              <div>
                <p>Active</p>
                <span>
                  <MdIcons.MdOutlineStar id={style.icon} /> 40
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={style.rocketCard}>
            <div id={style.imgDiv}>
              <BsIcons.BsFillRocketTakeoffFill />
            </div>
            <div id={style.details}>
              <h2>Rocket Name</h2>
              <p>Country</p>
              <div>
                <p>Active</p>
                <span>
                  <MdIcons.MdOutlineStar id={style.icon} /> 40
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
