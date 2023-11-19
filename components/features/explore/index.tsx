import React from "react";
import style from "@/styles/explore/index.module.scss";
import SearchField from "./SearchField";
import Products from "./Products";

const ExploreComponent = (props: any) => {
  return (
    <div className={`container-fluid ${style.explore}`}>
      <SearchField {...props}/>
      <Products {...props} />
    </div>
  );
};

export default ExploreComponent;
