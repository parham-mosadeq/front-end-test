import React from "react";

export default async function SiloPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <div className="p-3">Current silo: {id}</div>;
}
