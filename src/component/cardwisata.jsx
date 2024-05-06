import uluwatu from "../img/uluwatu.jpg";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cardwisata() {
  const [wisata, setWisata] = useState([]);

  useEffect(() => {
    const fetchAllWisata = async () => {
      try {
        const res = await axios.get("http://localhost:8800");
        setWisata(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllWisata();
  }, []);

  return (
    <div class="grid grid-cols-4 gap-2">
        {wisata.map((wisata) => (
          <div class="wisata flex flex-col items-center gap-3 p-4 border-2 rounded-lg border-white max-w-md min-h-96 wisata mb-10 py-25">
          <div class="flex flex-col gap-0 items-center wisata">
          <div key={wisata.id} className="wisata">
            <img src={uluwatu} alt="uluwatu" class="mb-3"></img>
            <h1 class="text-white text-center font-semibold leading-6 text-lg">{wisata.title} </h1>
            <p class="my-1 text-orange-500 text-sm text-center font-medium">Pecatu, Kabupaten Badung</p>
            <p class="text-xs text-white font-normal text-justify">{wisata.desc}</p>
          </div>
          </div>
          </div>
        ))}
    </div>
  )
}
export default Cardwisata;
