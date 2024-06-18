import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Filter = () => {
  const [toggle, settoggle] = useState(false);
  const filters = ["Filter 1", "Filter 2", "Filter 3", "Filter 4"];
  return (
    <>
      <div className="h-14 flex justify-end px-5 items-center max-w-[1280px] mx-auto">
        <div className="flex flex-col relative gap-2 items-end">
          <h4
            onClick={() => {
              settoggle((prev) => (prev = !prev));
            }}
            className="bg-blue-600 cursor-pointer w-fit flex items-center gap-1 px-4 py-1 rounded-lg"
          >
            Filter
            <span>
              <IoMdArrowDropdown className="text-xl" />
            </span>
          </h4>
          {toggle && (
            <div className="w-[130px] absolute top-14 right-0 border bg-[#f1faee] text-black rounded-md">
              <ul className="cursor-pointer flex flex-col justify-start items-start gap-2 w-full">
                {filters.map((item, i) => (
                  <li
                    key={i}
                    onClick={(e) => {
                      settoggle(false);
                    }}
                    className="px-10 py-2 border-b-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Filter;
