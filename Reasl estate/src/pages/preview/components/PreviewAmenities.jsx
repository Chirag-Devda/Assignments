import { useEffect, useState } from "react";

const PreviewAmenities = () => {
  const [amenities, setAmenities] = useState({});
  useEffect(() => {
    const data = localStorage.getItem("propertyfeatures");
    if (data) {
      setAmenities(JSON.parse(data));
    }
  }, []);

  return (
    <div className="flex flex-col gap-[60px] text-black">
      <h1 className="text-[32px] font-normal">Amenities</h1>
      <div className="flex flex-wrap gap-10 px-5">
        {amenities.societyAmenities?.map((image, i) => (
          <img key={i} src={image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default PreviewAmenities;
