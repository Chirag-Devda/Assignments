const Services = ({ Icon, text }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-slate-100 rounded-full p-2">
        <Icon size={30} />
      </div>
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
};

export default Services;
