import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ onRatingChange, onRatingReset }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleStarClick = (currentRating) => {
    const newRating = rating === currentRating ? null : currentRating;
    setRating(newRating);
    onRatingChange(newRating);
  };

  // Reset rating state when resetRating is called
  const resetRating = () => {
    setRating(null);
  };

  // Use useEffect to listen to the onRatingReset callback
  useEffect(() => {
    if (onRatingReset) {
      onRatingReset(resetRating);
    }
  }, [onRatingReset]);

  return (
    <div className="flex items-center">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return(
          <label key={index}>
            <input
              type='radio'
              name='rating'
              value={currentRating}
              onClick={() => handleStarClick(currentRating)}
              className="hidden"
            />
              <FaStar 
                className='star' 
                size={35}
                color={currentRating <= (hover || rating) ? "rgb(249 115 22)" : "#d1d5db"}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
          </label>
        )
      })}
      <p className='ml-4'>Your Rating is {rating}</p>
    </div>
  );
};

export default StarRating;
