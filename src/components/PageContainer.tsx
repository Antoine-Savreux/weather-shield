import React from "react";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full p-4 flex flex-col items-center gap-8">
      {children}
    </div>
  );
}
