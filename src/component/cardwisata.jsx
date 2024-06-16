import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

function Cardwisata({ wisata, isSelected, onSelect, showCheckbox }) {
  const { id, title, lokasi, desc, cover, category } = wisata;
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/comments/${id}`);
        const ratings = response.data.map(comment => comment.rating);
        if (ratings.length > 0) {
          const total = ratings.reduce((acc, rating) => acc + rating, 0);
          const average = total / ratings.length;
          setAverageRating(average.toFixed(1));
        } else {
          setAverageRating(0);
        }
      } catch (error) {
        console.error('Error fetching ratings:', error);
      }
    };

    fetchRatings();
  }, [id]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <div className="flex mt-2">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} size={18} color="#f6995c" />
        ))}
        {halfStar === 1 && <FaStar key="half" size={18} color="#f6995c" className="half-star" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaStar key={index + fullStars + 1} size={18} color="#d1d5db" />
        ))}
      </div>
    );
  };

  return (
    <div className="wisata flex flex-col items-center gap-3 p-4 border-2 rounded-lg w-80 border-white max-w-md min-h-96 mb-10 py-25">
      <div className="flex flex-col gap-2 items-center wisata">
        <img src={`http://localhost:8800/uploads/${cover}`} className="mb-3 w-60 h-44 object-cover" alt={title} />
        <h1 className="text-white font-semibold leading-6 text-lg"> {title} {category}</h1>
        <p className="text-orange-500 text-sm font-medium">{lokasi}</p>
        <p className="text-xs text-white font-normal text-justify mt-3">{desc}</p>
        <div className="text-center text-white flex gap-3 mb-3">
          <h2 className="font-bold text-2xl">{averageRating}</h2>
          {renderStars(averageRating)}
        </div>
        <Link to={`/view/${id}`} className="p-2 rounded-lg bg-button-bg text-white">
          View More
        </Link>
        {showCheckbox && (
          <input 
            type="checkbox"
            checked={isSelected}
            onChange={() => onSelect(id)}
            className="mt-2"
          />
        )}
      </div>
    </div>
  );
}

export default Cardwisata;
