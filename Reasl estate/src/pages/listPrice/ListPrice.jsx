import { useDispatch } from "react-redux";
import { FormSubmitBtn, ListPropertyLayout } from "../../components";
import { handlePriceData } from "../../features/PriceDetails/PriceDetails";

const ListPrice = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ListPropertyLayout>
      <form onSubmit={handleSubmit} className="h-full w-full bg-white">
        <div className="flex h-[368px] w-[976px] flex-col gap-14 overflow-scroll p-10 text-black shadow-xl">
          <div className="flex gap-[60px]">
            <div className="relative flex w-1/2 flex-col gap-2">
              <label>
                Rent <span className="ml-1 text-red-600">*</span>
              </label>
              <input
                type="number"
                name="rent"
                onChange={(e) => {
                  dispatch(
                    handlePriceData({
                      name: e.target.name,
                      value: e.target.value,
                    }),
                  );
                }}
                required
                className="rounded-lg border-2 border-gray py-3 pl-10 pr-20 text-xl"
              />
              <span className="absolute left-4 top-12 text-xl text-blue-gray-300">
                &#x20b9;
              </span>
              <span className="absolute right-4 top-12 text-blue-gray-300">
                /Month
              </span>
            </div>
            <div className="relative flex w-1/2 flex-col gap-2">
              <label>
                Security <span className="ml-1 text-red-600">*</span>
              </label>
              <input
                type="number"
                name="security"
                onChange={(e) => {
                  dispatch(
                    handlePriceData({
                      name: e.target.name,
                      value: e.target.value,
                    }),
                  );
                }}
                required
                className="rounded-lg border-2 border-gray py-3 pl-10 pr-20 text-xl"
              />
              <span className="absolute left-4 top-12 text-xl text-blue-gray-300">
                &#x20b9;
              </span>
              <span className="absolute right-4 top-12 text-blue-gray-300">
                /Month
              </span>
            </div>
          </div>
          <div className="flex gap-[60px]">
            <div className="relative flex w-1/2 flex-col gap-2">
              <label>
                Maintainance <span className="ml-1 text-red-600">*</span>
              </label>
              <select
                onChange={(e) => {
                  dispatch(
                    handlePriceData({
                      name: e.target.name,
                      value: e.target.value,
                    }),
                  );
                }}
                className="rounded-md border-2 border-[#7A7A7A] p-4"
                required
                defaultValue=""
                name="maintainance"
              >
                <option value="" disabled hidden>
                  Maintainance
                </option>
                <option className="text-xl" value="Included in Rent">
                  Included in Rent
                </option>
                <option className="text-xl" value="Extra Maintenance">
                  Extra Maintenance
                </option>
              </select>
            </div>
            <div className="relative flex w-1/2 flex-col gap-2">
              <label>
                Maintainance <span className="ml-1 text-red-600">*</span>
              </label>
              <div className="flex w-full gap-3">
                <div>
                  <input
                    type="number"
                    name="maintainancePrice"
                    placeholder="maintainancePrice"
                    onChange={(e) => {
                      dispatch(
                        handlePriceData({
                          name: e.target.name,
                          value: e.target.value,
                        }),
                      );
                    }}
                    required
                    className="rounded-lg border-2 border-gray py-3 pl-6"
                  />
                  <span className="absolute left-2 top-11 text-xl text-blue-gray-300">
                    &#x20b9;
                  </span>
                </div>
                <div>
                  <input
                    type="number"
                    name="maintainanceDuration"
                    placeholder="Duration"
                    onChange={(e) => {
                      dispatch(
                        handlePriceData({
                          name: e.target.name,
                          value: e.target.value,
                        }),
                      );
                    }}
                    required
                    className="rounded-lg border-2 border-gray px-3 py-3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold">
              Additional Pricing details to convey to agent?
            </h1>
            <textarea
              name="additionalPricing"
              rows={15}
              placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us. "
              className="w-full border-2 border-gray p-3"
              onChange={(e) => {
                handlePriceData({ name: e.target.name, value: e.target.value });
              }}
            ></textarea>
          </div>
        </div>
        <FormSubmitBtn />
      </form>
    </ListPropertyLayout>
  );
};

export default ListPrice;
