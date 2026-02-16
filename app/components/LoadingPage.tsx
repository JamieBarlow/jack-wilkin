"use client";
import { useEffect, useState } from "react";

export default function LoadingPage() {
  // Loader only shows if page is actually slow to load. If showing immediately, this gives a perception of slow loading
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);
  if (!show)
    return (
      <div className="container-padded text-base-100 px-6 py-8 min-h-screen"></div>
    );
  return (
    <div className="container-padded text-base-100 px-6 py-8 min-h-screen">
      <div className="flex w-full flex-col gap-4">
        <div className="skeleton h-[40vh] w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-4/6"></div>
        <div className="skeleton h-4 w-5/6"></div>
      </div>
    </div>
  );
}
