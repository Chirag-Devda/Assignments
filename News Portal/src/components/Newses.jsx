import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { next, previous } from "../features/Pagination/PaginationSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newses = ({ Loading, Error, filterNews, fetchNews }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.page.currentPage);
  const currentQuery = useSelector((state) => state.query.currentQuery);

  if (Loading) {
    return <p>Loading...</p>;
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
    <div className="gap-6 max-w-[1280px] mx-auto">
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
      <h1 className="text-[30px] ml-4 font-bold ">Breaking News</h1>
      <div className="CardsContainer mx-auto flex gap-y-3 gap-x-10 flex-wrap justify-center md:justify-normal mt-7 p-2 sm:p-5">
        {filterNews?.map(({ title, urlToImage, description, url }, i) => (
          <div
            key={i}
            className="Card flex flex-row sm:flex-col p-2 w-fit sm:w-[200px] border-2 rounded-lg bg-white"
          >
            <div className="flex items-center">
              <img
                src={urlToImage}
                alt="image"
                className="sm:w-fit h-full w-[250px] rounded-lg"
              />
            </div>
            <div className="content cursor-pointer">
              <a href={url}>
                <h5 className="title md:text-[18px] px-2 font-bold from-neutral-950">
                  {title}
                </h5>
                <p className="px-2 text-[14px] md:text-[18px] ">
                  {description}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="pages flex justify-center mt-5 mb-10 gap-4">
        <button
          onClick={() => {
            dispatch(previous());

            fetchNews(currentPage, currentQuery);
          }}
          className="bg-blue-600 px-4 rounded-lg"
        >
          &lt; Previous
        </button>
        <span className="bg-[#e4e2e2] text-[#454444] px-5 rounded-md">
          {currentPage}
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(next());
            fetchNews(currentPage, currentQuery);
          }}
          className="bg-blue-600 px-4 rounded-lg"
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default Newses;
