import React from "react";
import Chats from "../components/Chats";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Chat from "../components/Chat";

function Home() {
  return (
    <div className="flex flex-row">
      <Navbar />
      <div className="flex ">
        <div className="">
          {/* <Search /> */}
          {/* <Chats /> */}
        </div>
        <div className="">
          <Chat />
        </div>
      </div>
      {/* <Sidebar /> */}
    </div>
  );
}

export default Home;
