import React from "react";
import background from "../img/home-background.jpg";
import uluwatu from "../img/uluwatu.jpg";
import kuta from "../img/kuta.jpg";
import banner from "../img/banner.png";
import Navbar from "./navbar";
import Footer from "./footer";

const homecont = () => {
  return (
    <div class="bg-black-bg font-ibmflexmono">
      <section
        class="bg-cover bg-center w-screen h-screen items-center justify-center flex"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div class="absolute inset-0 bg-black opacity-30 h-screen"></div>
        <Navbar />
        <h1 class="text-white absolute w-160 text-center font-bold text-4xl font-ibmflexmono">
          Feel free and enjoy the beauty of paradise Island
        </h1>
      </section>
      <div
        class="px-9 py-8 flex flex-col gap-1"
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
        <div class="flex items-center gap-1 flex-row mb-5">
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
          <h1 class="text-white font-semibold ">See Destination In Bali</h1>
        </div>

        <div class="flex flex-row gap-3">
          <button class="text-white px-5 py-2 bg-button-bg font-bold rounded-full">
            Beach
          </button>
          <button class="text-white px-5 py-2 bg-button-bg font-bold rounded-full">
            Mountain
          </button>
          <button class="text-white px-5 py-2 bg-button-bg font-bold rounded-full">
            Club
          </button>
          <button class="cursor-pointer font-semibold overflow-hidden relative z-100 border rounded-full group px-5 py-2">
            <span class="relative z-10 text-white group-hover:text-white text-xl duration-500">
              See All Destination
            </span>
            <span class="absolute w-full h-full bg-button-bg -left-64 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
            <span class="absolute w-full h-full bg-button-bg -right-64 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
          </button>
        </div>

        <div class="flex flex-row items-center gap-4 p-4 h-auto">
          <div class="flex flex-col items-center gap-3 p-4 border-2 rounded-lg border-white max-w-md min-h-96">
            <div class="flex flex-col gap-0 items-center">
              <img src={uluwatu} alt="uluwatu"></img>
              <h1 class="text-white font-semibold leading-6 text-lg">
                Uluwatu Beach
              </h1>
              <p class="text-orange-500 text-sm font-medium">
                Pecatu, Kabupaten Badung
              </p>
            </div>
            <p class="text-xs text-white font-normal text-justify">
              Uluwatu Beach is a stunning coastal destination located on the
              southern tip of Bali, Indonesia. Known for its dramatic cliffs,
              pristine white sand, and crystal-clear turquoise waters, it's a
              haven for
            </p>
            <button class="text-white px-5 py-2 bg-button-bg font-bold rounded">
              View More
            </button>
          </div>
          <div class="flex flex-col items-center gap-3 p-4 border-2 rounded-lg border-white max-w-md min-h-96">
            <div class="flex flex-col gap-0 items-center">
              <img src={uluwatu} alt="uluwatu"></img>
              <h1 class="text-white font-semibold leading-6 text-lg">
                Uluwatu Beach
              </h1>
              <p class="text-orange-500 text-sm font-medium">
                Pecatu, Kabupaten Badung
              </p>
            </div>
            <p class="text-xs text-white font-normal text-justify">
              Uluwatu Beach is a stunning coastal destination located on the
              southern tip of Bali, Indonesia. Known for its dramatic cliffs,
              pristine white sand, and crystal-clear turquoise waters, it's a
              haven for
            </p>
            <button class="text-white px-5 py-2 bg-button-bg font-bold rounded">
              View More
            </button>
          </div>
          <div class="flex flex-col items-center gap-3 p-4 border-2 rounded-lg border-white max-w-md min-h-96">
            <div class="flex flex-col gap-0 items-center">
              <img src={uluwatu} alt="uluwatu"></img>
              <h1 class="text-white font-semibold leading-6 text-lg">
                Uluwatu Beach
              </h1>
              <p class="text-orange-500 text-sm font-medium">
                Pecatu, Kabupaten Badung
              </p>
            </div>
            <p class="text-xs text-white font-normal text-justify">
              Uluwatu Beach is a stunning coastal destination located on the
              southern tip of Bali, Indonesia. Known for its dramatic cliffs,
              pristine white sand, and crystal-clear turquoise waters, it's a
              haven for
            </p>
            <button class="text-white px-5 py-2 bg-button-bg font-bold rounded">
              View More
            </button>
          </div>
          <div class="flex flex-col items-center gap-3 p-4 border-2 rounded-lg border-white max-w-md min-h-96">
            <div class="flex flex-col gap-0 items-center">
              <img src={uluwatu} alt="uluwatu"></img>
              <h1 class="text-white font-semibold leading-6 text-lg">
                Uluwatu Beach
              </h1>
              <p class="text-orange-500 text-sm font-medium">
                Pecatu, Kabupaten Badung
              </p>
            </div>
            <p class="text-xs text-white font-normal text-justify">
              Uluwatu Beach is a stunning coastal destination located on the
              southern tip of Bali, Indonesia. Known for its dramatic cliffs,
              pristine white sand, and crystal-clear turquoise waters, it's a
              haven for
            </p>
            <button class="text-white px-5 py-2 bg-button-bg font-bold rounded">
              View More
            </button>
          </div>
        </div>

        <div class="flex flex-row gap-6 items-start w-screen">
          <img class="w-64 h-auto" src={kuta} alt="kuta"></img>
          <img class="w-64 h-auto" src={kuta} alt="kuta"></img>
          <img class="w-64 h-auto" src={kuta} alt="kuta"></img>
          <img class="w-64 h-auto" src={kuta} alt="kuta"></img>
        </div>

        <div class="items-center justify-center  px-24 py-8 flex flex-col gap-4">
          <img src={banner} alt="banner" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default homecont;
