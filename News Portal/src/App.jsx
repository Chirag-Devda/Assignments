import { Filter, Navbar, Newses } from "./components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "./features/Pagination/PaginationSlice";

function App() {
  // State Variables
  const [filterNews, setfilterNews] = useState();
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);

  // Redux state selectors
  const currentPage = useSelector((state) => state.page.currentPage);
  const currentQuery = useSelector((state) => state.query.currentQuery);
  const dispatch = useDispatch();

  const fetchNews = async (page, query) => {
    try {
      setLoading(true); // Set loading state while fetching

      // Constructing API URL
      var url =
        "https://newsapi.org/v2/everything?" +
        "q=" +
        query +
        "&language=en&" +
        "searchIn=title&" +
        "from=2024-06-01&" +
        "to=2024-06-21&" +
        "PageSize=20&" +
        "page=" +
        page +
        "&sortBy=popularity&" +
        "apiKey=" +
        import.meta.env.VITE_API_KEY;

      // Fetching data
      let data = await fetch(url);
      let response = await data.json();

      // log the url, currentPage, and query details
      console.log("Fetching URL:", url);
      console.log(`fetching page ${currentPage} of query ${query}`);

      // Filtering response
      if (response.totalResults > 0) {
        let filteredResponse = response.articles.filter(
          (item) =>
            item.title !== "[Removed]" &&
            item.urlToImage !== null &&
            item.description !== null,
        );
        if (filteredResponse.length > 0) {
          setfilterNews(filteredResponse);
          console.log(filteredResponse);
        } else {
          console.log("required data was empty");
        }
      } else {
        dispatch(reset(1)); // Reset pagination if no results found
        console.log(
          `No results found for the given query ${query} and date range of page ${page}`,
        );
        console.log(`fetching page ${currentPage} of query ${query}`);
      }
    } catch (error) {
      setError(error); // Handle fetch errors
    } finally {
      setLoading(false); // remove the loading after completing
    }
  };

  // Fetch news on initial load and whenever currentPage or currentQuery changes
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
