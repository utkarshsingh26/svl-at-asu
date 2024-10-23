import React from "react";
import { Vortex } from "./ui/vortex";

export function VortexDemoSecond({ children }) {
  return (
    <div className="w-[calc(100%)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={1000}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        { children }
      </Vortex>
    </div>
  );
}
