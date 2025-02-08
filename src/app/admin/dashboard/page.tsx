"use client";

import { siloService } from "@/features";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [message, setMessage] = useState<{
    silo: Record<string, string>[];
  } | null>({ silo: [] });

  useEffect(() => {
    const socket = siloService();

    socket.onopen = () => {
      console.log("Connected to /silos WebSocket");
      socket.send("getSilos");
    };

    socket.onmessage = (event) => {
      try {
        const parsedData = JSON.parse(event.data);
        console.log("Received WebSocket message:", parsedData);
        setMessage(parsedData.data);
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
        setMessage(event.data);
      }
    };

    socket.onclose = () => {
      console.log("Disconnected from WebSocket");
    };
  }, []);

  const statusHandler = {
    free: "bg-green-500",
    occupied: "bg-red-500",
  };

  console.log(message?.silo);
  return (
    <div>
      <h2>Dashboard</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {message?.silo && message.silo.length > 0 ? (
          message?.silo.map((item) => {
            console.log(item);
            return (
              <div
                key={item.id}
                className="w-1/2 h-52 mx-auto my-2 flex-col flex justify-center items-center rounded-md transition-all duration-200 hover:bg-slate-300 bg-slate-200">
                <p>name: {item.name}</p>
                <p>location: {item.location}</p>
                <p>
                  status:
                  <span
                    className={`${
                      statusHandler[item.status as keyof typeof statusHandler]
                    } text-white px-2 py-1 rounded-lg`}>
                    {item.status}
                  </span>
                </p>
                <p>{item.time_remaining}</p>
                <p>volume: {item.volume}</p>
                <button
                  className="text-white bg-blue-500 px-2 py-1 rounded-md"
                  onClick={() =>
                    router.push(`/admin/silos/${item.id}?status=${item.status}`)
                  }>
                  Reserve
                </button>
              </div>
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </section>
    </div>
  );
}
