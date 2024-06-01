import { useState, useEffect } from "react";
import CounterAtom from "./CounterAtom";

function getRemainingTime() {
  const targetDate = new Date("2024-11-21");
  const totalSeconds = Math.floor((targetDate.getTime() - Date.now()) / 1000);
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

const CounterContainer = () => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center w-full gap-8 mt-12">
      <p className="text-center font-bold text-2xl mb-4">SEE US IN KRTI YOGYAKARTA 2024</p>
      <div className="flex items-center justify-center w-full gap-4">
        <CounterAtom label="Days" value={remainingTime.days} />
        <CounterAtom label="Hrs" value={remainingTime.hours} />
        <CounterAtom label="Mins" value={remainingTime.minutes} />
        <CounterAtom label="Secs" value={remainingTime.seconds} />
      </div>
    </div>
  );
};

export default CounterContainer;
