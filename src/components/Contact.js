import React from "react";
import { contacts } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-10 py-20 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 ">
            Contact Me
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Phone: +91 7057648283 <br/> 
            Email: mitraaditya1357@gmail.com <br/>
            Feel free to connect with me on any of these platforms :)
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {contacts.map((contact) => (
            <div key={contact.name} className="p-4 md:w-1/3 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                {contact.icon} &nbsp;&nbsp;
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="title-font font-medium text-white"
                >
                  {contact.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
