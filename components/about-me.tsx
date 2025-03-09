import React from "react";
import Timeline from "./ui/timeline";
import Technologies from "./technologies";

export default function AboutMe() {
  return (
    <section>
      <div className="flex">
        <div className="flex-1">
          <h2 className="mb-3 text-4xl font-medium">About me</h2>
          <Timeline />
        </div>
        <div className="flex flex-1 flex-col items-center">
          <h2 className="mb-3 self-start text-4xl font-medium">Technologies</h2>
          <Technologies />
        </div>
      </div>
    </section>
  );
}
