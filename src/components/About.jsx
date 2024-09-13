import React from "react";

const About = () => {
  return (
    <section className="w-4/5 flex gap-3 justify-center py-8">
      <div className="flex flex-col gap-6 items-center text-center">
        <h2 className="text-2xl font-semibold p-2 border-y-2 border-[#dfb26e]">
          Bit About Me!
        </h2>
        <p className="laptop:w-3/5">
          I am a junior enthusiastic web developer. Motivated and
          detail-oriented aspiring web developer with a strong foundation in
          HTML, CSS, and JavaScript. Proficient in responsive design and
          familiar with front-end frameworks like React and Tailwind. Passionate
          about learning new technologies and contributing to collaborative
          projects. Eager to apply coding skills and problem-solving abilities
          in a dynamic development environment. Ready to grow and adapt in a
          junior role.
        </p>
        <div className="flex gap-8 mt-3">
          <button className=" p-2 bg-yellow-400 border-y-2 hover:border-y-yellow-400 hover:bg-slate-100">
            Get in Touch
          </button>
          <button className="bg-indigo-600 text-white p-2 rounded-md hover:scale-95 transition-all duration-150">
            Explore my skills
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
