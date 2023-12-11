import React from "react";
import Chats from "../components/Chats";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

function Home() {
  return (
    <div className="items-center justify-center">
      <Navbar />
      <Search />

      {/* <Chats />
      <Sidebar /> */}
    </div>
  );
}

export default Home;
