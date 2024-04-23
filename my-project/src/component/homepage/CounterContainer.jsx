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
    <div className="flex justify-center mt-12 lg:mt-12 z-10">
      <div className="flex items-center gap-12 lg:gap-8 lg:flex-row 2xl:gap-10">
        <CounterAtom time="Days" timeleft={remainingTime.days} />
        <CounterAtom time="Hrs" timeleft={remainingTime.hours} />
        <CounterAtom time="Mins" timeleft={remainingTime.minutes} />
        <CounterAtom time="Secs" isHidden={false} timeleft={remainingTime.seconds} />
      </div>
    </div>
  );
};


export default CounterContainer;
