import React from "react";

export default function SectionComponent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`[&:not(:first-child)]:mt-32 px-5 lg:px-12 lg:mt-20 ${className}`}
    >
      {children}
    </div>
  );
}
