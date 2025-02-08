"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";

import { CountdownTimer } from "@/utils";
import { decrementTime, freeSilo, reserveSilo, RootState } from "@/redux";

export default function SiloPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { status, timeLeft } = useSelector((state: RootState) => state.silo);

  useEffect(() => {
    if (status === "occupied" && timeLeft > 0) {
      const timer = setInterval(() => dispatch(decrementTime()), 1000);
      return () => clearInterval(timer);
    }
  }, [status, timeLeft, dispatch]);

  return (
    <div className="p-3">
      {timeLeft > 0 && (
        <CountdownTimer
          startTime={timeLeft}
          onComplete={() => dispatch(freeSilo())}
        />
      )}

      <div>
        <p>Current Silo: {id}</p>
        <p>Silo Status: {status}</p>
      </div>

      <button
        disabled={status === "occupied"}
        className={`mt-3 px-4 py-2 rounded-md text-white ${
          status === "occupied" ? "bg-gray-400" : "bg-green-600"
        }`}
        onClick={() => dispatch(reserveSilo())}>
        Reserve Silo
      </button>
    </div>
  );
}
