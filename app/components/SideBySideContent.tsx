import React from "react";

const SideBySideContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex flex-row flex-wrap ${className}`}>{children}</div>
  );
};

export default SideBySideContent;
