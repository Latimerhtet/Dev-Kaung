import React from "react";

const SkillSet = ({ children }) => {
  return (
    <div
      className="w-[120px] h-[120px] flex items-center bg-white cursor-pointer justify-center border-2 border-dashed border-[#dfb26e] hover:-rotate-12 transition-all duration-
"
    >
      {children}
    </div>
  );
};

export default SkillSet;
