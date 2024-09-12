import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);
  return (
    <nav className="w-full flex justify-center items-center p-2 relative">
      <div className="w-4/5 flex justify-between items-center p-3 bg-white border-2 border-dashed border-slate-700 rounded-lg">
        <div>
          <p>Dev-Kaung</p>
        </div>
        <div className="flex gap-5 items-center mobile:hidden mobile:flex-col mobile:items-center justify-center">
          <button>About</button>
          <button>Skills</button>
          <button>Projects</button>
        </div>
        <div className="mobile:hidden">
          <button className="p-1 px-2 rounded-lg bg-stone-500 text-white">
            Hire me
          </button>
        </div>

        <div
          className={`laptop:scale-0 scale-0 w-[80%] absolute left-[43px]  top-16 bg-white transition-all duration-[0.2s]  z-40 rounded-lg border-2 border-dashed border-slate-700 ${
            openMenu && "scale-95"
          }`}
        >
          <div className="w-full flex flex-col items-center gap-5 p-2">
            <button>About</button>
            <button>Skills</button>
            <button>Projects</button>
            <button className="p-1 px-2 rounded-lg bg-stone-500 text-white">
              Hire me
            </button>
          </div>
        </div>

        <Bars3Icon
          className="w-5 laptop:hidden mobile:visible"
          onClick={() => setOpenMenu(!openMenu)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
