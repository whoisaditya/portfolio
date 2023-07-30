import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 sm:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col sm:flex-row items-center">
        <a
          href="#about"
          className="title-font font-medium text-white mb-4 sm:mb-0 text-xl"
        >
          Aditya Mitra
        </a>
        <nav className="sm:ml-auto sm:py-1 sm:pl-4	flex flex-wrap items-center text-base justify-center pr-10">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1mmKMoPoxBZ1k0OXzQZ63uywMEHAWbyBs/view?usp=sharing"
            className="mr-5 hover:text-white"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
