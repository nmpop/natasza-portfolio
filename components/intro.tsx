import React from "react";
import Image from "next/image";
import myImage from "@/public/images/natasza.jpg";

export default function Intro() {
  return (
    <section className="flex gap-10">
      <div className="flex flex-col justify-center">
        <h1 className="mb-3 text-4xl font-medium">Hello, I&#39;m Natasza</h1>
        <p className="text-dove-gray-600 text-xl">
          I&#39;m a frontend developer passionate about clean design, intuitive
          user experiences, and scalable web solutions. Take a look at my work
          and enjoy the journey!
        </p>
      </div>
      <div>
        <Image
          src={myImage}
          alt="authorImage"
          className="shrink-0 rounded-lg"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
