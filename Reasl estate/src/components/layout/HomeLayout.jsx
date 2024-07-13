import { ulpoadSteps } from "../../constants";
import Navbar from "../navbar/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="absolute h-[calc(100vh-72px)] w-full bg-darkBlue">
        <div className="container mx-auto">
          <div className="mt-[56px] text-white">
            <h1 className="text-4xl font-normal">
              Sell or Rent your Property For Free
            </h1>
            <p className="mt-4 font-light">
              Whether you’re ready to sell or looking for answers, we’ll guide
              you with data and expertise specific to your needs.
            </p>
          </div>
          <div className="mt-12 flex h-[376px] justify-evenly gap-24 text-white">
            <div className="flex flex-col gap-6 py-6">
              <h1 className="text-xl font-normal">
                Upload your property in 5 simple steps
              </h1>
              <div className="flex flex-col gap-2">
                {ulpoadSteps.map((step, i) => (
                  <div key={i} className="flex items-center">
                    <img src="/images/check.png" alt="Check" />
                    <p>
                      {step.para}
                      <b> {step.bold} </b>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeLayout;
