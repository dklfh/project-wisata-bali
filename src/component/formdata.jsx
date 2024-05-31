import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Formdata() {
  const [wisata, setWisata] = useState({
    title: "",
    desc: "",
    cover: "",
    lokasi: "",
  });

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setWisata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/", wisata);
      navigate("/admin");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  console.log(wisata);

  return (
    <div class="">
      <section class="rounded-md p-2 bg-transparent ">
        <div class="flex items-center justify-center py-10 text-white ">
          <div class="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md border-2 rounded-xl">
            <div class="mb-2">
              <h2 class="text-2xl font-bold leading-tight">Add Data Wisata</h2>
            </div>

            <form class="mt-5">
              <div class="space-y-4">
                <div>
                  <label class="text-base font-medium text-gray-900">
                    Title of Destination
                  </label>
                  <div class="mt-2">
                    <input
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="wisata title"
                      name="title"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label class="text-base font-medium text-gray-900">
                    Add Location
                  </label>
                  <div class="mt-2">
                    <input
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="wisata lokasi"
                      name="lokasi"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-between">
                    <label class="text-base font-medium text-gray-900">
                      Add Description
                    </label>
                  </div>
                  <div class="mt-2">
                    <input
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="wisata desc"
                      name="desc"
                      onChange={handleChange}
                    />
                    <div class="mt-2">
                      <select
                        id="pricingType"
                        name="pricingType"
                        class="mt-2 w-full h-10 border-2 border-button-bg  focus:outline-none focus:border-button-bg  text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                      >
                        <option value="Destination Category" selected="">
                          Select Destination Category
                        </option>
                        <option value="Beach">Beach</option>
                        <option value="Mountain">Mountain</option>
                        <option value="Club">Club</option>
                      </select>
                    </div>
                  </div>
                  <div class="flex items-center justify-between mt-3">
                    <label class="text-base font-medium text-gray-900">
                      Destination Picture
                    </label>
                  </div>
                  <div class="mt-2">
                    <input
                      class="file-input w-full max-w-xs"
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
                    class="inline-flex w-full items-center justify-center rounded-md bg-button-bg px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-3x00"
                    type="button"
                  >
                    Add Data
                  </button>
                  {error && "Something went wrong!"}
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
