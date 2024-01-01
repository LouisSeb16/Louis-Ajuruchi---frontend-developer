import React from "react";
import style from "@/styles/explore/index.module.scss";

const SearchField = (props: any) => {
  const {
    store: { searchRockets, filteredRockets, categories, rockets },
    action: { setRocketSearch },
  } = props;

  return (
    <div className={`container-fluid ${style.search}`}>
      <div className="container" id={style.con}>
        <h1>Rockets</h1>
        {rockets.length > 0 && (
          <div className={style.form}>
            <input
              type="text"
              placeholder="Search rocket"
              value={searchRockets}
              onChange={(e) => setRocketSearch(e.target.value)}
            />
            <div>
              <select
                name=""
                id=""
                onChange={(e) => setRocketSearch(e.target.value)}
              >
                <option value="">Type</option>
                {categories &&
                  categories.type?.map((data: any, index: any) => (
                    <option value={data} key={index}>
                      {data}
                    </option>
                  ))}
              </select>
              <select
                name=""
                id=""
                onChange={(e) => setRocketSearch(e.target.value)}
              >
                <option value="">Country</option>
                {categories &&
                  categories.country?.map((data: any, index: any) => (
                    <option value={data} key={index}>
                      {data}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        )}
        {searchRockets.length > 0 && (
          <p>
            {filteredRockets.length} matching result(s) for {searchRockets}
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchField;
