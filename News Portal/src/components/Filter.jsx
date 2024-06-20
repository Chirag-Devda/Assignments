import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { updateQuery } from "../features/Query/QuerySlice";

const Filter = ({ fetchNews }) => {
  const [toggle, settoggle] = useState(false);
  const filters = ["Business", "Technology", "Entertainment"];

  const dispatch = useDispatch();

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
            <div className="w-[140px] absolute top-14 right-0 border bg-[#f1faee] text-black rounded-md">
              <ul className="cursor-pointer flex flex-col gap-2 w-full">
                {filters.map((item, i) => (
                  <li
                    key={i}
                    onClick={(e) => {
                      settoggle(false);
                      dispatch(updateQuery(e.target.innerHTML));
                      fetchNews(1, e.target.innerHTML);
                    }}
                    className="flex justify-center w-full items-center py-2 border-b-2"
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
