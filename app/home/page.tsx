import React, { Suspense } from "react";
import Loading from "./loading";
import HomePageComponents from "@/components/features/home";

const LandingPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HomePageComponents/>
    </Suspense>
  );
};

export default LandingPage;
