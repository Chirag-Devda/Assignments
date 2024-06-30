import { useEffect } from "react";
import { useState } from "react";
import { MdOutlineChevronLeft } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";
import { useLocation } from "react-router-dom";

import {
  productsPageSliderImages,
  sliderImages as homePageImages,
} from "../../../constants";

const Slider = () => {
  const location = useLocation();

  const [sliderImages, setsliderImages] = useState([]);
  const [currentImage, setcurrentImage] = useState(0);

  useEffect(() => {
    if (location.pathname === "/products") {
      setsliderImages(productsPageSliderImages);
    } else if (location.pathname === "/dashboard") {
      setsliderImages(homePageImages);
    }
  }, []);

  const previous = () => {
    const firstImage = currentImage === 0;
    const newImage = firstImage ? sliderImages.length - 1 : currentImage - 1;
    setcurrentImage(newImage);
  };
  const next = () => {
    const lastImage = currentImage === sliderImages.length - 1;
    const newImage = lastImage ? 0 : currentImage + 1;
    setcurrentImage(newImage);
  };

  const goToSlide = (slideIndex) => {
    setcurrentImage(slideIndex);
  };

  return (
    <div
      style={{ backgroundImage: `url(${sliderImages[currentImage]?.image})` }}
      className="group relative h-[30vh] w-screen lg:h-[70vh]"
    >
      <div
        style={{
          backgroundImage: `url(${sliderImages[currentImage]?.image})`,
          backgroundSize: "70%",
        }}
        className="h-full w-full bg-cover bg-center bg-no-repeat backdrop-blur-2xl duration-500"
      ></div>

      {/* Left Arrow */}
      <div className="absolute left-[10%] top-1/2 hidden -translate-x-0 -translate-y-[50%] text-2xl hover:cursor-pointer group-hover:block">
        <MdOutlineChevronLeft size={50} onClick={previous} />
      </div>

      {/* Right Arrow */}
      <div className="absolute right-[10%] top-1/2 hidden -translate-x-0 -translate-y-[50%] cursor-pointer text-2xl group-hover:block">
        <MdOutlineChevronRight
          size={50}
          onClick={() => {
            next();
          }}
        />
      </div>

      {/* goToSlide */}
      <div className="flex justify-center gap-1 py-2">
        {sliderImages.map((slide, slideIndex) => (
          <VscCircleFilled
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer text-gray-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
