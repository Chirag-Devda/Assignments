import { useState } from "react";
import { sliderImages } from "../../../constants";
import { MdOutlineChevronLeft } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";

const Slider = () => {
  const [currentImage, setcurrentImage] = useState(0);

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
      style={{ backgroundImage: `url(${sliderImages[currentImage].image})` }}
      className="w-screen h-[30vh] lg:h-[70vh]  relative group"
    >
      <div
        style={{
          backgroundImage: `url(${sliderImages[currentImage].image})`,
          backgroundSize: "70%",
        }}
        className=" w-full h-full  backdrop-blur-2xl bg-cover bg-center bg-no-repeat duration-500"
      ></div>

      {/* Left Arrow */}
      <div className="absolute hidden group-hover:block top-1/2 -translate-x-0 -translate-y-[50%] left-[10%] text-2xl hover:cursor-pointer">
        <MdOutlineChevronLeft size={50} onClick={previous} />
      </div>

      {/* Right Arrow */}
      <div className="absolute hidden group-hover:block top-1/2 -translate-x-0 -translate-y-[50%]  right-[10%] text-2xl cursor-pointer">
        <MdOutlineChevronRight
          size={50}
          onClick={() => {
            next();
          }}
        />
      </div>

      {/* goToSlide */}
      <div className="flex justify-center py-2 gap-1">
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
