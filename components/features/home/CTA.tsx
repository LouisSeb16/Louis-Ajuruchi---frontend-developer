import React from "react";
import style from "@/styles/home/index.module.scss";
import { useRouter } from 'next/navigation';

const CTA = () => {
  const { push } = useRouter();
  return (
    <div className={`container-fluid ${style.cta}`}>
      <div className="container" id={style.con}>
        <h1>{`Launch Your Adventure Today!`}</h1>
        <p>
          {`Ready to make history? Choose from our collection of rockets and
          capsules and make your reservation now. The universe awaits – start
          your journey with us!`}
        </p>

        <button onClick={() => push("/explore")}>GET STARTED</button>
      </div>
    </div>
  );
};

export default CTA;
