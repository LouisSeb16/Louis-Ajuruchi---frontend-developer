import React from "react";
import style from "@/styles/explore/index.module.scss";
import SearchField from "./SearchField";
import Products from "./Products";
import { useRocketHooks } from "@/sdk/hooks";

const ExploreComponent = () => {
  return (
    <>
      <div className={`container-fluid ${style.explore}`}>
        <SearchField {...useRocketHooks()} />
        <Products {...useRocketHooks()} />
      </div>
    </>
  );
};

export default ExploreComponent;
