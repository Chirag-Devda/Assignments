import Navbar from "./components/Navbar.jsx";
import Filter from "./components/Filter.jsx";
import Newses from "./components/Newses.jsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const [filterNews, setfilterNews] = useState();
  const currentPage = useSelector((state) => state.page.currentPage);
  const currentQuery = useSelector((state) => state.query.currentQuery);

  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);

  const fetchNews = async (page, q) => {
    try {
      setLoading(true);
      var url =
        "https://newsapi.org/v2/everything?" +
        "q=" +
        q +
        "&language=en&" +
        "from=2024-06-01&" +
        "to=2024-06-01&" +
        "PageSize=20&" +
        "page=" +
        page +
        "&sortBy=popularity&" +
        "apiKey=77055f43bb504908ab9eb76335894ef6";

      console.log("Fetching URL:", url);
      console.log(`fetching page ${page} of query ${q}`);

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
