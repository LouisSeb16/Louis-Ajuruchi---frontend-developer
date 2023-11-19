import React, { Suspense } from "react";
import Loading from "./loading";
import HomePageComponents from "@/components/features/home";
import AppSeo from "@/components/shared/seo";

const LandingPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AppSeo />
      <HomePageComponents/>
    </Suspense>
  );
};

export default LandingPage;
