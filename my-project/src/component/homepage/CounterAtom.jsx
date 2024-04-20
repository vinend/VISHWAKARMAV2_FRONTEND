import React from 'react';
import Atom from "../../assets/Atom.png";
import '../../index.css';

const CounterAtom = ({ time, timeleft, isHidden = false }) => {
  return (
    <div className={`${isHidden ? "hidden md:flex" : ""} relative`}>
      <img src={Atom} height={100} width={100} alt="Atom Logo" />
      <div className="absolute top-1/4 right-[36%]">
        <p className="font-bold text-center text-base lg:text-2xl" style={{ fontFamily: 'Digital-7' }}>{timeleft}</p>
        <p className="text-center text-[12px] sm:text-sm" style={{ fontFamily: 'Digital-7' }}>{time}</p>
      </div>
    </div>
  );
};

export default CounterAtom;

