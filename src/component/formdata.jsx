import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Formdata({ onClose }) {
  const [wisata, setWisata] = useState({
    title: "",
    location: "",
    desc: "",
    cover: "",
    lokasi:"",
  });

  const [error, setError] = useState(false);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setWisata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    // Validasi input
    if (wisata.title && wisata.location && wisata.desc && wisata.cover) {
      setValidated(true);
      try {
        await axios.post("http://localhost:8800/", wisata);
        navigate("/admin");
      } catch (err) {
        console.log(err);
        setError(true);
      }
    } else {
      // Jika input belum lengkap, set validated menjadi false
      setValidated(false);
    }
  };


  console.log(wisata);

  return (
    <div className="overlay">
      <div className="modal">
        <div className="flex  my-3 items-center justify-center ">
          <div className="xl:mx-auto shadow-xl p-4 xl:w-full xl:max-w-sm 2xl:max-w-md border-2 border-white rounded-xl">
            <div className="mb-2"></div>
            <h2 className="text-2xl font-bold leading-tight text-white">Add Data Wisata</h2>
            <form className="mt-5">
              <div className="space-y-4">
                <div>
                  <label className="text-base font-bold text-white">
                    Title of Destination
                  </label>
                  <div className="mt-2 text-white">
                    <input
                      placeholder="Title"
                      type="text"
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="title"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-bold text-white">
                    Add Location
                  </label>
                  <div class="mt-2">
                    <input
                      placeholder="lokasi"
                      type="text"
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="lokasi"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-basefont- font-bold text-white">
                      Add Description
                    </label>
                  </div>
                  <div class="mt-2">
                  <input
                      placeholder="Location"
                      type="desc"
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="desc"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <label className="text-base font-bold text-white">
                      Destination Picture
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="file-input w-full max-w-xs"
                      type="file"
                      placeholder="wisata cover"
                      name="cover"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleClick}
                    className="inline-flex w-full items-center justify-center rounded-md bg-button-bg px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-3x00"
                    type="button"
                  >
                    Add Data
                  </button>
                  {!validated && <p className="text-red-500">Please fill in all fields</p>}
                  {error && "Something went wrong!"}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formdata;
