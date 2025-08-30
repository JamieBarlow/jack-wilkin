import React from "react";

const TextBox = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`px-6`}>{children}</div>;
};

export default TextBox;
