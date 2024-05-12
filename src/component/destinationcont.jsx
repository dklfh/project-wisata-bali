import React, { useState, useEffect } from "react";
import axios from "axios";
import Cardwisata from "./cardwisata";
import Searchbar from "./searchbar";
import background from "../img/destinationbg.jpg";
import Navbar from "./navbar";
import Footer from "./footer";

function Destinationcont() {
  const [wisataData, setWisataData] = useState([]);
  const [filteredWisata, setFilteredWisata] = useState([]);

  useEffect(() => {
    const fetchAllWisata = async () => {
      try {
        const res = await axios.get("http://localhost:8800");
        setWisataData(res.data);
        setFilteredWisata(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllWisata();
  }, []);

  const handleSearch = (query) => {
    const filteredData = wisataData.filter((wisata) =>
      wisata.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredWisata(filteredData);
  };

  const handleClose = () => {
    setFilteredWisata(wisataData); // Atur ulang filtered data menjadi data awal
  };
  
  return (
    <div className="bg-black-bg font-ibmflexmono overflow-x-hidden">
      <section
        className="bg-cover bg-center w-screen h-screen items-center justify-center flex"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30 h-screen"></div>
        <Navbar />
        <h1 className="text-white absolute w-64 text-center font-bold text-md font-ibmflexmono sm:text-lg md:text-3xl md:w-128 lg:w-160 lg:text-4xl">
          Feel free and enjoy the beauty of paradise Island
        </h1>
      </section>

      <div className="py-8 px-24 flex justify-center items-center w-screen ">
        <Searchbar onSearch={handleSearch} onClose={handleClose} />
      </div>

      <div className="flex flex-wrap justify-center p-4 gap-4">
        {filteredWisata.length > 0 ? (
          filteredWisata.map((wisata) => (
            <Cardwisata key={wisata.id} wisata={wisata} />
          ))
        ) : (
          <p className="text-white">No matching results found.</p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Destinationcont;
