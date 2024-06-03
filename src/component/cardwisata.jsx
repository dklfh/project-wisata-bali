import React from "react";
import { Link } from "react-router-dom";

function Cardwisata({ wisata, isSelected, onSelect, showCheckbox }) {
  const { id, title, lokasi, desc, cover, category } = wisata;
  return (
    <div className="wisata flex flex-col items-center gap-3 p-4 border-2 rounded-lg w-80 border-white max-w-md min-h-96 mb-10 py-25">
      <div className="flex flex-col gap-2 items-center wisata">
        <img src={`http://localhost:8800/uploads/${cover}`} className="mb-3 w-60 h-44 object-cover" alt={title} />
        <h1 className="text-white font-semibold leading-6 text-lg"> {title} {category}</h1>
        <p className="text-orange-500 text-sm font-medium">{lokasi}</p>
        <p className="text-xs text-white font-normal text-justify my-3">{desc}</p>
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
