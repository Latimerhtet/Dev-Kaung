import React from "react";

const SkillSet = ({ children, color }) => {
  return (
    <div
      className={`w-[120px] h-[120px] flex items-center bg-white cursor-pointer justify-center border-2 border-dashed ${color}  hover:-rotate-12 transition-all duration-200
`}
    >
      {children}
    </div>
  );
};

export default SkillSet;
