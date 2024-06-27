import { Navbar, Header, Footer } from "../../components";
import Slider from "./components/Slider";
import TopProducts from "./components/TopProducts";
import About from "./components/About";

const Dashboard = () => {
  return (
    <>
      <Navbar cart={true} home={true} products={true} />
      <Header />

      <Slider />
      <TopProducts />
      <About />
      <Footer />
    </>
  );
};

export default Dashboard;
