import { useEffect } from "react";

import { Navbar, Header, Card, Footer } from "../../components";

import Slider from "../Dashboard/components/Slider";
import { useSelector } from "react-redux";

const Products = () => {
  const data = useSelector((state) => state.products.products);
  useEffect(() => {
    window.scrollTo({
      top: 550,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Navbar cart={true} home={true} products={true} Login={true} />
      <Header />
      <Slider />
      <div className="max-w-[1280px] mx-auto py-10 px-5 mt-12">
        <h1 className="text-[30px] sm:text-[60px] font-bold -tracking-wide leading-[70px] font-mono">
          All latest Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
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
