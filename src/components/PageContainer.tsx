import React from "react";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full p-4 flex flex-col items-center justify-center space-y-6">
      {children}
    </div>
  );
}
