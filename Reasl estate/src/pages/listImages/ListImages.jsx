import { useEffect, useRef, useState } from "react";
import { FormSubmitBtn, ListPropertyLayout } from "../../components";
import { IoMdAdd } from "react-icons/io";

const ListImages = () => {
  const inputRef = useRef();
  const [image, setImage] = useState();

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const files = e.target.files[0];
    console.log(files);
    setImage(e.target.files[0]);

    if (files) {
      const reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onloadend = () => {
        const base64String = reader.result;
        localStorage.setItem("propertyImage", base64String);
      };
    }
  };
  useEffect(() => {
    const base64String = localStorage.getItem("propertyImage");

    if (base64String) {
      fetch(base64String)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "propertyImage.jpg", {
            type: blob.type,
          });
          setImage(file);
        });
    }
  }, []);

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

        <div
          onClick={handleImageClick}
          className={`flex cursor-pointer flex-col items-center justify-center gap-[10px] border border-gray ${image ? "p-5" : "p-20"}`}
        >
          {image ? (
            <img src={URL.createObjectURL(image)} className="h-[70vh] w-full" />
          ) : (
            <img src="../src/assets/icons/camera.png" />
          )}
          <input
            onChange={handleImageChange}
            type="file"
            ref={inputRef}
            className="hidden"
          />
          {!image && (
            <button
              className="flex cursor-pointer items-center gap-2 rounded-[8px] bg-darkBlue p-2 font-inter text-base font-medium text-white"
              htmlFor="file-upload"
            >
              <IoMdAdd size={20} />
              Add Photos Now
            </button>
          )}
        </div>
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
      <FormSubmitBtn value="Save & Post" />
    </ListPropertyLayout>
  );
};

export default ListImages;
