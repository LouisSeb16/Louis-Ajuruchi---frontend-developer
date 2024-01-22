"use client";
import dynamic from "next/dynamic";
import React from "react";

const DynamicPage = dynamic(
  async () => await import("@/components/features/explore"),
  { ssr: false }
);

const Explore = () => {
  return (
    <>
      <DynamicPage />
    </>
  );
};

export default Explore;
