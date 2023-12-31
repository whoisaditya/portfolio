import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-10 py-20 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Weird things that I play around with :)
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.name} className="p-2 md:w-1/4 w-4 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center w-50">
                {skill.icon}
                <span className="title-font font-medium text-white">
                  &nbsp;&nbsp; {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
