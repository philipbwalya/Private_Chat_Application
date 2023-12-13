function Search() {
  return (
    <div className=" relati ve w-auto shadow-lg top-12 sticky z-50 bg-slate-100 py-3">
      <div className="border rounded-full mx-3 mb-2 px-3 pb-1 flex">
        <form action="" className="flex w-full">
          <input
            type="text"
            placeholder="Search..."
            className="pl-5 pr-3 py-1 w-full outline-none bg-transparent"
          />
        </form>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Search;
