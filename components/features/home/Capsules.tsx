import React from "react";
import style from "@/styles/home/index.module.scss";

const Capsules = () => {
  return (
    <div className={`container-fluid ${style.capsules}`}>
      <h6>DISCOVER</h6>
      <div className="container">
        <div className="row">
          <div className="col-md-6" id={style.col}>
            <h1>{`Innovative Design, Unparalleled Performance`}</h1>
            <img src="/images/home/shuttle1.jpg" alt="" />
          </div>
          <div className="col-md-6">
            <img src="/images/home/shuttle2.jpg" alt="" />
            <p>
              {`Our rockets and capsules are engineered for precision and speed.
              Glide through the exosphere with cutting-edge technology and
              futuristic design, setting a new standard in space exploration.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capsules;
