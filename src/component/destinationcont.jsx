import axios from "axios";
import React, { useState, useEffect } from "react";
import Cardwisata from "./cardwisata";
import Searchbar from "./searchbar";
import background from "../img/destinationbg.jpg";
import Navbar from "./navbar";
import Footer from "./footer";
import Balisafari from "../img/balisafari.jpg";
import Bedugul from "../img/bedugul.jpg";
import Museum from "../img/museumpasifika.jpg";
import Bhagawan from "../img/taman_bhagawan.jpg";
import Scrollbutton from "./scrollbutton";
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

  const handleClose = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setWisataData(res.data);
      setFilteredWisata(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-black-bg font-ibmflexmono overflow-x-hidden">
      <section
        className="bg-cover bg-center w-screen h-screen items-center justify-center flex"
        style={{ backgroundImage: `url(${background})` }}>
        <div className="absolute inset-0 bg-black opacity-30 h-screen"></div>
        <Navbar />
        <Scrollbutton/>
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

      <div className="px-6 sm:px-10 lg:px-24 py-8">
        <h1 className="text-white text-3xl font-bold text-center">Explore more place</h1>
        <div className="py-20">
          <div className="flex flex-col-reverse md:flex-row gap-y-10 gap-x-20 items-center">
            <div className="text-white md:w-[70rem]">
              <h1 className="font-bold text-2xl mb-5">Bali Safari and Marine Park</h1>
              <p className="font-sans font-light">The Amazing Taman Safari Bali, home to over a thousand amazing animals and your finest destination for an adventurous, fun and educational experience more than just a safari.</p>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img src={Balisafari} alt="" className="w-[100rem] h-[25rem] object-cover transition-all hover:scale-125"/>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row-reverse gap-y-10 gap-x-20 mt-20 sm:mt-32 items-center">
            <div className="text-white md:w-[70rem]">
              <h1 className="font-bold text-2xl mb-5">Bedugul</h1>
              <p className="font-sans font-light">Bedugul is a mountain lake resort area in Bali, Indonesia, located in the centre-north region of the island near Lake Bratan on the road between Denpasar and Singaraja. The area covers the villages of Bedugul itself, Candikuning, Pancasari, Pacung and Wanagiri amongst others.</p>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img src={Bedugul} alt="" className="w-[100rem] h-[25rem] object-cover transition-all hover:scale-125"/>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-y-10 gap-x-20 mt-20 sm:mt-32 items-center">
            <div className="text-white md:w-[70rem]">
              <h1 className="font-bold text-2xl mb-5">Museum Pasifika</h1>
              <p className="font-sans font-light">Museum Pasifika was established as a permanent institution to showcase the region styles and forms for all to study and enjoy.</p>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img src={Museum} alt="" className="w-[100rem] h-[25rem] object-cover transition-all hover:scale-125"/>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row-reverse gap-y-10 gap-x-20 mt-20 sm:mt-32 items-center">
            <div className="text-white md:w-[70rem]">
              <h1 className="font-bold text-2xl mb-5">Taman Bhagawan</h1>
              <p className="font-sans font-light">Taman Bhagawan is a unique private venue that captures the best of Indonesian culture combined with contemporary sophistication. Hand-carved joglos, intricately-designed buildings and beautiful Balinese statues and fountains are set among sweeping lush green lawns and tropical gardens adjoining the picturesque white sands of Nusa Dua.</p>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img src={Bhagawan} alt="" className="w-[100rem] h-[25rem] object-cover transition-all hover:scale-125"/>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Destinationcont;
