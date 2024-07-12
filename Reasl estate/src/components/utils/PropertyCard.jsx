import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaLocationDot } from "react-icons/fa6";
import { PiCurrencyInrBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import { PiUploadSimpleFill } from "react-icons/pi";

const PropertyCard = () => {
  return (
    <Card className="mt-6 w-[308px]">
      <CardHeader floated={false} color="blue-gray" className="relative">
        <img
          src="https://th.bing.com/th/id/OIP.DsoRRi5Q0096Ekpfk1DZ1QHaE7?rs=1&pid=ImgDetMain"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Modern & Luxury 2BHK Flat For Rent
        </Typography>
        <Typography className="mb-4 flex items-center gap-2">
          <FaLocationDot /> Kashimira, Mira Road East, Mumbai
        </Typography>
        <Typography className="mb-4 flex items-center gap-2">
          <PiCurrencyInrBold /> 60.50 Lac
        </Typography>
        <Typography className="mb-4 flex items-center gap-2">
          <span>
            <img src="../src/assets/icons/squarefoot.png" alt="" />
          </span>
          1850 Sq. ft.
        </Typography>
        <Typography className="absolute right-5 top-5 flex gap-4">
          <FaRegHeart size={20} />
          <PiUploadSimpleFill size={20} />
        </Typography>
      </CardBody>
    </Card>
  );
};

export default PropertyCard;
