"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div>
      <header>Admin Dashboard Header</header>
      <main>{children}</main>
    </div>
  );
}
