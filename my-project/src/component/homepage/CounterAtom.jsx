import Atom from "../../assets/Atom.png";

const CounterAtom = ({ time, timeleft, isHidden = false }) => {
  return (
    <div className={`${isHidden && "hidden md:flex"} relative`}>
      <img src={Atom} height={100} width={100} />
      <div className="absolute top-1/4 right-[36%]">
        <p className="font-bold text-center text-base lg:text-2xl">{timeleft}</p>
        <p className="text-center text-[12px] sm:text-sm">{time}</p>
      </div>
    </div>
  );
};

export default CounterAtom;
