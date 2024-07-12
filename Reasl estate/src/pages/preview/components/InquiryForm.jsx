import { IoCall } from "react-icons/io5";

const InquiryForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="mt-8 bg-cream p-7">
      <h1 className="text-lg font-bold">Send an Inquiry for this property?</h1>
      <p className="mt-3 text-[12px] font-light">
        Contact Person : Melvin Lasrado
      </p>
      <div className="space-y-3">
        <div className="mt-3 flex items-center gap-5 bg-white px-4 py-2 shadow-xl">
          <IoCall size={20} />
          +91 9999999999
        </div>
        <div className="relative">
          <input
            type="text"
            name="Name"
            placeholder="Name"
            className="mt-3 flex w-full items-center gap-5 bg-white px-4 py-2 shadow-xl"
          />
          <span className="absolute right-3 top-2 text-lg text-blue-gray-200">
            *
          </span>
        </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mt-3 flex w-full items-center gap-5 bg-white px-4 py-2 shadow-xl"
          />
          <span className="absolute right-3 top-2 text-lg text-blue-gray-200">
            *
          </span>
        </div>
        <div className="relative">
          <div className="flex items-center">
            <div className="mr-3 mt-3 bg-white px-4 py-2">+91</div>
            <input
              type="number"
              name="number"
              placeholder="999-999-999"
              className="mt-3 flex w-full items-center gap-5 bg-white px-4 py-2 shadow-xl"
            />
          </div>
          <span className="absolute right-3 top-5 text-lg text-blue-gray-200">
            *
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-5 bg-white px-4 py-2 shadow-xl">
        I would like more information about Sector 5, shanti nagar, anubhav
        society
      </div>
      <input
        type="submit"
        value="Send Inquiry"
        className="mt-9 w-full cursor-pointer rounded-md bg-darkBlue px-5 py-3 text-white"
      />
    </form>
  );
};

export default InquiryForm;
