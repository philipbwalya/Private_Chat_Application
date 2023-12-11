import React from "react";
// import profileImg from "./public/";

const Navbar = () => {
  return (
    <div className="justify-between flex mx-5">
      <div>
        <span>Phil Chat</span>
      </div>
      <div className="flex gap-2">
        <img src="" alt="" />
        <p>philip bwalya</p>
        <button className="border rounded-xl">SignOut</button>
      </div>
    </div>
  );
};

export default Navbar;
