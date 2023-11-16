import React from "react";
import style from "@/styles/explore/index.module.scss";

const SearchField = () => {
  return (
    <div className={`container-fluid ${style.search}`}>
      <div className="container" id={style.con}>
        <h1>Rockets</h1>
        <div className={style.form}>
          <input type="text" placeholder="Search rocket" />
          <div>
            <select name="" id="">
              <option value="">Status</option>
            </select>
            <select name="" id="">
              <option value="">Type</option>
            </select>
            <select name="" id="">
              <option value="">Original Launch</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
