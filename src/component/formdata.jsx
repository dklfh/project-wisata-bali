import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Formdata() {
  const [wisata, setWisata] = useState({
    title: "",
    desc: "",
    cover: "",
    lokasi: "",
    category: "",
  });

  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setWisata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setWisata((prev) => ({ ...prev, cover: e.target.files[0].name }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    if (!wisata.title || !wisata.desc || !wisata.cover || !wisata.lokasi || !wisata.category) {
      setError(true);
      return;
    }

    const formData = new FormData(); // Create a FormData object
    formData.append('image', file); // Append the file to FormData

    try {
      // Send data and file simultaneously
      await axios.post("http://localhost:8800/", wisata); // Send data
      await axios.post('http://localhost:8800/upload', formData); // Send file

      // Navigate to admin page after success
      navigate("/admin");
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <div className="">
      <section className="rounded-md p-2 bg-transparent ">
        <div className="flex items-center justify-center py-10 text-white ">
          <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md border-2 rounded-xl">
            <div className="mb-2">
              <h2 className="text-2xl font-bold leading-tight">Add Data Wisata</h2>
            </div>

            <form className="mt-5">
              <div className="space-y-4">
                <div>
                  <label className="text-base font-medium text-white">Title of Destination</label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Wisata title"
                      name="title"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-medium text-white">Add Location</label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Wisata lokasi"
                      name="lokasi"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-white">Add Description</label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Wisata desc"
                      name="desc"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mt-2">
                    <select
                      id="pricingType"
                      name="category"
                      onChange={handleChange}
                      className="mt-2 w-full h-10 border-2 border-button-bg focus:outline-none focus:border-button-bg text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                    >
                      <option value="Destination Category" selected="">Select Destination Category</option>
                      <option value="Beach">Beach</option>
                      <option value="Mountain">Mountain</option>
                      <option value="Club">Club</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <label className="text-base font-medium text-white">Destination Picture</label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="file-input w-full max-w-xs"
                      type="file"
                      name="cover"
                      onChange={handleFile}
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
                  {error && <p>Something went wrong!</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Formdata;
