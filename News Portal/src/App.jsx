import { Filter, Navbar, Newses } from "./components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "./features/Pagination/PaginationSlice";

function App() {
  const [filterNews, setfilterNews] = useState();
  const currentPage = useSelector((state) => state.page.currentPage);
  const currentQuery = useSelector((state) => state.query.currentQuery);

  const dispatch = useDispatch();

  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);

  const fetchNews = async (page, query) => {
    try {
      setLoading(true);
      var url =
        "https://newsapi.org/v2/everything?" +
        "q=" +
        query +
        "&language=en&" +
        "from=2024-06-01&" +
        "to=2024-06-01&" +
        "PageSize=20&" +
        "page=" +
        page +
        "&sortBy=popularity&" +
        "apiKey=968d7d6a2f204faaae1af367530e573a";

      let data = await fetch(url);
      let response = await data.json();

      console.log("Fetching URL:", url);
      console.log(`fetching page ${currentPage} of query ${query}`);

      if (response.totalResults > 0) {
        let filteredResponse = response.articles.filter(
          (item) => item.title != "[Removed]" && item.urlToImage != null
        );
        setfilterNews(filteredResponse);
      } else {
        dispatch(reset(1));
        console.log(
          `No results found for the given query ${query} and date range of page ${page}`
        );
        console.log(`fetching page ${currentPage} of query ${query}`);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchNews(currentPage, currentQuery);
  }, [currentPage, currentQuery]);
  return (
    <>
      <Navbar />
      <Filter />
      <Newses Loading={Loading} Error={Error} filterNews={filterNews} />
    </>
  );
}

export default App;
