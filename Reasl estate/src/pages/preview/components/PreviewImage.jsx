import { useEffect, useState } from "react";
import Upload from "../../listImages/components/Upload";

const PreviewImage = () => {
  const [image, setImage] = useState("");
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
    <div className="mt-4 w-full">
      {image ? (
        <img
          src={URL.createObjectURL(image)}
          className="h-[70vh] w-full object-contain"
        />
      ) : (
        <Upload />
      )}
    </div>
  );
};

export default PreviewImage;
