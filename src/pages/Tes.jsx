import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tes = () => {
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
      <div>
        <h1>GOGOBALI</h1>
        <div className="wisata">
          {wisata.map((wisata) => (
            <div key={wisata.id} className="wisata">
              <img src={wisata.cover} alt="" />
              <h2>{wisata.title}</h2>
              <p>{wisata.desc}</p>
            </div>
          ))}
        </div>
      </div>
    )
  
  }

export default Tes
