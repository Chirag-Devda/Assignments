const RegisterFormLayout = ({ children }) => {
  return (
    <>
      <h1 className="flex h-[68px] items-center rounded-t-lg bg-cream py-2 pl-[68px] text-2xl font-medium text-black">
        LETS GET YOU STARTED!
      </h1>
      <div className="flex h-[calc(376px-131px)] flex-col gap-[50px] overflow-scroll overflow-x-hidden bg-white p-16 text-black">
        {children}
      </div>
      <div className="flex h-16 items-center justify-between rounded-b-lg bg-cream px-8 py-3">
        <p className="text-[#7A7A7A]">
          Need Help? <b>call 9999999999</b>
        </p>
        <input
          type="submit"
          value="Next"
          className="cursor-pointer rounded-lg bg-darkBlue px-9 py-1 text-[20px] font-light text-white"
        />
      </div>
    </>
  );
};

export default RegisterFormLayout;
