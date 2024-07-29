import { useNavigate } from "react-router-dom";
import { FormSubmitBtn, ListPropertyLayout } from "../../components";
import TextInputs from "./components/TextInputs";
import { useSelector } from "react-redux";
import LocationMap from "./components/LocationMap";

const ListLocation = () => {
  const navigate = useNavigate();
  const location = useSelector((state) => state.locationDetails.locationData);

  const handleSubmit = (e) => {
    navigate("/listfeatures"); // navigate to next page on submit

    localStorage.setItem("propertyLocation", JSON.stringify(location)); // Store location data on submit

    e.preventDefault();
  };
  return (
    <>
      <ListPropertyLayout>
        <form onSubmit={handleSubmit} className="h-full w-full bg-white">
          <div className="flex h-[368px] w-[976px] flex-col gap-14 overflow-scroll p-10 pb-0 text-black shadow-xl">
            <div className="flex gap-[60px]">
              <TextInputs label="Building/ Society Name" name="societyname" />
              <TextInputs label="Locality / Area" name="areaname" />
            </div>
            <div className="flex gap-[60px]">
              <TextInputs label="Landmark / Street Name" name="streetname" />
              <TextInputs label="City" name="cityname" />
            </div>
            <LocationMap />
          </div>

          <FormSubmitBtn value="Next" />
        </form>
      </ListPropertyLayout>
    </>
  );
};

export default ListLocation;
