// "use client";
// import dynamic from "next/dynamic";
// import { MapProps } from "./Map";

// const DynamicMap = dynamic(() => import("./Map"), {
//   ssr: false,
//   loading: () => <p>Loading map...</p>,
// });

// export default function MapCaller({
//   width = 600,
//   height = 600,
//   ...rest
// }: MapProps) {
//   return <DynamicMap width={width} height={height} {...rest} />;
// }
