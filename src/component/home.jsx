import React from 'react'
import background from "../img/home-background.jpg"
import uluwatu from "../img/uluwatu.jpg"
import kuta from "../img/kuta.jpg"
import banner from "../img/banner.png"

const home = () => {
  return (
    <div class="bg-black-bg">
      <section class="bg-cover bg-center w-screen h-screen items-center justify-center flex">
        <img class="absolute top-0 right-0" src={background} alt="background"></img>
        <div class="absolute inset-0 bg-black opacity-30 h-screen"></div>
        <nav class="bg-transparent px-14 py-5 fixed w-full top-0 box-border bg-opacity-50">
            <div class="flex justify-between items-center">
                <img src="Asset/imgAsset/logo goBali.png" alt="logo"/>
                <div class="flex items-center">
                    <ul class="flex text-white justify-between gap-5 items-center ">
                        <a class="hover:underline underline-offset-4" href="index.html">
                            <li class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                                <circle cx="11.4614" cy="7.05485" r="1.03287" stroke="#F6995C" stroke-width="1.03287"/>
                                <path d="M3.38348 9.99853C3.34667 9.54079 3.52947 9.09278 3.876 8.79145L10.5126 3.02045C11.0567 2.54732 11.8662 2.54732 12.4103 3.02045L19.047 8.79145C19.3935 9.09278 19.5763 9.54079 19.5395 9.99853L18.9778 16.983C18.9174 17.7343 18.2901 18.3131 17.5365 18.3131H5.38653C4.63287 18.3131 4.00558 17.7343 3.94517 16.983L3.38348 9.99853Z" stroke="#F6995C" stroke-width="1.23944"/>
                                <line x1="6.49618" y1="18.3907" x2="6.49618" y2="20.3786" stroke="#F6995C" stroke-width="1.23944" stroke-linecap="round"/>
                                <line x1="16.086" y1="18.3907" x2="16.086" y2="20.3786" stroke="#F6995C" stroke-width="1.23944" stroke-linecap="round"/>
                                <path d="M13.8754 17.7729V13.3841C13.8754 12.2432 12.9505 11.3184 11.8097 11.3184H11.1458C10.0049 11.3184 9.08008 12.2432 9.08008 13.3841V17.7729" stroke="#F6995C" stroke-width="1.23944"/>
                                </svg>Home</li>
                        </a>
                        <a class="hover:underline underline-offset-4" href="src/about.js">
                            <li class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                                <path d="M11.0621 12.6522L12.7923 7.63467C13.5093 5.55545 14.8332 3.76484 16.589 2.49954C17.0234 2.18654 17.642 2.42418 17.7841 2.95863C18.3585 5.11913 18.2822 7.38903 17.5652 9.46824L15.835 14.4857C15.118 16.565 13.7941 18.3556 12.0383 19.6209C11.604 19.9339 10.9854 19.6962 10.8433 19.1618C10.2688 17.0013 10.3451 14.7314 11.0621 12.6522Z" stroke="#F6995C" stroke-width="1.03287"/>
                                <line x1="0.516433" y1="-0.516433" x2="3.81564" y2="-0.516433" transform="matrix(0.325819 -0.944844 0.934052 0.358829 15.5425 9.21448)" stroke="#F6995C" stroke-width="1.03287" stroke-linecap="round"/>
                                <line y1="-0.516433" x2="5.18973" y2="-0.516433" transform="matrix(0.934052 0.358829 -0.325818 0.944844 11.2212 12.1893)" stroke="#F6995C" stroke-width="1.03287"/>
                                <line y1="-0.516433" x2="5.18973" y2="-0.516433" transform="matrix(0.934052 0.358829 -0.325819 0.944844 10.1626 15.2604)" stroke="#F6995C" stroke-width="1.03287"/>
                                <path d="M9.88662 9.34585L8.1564 14.3633C7.4394 16.4426 6.11549 18.2332 4.35969 19.4985C3.92535 19.8115 3.30676 19.5738 3.16465 19.0394C2.59019 16.8789 2.66651 14.609 3.3835 12.5298L5.11372 7.51227C5.83072 5.43306 7.15463 3.64245 8.91043 2.37715C9.34477 2.06415 9.96336 2.30178 10.1055 2.83623C10.6799 4.99674 10.6036 7.26664 9.88662 9.34585Z" stroke="#F6995C" stroke-width="1.03287"/>
                                <path d="M10.4043 7.83356L8.33343 5.87916L5.55682 5.97133" stroke="#F6995C" stroke-width="1.03287"/>
                                <path d="M7.58578 16.0212L4.80917 16.1134L2.7383 14.159" stroke="#F6995C" stroke-width="1.03287"/>
                                <path d="M8.2889 13.9748L5.5123 14.0669L3.44143 12.1125" stroke="#F6995C" stroke-width="1.03287"/>
                                </svg>About</li>
                        </a>
                        <a class="hover:underline underline-offset-4" href="destination.js">
                            <li class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                                <path d="M11.2824 19.6083H4.94244C3.35744 19.6083 2.56494 18.7475 2.56494 17.0258V10.1391C2.56494 8.41747 3.35744 7.55664 4.94244 7.55664H8.90494V17.0258C8.90494 18.7475 9.69744 19.6083 11.2824 19.6083Z" stroke="#F6995C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.99205 4.11334C8.92865 4.37159 8.90488 4.65567 8.90488 4.97418V7.55668H4.94238V5.83501C4.94238 4.88809 5.65563 4.11334 6.52738 4.11334H8.99205Z" stroke="#F6995C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.0752 7.55664V11.8608" stroke="#F6995C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.2451 7.55664V11.8608" stroke="#F6995C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.4527 15.3041H12.8677C12.4318 15.3041 12.0752 15.6915 12.0752 16.165V19.6083H15.2452V16.165C15.2452 15.6915 14.8886 15.3041 14.4527 15.3041Z" stroke="#F6995C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.73486 11.8608V15.3042" stroke="#F6995C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.90479 17.0258V4.97416C8.90479 3.2525 9.69729 2.39166 11.2823 2.39166H16.0373C17.6223 2.39166 18.4148 3.2525 18.4148 4.97416V17.0258C18.4148 18.7475 17.6223 19.6083 16.0373 19.6083H11.2823C9.69729 19.6083 8.90479 18.7475 8.90479 17.0258Z" stroke="#F6995C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>Destination</li>
                        </a>
                        <a class="hover:underline underline-offset-4" href="kdk">
                            <li class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M2 3H24V14H22V5H2V19H14V21H0V3H2ZM10 7H6V11H10V7ZM4 13H12V17H4V13ZM20 7H14V9H20V7ZM14 11H20V13H14V11ZM17 15H14V17H17V15ZM21 21V24H19V21H16V19H19V16H21V19H24V21H21Z" fill="#F6995C"/>
                                </svg>Contact us</li>
                        </a>
                        <button class="px-5 py-2 bg-orange-400 text-white font-bold rounded-lg hover:drop-shadow-2xl">SIGN IN</button>
                    </ul>
                </div>
            </div>
        </nav>
        <h1 class="text-white absolute w-160 text-center font-bold text-4xl font-ibmflexmono">Feel free and enjoy the beauty of paradise Island</h1>

        
        </section>
    <div class="px-9 py-8 flex flex-col gap-1" style={{
        maskImage: `linear-gradient(
        to top,
        rgba(255, 0, 0, 0) 0%,
        rgb(69, 211, 22) 12.5%,
        rgb(65, 22, 221) 87.5%,
        rgba(20, 225, 222, 0) 100%
            )`
        }}>
        <div class="flex items-center gap-1 flex-row mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                <path
                    d="M16.9931 23.7087H7.45311C5.87645 23.7087 4.59477 22.427 4.59477 20.8503C4.59477 19.2737 5.87645 17.992 7.45311 17.992H15.4564C17.6631 17.992 19.4581 16.197 19.4581 13.9903C19.4581 11.7837 17.6631 9.98866 15.4564 9.98866H9.8987C9.47881 10.8117 8.95885 11.5798 8.35062 12.2753H15.4564C16.402 12.2753 17.1714 13.0448 17.1714 13.9903C17.1714 14.9359 16.402 15.7053 15.4564 15.7053H7.45311C4.6165 15.7053 2.30811 18.0137 2.30811 20.8503C2.30811 23.6869 4.6165 25.9953 7.45311 25.9953H18.4211C17.8601 25.2896 17.381 24.5225 16.9931 23.7087ZM5.73811 3.12866C3.84703 3.12866 2.30811 4.66759 2.30811 6.55866C2.30811 10.2036 5.73811 12.2753 5.73811 12.2753C5.73811 12.2753 9.16811 10.2025 9.16811 6.55866C9.16811 4.66759 7.62918 3.12866 5.73811 3.12866ZM5.73811 8.27366C5.51281 8.27359 5.28974 8.22914 5.08163 8.14285C4.87351 8.05657 4.68443 7.93014 4.52518 7.77078C4.36593 7.61142 4.23962 7.42225 4.15348 7.21408C4.06733 7.00591 4.02303 6.78281 4.02311 6.55752C4.02318 6.33223 4.06763 6.10916 4.15391 5.90104C4.2402 5.69293 4.36663 5.50385 4.52599 5.34459C4.68535 5.18534 4.87451 5.05904 5.08268 4.97289C5.29086 4.88674 5.51396 4.84244 5.73925 4.84252C6.19425 4.84267 6.63055 5.02356 6.95217 5.3454C7.2738 5.66724 7.4544 6.10366 7.45425 6.55866C7.4541 7.01366 7.2732 7.44996 6.95136 7.77159C6.62953 8.09321 6.1931 8.27381 5.73811 8.27366Z"
                    fill="white" />
                <path
                    d="M21.7449 16.8486C19.8539 16.8486 18.3149 18.3876 18.3149 20.2786C18.3149 23.9236 21.7449 25.9953 21.7449 25.9953C21.7449 25.9953 25.1749 23.9224 25.1749 20.2786C25.1749 18.3876 23.636 16.8486 21.7449 16.8486ZM21.7449 21.9936C21.5196 21.9936 21.2966 21.9491 21.0885 21.8628C20.8803 21.7765 20.6913 21.6501 20.532 21.4907C20.3728 21.3314 20.2465 21.1422 20.1603 20.9341C20.0742 20.7259 20.0299 20.5028 20.0299 20.2775C20.03 20.0522 20.0745 19.8291 20.1608 19.621C20.247 19.4129 20.3735 19.2238 20.5328 19.0646C20.6922 18.9053 20.8813 18.779 21.0895 18.6929C21.2977 18.6067 21.5208 18.5624 21.7461 18.5625C22.2011 18.5626 22.6374 18.7435 22.959 19.0654C23.2806 19.3872 23.4612 19.8236 23.4611 20.2786C23.4609 20.7336 23.28 21.1699 22.9582 21.4916C22.6364 21.8132 22.1999 21.9938 21.7449 21.9936Z"
                    fill="white" />
            </svg>
            <h1 class="text-white font-semibold ">See Destination In Bali</h1>
        </div>

        <div class="flex flex-row gap-3">
            <button class="text-white px-5 py-2 bg-button-bg font-bold rounded-full">Beach</button>
                <button class="text-white px-5 py-2 bg-button-bg font-bold rounded-full">Mountain</button>
                <button class="text-white px-5 py-2 bg-button-bg font-bold rounded-full">Club</button>
                <button class="text-white px-5 py-2 border-2 border-button-bg font-bold rounded-full">See All Destination</button>
        </div>

        <div class="flex flex-row items-center gap-4 p-4 h-auto">
            <div class="flex flex-col items-center gap-3 p-4 border-2 rounded-lg border-white max-w-md min-h-96">
                <div class="flex flex-col gap-0 items-center">
                <img src={uluwatu} alt="uluwatu"></img>
                    <h1 class="text-white font-semibold leading-6 text-lg">Uluwatu Beach</h1>
                    <p class="text-orange-500 text-sm font-medium">Pecatu, Kabupaten Badung</p>
                </div>
                <p class="text-xs text-white font-normal text-justify">Uluwatu Beach is a stunning coastal destination
                    located on the southern tip of Bali, Indonesia. Known for its dramatic cliffs, pristine white sand,
                    and crystal-clear turquoise waters, it's a haven for</p>
                <button class="text-white px-5 py-2 bg-button-bg font-bold rounded">View More</button>
            </div>
            <div class="flex flex-col items-center gap-3 p-4 border-2 rounded-lg border-white max-w-md min-h-96">
                <div class="flex flex-col gap-0 items-center">
                    <img src={uluwatu} alt="uluwatu"></img>
                    <h1 class="text-white font-semibold leading-6 text-lg">Uluwatu Beach</h1>
                    <p class="text-orange-500 text-sm font-medium">Pecatu, Kabupaten Badung</p>
                </div>
                <p class="text-xs text-white font-normal text-justify">Uluwatu Beach is a stunning coastal destination
                    located on the southern tip of Bali, Indonesia. Known for its dramatic cliffs, pristine white sand,
                    and crystal-clear turquoise waters, it's a haven for</p>
                <button class="text-white px-5 py-2 bg-button-bg font-bold rounded">View More</button>
            </div>
            <div class="flex flex-col items-center gap-3 p-4 border-2 rounded-lg border-white max-w-md min-h-96">
                <div class="flex flex-col gap-0 items-center">
                    <img src={uluwatu} alt="uluwatu"></img>
                    <h1 class="text-white font-semibold leading-6 text-lg">Uluwatu Beach</h1>
                    <p class="text-orange-500 text-sm font-medium">Pecatu, Kabupaten Badung</p>
                </div>
                <p class="text-xs text-white font-normal text-justify">Uluwatu Beach is a stunning coastal destination
                    located on the southern tip of Bali, Indonesia. Known for its dramatic cliffs, pristine white sand,
                    and crystal-clear turquoise waters, it's a haven for</p>
                <button class="text-white px-5 py-2 bg-button-bg font-bold rounded">View More</button>
            </div>
            <div class="flex flex-col items-center gap-3 p-4 border-2 rounded-lg border-white max-w-md min-h-96">
                <div class="flex flex-col gap-0 items-center">
                    <img src={uluwatu} alt="uluwatu"></img>
                    <h1 class="text-white font-semibold leading-6 text-lg">Uluwatu Beach</h1>
                    <p class="text-orange-500 text-sm font-medium">Pecatu, Kabupaten Badung</p>
                </div>
                <p class="text-xs text-white font-normal text-justify">Uluwatu Beach is a stunning coastal destination
                    located on the southern tip of Bali, Indonesia. Known for its dramatic cliffs, pristine white sand,
                    and crystal-clear turquoise waters, it's a haven for</p>
                <button class="text-white px-5 py-2 bg-button-bg font-bold rounded">View More</button>
            </div>
        </div>

        <div class="flex flex-row gap-6 items-start w-screen">
            <img class="w-64 h-auto" src={kuta} alt="kuta"></img>
            <img class="w-64 h-auto" src={kuta} alt="kuta"></img>
            <img class="w-64 h-auto" src={kuta} alt="kuta"></img>
            <img class="w-64 h-auto" src={kuta} alt="kuta"></img>
        </div>
    
        <div class="items-center justify-center  px-24 py-8 flex flex-col gap-4">
            <img src={banner} alt="banner"/>
        </div>
    </div>
</div>
  )
}

export default home