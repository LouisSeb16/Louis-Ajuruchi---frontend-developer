import React from "react";
import style from "@/styles/home/index.module.scss";
import { useRouter } from "next/navigation";
import { homePage_data } from "./data";

const Hero = () => {
  const { push } = useRouter();
  const { hero } = homePage_data;

  return (
    <div className={`container-fluid ${style.hero}`}>
      <div className={style.movingStars}></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8" id={style.col}>
            <h1>{hero.title}</h1>
            {hero.description}
            <button onClick={() => push("/explore")}>SEARCH CAPSULE</button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
