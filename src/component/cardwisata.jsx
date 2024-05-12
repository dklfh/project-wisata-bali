// Cardwisata.jsx
import React from "react";
import Uluwatu from "../img/uluwatu.jpg"
function Cardwisata({ wisata }) {
  return (
    <div className="wisata flex flex-col items-center gap-3 p-4 border-2 rounded-lg border-white max-w-md min-h-96 mb-10 py-25">
      <div className="flex flex-col gap-2 items-center wisata">
        <img src={Uluwatu} alt={wisata.title} className="mb-3" />
        <h1 className="text-white font-semibold leading-6 text-lg">
          {wisata.title}
        </h1>
        <p className="text-orange-500 text-sm font-medium">{wisata.lokasi}</p>
        <p className="text-xs text-white font-normal text-justify">
          {wisata.desc}
        </p>
        <button className="p-2 rounded-lg bg-button-bg text-white">View More</button>
      </div>
    </div>
  );
}

export default Cardwisata;
