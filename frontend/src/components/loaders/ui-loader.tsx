import React from "react";
import "./ui-style.css";

export const UILoader = () => {
  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-zinc-900">
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
    </div>
    </div>
  );
};
