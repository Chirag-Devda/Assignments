import { Navbar } from "../../components";
import { Lending } from "../../images";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen overflow-hidden h-[calc(100vh-72px)] relative">
        <img
          src={Lending}
          alt="Lending Image"
          className="w-full h-full object-center"
        />
        <button className="bg-[#ff0044] hover:scale-125 hover:duration- text-white absolute bottom-16 left-[48%] px-5 py-3 rounded-md">
          Shop Now
        </button>
      </div>
    </>
  );
};

export default Home;
