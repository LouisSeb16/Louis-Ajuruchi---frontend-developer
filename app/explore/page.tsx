"use client";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Loading from "./loading";

const DynamicPage = dynamic(
  async () => await import("@/components/features/explore"),
  { ssr: false }
);

const Explore = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <DynamicPage />
      </Suspense>
    </>
  );
};

export default Explore;
