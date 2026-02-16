"use client";
import LoadingMap from "../LoadingMap";

import dynamic from "next/dynamic";
export default dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <LoadingMap height="h-[251px]" />,
});
