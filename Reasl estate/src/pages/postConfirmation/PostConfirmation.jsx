import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";

const PostConfirmation = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="h-[calc(100vh-72px)]">
        <div className="container mx-auto flex h-full py-28">
          <div className="flex w-3/5 flex-col gap-5">
            <h1 className="font-inter text-2xl font-normal">
              Thank you for listing your property with us,
            </h1>
            <p className="font-inter text-lg font-normal">
              Your listing will be reviewed and will go live within 24 hours.
            </p>
            <p className="font-inter text-lg font-normal">
              We will now manage your listing and get in touch with you after
              finding the best suitable tenant as per your preference.
            </p>
            <p className="mt-10 font-inter text-lg font-normal">
              -Dylan Estates
            </p>
            <div className="mt-10 flex gap-20">
              <button className="cursor-pointer rounded-lg bg-darkBlue px-9 py-3 font-inter text-base text-white duration-500 hover:scale-105">
                Edit Property Listing bg-darkBlue
              </button>
              <button
                onClick={() => {
                  navigate("/preview");
                }}
                className="cursor-pointer rounded-lg bg-darkBlue px-9 py-3 font-inter text-base text-white duration-500 hover:scale-105"
              >
                Preview Property Listing
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PostConfirmation;
