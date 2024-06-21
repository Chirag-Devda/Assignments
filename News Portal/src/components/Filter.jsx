import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { updateQuery } from "../features/Query/QuerySlice";
import { reset } from "../features/Pagination/PaginationSlice";

const Filter = () => {
  const [toggle, settoggle] = useState(false);
  const filters = ["Business", "Technology", "Entertainment"];

  const dispatch = useDispatch();

  return (
    <>
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-end px-5">
        <div className="relative flex flex-col items-end gap-2">
          <h4
            onClick={() => {
              settoggle((prev) => (prev = !prev));
            }}
            className="flex w-fit cursor-pointer items-center gap-1 rounded-lg bg-[#f1c40f] px-4 py-1"
          >
            Filter
            <span>
              <IoMdArrowDropdown className="text-xl" />
            </span>
          </h4>
          {toggle && (
            <div className="absolute right-0 top-14 w-[140px] rounded-md border bg-[#f1faee] text-black">
              <ul className="flex w-full cursor-pointer flex-col gap-2">
                {filters.map((item, i) => (
                  <li
                    key={i}
                    onClick={(e) => {
                      dispatch(reset(1));
                      const { innerHTML } = e.target;
                      dispatch(updateQuery(innerHTML));
                      settoggle(false);
                    }}
                    className="flex w-full items-center justify-center border-b-2 py-2"
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
