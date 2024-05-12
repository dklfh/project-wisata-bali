import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starIndex) => {
    // Jika rating sudah sesuai dengan index bintang yang diklik,
    // maka atur rating menjadi 0 (untuk menghapus rating).
    // Jika rating belum sesuai, maka atur rating menjadi index + 1.
    setRating((prevRating) => (prevRating === starIndex + 1 ? 0 : starIndex + 1));
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          onClick={() => handleStarClick(index)}
          className={`cursor-pointer ${index < rating ? 'text-orange-500' : 'text-gray-400'}`}
        >
          <path
            fill={index < rating ? '#f6995c' : 'none'}
            stroke="#F6995C"
            strokeLinejoin="round"
            d="m12 2l3.104 6.728l7.358.873l-5.44 5.03l1.444 7.268L12 18.28L5.534 21.9l1.444-7.268L1.538 9.6l7.359-.873z"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
