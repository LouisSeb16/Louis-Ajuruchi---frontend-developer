import React from "react";
import style from "@/styles/home/index.module.scss";
import { useRouter } from "next/navigation";
import { homePage_data } from "./data";

const CTA = () => {
  const { push } = useRouter();
  const { cta } = homePage_data;

  return (
    <div className={`container-fluid ${style.cta}`}>
      <div className="container" id={style.con}>
        <h1>{cta.title}</h1>
        {cta.description}
        <button onClick={() => push("/explore")}>GET STARTED</button>
      </div>
    </div>
  );
};

export default CTA;
