import React from "react";
import profileImg from "../assets/IMG-20220608-WA0075.jpg";

const Navbar = () => {
  return (
    <div className="flex fixed z-10 h-12 p-2 bg-slate-200 w-full top-0 justify-between">
      <div>
        <div className="flex gap-2">
          <img
            src={profileImg}
            alt=""
            className="h-8 w-8 object-cover rounded-full cursor-pointer"
          />
          <p className="font-semibold text-lg text-gray-500"></p>
        </div>
      </div>
      <div>
        <span className="text-lg font-bold">Chat With Anyone</span>
      </div>
      <div>
        <button className="border rounded-xl px-2 py-1 bg-slate-100">
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Navbar;
