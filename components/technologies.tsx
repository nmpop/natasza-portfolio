import React from "react";
import Html5Icon from "../src/assets/icons/html5.svg";
import CssIcon from "../src/assets/icons/css.svg";
import JavascriptIcon from "../src/assets/icons/javascript.svg";
import ReactIcon from "../src/assets/icons/react.svg";
import NextjsIcon from "../src/assets/icons/nextdotjs.svg";
import ReduxIcon from "../src/assets/icons/redux.svg";
import NodejsIcon from "../src/assets/icons/nodedotjs.svg";
import TailwindCssIcon from "../src/assets/icons/tailwindcss.svg";
import XstateIcon from "../src/assets/icons/xstate.svg";
import GitIcon from "../src/assets/icons/git.svg";
import TypescriptIcon from "../src/assets/icons/typescript.svg";

export default function Technologies() {
  return (
    <section className="cursor- mt-12 flex w-full max-w-[400px] cursor-default flex-col gap-2 text-gray-800 [&>*:nth-child(even)]:flex-row-reverse">
      <div className="group flex items-center gap-3 transition-transform hover:scale-110">
        <Html5Icon className="h-12 w-12 group-hover:text-[#E34F26]" />
        <span className="text-2xl">HTML5</span>
      </div>
      <div className="group flex items-center gap-3 transition-transform hover:scale-110">
        <CssIcon className="h-12 w-12 group-hover:text-[#663399]" />
        <span className="text-2xl">CSS</span>
      </div>
      <div className="group flex items-center gap-3 transition-transform hover:scale-110">
        <JavascriptIcon className="h-12 w-12 group-hover:text-[#F7DF1E]" />
        <span className="text-2xl">JavaScript</span>
      </div>
      <div className="group flex items-center gap-3 transition-transform hover:scale-110">
        <ReactIcon className="h-12 w-12 group-hover:text-[#61DAFB]" />
        <span className="text-2xl">React</span>
      </div>
      <div className="group flex items-center gap-3 transition-transform hover:scale-110">
        <ReduxIcon className="h-12 w-12 group-hover:text-[#764ABC]" />
        <span className="text-2xl">Redux</span>
      </div>{" "}
      <div className="group flex items-center gap-3 transition-transform hover:scale-110">
        <NextjsIcon className="h-12 w-12 group-hover:text-[#000000]" />
        <span className="text-2xl">Next.js</span>
      </div>{" "}
      <div className="group flex items-center gap-3 transition-transform hover:scale-110">
        <NodejsIcon className="h-12 w-12 group-hover:text-[#5FA04E]" />
        <span className="text-2xl">Node.js</span>
      </div>{" "}
      <div className="group flex items-center gap-3 transition-transform hover:scale-110">
        <TypescriptIcon className="h-12 w-12 group-hover:text-[#3178C6]" />
        <span className="text-2xl">Typescript</span>
      </div>
      <div className="group flex items-center gap-3 transition-transform hover:scale-110">
        <XstateIcon className="h-12 w-12 group-hover:text-[#2C3E50]" />
        <span className="text-2xl">XState</span>
      </div>
      <div className="group flex items-center gap-3 transition-transform hover:scale-110">
        <TailwindCssIcon className="h-12 w-12 group-hover:text-[#06B6D4]" />
        <span className="text-2xl">Tailwind CSS</span>
      </div>
      <div className="group flex items-center gap-3 transition-transform hover:scale-110">
        <GitIcon className="h-12 w-12 group-hover:text-[#F05032]" />
        <span className="text-2xl">Git</span>
      </div>
    </section>
  );
}
