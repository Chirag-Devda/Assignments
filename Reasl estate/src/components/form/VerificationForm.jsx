import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { RegisterFormLayout } from "../../components";

const VerificationForm = () => {
  const [otpValue, setOtpValue] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/listproperty");
    console.log(data); // Replace with your form submission logic
  };

  // Function to handle input click
  const handleInputClick = () => {
    setOtpValue("6473"); // Set the OTP value to '6473' when input is clicked
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full w-1/2">
      <RegisterFormLayout>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <label className="text-xl" htmlFor="otp">
              Enter OTP sent on 999-999-9999{" "}
              <span className="text-red-600">*</span>
            </label>
            <span className="text-[16px] text-[#122B49] underline">change</span>
          </div>
          <input
            className="w-full cursor-pointer rounded-md border-2 border-black px-3 py-3 text-2xl"
            type="tel"
            placeholder="0000"
            id="otp"
            value={otpValue}
            onClick={handleInputClick}
            {...register("otp", {
              required: "Enter this field",
              pattern: {
                value: /^[0-9]{4}$/, // Only allow exactly 4 digits
                message: "Invalid OTP format",
              },
              maxLength: {
                value: 4,
                message: "Maximum length is 4",
              },
            })}
          />
          {errors.otp && (
            <p className="absolute left-14 top-0.5 text-sm text-red-500">
              {errors.otp.message}
            </p>
          )}
          <div className="text-end text-[16px] text-[#122B49] underline">
            Resend OTP
          </div>
        </div>
      </RegisterFormLayout>
    </form>
  );
};

export default VerificationForm;
