import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Muugii.
            <br className="hidden lg:inline-block" />I like software development.
          </h1>
          <p className="mb-8 leading-relaxed">
            Hello, my name is Muugii Munkhbold, and I am a Full Stack Software Developer based out of Seattle, Wa. Please follow along my coding journey as I learn more and develop my skills. 
          </p>
          <p>
            My background is in earth sciences, more specifically geology and geo-chemistry. I have worked in the civil engineering industry for the past 5 years as a CAD Designer. Over the summer of 2022, I decided to act on my interests and passion, and enroll at the University of Denver's Full Stack Software Development Bootcamp. Over the course of the bootcamp, I have learned and gotten to work on intimately with JavaScript and frameworks such as React, MongoDB, GraphQL, REST & RESTful APIs, NodeJS, ExpressJS, HTML, CSS, JavaScript, Bootstrap, JQuery and many more. I graduated from the bootcamp in February of 2023 with flying colors and am currently looking for an opportunity to showcase my expertise working in the Software Development industry.
          </p>
          <br></br>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./IMG_3980.jpg"
          />
        </div>
      </div>
    </section>
  );
}
