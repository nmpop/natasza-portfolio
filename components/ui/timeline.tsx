import React from "react";

export default function Timeline() {
  const data: {
    position: string;
    company: string;
    time: string;
    responsibilities: string[];
  }[] = [
    {
      position: "Frontend Developer",
      company: "Orange",
      time: "February 2022 - now",
      responsibilities: [
        "Building and maintaining scalable web applications with React, TypeScript and Next.js",
        "Optimizing performance through code splitting, lazy loading and caching",
        "Collaborating with backend developers, UX/UI designers and product teams to improve usability",
        "Implementing accessibility (WCAG) best practices and modern frontend architectures",
        "Participating in code reviews, knowledge sharing and mentoring",
        "Working in a Scrum environment, delivering features efficiently",
      ],
    },
    {
      position: "Frontend Developer (Intern)",
      company: "Orange",
      time: "November 2021 - January 2022",
      responsibilities: [
        "Assisted in developing and maintaining web applications using React, TypeScript, and Next.js",
        "Fixed bugs and optimized performance under the guidance of senior developers",
        "Collaborated with the development team in Scrum processes",
        "Researched and documented best practices for frontend development",
      ],
    },
  ];
  return (
    <ol className="border-dove-gray-200 relative mt-5 border-s">
      {data.map((entry, index) => {
        const { position, company, responsibilities, time } = entry;
        return (
          <li key={index} className="relative ms-6 mb-10 flex flex-col">
            <span className="bg-makara-300 ring-makara-100 absolute -start-3 top-[5px] left-[-35px] flex h-5 w-5 items-center justify-center rounded-full ring-8" />
            <h3 className="flex items-center text-lg font-semibold text-gray-900">
              {position}
            </h3>
            <h4 className="text-s mb-1 flex items-center font-semibold text-gray-900">
              {company}
            </h4>
            <time className="mb-3 block text-sm leading-none font-normal text-gray-400">
              {time}
            </time>
            {responsibilities.map((responsibility, index) => {
              return (
                <p
                  key={index}
                  className="mb-2 text-base font-normal text-gray-500"
                >
                  {responsibility}
                </p>
              );
            })}
          </li>
        );
      })}
    </ol>
  );
}
