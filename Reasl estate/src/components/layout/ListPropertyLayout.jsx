import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const ListPropertyLayout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main className="h-[calc(100vh-72px)]">
        <div className="container mx-auto flex h-full items-center justify-center">
          <div className="h-[552px] w-[976px]">
            <div className="bg-darkCream">
              <ul className="flex h-[88px]">
                <li
                  style={{
                    backgroundColor:
                      location.pathname === "/listproperty" && "#EDF2F8",
                  }}
                  className="flex w-1/2 items-center justify-center"
                >
                  PROPERTY DETAILS
                </li>
                <li className="flex w-1/2 items-center justify-center">
                  LOCATION DETAILS
                </li>
                <li className="flex w-1/2 items-center justify-center">
                  FEATURES & AMENITIES
                </li>
                <li className="flex w-1/2 items-center justify-center">
                  PRICE DETAILS
                </li>
                <li className="flex w-1/2 items-center justify-center">
                  PROPERTY IMAGES
                </li>
              </ul>
            </div>
            <div className="flex">
              <div
                style={{
                  backgroundColor:
                    location.pathname === "/listproperty"
                      ? "#122B49"
                      : "#D6D6D6",
                }}
                className="h-2 w-[20%] bg-gray-700 duration-500"
              ></div>
              <div className="h-2 w-[20%] bg-[#D6D6D6] duration-500"></div>
              <div className="h-2 w-[20%] bg-[#D6D6D6] duration-500"></div>
              <div className="h-2 w-[20%] bg-[#D6D6D6] duration-500"></div>
              <div className="h-2 w-[20%] bg-[#D6D6D6] duration-500"></div>
            </div>
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default ListPropertyLayout;
