import Navbar from "./components/Navbar.jsx";
import Filter from "./components/Filter.jsx";
import Newses from "./components/Newses.jsx";
import { useState } from "react";

function App() {
  const [search, setsearch] = useState("");
  const handleSearch = (e) => {
    setsearch(e.target.value);
  };

  return (
    <>
      <Navbar search={search} handleSearch={handleSearch} />
      <Filter />
      <Newses search={search} />
    </>
  );
}

export default App;
