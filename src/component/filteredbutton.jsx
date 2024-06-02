import React, { useState } from 'react';

const FilteredButton = ({ onFilter }) => {
  const handleButtonClick = (category) => {
    onFilter(category);
  };

  return (
    <div className="flex gap-3">
      <button
        className="text-white px-4 md:px-5 py-2 md:py-3 bg-button-bg font-bold rounded-full"
        onClick={() => handleButtonClick('Beach')}
      >
        Beach
      </button>
      <button
        className="text-white px-4 md:px-5 py-2 md:py-3 bg-button-bg font-bold rounded-full"
        onClick={() => handleButtonClick('Mountain')}
      >
        Mountain
      </button>
      <button
        className="text-white px-4 md:px-5 py-2 md:py-3 bg-button-bg font-bold rounded-full"
        onClick={() => handleButtonClick('Club')}
      >
        Club
      </button>
    </div>
  );
};

export default FilteredButton;