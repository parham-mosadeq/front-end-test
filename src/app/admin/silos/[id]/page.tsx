"use client";
import { useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { CountdownTimer } from "@/utils";

export default function SiloPage() {
  const { id } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const status = searchParams.get("status") || "free";
  const [time, setTime] = useState(0);
  const [siloStatus, setSiloStatus] = useState<string>(status);

  const updateStatusInUrl = (newStatus: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set("status", newStatus);
    router.replace(`/admin/silos/${id}?${currentParams.toString()}`);
  };

  const handleReserve = () => {
    if (siloStatus === "free") {
      setSiloStatus("occupied");
      updateStatusInUrl("occupied");
      setTime(15);
    }
  };

  const handleCountdownComplete = () => {
    setSiloStatus("free");
    updateStatusInUrl("free");
    setTime(0);
  };

  return (
    <div className="p-3">
      {time > 0 && (
        <CountdownTimer startTime={time} onComplete={handleCountdownComplete} />
      )}

      <div>
        <p>Current Silo: {id}</p>
        <p>Silo Status: {siloStatus}</p>
      </div>

      <button
        disabled={siloStatus === "occupied"}
        className={`mt-3 px-4 py-2 rounded-md text-white ${
          siloStatus === "occupied" ? "bg-gray-400" : "bg-green-600"
        }`}
        onClick={handleReserve}>
        Reserve Silo
      </button>
    </div>
  );
}
