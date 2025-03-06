import React from "react";
import Timeline from "./ui/timeline";

export default function AboutMe() {
  return (
    <section>
      <div className="flex">
        <div className="flex-1">
          <h2 className="mb-3 text-4xl font-medium">About me</h2>
          <Timeline />
        </div>
        <div className="flex-1">
          <h2 className="mb-3 text-4xl font-medium">Technologies</h2>
        </div>
      </div>
    </section>
  );
}
