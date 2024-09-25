import React from "react";
import Heading from "./Utils-Components/Heading";
import { TfiEmail } from "react-icons/tfi";
import { MdPhoneAndroid } from "react-icons/md";
const Hireme = ({ refer }) => {
  return (
    <>
      <div ref={refer} className="w-[50vw] flex flex-col gap-4 items-center ">
        <Heading title={"Get in Touch with me!"} />
        <div className="flex gap-4 mobile:flex-col">
          <div className="w-[300px] p-2 border-[2px] border-yellow-500 rounded-md flex  gap-6 items-center text-yellow-500">
            <TfiEmail className="text-xl" />

            <div>
              <p className="font-semibold text-lg">Email</p>
              <p>latimerhtet@gmail.com</p>
            </div>
          </div>
          <div className="w-[300px] p-2 border-[2px] border-yellow-500 rounded-md flex  gap-6 items-center text-yellow-500">
            <MdPhoneAndroid className="text-xl" />
            <div>
              <p className="font-semibold text-lg">Phone Number</p>
              <p>09789778609</p>
            </div>
          </div>
        </div>
      </div>
    </>
    // <form
    //   className="w-[50vw] flex flex-col gap-4 items-center "
    //   id="hireme"
    //   ref={refer}
    // >
    //   <Heading title={"Contact me!"} />
    //   <input
    //     type="email"
    //     placeholder="Email..."
    //     className="p-2 w-full outline-none border-2 border-dashed border-slate-400"
    //   />
    //   <textarea
    //     placeholder="message..."
    //     rows={8}
    //     className="p-2 w-full outline-none border-2 border-dashed border-slate-400"
    //   />
    //   <button
    //     type="submit"
    //     className="p-2 bg-[#dfb26e] text-white rounded-lg self-end "
    //   >
    //     message
    //   </button>
    // </form>
  );
};

export default Hireme;
