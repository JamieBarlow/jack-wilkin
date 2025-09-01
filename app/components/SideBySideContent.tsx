import React from "react";

const SideBySideContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`container-padded flex flex-row flex-wrap justify-center md:justify-start items-center gap-10 lg:gap-16 xl:gap-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default SideBySideContent;
