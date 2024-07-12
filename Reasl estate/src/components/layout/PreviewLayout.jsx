import { Footer, Navbar } from "../../components";

const PreviewLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PreviewLayout;
