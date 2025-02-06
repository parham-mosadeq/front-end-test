"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth/get-otp"); // Ensure the path starts with "/"
  }, []);

  return <section>Landing</section>;
}
