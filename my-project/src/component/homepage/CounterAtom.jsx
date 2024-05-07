import React from 'react';
import Atom from "../../assets/Atom.png";
import '../../index.css';

const CounterAtom = ({ time, timeleft, isHidden = false }) => {
  return (
    <div className={`${isHidden && "hidden md:flex"} relative -mt-12 `}>
      <div className="flex w-[60px] justify-center bg-yellow-600 py-[15px] text-black">
        <p className="font-bold text-center text-base lg:text-2xl  font-7-seg">{timeleft}</p>
      </div>
    </div>
  );
};

export default CounterAtom;