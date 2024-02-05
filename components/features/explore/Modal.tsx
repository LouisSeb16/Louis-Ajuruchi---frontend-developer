import React from "react";
import style from "@/styles/explore/index.module.scss";
import Link from "next/link";

const Modal = ({ setOpenViewRocketModal, mainData }: any) => {

  return (
    <div className={style.modal}>
      <div className={style.modalChild}>
        <div className="row">
          <div className="col-md-8">
            <h1>{mainData.rocket_name}</h1>
            <p>{mainData.description}</p>
            <div className={style.imgs}>
              {mainData.flickr_images.map((data: any, index: any) => (
                <img src={data} alt="" key={index} />
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <div id={style.details}>
              <p>
                <span>Company: </span>
                {mainData.company}
              </p>
            </div>
            <div id={style.details}>
              <p>
                <span>Country: </span>
                {mainData.country}
              </p>
            </div>
            <div id={style.details}>
              <p>
                <span>Type: </span>
                {mainData.rocket_type}
              </p>
            </div>
            <div id={style.details}>
              <p>
                <span>Success Rate: </span>
                {mainData.success_rate_pct}
              </p>
            </div>
            <div id={style.details}>
              <p>
                <span>Wikipedia: </span>
                <Link href={`${mainData.wikipedia}`}>Visit</Link>
              </p>
            </div>
            <div id={style.details2}>
              <p>Height</p>
              <div>
                <p>
                  <span>Meters: </span> {mainData.height.meters}
                </p>
                <p>
                  <span>Feet: </span> {mainData.height.feet}
                </p>
              </div>
            </div>
            <div id={style.details2}>
              <p>Diameter</p>
              <div>
                <p>
                  <span>Meters: </span> {mainData.diameter.meters}
                </p>
                <p>
                  <span>Feet: </span> {mainData.diameter.feet}
                </p>
              </div>
            </div>
            <div id={style.details2}>
              <p>Mass</p>
              <div>
                <p>
                  <span>Kg: </span> {mainData.mass.kg}
                </p>
                <p>
                  <span>Lb: </span> {mainData.mass.lb}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => setOpenViewRocketModal(false)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
