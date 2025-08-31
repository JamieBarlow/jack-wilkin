import React from "react";

interface BackgroundTextureProps {
  className?: string; // additional classes for the wrapper
  children?: React.ReactNode;
}

const BackgroundTexture = ({
  className = "",
  children,
}: BackgroundTextureProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="bg-texture"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundTexture;
