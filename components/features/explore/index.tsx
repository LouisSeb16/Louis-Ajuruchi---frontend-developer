import React from "react";
import style from "@/styles/explore/index.module.scss";
import SearchField from "./SearchField";
import Products from "./Products";
import AppSeo from "@/components/shared/seo";
import { useRocketHooks } from "@/sdk/hooks";

const ExploreComponent = () => {
  return (
    <>
      <AppSeo />
      <div className={`container-fluid ${style.explore}`}>
        <SearchField {...useRocketHooks()} />
        <Products {...useRocketHooks()} />
      </div>
    </>
  );
};

export default ExploreComponent;
