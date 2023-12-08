import React from "react";
import Chats from "../components/Chats";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Chats />
      <Sidebar />
    </div>
  );
}

export default Home;
