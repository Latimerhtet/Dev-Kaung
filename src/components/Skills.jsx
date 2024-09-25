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
import mongo from "../assets/mongodb-ar21.svg";
import sql from "../assets/sql-file-format-svgrepo-com.svg";
import Heading from "./Utils-Components/Heading";
const Skills = ({ refer }) => {
  return (
    <section
      className="flex flex-col gap-6 items-center"
      id="skills"
      ref={refer}
    >
      <Heading title={"Tech Skills & Technologies"} />

      <div className=" flex gap-10 w-full justify-center flex-wrap max-w-4xl">
        <SkillSet color={"border-[#e34c27]"}>
          <FontAwesomeIcon
            icon={faHtml5}
            className=" text-[#e34c27] text-6xl"
          />
        </SkillSet>
        <SkillSet color={"border-[#274ce3]"}>
          <FontAwesomeIcon
            icon={faCss3Alt}
            className=" text-[#274ce3] text-6xl"
          />
        </SkillSet>
        <SkillSet color={"border-[#e8d34d]"}>
          <FontAwesomeIcon icon={faJs} className=" text-[#e8d34d] text-6xl" />
        </SkillSet>
        <SkillSet color={"border-[#00d9ff]"}>
          <FontAwesomeIcon
            icon={faReact}
            className=" text-[#00d9ff] text-6xl"
          />
        </SkillSet>
        <SkillSet color={"border-[#529e41]"}>
          <FontAwesomeIcon
            icon={faNodeJs}
            className=" text-[#529e41] text-6xl"
          />
        </SkillSet>
        <SkillSet color={"border-[#18baba]"}>
          <img src={tailwind} alt="tailwind" />
        </SkillSet>
        <SkillSet color={"border-[#737373]"}>
          <img src={express} alt="express" />
        </SkillSet>
        <SkillSet color={"border-[#6cab48]"}>
          <img src={mongo} alt="mongodb" />
        </SkillSet>
        <SkillSet color={"border-black"}>
          <img src={sql} alt="sql" />
        </SkillSet>
      </div>
    </section>
  );
};

export default Skills;
