import React from "react";

export function AdminHeaderLayout() {
  return (
    <header className="min-w-full bg-blue-400 h-12">
      <section className=" flex justify-between text-white px-4 py-2">
        <div>
          <p>user name</p>
        </div>
        <div>
          {new Date()
            .toLocaleDateString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })
            .replace(/-/g, "/")}
        </div>
      </section>
    </header>
  );
}
