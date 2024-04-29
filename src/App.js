import './App.css';


function App() {
    return (
    <section class="bg-cover bg-center w-screen h-screen items-center justify-center flex" style={{backgroundImage: ""}}>
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
                        <a class="hover:underline underline-offset-4" href="about.html">
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
        <h1 class="text-white absolute w-96 text-center font-bold text-4xl font-ibmflexmono">Feel free
            and enjoy the beauty of paradise Island</h1>
    </section>
  );
}

export default App;
