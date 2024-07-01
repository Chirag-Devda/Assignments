import { Links } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-10 bg-[#2874f0]">
      <div className="mx-auto flex max-w-[1280px] flex-col p-3 lg:flex-row lg:justify-evenly">
        <div className="Details flex flex-col gap-7 sm:flex-row sm:justify-evenly lg:gap-7">
          {Links.map((Link, i) => (
            <div key={i}>
              <h1 className="mb-2 font-bold text-white">{Link.title}</h1>
              <ul className="text-[16px] font-medium text-white">
                {Link.text.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="Newsletter mt-3 sm:mt-0">
          <h1 className="mb-2 font-bold text-white">NEWSLETTER</h1>
          <form>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-white">
                Enter Your Email
              </label>
              <div className="flex">
                <input
                  type="email"
                  placeholder="username@site.com"
                  className="w-3/5 rounded-l-lg py-[0.2rem] pl-3 sm:w-full sm:px-3 sm:py-2"
                />
                <button className="rounded-r-lg border-none bg-black px-3 py-[0.2rem] text-[#fff] sm:py-2">
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
