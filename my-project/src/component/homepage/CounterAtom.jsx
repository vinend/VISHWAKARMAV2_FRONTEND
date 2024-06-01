const CounterAtom = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center bg-yellow-300 text-gray-800 rounded-lg shadow-md p-4 w-20 h-20">
      <span className="text-3xl font-bold">{value}</span>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
};

export default CounterAtom;
