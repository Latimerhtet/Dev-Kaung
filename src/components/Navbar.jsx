import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
const Navbar = ({ aboutRef, skillsRef, projectsRef, hireRef, topRef }) => {
  const { scrollY } = useScroll();
  const [openMenu, setOpenMenu] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    // <motion.div
    //   variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
    //   animate={hidden ? "hidden" : "visible"}
    //   transition={{ duration: 0.35, ease: "easeInOut" }}
    //   className={`w-full flex justify-center items-center  `}
    // >
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`w-full flex justify-center items-center p-2 absolute top-0 z-30 `}
    >
      <div className="w-4/5 flex justify-between items-center p-3 bg-white border-2 border-dashed border-slate-700 rounded-lg">
        <a
          className="font-semibold text-2xl cursor-pointer"
          onClick={() =>
            topRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "start",
            })
          }
        >
          Dev-Kaung
        </a>

        <div className="flex gap-6 items-center mobile:hidden mobile:flex-col mobile:items-center justify-center">
          <button
            id="about"
            onClick={() =>
              aboutRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              })
            }
          >
            About
          </button>
          <button
            onClick={() =>
              skillsRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              })
            }
            href="#skills"
          >
            Skills
          </button>
          <button
            onClick={() =>
              projectsRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              })
            }
            href="#projects"
          >
            Projects
          </button>
        </div>
        <div className="mobile:hidden">
          <button
            onClick={() =>
              hireRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="p-1 px-2 rounded-md bg-[#ffbd59] text-white hover:scale-100 transition-all duration-150"
          >
            Hire me
          </button>
        </div>

        <div
          className={`laptop:scale-0 scale-0 w-[80%] absolute left-[43px]  top-16 bg-white transition-all duration-[0.2s]  z-40 rounded-lg border-2 border-dashed border-slate-700 ${
            openMenu && "scale-95"
          }`}
        >
          <div className="w-full flex flex-col items-center gap-5 p-2">
            <button
              onClick={() =>
                aboutRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                })
              }
            >
              About
            </button>
            <button
              onClick={() =>
                skillsRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                })
              }
            >
              Skills
            </button>
            <button
              onClick={() =>
                projectsRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                })
              }
            >
              Projects
            </button>
            <button
              onClick={() =>
                hireRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="p-1 px-2 rounded-lg bg-stone-500 text-white"
            >
              Hire me
            </button>
          </div>
        </div>

        {openMenu ? (
          <XMarkIcon
            className="w-5 laptop:hidden mobile:visible"
            onClick={() => setOpenMenu(false)}
          />
        ) : (
          <Bars3Icon
            className="w-5 laptop:hidden mobile:visible"
            onClick={() => setOpenMenu(true)}
          />
        )}
      </div>
    </motion.nav>
    // </motion.div>
  );
};

export default Navbar;
