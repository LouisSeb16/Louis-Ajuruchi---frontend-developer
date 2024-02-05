import React from "react";
import style from "@/styles/explore/index.module.scss";
import SearchField from "./SearchField";
import Products from "./Products";

const ExploreComponent = () => {
  return (
    <>
      <div className={`container-fluid ${style.explore}`}>
        <SearchField/>
        <Products />
      </div>
    </>
  );
};

export default ExploreComponent;
