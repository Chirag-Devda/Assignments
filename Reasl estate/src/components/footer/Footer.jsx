import { MdLanguage } from "react-icons/md";
import { PiCurrencyInrBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="h-[442px] w-full bg-[#122B49]">
      <div className="container relative mx-auto h-full px-5">
        <div className="flex h-[70%] items-end gap-20">
          <div className="mt-10 self-start">
            <img
              src="../src/assets/images/logo.png"
              alt="Dylan Estate"
              className="h-[100px] w-[225px]"
            />
          </div>
          <div className="flex gap-10 text-white">
            <ul className="flex flex-col gap-[18px]">
              <li>HOME</li>
              <li>PROPERTIES</li>
              <li>LIST YOUR PROPERTY</li>
              <li>SAVED SEARCHES</li>
            </ul>
            <ul className="flex flex-col gap-[18px]">
              <li>ABOUT MIRA ROAD</li>
              <li>EMI CALCULATOR</li>
              <li>TESTAMONIALS</li>
              <li>EXPLORE NEIGHBORHOOD</li>
            </ul>
            <ul className="flex flex-col gap-[18px]">
              <li>ABOUT US</li>
              <li>CONTACT US</li>
              <li>FAQ'S</li>
              <li>EXPLORE NEIGHBORHOOD</li>
            </ul>
          </div>
          <div className="flex w-1/5 flex-col gap-7 text-white">
            <div>
              <h1 className="text-xl font-semibold">CONTACT US</h1>
              <p>
                B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5,
                Shanti{" "}
              </p>
            </div>
            <div>
              <h1 className="text-xl font-semibold">OFFICE HOURS</h1>
              <p>
                B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5,
                Shanti
              </p>
            </div>
          </div>
        </div>
        <hr className="my-10 h-0.5 bg-blue-gray-300" />
        <div className="flex justify-between text-white">
          <p className="">
            © 2024 Dylan Estates. All rights reserved. Dylan Estates- Your
            Neighborhood Experts Privacy Policy | Terms & Conditions 
          </p>
          <div className="flex gap-5">
            <b className="flex items-center underline">
              <MdLanguage />
              English (In)
            </b>
            <b className="flex items-center underline">
              <PiCurrencyInrBold />
              INR
            </b>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
