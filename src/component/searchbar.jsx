// Searchbar.jsx
import React, { useState } from "react";

function Searchbar({ onSearch, onClose }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };
  const handleReset = () => {
    onClose(); // Panggil fungsi onClose saat tombol "Close" diklik
    setQuery(""); // Atur query kembali menjadi string kosong
  };

  return (
    <div className="p-3 flex items-center rounded-xl flex-row border-2 flex-grow gap-5">
      <form onSubmit={handleSubmit} className="flex gap-4 w-full">
        <input
          className="bg-white p-3 rounded-2xl w-full"
          type="text"
          placeholder="Search Destination"
          value={query}
          onChange={handleChange}
        />
        <button className="flex flex-row items-center p-3 rounded-2xl gap-2 bg-button-bg text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
          >
            <path
              d="M10.8305 19.4883C15.4831 19.4883 19.2548 15.7166 19.2548 11.064C19.2548 6.41144 15.4831 2.63977 10.8305 2.63977C6.17792 2.63977 2.40625 6.41144 2.40625 11.064C2.40625 15.7166 6.17792 19.4883 10.8305 19.4883Z"
              stroke="white"
              strokeWidth="1.40404"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.2531 20.1339C18.7492 21.6315 19.8818 21.7813 20.7523 20.4708C21.5479 19.2727 21.0237 18.2899 19.5823 18.2899C18.5152 18.2805 17.9161 19.1136 18.2531 20.1339Z"
              stroke="white"
              strokeWidth="1.40404"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Search
        </button>

        <button
          title="Close"
          class="group cursor-pointer outline-none hover:rotate-90 duration-300"
          onClick={handleReset}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            class="stroke-indigo-400 fill-none group-hover:fill-red-800 group-active:stroke-indigo-200 group-active:fill-red-600 group-active:duration-0 duration-300"
          >
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke-width="1.5"
            ></path>
            <path d="M8 12H16" stroke-width="1.5"></path>
            <path d="M12 16V8" stroke-width="1.5"></path>
          </svg>
        </button>

      </form>
    </div>
  );
}

export default Searchbar;
