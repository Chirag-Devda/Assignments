import { ReviewsCard } from "../../../components";

const PreviewRatings = () => {
  return (
    <div className="flex flex-col gap-[60px] rounded-xl px-20 py-8 shadow-xl">
      <h1 className="text-3xl font-normal">Ratings & Reviews</h1>
      <div className="flex justify-between">
        <ReviewsCard />
        <ReviewsCard />
      </div>
      <button className="w-fit bg-darkBlue px-8 py-3 text-white">
        Write Review
      </button>
    </div>
  );
};

export default PreviewRatings;
