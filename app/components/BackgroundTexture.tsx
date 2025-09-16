import React from "react";

interface BackgroundTextureProps {
  id?: string;
  className?: string; // additional classes for the wrapper
  variation: string;
  size?: string;
  position?: string;
  style?: React.CSSProperties;
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
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <div
        className={`bg-texture-${variation} bg-size-[${size}] bg-${position}`}
      ></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundTexture;
