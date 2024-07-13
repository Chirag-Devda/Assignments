import { useForm } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { RegisterFormLayout } from "../../components";
import { useDispatch } from "react-redux";
import { addFormData } from "../../features/RegisterDetails/RegisterDetailSlice";

const RegisterationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/verification"); // navigate to next page on submit

    // store data on submit
    localStorage.setItem("UserDetails", JSON.stringify(data));

    // Reset the Property Image on submit
    localStorage.removeItem("propertyImage");

    dispatch(addFormData(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full w-1/2">
      <RegisterFormLayout>
        {/* Radio for Owner or Builder */}
        <div className="relative flex flex-col gap-2">
          <p>
            <span className="text-red-600">*</span> I am :
          </p>
          <div className="flex gap-6">
            <div className="w-1/2">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Owner"
                  {...register("As", {
                    required: {
                      value: true,
                      message: "This feild is required",
                    },
                  })}
                  className="mr-2 h-5 w-5 cursor-pointer"
                />
                <span>Owner</span>
              </label>
            </div>
            <div className="w-1/2">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Builder"
                  {...register("As", {
                    required: {
                      value: true,
                      message: "This feild is required",
                    },
                  })}
                  className="k mr-2 h-5 w-5 cursor-pointer"
                />
                <span>Builder</span>
              </label>
            </div>
          </div>
          {errors.As && (
            <p className="absolute left-14 top-0.5 text-sm text-red-500">
              {errors.As.message}
            </p>
          )}
        </div>
        {/* Name Input */}
        <div className="relative flex flex-col">
          <label className="pb-2">
            <span className="text-red-600">*</span> Your Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="rounded-md border-2 border-black px-3 py-3"
            {...register("Name", {
              required: { value: true, message: "This feild is required" },
            })}
          />
          {errors.Name && (
            <p className="absolute left-24 top-0.5 text-sm text-red-500">
              {errors.Name.message}
            </p>
          )}
        </div>
        {/* Country Input */}
        <div className="relative flex w-[200px] flex-col">
          <label className="pb-2" htmlFor="country">
            <span className="text-red-600">*</span>Country
          </label>
          <select
            id="country"
            className="h-14 w-[400px] rounded-md border-2 border-black px-2"
            {...register("Country", {
              required: { value: true, message: "This feild is required" },
            })}
          >
            <option>India</option>
          </select>
          {errors.Country && (
            <p className="absolute left-14 top-0 text-sm text-red-500">
              {errors.Country.message}
            </p>
          )}
        </div>
        {/* Phone and Email Inputs */}
        <div className="flex flex-col gap-4">
          {/* Phone Input */}
          <div className="relative flex flex-col">
            <label htmlFor="phone" className="pb-2">
              Phone
            </label>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1 rounded-md border-2 border-black bg-purple-100 px-4 py-3">
                +91 <FaChevronDown />
              </div>
              <input
                className="w-full rounded-md border-2 border-black px-3 py-3"
                type="tel"
                placeholder="000-000-0000"
                id="phone"
                {...register("Phone", {
                  required: {
                    value: true,
                    message: "Enter this feild",
                  },
                  pattern: {
                    value: /^[0-9]{10}$/, // Only allow exactly 10 digits
                    message: "Invalid phone number format",
                  },
                  maxLength: {
                    value: 10,
                    message: "maximum lenght is 10",
                  },
                })}
              />
            </div>
            {errors.Phone && (
              <p className="absolute left-14 top-0 text-sm text-red-500">
                {errors.Phone.message}
              </p>
            )}
          </div>
          <p className="text-[16px] font-medium">OR</p>
          {/* Email Input */}
          <div className="flex flex-col">
            <label className="pb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-md border-2 border-black px-3 py-3"
              placeholder="Email"
              {...register("Email", { required: true })}
            />
          </div>
        </div>
      </RegisterFormLayout>
    </form>
  );
};

export default RegisterationForm;
