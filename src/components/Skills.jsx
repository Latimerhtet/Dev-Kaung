import React from "react";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillSet from "./Utils-Components/SkillSet";
import tailwind from "../assets/tailwindcss-icon-svgrepo-com.svg";
import express from "../assets/express-svgrepo-com.svg";
const Skills = () => {
  return (
    <section className="flex flex-col gap-6 items-center">
      <p className="text-2xl font-semibold p-2 border-y-2 border-[#dfb26e]">
        Tech Skills & Technology
      </p>
      <div className=" flex gap-10 w-full justify-center flex-wrap max-w-4xl">
        <SkillSet>
          <FontAwesomeIcon
            icon={faHtml5}
            className=" text-[#e34c27] text-6xl"
          />
        </SkillSet>

        <SkillSet>
          <FontAwesomeIcon
            icon={faCss3Alt}
            className=" text-[#274ce3] text-6xl"
          />
        </SkillSet>
        <SkillSet>
          <FontAwesomeIcon icon={faJs} className=" text-[#e8d34d] text-6xl" />
        </SkillSet>
        <SkillSet>
          <FontAwesomeIcon
            icon={faReact}
            className=" text-[#00d9ff] text-6xl"
          />
        </SkillSet>
        <SkillSet>
          <FontAwesomeIcon
            icon={faNodeJs}
            className=" text-[#529e41] text-6xl"
          />
        </SkillSet>
        <SkillSet>
          <img src={tailwind} alt="tailwind" />
        </SkillSet>
        <SkillSet>
          <img src={express} alt="express" />
        </SkillSet>
      </div>
    </section>
  );
};

export default Skills;
