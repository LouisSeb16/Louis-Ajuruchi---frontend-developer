import React, { useState } from "react";
import style from "@/styles/explore/index.module.scss";
import * as MdIcons from "react-icons/md";
import Modal from "./Modal";
import { useSearchParams } from "next/navigation";
import AppPagination from "@/components/shared/pagination";
import {
  generateTotalPages,
  streamlineItemsToDisplay,
} from "@/components/shared/pagination/utils";
import { useRocketHooks } from "@/sdk/hooks";

const Products = () => {
  const {
    store: { openViewRocketModal, filteredRockets },
    action: { setOpenViewRocketModal },
  } = useRocketHooks();

  const [rocketId, setRocketId] = useState<any>("");
  const handleModal = (id: any) => {
    setRocketId(id);
    setOpenViewRocketModal(true);
  };

  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = generateTotalPages(filteredRockets);
  const paginatedData = streamlineItemsToDisplay(currentPage, filteredRockets);

  return (
    <>
      <div className={`container ${style.products}`}>
        <div className="row">
          {filteredRockets.length > 0 &&
            paginatedData.map((data: any, index: any) => {
              let mainData = rocketId === data.rocket_id && data;
              return (
                <>
                  {openViewRocketModal && mainData && (
                    <Modal
                      setOpenViewRocketModal={setOpenViewRocketModal}
                      mainData={mainData}
                    />
                  )}
                  <div className="col-md-4" key={index}>
                    <div
                      className={style.rocketCard}
                      onClick={() => handleModal(data.rocket_id)}
                    >
                      <img src={`${data.flickr_images[0]}`} alt="" />
                      <div id={style.details}>
                        <h2>{data.rocket_name}</h2>
                        <p>{data.country}</p>
                        <div>
                          <p>{data.active ? "Active" : "Inactive"}</p>
                          <span>
                            <MdIcons.MdOutlineStar id={style.icon} />{" "}
                            {data.success_rate_pct}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>

        {filteredRockets && filteredRockets?.length > 0 && (
          <AppPagination totalPages={totalPages} />
        )}
      </div>
    </>
  );
};

export default Products;
