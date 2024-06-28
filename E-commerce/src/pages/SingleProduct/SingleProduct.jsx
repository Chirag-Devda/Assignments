import { FaTruckFast } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

import { Navbar, Services } from "../../components";
import { image2 } from "../../assets";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  return (
    <>
      <Navbar cart={true} home={true} products={true} Login={true} />
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img className="h-full object-contain" src={image2} alt="Product" />
          </div>
          <div className="bg-white p-6 flex flex-col gap-5">
            <h2 className="text-5xl font-medium">i Phone x</h2>
            <p>4.8</p>
            <p>58 Views</p>
            <p className="text-gray-500 text-lg">
              MRP: <del className="">50000</del>
            </p>
            <p className="text-purple-700 font-bold">
              Deal of the Day: 6,00,000
            </p>
            <p className="text-[14px] sm:text-[18px] text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla
              iure recusandae, obcaecati delectus vitae eveniet vero sapiente
              aliquid consequuntur ipsum possimus commodi, ex dolorum numquam
              cum modi libero rem alias. Sit rerum saepe culpa possimus eveniet
              alias cum est! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dolorum debitis iste quod quam consectetur nihil, molestiae
              saepe. Laborum at ipsum odit accusamus, praesentium dicta ullam
              ipsam rem, aliquam, sit delectus?
            </p>
            <div className="flex justify-start gap-12 border-b-2 pb-1">
              <Services Icon={FaTruckFast} text="Free Delivery" />
              <Services Icon={FaClockRotateLeft} text="30 Days Replacement" />
              <Services Icon={FaTruckFast} text="LootLo Delivery" />
              <Services Icon={GiConfirmed} text="2 Years Warranty" />
            </div>
            <p>
              Available: <b>In stock</b>
            </p>
            <p>
              Brand: <b>apple</b>
            </p>

            <div className="flex justify-between px-5">
              <div className="">
                <button className="bg-[#2874f0] py-2 px-2 rounded-lg">
                  <FaMinus />
                </button>
                <span className="bg-slate-200 px-5 py-1 mx-3 rounded-lg">
                  1
                </span>
                <button className="bg-[#2874f0] py-2 px-2 rounded-lg">
                  <FaPlus />
                </button>
              </div>
              <Link to="/cart">
                <button className="bg-[#2874f0] text-white font-bold px-5 py-2 rounded-lg flex items-center gap-3">
                  <FaCartPlus size={20} />
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
