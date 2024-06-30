import { Links } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-[#2874f0] mt-10">
      <div className="max-w-[1280px] mx-auto p-7 flex lg:flex-row flex-col lg:justify-evenly">
        <div className="Details flex sm:flex-row flex-col sm:justify-evenly gap-7 lg:gap-7">
          {Links.map((Link, i) => (
            <div key={i}>
              <h1 className="mb-2 font-bold text-white">{Link.title}</h1>
              <ul className="text-white font-medium text-[16px]">
                {Link.text.map((t) => (
                  <li>{t}</li>
                ))}
              </ul>
            </div>
          ))}
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
