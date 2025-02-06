"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function GetOtpPage() {
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/auth/verify-otp");
  };

  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-gray-100">
      <div className="w-md mx-auto   p-8 space-y-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="space-y-4 max-w-md">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
              required
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
