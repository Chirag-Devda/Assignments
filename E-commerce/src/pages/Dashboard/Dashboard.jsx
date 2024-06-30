import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import Slider from "./components/Slider";
import TopProducts from "./components/TopProducts";
import About from "./components/About";

import { Navbar, Header, Footer } from "../../components";
const Dashboard = () => {
  const error = useSelector((state) => state.products.error);
  const notify = () => toast.error(error);

  if (error) {
    notify();
  }

  return (
    <>
      <Navbar cart={true} home={true} products={true} Login={true} />
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Slider />
      <TopProducts />
      <About />
      <Footer />
    </>
  );
};

export default Dashboard;
