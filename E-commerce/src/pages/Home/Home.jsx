import { Link } from "react-router-dom";

import { Navbar } from "../../components";
import { Lending } from "../../images";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative h-[calc(100vh-72px)] w-screen overflow-hidden">
        <img
          src={Lending}
          alt="Lending Image"
          className="h-full w-full object-center"
        />
        <Link to="/dashboard">
          <button className="absolute bottom-16 left-[36%] rounded-md bg-[#ff0044] px-5 py-3 text-white hover:scale-125 hover:duration-75 sm:left-[48%]">
            Shop Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
