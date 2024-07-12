import React from "react";
import { PropertyCard } from "../../../components";

const SimilarProperty = () => {
  return (
    <div className="space-y-[60px] bg-cream p-10">
      <h1 className="text-[32px] font-normal">
        Similar Properties In Mira road
      </h1>
      <div className="flex flex-wrap gap-5">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
};

export default SimilarProperty;
