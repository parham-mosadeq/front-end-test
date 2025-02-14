"use client";
import { CountdownTimerProps } from "@/interfaces";
import { useEffect, useState } from "react";

export function CountdownTimer({ startTime, onComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(startTime);

  useEffect(() => {
    setTimeLeft(startTime);
  }, [startTime]);

  useEffect(() => {
    if (timeLeft === 0) {
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 500);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  return (
    <div className="text-xl font-bold text-gray-800">
      Time Remaining: {timeLeft > 0 ? timeLeft : "Not running"}
    </div>
  );
}
