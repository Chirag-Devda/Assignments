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
        "apiKey=77055f43bb504908ab9eb76335894ef6";

      let data = await fetch(url);
      let response = await data.json();

      console.log("Fetching URL:", url);
      console.log(`fetching page ${page} of query ${query}`);

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
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchNews(currentPage, currentQuery);
  }, []);
  return (
    <>
      <Navbar fetchNews={fetchNews} />
      <Filter fetchNews={fetchNews} />
      <Newses
        Loading={Loading}
        Error={Error}
        filterNews={filterNews}
        fetchNews={fetchNews}
      />
    </>
  );
}

export default App;
