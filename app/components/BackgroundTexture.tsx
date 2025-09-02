import React from "react";

interface BackgroundTextureProps {
  className?: string; // additional classes for the wrapper
  variation: string;
  size?: string;
  position?: string;
  style?: {};
  children?: React.ReactNode;
}

const BackgroundTexture = ({
  className = "",
  variation = "",
  size = "100%",
  position = "center",
  style,
  children,
}: BackgroundTextureProps) => {
  const test = "border: 2px solid red";
  return (
    <div className={`relative w-full ${className}`} style={style}>
      <div
        className={`bg-texture-${variation} bg-size-[${size}] bg-${position}`}
      ></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundTexture;
