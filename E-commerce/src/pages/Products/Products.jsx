import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Slider from "../Dashboard/components/Slider";
import { Navbar, Header, Card, Footer } from "../../components";

const Products = () => {
  const data = useSelector((state) => state.products.products);
  const Loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const notify = () => toast.error(error);

  if (error) {
    notify();
  }

  useEffect(() => {
    window.scrollTo({
      top: 570,
      behavior: "smooth",
    });
  }, [data]);

  return (
    <>
      <Navbar cart={true} home={true} products={true} Login={true} />
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={1}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Slider />
      <div className="mx-auto mt-12 max-w-[1280px] px-5 py-10">
        <h1 className="font-mono text-[30px] font-bold leading-[70px] -tracking-wide sm:text-[60px]">
          All latest Products
        </h1>
        {Loading && (
          <div className="mt-10 flex w-full justify-center">
            <Spinner className="h-12 w-12" />
          </div>
        )}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
