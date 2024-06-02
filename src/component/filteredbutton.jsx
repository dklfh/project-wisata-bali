import React, { useState } from 'react';

const FilteredButton = ({ onFilter,onResetFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
    onFilter(category);
  };

  return (
    <div className="flex gap-3">
      {['Beach', 'Mountain', 'Club'].map((category) => (
        <button
          key={category}
          className={`text-white px-4 md:px-5 py-2 md:py-3 font-bold rounded-xl ${
            selectedCategory === category ? 'bg-button-selected' : 'bg-button-bg'
          }`}
          onClick={() => handleButtonClick(category)}
        >
          {category}
        </button>
      ))}
      {selectedCategory && (
        <button
          title="Close"
          className="group cursor-pointer outline-none"
          onClick={() => { setSelectedCategory(null); onResetFilter(); }}
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
      )}
    </div>
  );
};

export default FilteredButton;
