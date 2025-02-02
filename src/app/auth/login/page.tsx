"use client";

import { loginService, verifyOtpService } from "@/features";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthLoginPage() {
  const router = useRouter();
  const [otpInput, setOtpInput] = useState<string>("");

  useEffect(() => {
    const getOtp = async () => {
      const otp = await loginService();
      console.log(otp, "top code ---");
    };
    getOtp();
  }, []);

  const handleOtp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (otpInput.length !== 6) {
      throw Error("Otp is not correct!");
    }
    verifyOtpService({ otp: +otpInput })
      .then((res) => {
        router.replace("/admin/dashboard");
        localStorage.setItem("access_token", JSON.stringify(res.message));
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <section className="w-1/2 h-1/3  m-auto flex justify-center items-center flex-col border-[1px] border-blue-400 bg-gray-400 rounded-md shadow-lg">
      <div className="h-1/5">
        <p className="text-white text-lg">Login using otp</p>{" "}
      </div>
      <form
        onSubmit={(event) => handleOtp(event)}
        className="flex justify-center items-center flex-col w-full">
        <input
          className="border-2 rounded-md block w-1/2 my-3 focus:border-[1px] focus:outline-blue-500"
          required
          value={otpInput}
          onChange={(event) => setOtpInput(event.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-2 py-1 rounded-md">
          submit
        </button>
      </form>
    </section>
  );
}
