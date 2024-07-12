import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { PiUploadSimpleFill } from "react-icons/pi";

import { PreviewLayout } from "../../components/index.js";
import PreviewImage from "./components/PreviewImage.jsx";
import PreviewAmenities from "./components/PreviewAmenities.jsx";
import PreviewDescription from "./components/PreviewDescription.jsx";
import PreviewRatings from "./components/PreviewRatings.jsx";
import SimilarProperty from "./components/SimilarProperty.jsx";
import About from "./components/About.jsx";
import InquiryForm from "./components/InquiryForm.jsx";

const Preview = () => {
  return (
    <PreviewLayout>
      <main className="w-full pb-14">
        <div className="container mx-auto">
          <div className="flex gap-14 py-14">
            <div className="left flex-1">
              <div className="flex gap-[10px]">
                <div>
                  <h1 className="address w-[80%] text-wrap text-[26px] font-normal">
                    1 BHK Flat / Apartment For Rent in Gokul Village Chs 2 (545
                    Sq.ft.)
                  </h1>
                  <p className="mt-2 flex gap-2">
                    <FaLocationDot />
                    Gokul village chs 2 Shanti Park, near st. Xaviours High
                    school
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
                    &#x20b9; 20000 / Month
                  </h1>
                  <p className="text-center text-base">(Rent/Negotiable)</p>
                </div>
                <div className="w-fit p-5">
                  <h1 className="text-[25px] font-semibold">&#x20b9; 20000</h1>
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
