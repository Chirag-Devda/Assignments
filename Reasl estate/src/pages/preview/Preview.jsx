import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { PiUploadSimpleFill } from "react-icons/pi";

import { PreviewLayout } from "../../components/index.js";
import {
  About,
  InquiryForm,
  PreviewAmenities,
  PreviewDescription,
  PreviewImage,
  PreviewRatings,
  SimilarProperty,
} from "./components";
import { useDispatch, useSelector } from "react-redux";
import { setLocationData } from "../../features/LocationDetails/LocationDetailSlice.js";
import { setPrice } from "../../features/PriceDetails/PriceDetails.js";

const Preview = () => {
  const propertyLocation = useSelector(
    (state) => state.locationDetails.locationData,
  );
  const propertyDetails = useSelector(
    (state) => state.propertyDetails.formData,
  );
  const priceDetails = useSelector((state) => state.priceDetails.price);

  const dispatch = useDispatch();

  useEffect(() => {
    const propertyLocation = localStorage.getItem("propertyLocation");
    const priceDetails = localStorage.getItem("propertyPrice");
    if (propertyLocation) {
      dispatch(setLocationData(JSON.parse(propertyLocation)));
      dispatch(setPrice(JSON.parse(priceDetails)));
    }
  }, []);
  return (
    <PreviewLayout>
      <main className="w-full pb-14">
        <div className="container mx-auto">
          <div className="flex gap-14 py-14">
            <div className="left flex-1">
              <div className="flex gap-[10px]">
                <div>
                  <h1 className="address w-[80%] text-wrap text-[26px] font-normal">
                    <span>{propertyDetails.propertyBhk}</span> / Apartment For
                    <span> {propertyDetails.propertyFor}</span> in{" "}
                    {propertyLocation.societyname} (
                    {propertyDetails.propertyCarpetArea} Sq.ft.)
                  </h1>
                  <p className="mt-2 flex gap-2">
                    <FaLocationDot />
                    {propertyLocation.societyname}
                    {propertyLocation.streetname} {propertyLocation.areaname}(
                    {propertyLocation.cityname})
                  </p>
                </div>
                <div className="flex items-end gap-6">
                  <FaRegHeart size={20} />
                  <PiUploadSimpleFill size={20} />
                </div>
              </div>
              <PreviewImage />
              <PreviewAmenities />
              <hr className="my-10 bg-gray" />
              <PreviewDescription />
            </div>
            <div className="right w-[427px]">
              <div className="flex justify-center bg-[#F6EFE6]">
                <div className="w-fit p-5">
                  <h1 className="text-[25px] font-semibold">
                    &#x20b9; {priceDetails.rent} / Month
                  </h1>
                  <p className="text-center text-base">(Rent/Negotiable)</p>
                </div>
                <div className="w-fit p-5">
                  <h1 className="text-[25px] font-semibold">
                    &#x20b9; {priceDetails.security}
                  </h1>
                  <p className="text-center text-base">(Deposite)</p>
                </div>
              </div>
              <InquiryForm />
            </div>
          </div>
          <div className="flex flex-col gap-14">
            <PreviewRatings />
            <SimilarProperty />
            <About />
          </div>
        </div>
      </main>
    </PreviewLayout>
  );
};

export default Preview;
