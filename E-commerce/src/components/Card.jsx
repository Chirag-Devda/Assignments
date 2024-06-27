import { Link } from "react-router-dom";

const Card = () => {
  //  {
  //     "id": "thapaserialnoa",
  //     "name": "iphone x",
  //     "company": "apple",
  //     "price": 6000000,
  //     "colors": [
  //         "#ff0000",
  //         "#000000",
  //         "#CDD0D0"
  //     ],
  //     "image": "https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
  //     "category": "mobile",
  //     "featured": true
  // }
  const category = "iphone";
  return (
    <div className="bg-white shadow-lg border-2 rounded-lg overflow-hidden">
      <img
        className="w-full h-36 p-2  object-fill"
        src="https://th.bing.com/th/id/OIP._gPWltB6wwknn6_syte4eQHaEo?rs=1&pid=ImgDetMain"
        alt="Card image"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">iphone x</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          nec...
        </p>
        <div className="flex justify-between sm:flex-row flex-col gap-3 sm:gap-0">
          <p className="text-[#e55] hover:text-[#ff0000 font-medium">
            Rs.90,000
          </p>
          <Link to={`/products/${category}`}>
            <button className="text-white bg-blue-500 px-2 py-1 rounded-lg">
              View Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
