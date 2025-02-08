"use client";
import { AdminFooterLayout, AdminHeaderLayout } from "@/components";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      router.push("/auth/get-otp");
    }
  }, [router]);

  return (
    <div className="w-full h-full overflow-x-hidden">
      <AdminHeaderLayout />
      <main className="h-full">{children}</main>
      <AdminFooterLayout />
    </div>
  );
}
