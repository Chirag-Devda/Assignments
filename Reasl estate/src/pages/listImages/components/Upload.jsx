import { IoMdAdd } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
const Upload = () => {
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
    <div
      onClick={handleImageClick}
      className={`flex cursor-pointer flex-col items-center justify-center gap-[10px] border border-gray ${image ? "p-2" : "p-20"}`}
    >
      {image ? (
        <img
          src={URL.createObjectURL(image)}
          className="h-[70vh] w-full object-contain"
        />
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
  );
};

export default Upload;
