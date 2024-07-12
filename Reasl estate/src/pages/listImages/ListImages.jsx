import { useNavigate } from "react-router-dom";
import { ListPropertyLayout } from "../../components";
import Upload from "./components/Upload";

const ListImages = () => {
  const navigate = useNavigate();
  return (
    <ListPropertyLayout>
      <div className="flex h-[368px] w-[976px] flex-col gap-6 overflow-scroll p-10 text-black shadow-xl">
        {/* title */}
        <h1 className="font-inter text-lg font-normal">
          Add Photos / videos to attract more tenants!{" "}
        </h1>
        <h1 className="font-inter text-base font-medium">
          Add Photos of living room, bedroom, bathroom, floor, doors, kitchen,
          balcony, location map, neighborhood, etc
        </h1>

        {/* Upload container */}
        <Upload />

        {/* Details */}
        <p className="text-lg">OR</p>
        <p className="text-xl">
          We can upload them for you! you can email the pictures and videos to
          us at Dylanestate.com
        </p>
        <div className="text-[12px]">
          <p>Accepted format are .jpg,.gif,.bmp & .png </p>
          <p>
            Maximum size allowed is 20 MB. Minimum dimension allowed 600*400
            pixels
          </p>
        </div>
      </div>
      <div className="flex h-16 items-center justify-between rounded-b-lg bg-darkBlue px-8 py-3 text-white">
        <p>
          Need Help? <b>call 9999999999</b>
        </p>
        <button
          onClick={() => {
            navigate("/post-confirmation");
          }}
          className="cursor-pointer rounded-lg border-2 border-white px-9 py-1 text-[20px] font-light text-white duration-500 hover:px-14"
        >
          Save & Post
        </button>
      </div>
    </ListPropertyLayout>
  );
};

export default ListImages;
