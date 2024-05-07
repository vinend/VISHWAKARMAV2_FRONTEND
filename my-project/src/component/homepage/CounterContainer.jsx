import { useState, useEffect } from "react";
import CounterAtom from "./CounterAtom";

// Misalnya, fungsi ini menghitung waktu yang tersisa dari sekarang hingga countDownLimit
function getRemainingTime(countDownLimit) {
  const newYearDate = new Date("2024-11-21");
  const totalSeconds = Math.floor((newYearDate.getTime() - Date.now()) / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

const CounterContainer = ({ countDownLimit }) => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime(countDownLimit));

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(getRemainingTime(countDownLimit));
    }, 1000);

    return () => clearInterval(timer);
  }, [countDownLimit]);

  return (
    <div className="flex justify-center flex-col w-full gap-[30px] z-0 mt-12 ">
      <p className="text-center font-bold">SEE US IN KRTI YOGYAKARTA 2024</p>
      <div className="flex items-center justify-center w-full gap-[20px] mt-12 ">
        <CounterAtom time="Days" timeleft={remainingTime.days} />
        <CounterAtom time="Hrs" timeleft={remainingTime.hours} />
        <CounterAtom time="Mins" timeleft={remainingTime.minutes} />
        <CounterAtom time="Secs" isHidden={false} timeleft={remainingTime.seconds} />
      </div>
    </div>
  );
};


export default CounterContainer;
