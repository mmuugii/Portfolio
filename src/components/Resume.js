import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";

export default function Resume() {
  return (
    <section id="resume">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Resume
        </h1>
        <div>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Attached is a copy of my resume. Please feel free to grab!
          </p><br></br>
          <button className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            <a href="./Munkhbold_Resume.pdf" download = "Munkhbold_Resume.pdf">
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
