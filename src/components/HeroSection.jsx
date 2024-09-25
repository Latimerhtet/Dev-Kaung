import React from "react";
import profile from "../assets/DevProfile.png";
import Typewriter from "typewriter-effect";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
const HeroSection = () => {
  return (
    <>
      <section className="w-4/5 flex  flex-col items-center gap-5 relative mobile:flex-col-reverse mobile:pt-[200px]">
        <div className="self-center laptop:pl-16 flex gap-4 text-[#dfb26e] laptop:hidden ">
          <a href="">
            <FacebookIcon className="cursor-pointer" />
          </a>
          <a href="">
            <InstagramIcon className="cursor-pointer" />
          </a>
          <a href="">
            <XIcon className="cursor-pointer" />
          </a>
          <a href="">
            <LinkedInIcon className="cursor-pointer" />
          </a>
          <a href="">
            <GitHubIcon className="cursor-pointer" />
          </a>
        </div>
        <div className="w-full flex justify-end mobile:text-center pt-10 pr-10 mobile:pr-2 ">
          <p className=" w-[300px] text-md p-1 laptop:border-y-2 laptop:border-dashed laptop:border-[#dfb26e]">
            Passionately building web applications and love learning more new
            technology.
          </p>
        </div>
        <div className="w-full absolute left-5 top-10 mobile:top-5 mobile:left-3">
          <p className="text-indigo-900 font-bold mb-6">Glad you're here</p>
          <p className="text-2xl">
            I am
            <span className="text-[#dfb26e] font-semibold">
              {" "}
              Kaung Htet San
            </span>
          </p>
          <div className="text-4xl mt-3 mobile:text-[29px]">
            <Typewriter
              options={{
                strings: [
                  "A programmar",
                  "Web Developer",
                  "MERN stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <img
          src={profile}
          alt="dev image"
          className="w-[280px] h-[280px] rounded-full mt-10"
        />
        <div className="self-start laptop:pl-16 flex gap-4 text-[#dfb26e] mobile:hidden">
          <a href="">
            <FacebookIcon className="cursor-pointer" />
          </a>
          <a href="">
            <InstagramIcon className="cursor-pointer" />
          </a>
          <a href="">
            <XIcon className="cursor-pointer" />
          </a>
          <a href="">
            <LinkedInIcon className="cursor-pointer" />
          </a>
          <a href="">
            <GitHubIcon className="cursor-pointer" />
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
