import React, { useEffect } from "react";
import { useState } from "react";

const Newses = ({ search }) => {
  const [filterNews, setfilterNews] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);
  const fetchNews = async () => {
    try {
      setLoading(true);
      var url =
        "https://newsapi.org/v2/everything?" +
        "q=sports&" +
        "language=en&" +
        "from=2024-06-01&" +
        "to=2024-06-01&" +
        "PageSize=40&" +
        "page=1&" +
        "sortBy=popularity&" +
        "apiKey=d6dd5a10613f401b9ce65fa439bb2181";

      console.log("Fetching URL:", url);

      let data = await fetch(url);
      let response = await data.json();
      if (response.totalResults > 0) {
        console.log(response);
        let filteredResponse = response.articles.filter(
          (item) => item.title != "[Removed]" && item.urlToImage != null
        );
        setfilterNews(filteredResponse);
      } else {
        console.log("No results found for the given query and date range.");
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (Loading) {
    return <p>Loading...</p>;
  }
  if (Error) {
    return <p>Error:{Error.message}</p>;
  }

  return (
    <div className="gap-6 max-w-[1280px] mx-auto">
      <h1 className="text-[30px] ml-4 font-bold ">Breaking News</h1>
      <div className="CardsContainer mx-auto flex gap-y-3 gap-x-10 flex-wrap justify-center md:justify-normal mt-7 p-2 sm:p-5">
        {filterNews.map(({ title, urlToImage, description, url }, i) => (
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
        <button className="bg-blue-600 px-4 rounded-lg">&lt; Previous</button>
        <span className="bg-[#e4e2e2] text-[#454444] px-2 rounded-full">1</span>
        <button className="bg-blue-600 px-4 rounded-lg">Next &gt;</button>
      </div>
    </div>
  );
};

export default Newses;
