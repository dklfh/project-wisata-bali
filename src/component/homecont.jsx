import background from "../img/home-background.jpg";
import kuta from "../img/kuta.jpg";
import sanur from "../img/sanur.jpg";
import buleleng from "../img/buleleng.jpg";
import banner from "../img/banner.png";
import Navbar from "./navbar";
import Footer from "./footer";
import Cardwisata from "./cardwisata";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FilteredButton from "./filteredbutton";
import { Link } from "react-router-dom";
import Homevideo from "../video/homevideo.mp4";
import Scrollbutton from "./scrollbutton";
import Testimonialsection from "./testimonials";

function Homecont() {
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

  const handleFilter = (category) => {
    const filteredData = wisataData.filter(
      (wisata) => wisata.category === category
    );
    setFilteredWisata(filteredData);
  };

  const resetFilter = () => {
    setFilteredWisata(wisataData);
  };

  useEffect(() => {
    const sortWisataByRating = async () => {
      const promises = wisataData.map(async (wisata) => {
        try {
          const response = await axios.get(`http://localhost:8800/comments/${wisata.id}`);
          const ratings = response.data.map(comment => comment.rating);
          const averageRating = ratings.length > 0 
            ? (ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length).toFixed(1)
            : 0;
          return { ...wisata, averageRating: parseFloat(averageRating) };
        } catch (error) {
          console.error('Error fetching ratings:', error);
          return { ...wisata, averageRating: 0 };
        }
      });

      const updatedWisataList = await Promise.all(promises);
      const sortedList = updatedWisataList.sort((a, b) => b.averageRating - a.averageRating);
      setFilteredWisata(sortedList);
    };

    if (wisataData.length > 0) {
      sortWisataByRating();
    }
  }, [wisataData]);

  return (
    <div className="bg-black-bg font-ibmflexmono overflow-x-hidden">
      <Navbar />
      <Scrollbutton />

      {/* Home Section */}
      <section
        class="relative h-screen flex flex-col items-center justify-center text-center text-white "
        style={{
          maskImage: `linear-gradient(
        to top,
        rgba(255, 0, 0, 0) 0%,
        rgb(69, 211, 22) 12.5%,
        rgb(65, 22, 221) 87.5%,
        rgba(20, 225, 222, 0) 100%
            )`,
          backgroundImage: `url(${background})`,
        }}
      >
        <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            class="absolute object-cover"
            src={Homevideo}
            autoPlay
            muted
          ></video>
        </div>
        <div class="video-content space-y-2 z-10">
          <h1 className="text-white  w-64 text-center font-bold text-md font-ibmflexmono sm:text-lg md:text-3xl md:w-128 lg:w-160 lg:text-4xl">
            Feel free and enjoy the beauty of paradise Island
          </h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-30 h-screen"></div>
      </section>

      {/* Data wisata */}
      <div className="px-4 py-8 flex flex-col gap-1 md:px-9">
        <div className="flex items-center gap-1 flex-row mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
          >
            <path
              d="M16.9931 23.7087H7.45311C5.87645 23.7087 4.59477 22.427 4.59477 20.8503C4.59477 19.2737 5.87645 17.992 7.45311 17.992H15.4564C17.6631 17.992 19.4581 16.197 19.4581 13.9903C19.4581 11.7837 17.6631 9.98866 15.4564 9.98866H9.8987C9.47881 10.8117 8.95885 11.5798 8.35062 12.2753H15.4564C16.402 12.2753 17.1714 13.0448 17.1714 13.9903C17.1714 14.9359 16.402 15.7053 15.4564 15.7053H7.45311C4.6165 15.7053 2.30811 18.0137 2.30811 20.8503C2.30811 23.6869 4.6165 25.9953 7.45311 25.9953H18.4211C17.8601 25.2896 17.381 24.5225 16.9931 23.7087ZM5.73811 3.12866C3.84703 3.12866 2.30811 4.66759 2.30811 6.55866C2.30811 10.2036 5.73811 12.2753 5.73811 12.2753C5.73811 12.2753 9.16811 10.2025 9.16811 6.55866C9.16811 4.66759 7.62918 3.12866 5.73811 3.12866ZM5.73811 8.27366C5.51281 8.27359 5.28974 8.22914 5.08163 8.14285C4.87351 8.05657 4.68443 7.93014 4.52518 7.77078C4.36593 7.61142 4.23962 7.42225 4.15348 7.21408C4.06733 7.00591 4.02303 6.78281 4.02311 6.55752C4.02318 6.33223 4.06763 6.10916 4.15391 5.90104C4.2402 5.69293 4.36663 5.50385 4.52599 5.34459C4.68535 5.18534 4.87451 5.05904 5.08268 4.97289C5.29086 4.88674 5.51396 4.84244 5.73925 4.84252C6.19425 4.84267 6.63055 5.02356 6.95217 5.3454C7.2738 5.66724 7.4544 6.10366 7.45425 6.55866C7.4541 7.01366 7.2732 7.44996 6.95136 7.77159C6.62953 8.09321 6.1931 8.27381 5.73811 8.27366Z"
              fill="white"
            />
            <path
              d="M21.7449 16.8486C19.8539 16.8486 18.3149 18.3876 18.3149 20.2786C18.3149 23.9236 21.7449 25.9953 21.7449 25.9953C21.7449 25.9953 25.1749 23.9224 25.1749 20.2786C25.1749 18.3876 23.636 16.8486 21.7449 16.8486ZM21.7449 21.9936C21.5196 21.9936 21.2966 21.9491 21.0885 21.8628C20.8803 21.7765 20.6913 21.6501 20.532 21.4907C20.3728 21.3314 20.2465 21.1422 20.1603 20.9341C20.0742 20.7259 20.0299 20.5028 20.0299 20.2775C20.03 20.0522 20.0745 19.8291 20.1608 19.621C20.247 19.4129 20.3735 19.2238 20.5328 19.0646C20.6922 18.9053 20.8813 18.779 21.0895 18.6929C21.2977 18.6067 21.5208 18.5624 21.7461 18.5625C22.2011 18.5626 22.6374 18.7435 22.959 19.0654C23.2806 19.3872 23.4612 19.8236 23.4611 20.2786C23.4609 20.7336 23.28 21.1699 22.9582 21.4916C22.6364 21.8132 22.1999 21.9938 21.7449 21.9936Z"
              fill="white"
            />
          </svg>
          <h1 className="text-white font-semibold text-sm sm:text-lg">
            See Destination In Bali
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <FilteredButton onFilter={handleFilter} onResetFilter={resetFilter} />
          <Link
            to="/Destination"
            className="cursor-pointer font-semibold overflow-hidden relative z-100 border rounded-full group px-4 md:px-5 py-2 md:py-3"
          >
            <span className="relative z-10 text-white group-hover:text-white text-sm md:text-xl duration-500">
              See All Destination
            </span>
            <span className="absolute w-full h-full hidden bg-button-bg -left-32 md:-left-64 top-0 md:inline -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
            <span className="absolute w-full h-full hidden bg-button-bg -right-32 md:-right-64 top-0 md:inline -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
          </Link>
        </div>

        {/* card destination */}
        <div
          className="flex flex-wrap justify-center p-4 gap-4 relative"
          style={{
            maskImage: `linear-gradient(
        to top,
        rgba(255, 0, 0, 0) 0%,
        rgb(69, 211, 22) 12.5%,
        rgb(65, 22, 221) 87.5%,
        rgba(20, 225, 222, 0) 100%
            )`,
          }}
        >
          {filteredWisata.length > 0 ? (
            filteredWisata.map((wisata) => (
              <Cardwisata key={wisata.id} id={wisata.id} wisata={wisata} />
            ))
          ) : (
            <p className="text-white">No matching results found.</p>
          )}
        </div>

        {/* Img Slider */}
        <div
          className="image-container gap-3"
          style={{
            maskImage: `linear-gradient(
          to right,
          rgba(255, 0, 0, 0) 0%,
          rgb(69, 211, 22) 12.5%,
          rgb(65, 22, 221) 87.5%,
          rgba(20, 225, 222, 0) 100%
              )`,
          }}
        >
          <img src={kuta} alt="kuta" />
          <img src={sanur} alt="kuta" />
          <img src={buleleng} alt="kuta" />
          <img src={kuta} alt="kuta" />
          <img src={sanur} alt="kuta" />
          <img src={buleleng} alt="kuta" />
        </div>

        {/* Featurers Experience Section */}
        <section
          id="features"
          className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30"
        >
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
              Featured Experiences
            </span>
            <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
              Why do you have to come to Bali
            </h2>
            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
              Bali is not only about tourist destinations, but also about unique
              experiences that you can enjoy. Like the example below
            </p>
          </div>

          <div className=" mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 group">
              <img
                src="https://primabali.com/wp-content/uploads/2023/12/indonesia-bali-1024x683.webp"
                alt="Cultural Diversity"
                class="absolute inset-0 h-full w-full object-cover transition duration-300 ease-in-out group-hover:blur-sm"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 transition duration-300 ease-in-out group-hover:opacity-90"></div>
              <h3 class="z-10 mt-3 text-2xl font-bold text-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
                Cultural diversity
              </h3>
            </article>

            <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 group">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnD4tIOv99PJrZlZay8WnhZXuypqlIeMvqw&s"
                alt="Culiner Diversity"
                class="absolute inset-0 h-full w-full object-cover transition duration-300 ease-in-out group-hover:blur-sm"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 transition duration-300 ease-in-out group-hover:opacity-90"></div>
              <h3 class="z-10 mt-3 text-2xl font-bold text-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
                Culiner Diversity
              </h3>
            </article>

            <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 group">
              <img
                src="https://img.inews.co.id/media/600/files/inews_new/2022/12/28/ubud_bali.jpg"
                alt="Diversity of tourist attractions"
                class="absolute inset-0 h-full w-full object-cover transition duration-300 ease-in-out group-hover:blur-sm"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 transition duration-300 ease-in-out group-hover:opacity-90"></div>
              <h3 class="z-10 mt-3 text-2xl font-bold text-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
                Diversity of tourist attractions
              </h3>
            </article>
          </div>
        </section>

        {/* Testimonials section */}
        <Testimonialsection />

        {/* Banner Corousel */}
        <div className="items-center justify-center  px-4 py-8 flex flex-col gap-4 md:px-12">
          <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="slide"
          >
            <div className="relative h-72 overflow-hidden rounded-lg">
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={banner}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover"
                  alt="..."
                />
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={banner}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover"
                  alt="..."
                />
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={banner}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover"
                  alt="..."
                />
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={banner}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover"
                  alt="..."
                />
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={banner}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover"
                  alt="..."
                />
              </div>
            </div>

            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              ></button>
            </div>
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homecont;
