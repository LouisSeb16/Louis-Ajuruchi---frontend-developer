"use client";
import ExploreComponent from "@/components/features/explore";
import AppSeo from "@/components/shared/seo";
import { useRocketHooks } from "@/sdk/hooks";
import React from "react";

const Explore = () => {
  return (
    <>
      <AppSeo />
      <ExploreComponent {...useRocketHooks()} />
    </>
  );
};

export default Explore;
