import React from "react";
import style from "@/styles/home/index.module.scss";
import { useRouter } from 'next/navigation';

const Hero = () => {
  const { push } = useRouter();

  return (
    <div className={`container-fluid ${style.hero}`}>
      <div className={style.movingStars}></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8" id={style.col}>
            <h1>
              {`Experience the Future: Explore Our Lineup of Space Rockets and
              Capsules`}
            </h1>
            <p>
              {`Explore the cosmos with our stunning collection of rockets and
              capsules! Immerse yourself in the extraordinary world of space
              exploration as we showcase an array of meticulously crafted
              spacecraft. From iconic rocket launches to intricate space
              capsules, our website offers a visual feast for enthusiasts and
              curious minds alike.`}
            </p>
            <button onClick={() => push("/explore")}>SEARCH CAPSULE</button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
