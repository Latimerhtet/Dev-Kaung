import React from "react";

const Heading = ({ title, refer }) => {
  return (
    <p
      className="mobile:w-[75vw] text-2xl font-semibold p-2 border-y-2 border-[#dfb26e]"
      ref={refer}
    >
      {title}
    </p>
  );
};

export default Heading;
