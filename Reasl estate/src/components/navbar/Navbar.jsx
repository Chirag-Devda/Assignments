import { IoLanguage } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <nav className="bg-darkCream">
      <div className="container mx-auto flex h-[72px] items-center justify-between px-5">
        <div>
          <img className="h-12 w-[105px]" src="/images/logo.png" alt="Logo" />
        </div>
        <div className="flex">
          <ul className="flex gap-8 text-[14px] font-bold">
            {navLinks.map((li, i) => (
              <li
                key={i}
                className="cursor-pointer border-b-2 border-transparent pb-2 duration-700 hover:border-b-black"
              >
                {li}
              </li>
            ))}
          </ul>
          <div className="mx-10 h-6 w-[0.1px] bg-black"></div>
          <div className="flex gap-8">
            <IoLanguage size={21} />
            <GoPerson size={21} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
