import React from "react";

const FormSubmitBtn = () => {
  return (
    <div className="flex h-16 items-center justify-between rounded-b-lg bg-darkBlue px-8 py-3">
      <p className="text-[#7A7A7A]">
        Need Help? <b>call 9999999999</b>
      </p>
      <input
        type="submit"
        value="Next"
        className="cursor-pointer rounded-lg bg-darkBlue px-9 py-1 text-[20px] font-light text-white"
      />
    </div>
  );
};

export default FormSubmitBtn;
