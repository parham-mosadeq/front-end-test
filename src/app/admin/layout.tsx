"use client";
import { AdminHeaderLayout } from "@/components";
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
    <div className="w-full h-full">
      <AdminHeaderLayout />
      <main>{children}</main>
    </div>
  );
}
