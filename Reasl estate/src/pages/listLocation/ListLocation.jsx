import { useNavigate } from "react-router-dom";
import { FormSubmitBtn, ListPropertyLayout } from "../../components";
import TextInputs from "./components/TextInputs";

const ListLocation = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/listfeatures");
    e.preventDefault();
  };
  return (
    <>
      <ListPropertyLayout>
        <form onSubmit={handleSubmit} className="h-full w-full bg-white">
          <div className="flex h-[368px] w-[976px] flex-col gap-14 overflow-scroll p-10 text-black shadow-xl">
            <div className="flex gap-[60px]">
              <TextInputs label="Building/ Society Name" name="societyname" />
              <TextInputs label="Locality / Area" name="areaname" />
            </div>
            <div className="flex gap-[60px]">
              <TextInputs label="Landmark / Street Name" name="cityname" />
              <TextInputs label="City" name="streetname" />
            </div>
          </div>
          <FormSubmitBtn value="Next" />
        </form>
      </ListPropertyLayout>
    </>
  );
};

export default ListLocation;
