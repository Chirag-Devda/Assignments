import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { next, previous } from "../features/Pagination/PaginationSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newses = ({ Loading, Error, filterNews }) => {
  const currentPage = useSelector((state) => state.page.currentPage);
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  if (Loading) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return (
      <div class="flex h-screen items-center justify-center">
        <div class="relative">
          <div class="h-24 w-24 rounded-full border-b-8 border-t-8 border-gray-200"></div>
          <div class="absolute left-0 top-0 h-24 w-24 animate-spin rounded-full border-b-8 border-t-8 border-[#0000b6]"></div>
        </div>
      </div>
    );
  }
  if (Error) {
    toast.error(Error.message, {
      position: "top-right",
      description: Error.message,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div className="mx-auto max-w-[1280px] gap-6">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      ></ToastContainer>
      <h1 className="ml-4 text-[30px] font-bold">Breaking News</h1>
      <div className="CardsContainer mx-auto mt-7 flex flex-wrap justify-center gap-x-10 gap-y-3 p-2 sm:p-5 md:justify-normal">
        {filterNews?.map(({ title, urlToImage, description, url }, i) => (
          <div
            key={i}
            className="Card flex max-h-[150px] w-[90vw] flex-row rounded-lg border-2 p-2 text-black shadow-xl sm:max-h-[450px] sm:w-[250px] sm:flex-col"
          >
            <div className="flex sm:items-center">
              <img
                src={urlToImage}
                alt="image"
                className="max-w-[100px] rounded-lg object-center sm:h-[180px] sm:w-full sm:max-w-full"
              />
            </div>
            <div className="content cursor-pointer">
              <a href={url}>
                <h5 className="title px-2 font-bold md:text-[18px]">
                  {title.slice(0, 30)}...
                </h5>
                <p className="px-2 text-[14px]">
                  {description.slice(0, 130)}...
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="pages mb-10 mt-5 flex justify-center gap-4 text-white">
        <button
          onClick={() => {
            dispatch(previous());
          }}
          className="rounded-lg bg-blue-600 px-4"
        >
          &lt; Previous
        </button>
        <span className="rounded-md bg-[#e6fe4c] px-5 font-bold text-[#000000]">
          {currentPage}
        </span>
        <button
          onClick={() => {
            dispatch(next());
          }}
          className="rounded-lg bg-blue-600 px-4"
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default Newses;
