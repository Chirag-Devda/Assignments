const Services = ({ Icon, text }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-slate-100 rounded-full p-2">
        <Icon size={25} />
      </div>
      <p className="text-slate-600 text-[12px]">{text}</p>
    </div>
  );
};

export default Services;
