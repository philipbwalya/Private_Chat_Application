import React from "react";

function Search() {
  return (
    <div className="flex border rounded-full m-4 px-3 py-2 w-auto shadow-lg">
      <form action="" className="flex">
        <input
          type="text"
          placeholder="Search here"
          className="w-72 outline-none"
        />
      </form>
      <button>search</button>
    </div>
  );
}

export default Search;
