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
            width="3em"
            height="3em"
            viewBox="0 0 36 36"
          >
            <path
              fill="#F6995C"
              d="m19.61 18l4.86-4.86a1 1 0 0 0-1.41-1.41l-4.86 4.81l-4.89-4.89a1 1 0 0 0-1.41 1.41L16.78 18L12 22.72a1 1 0 1 0 1.41 1.41l4.77-4.77l4.74 4.74a1 1 0 0 0 1.41-1.41Z"
              className="clr-i-outline clr-i-outline-path-1"
            ></path>
            <path
              fill="#F6995C"
              d="M18 34a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-30a14 14 0 1 0 14 14A14 14 0 0 0 18 4"
              className="clr-i-outline clr-i-outline-path-2"
            ></path>
            <path fill="none" d="M0 0h36v36H0z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
