import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { GoPerson } from "react-icons/go";

const ReviewsCard = () => {
  function StarIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="ml-2 h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  return (
    <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pb-8 pt-0"
      >
        <div className="rounded-full bg-blue-gray-200 p-3">
          <GoPerson size={21} />
        </div>
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography
              className="font-body text-base"
              variant="h5"
              color="blue-gray"
            >
              Tania Andrew
            </Typography>
            <div className="5 flex items-center gap-0">
              <p>4.5</p>
              <StarIcon />
            </div>
          </div>
          <Typography className="text-[12px]" color="blue-gray">
            Frontend Lead @ Google
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography className="font-semibold">Good Society</Typography>
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody>
    </Card>
  );
};

export default ReviewsCard;
