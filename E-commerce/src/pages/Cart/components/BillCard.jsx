const BillCard = ({ cartTotal }) => {
  return (
    <div className="flex h-fit flex-col rounded-lg px-5 py-2 shadow-lg">
      <h1 className="text-[20px] font-bold text-[#434343]">ORDER SUMMARY</h1>
      <div className="my-3 border-2 border-[#a09e9e] opacity-[0.4]" />
      <div className="flex flex-col font-medium text-[#434343]">
        <div className="flex justify-between">
          <p>Sub Total</p>
          <p>{cartTotal}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Charges</p>
          <p>TBD</p>
        </div>
        <div className="flex justify-between">
          <p>Sales Tax</p>
          <p>TBD</p>
        </div>
      </div>
      <div className="my-3 border-2 border-[#a09e9e] opacity-[0.4]" />
      <div className="flex justify-between text-[18px] font-medium text-[#434343]">
        <p>Estimated Total</p>
        <p>{cartTotal}</p>
      </div>
      <div className="my-3 border-2 border-[#a09e9e] opacity-[0.4]" />
      <button className="mx-auto w-fit rounded-lg bg-blue-600 px-4 py-3 font-bold text-white duration-500 hover:scale-110">
        PROCEED TO CHECKOUT
      </button>
      <div className="my-3 border-2 border-[#a09e9e] opacity-[0.4]" />

      <p className="text-center text-[#434343]">
        * Delivery Charges And The Sales Tax Be Calculated In The Checkout Page*
      </p>
    </div>
  );
};

export default BillCard;
