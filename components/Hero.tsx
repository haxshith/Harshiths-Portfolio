import React from 'react';

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-cover bg-repeat" style={{ backgroundImage: "url('https://i.pinimg.com/originals/a3/f3/ab/a3f3abe546f87d7bceb19ff1f3eea602.gif')", backgroundPosition: "center 10%" }}>
      <div className="w-full md:w-1/2 text-center p-7 md:p-0">
        <h1 className="mb-5 md:text-7xl text-3xl font-bold">
          Hello World, I'm <span className="text-[#007fff]">Harshith</span>
        </h1>
        <a href="/Harshiths_Resume.pdf" download="Harshith's_Resume" className="bg-blue-500 text-white px-6 py-3 rounded-full mt-2 hover:bg-blue-700">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
