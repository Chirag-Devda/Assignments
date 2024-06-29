import { image1, image2, image3 } from "../../../assets";
import { Lending } from "../../../images";

const TopProducts = () => {
  return (
    <div className="max-w-[1280px] mx-auto relative mt-14">
      <h1 className="sm:text-[60px] text-[45px] px-2 font-bold">
        Top Products
      </h1>
      <div className="w-full flex">
        <p className="mt-3 max-w-3xl text-[13px] sm:text-[17px] px-2 leading-[20px] sm:leading-[30px] text-slate-500">
          Explore our Top Products! Featuring the hottest items our customers
          love, this section showcases must-haves from cutting-edge electronics
          to chic fashion. Shop now and stay ahead of the trends!
        </p>
      </div>
      <div className="h-[auto] lg:h-[60vh] pb-10 mx-auto mt-5 rounded-lg border shadow-lg bg-[#fff]">
        <div className="sm:h-[30vh] h-[50vh] bg-blue-gray-100 rounded-lg"></div>
        <div className="flex justify-center sm:justify-between flex-wrap gap-5 sm:-mt-24 -mt-80 px-5">
          <div className="Card sm:h-[200px] h-[170px] w-full sm:w-[250px]">
            <img
              className="h-full w-full rounded-xl cursor-pointer  shadow-lg shadow-slate-600 sm:hover:scale-110 sm:duration-500"
              src={image1}
              alt="Image"
            />
          </div>
          <div className="Card h-[200px] w-full sm:w-[250px]">
            <img
              className="h-full w-full rounded-xl cursor-pointer  shadow-lg shadow-slate-600 sm:hover:scale-110 sm:duration-500"
              src={image2}
              alt="Image"
            />
          </div>
          <div className="Card h-[200px] w-full sm:w-[250px]">
            <img
              className="h-full w-full rounded-xl cursor-pointer shadow-lg shadow-slate-600  sm:hover:scale-110 sm:duration-500"
              src={image3}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
