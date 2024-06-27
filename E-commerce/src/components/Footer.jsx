import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2874f0] mt-10">
      <div className="max-w-[1280px] mx-auto p-7 flex lg:flex-row flex-col lg:justify-evenly">
        <div className="Details flex sm:flex-row flex-col sm:justify-evenly gap-7 lg:gap-7">
          <div className="About">
            <h1 className="mb-2 font-bold text-white">Get to Know Us </h1>
            <ul className="text-white font-medium text-[16px]">
              <li>About US</li>
              <li>Careers</li>
              <li>Press Releases</li>
            </ul>
          </div>
          <div className="Contact">
            <h1 className="mb-2 font-bold text-white">Contact</h1>
            <ul className="text-white font-medium text-[16px]">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="makeMoney">
            <h1 className="mb-2 font-bold text-white">Make Money with Us</h1>
            <ul className="text-white font-medium text-[16px]">
              <li>Sell on LootLo</li>
              <li>Sell under LootLo Accelerator</li>
              <li>Protect and Build Your Brand</li>
              <li>LootLo Global Selling</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by LootLo</li>
              <li>Advertise Your Products</li>
              <li>LootLo Pay on Merchants</li>
            </ul>
          </div>
        </div>
        <div className="Newsletter sm:mt-0 mt-3">
          <h1 className="mb-2 font-bold text-white">NEWSLETTER</h1>
          <form>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white font-medium">
                Enter Your Email
              </label>
              <div>
                <input
                  type="email"
                  placeholder="username@site.com"
                  className="rounded-l-lg px-3 py-2"
                />
                <button className="bg-black text-[#fff] rounded-r-lg px-3 py-2 border-none">
                  Subscrib
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
