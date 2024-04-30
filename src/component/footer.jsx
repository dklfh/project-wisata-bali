import { Link } from "react-router-dom";
import Logo from "../img/logo goBali.png";

function footer() {
  return (
    <div class="flex flex-col p-3 justify-center items-start">
      <div class="flex flex-row items-start gap-6 p-3">
        <div class="flex flex-col gap-0">
          <p class="text-white font-bold">
            Contact <span class="text-orange-500 font-bold">Us</span>
          </p>
          <p class="text-white font-bold">089756998762</p>
        </div>
        <div class="flex flex-col gap-5">
          <ul class="flex text-white justify-between gap-0 flex-col ">
            <li class="hover:underline underline-offset-4">
              <Link to="/">Home</Link>
            </li>
            <li class="hover:underline underline-offset-4">
              <Link to="/about">About</Link>
            </li>
            <li class="hover:underline underline-offset-4">
              <Link to="/Destination">Destination</Link>
            </li>
            <li class="hover:underline underline-offset-4">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex justify-between w-full p-3 items-center">
        <img src={Logo} alt="" />
        <p class="text-white text-sm">© Copyright By GogoBali Team</p>
        <div class="flex gap-3">
          <div class="flex items-center gap-3">
            <a href="" class=" hover:scale-110 transition active:scale-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
              >
                <g clip-path="url(#clip0_15_437)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.2714 9.05022C21.8302 8.41522 20.6502 7.52272 18.7389 7.90772C17.6239 8.13147 16.9577 8.68272 16.5339 9.41022C16.0827 10.1852 15.8639 11.239 15.8639 12.4652C15.8639 12.7967 15.7322 13.1147 15.4978 13.3491C15.2634 13.5835 14.9454 13.7152 14.6139 13.7152C11.6564 13.7152 8.84143 12.8365 6.47268 10.4602C6.29384 11.4243 6.2234 12.4054 6.26268 13.3852C6.32893 14.7427 6.65268 16.104 7.42143 17.2702C8.17768 18.4165 9.42143 19.4665 11.5014 20.1265C11.7052 20.1911 11.8891 20.307 12.0353 20.463C12.1816 20.6189 12.2854 20.8098 12.3368 21.0174C12.3882 21.2249 12.3855 21.4422 12.329 21.6484C12.2725 21.8546 12.164 22.0429 12.0139 22.1952C11.3477 22.8786 10.5926 23.4693 9.76893 23.9515C11.0939 24.089 12.3714 24.099 13.5564 23.9915C15.9564 23.774 17.8677 23.0877 19.0627 22.1165C21.5789 20.0765 22.9252 17.034 22.6752 11.9365C22.6327 11.099 23.4414 10.1952 23.8314 9.50897C23.2427 9.61897 22.6527 9.59897 22.2714 9.05022ZM5.74268 6.54397C5.96899 6.51767 6.19819 6.55372 6.40551 6.64823C6.61282 6.74275 6.79035 6.89212 6.91893 7.08022C8.76393 9.77897 10.9789 10.9015 13.4377 11.1565C13.5577 10.1052 13.8414 9.06647 14.3752 8.15147C15.1577 6.80897 16.4302 5.82147 18.2477 5.45647C20.7602 4.95147 22.6727 5.86147 23.7814 6.97522L26.0214 6.55647C26.2558 6.51255 26.4979 6.5366 26.7191 6.62578C26.9403 6.71496 27.1313 6.86555 27.2697 7.05978C27.4081 7.254 27.488 7.48376 27.5 7.72194C27.5121 7.96012 27.4558 8.19677 27.3377 8.40397L25.1877 12.1815C25.3839 17.6327 23.8689 21.4377 20.6389 24.059C18.9264 25.449 16.4739 26.2377 13.7827 26.4815C11.0702 26.7265 8.00393 26.4302 4.95643 25.5402C4.69604 25.4643 4.46743 25.3057 4.30508 25.0884C4.14274 24.8711 4.05548 24.6069 4.05647 24.3357C4.05745 24.0644 4.14664 23.8009 4.31056 23.5848C4.47448 23.3687 4.70425 23.2118 4.96518 23.1377C6.49768 22.7015 7.66518 22.3252 8.71893 21.6665C7.22018 20.8715 6.11643 19.8315 5.33518 18.6465C4.25018 16.999 3.84768 15.1615 3.76768 13.5052C3.68768 11.849 3.92643 10.314 4.17893 9.20772C4.32268 8.57647 4.49018 7.94397 4.72143 7.33897C4.803 7.1257 4.94142 6.93886 5.12168 6.79871C5.30194 6.65856 5.51589 6.57046 5.74268 6.54397Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_15_437">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0 0.313965)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a href="" class=" hover:scale-110 transition active:scale-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
              >
                <path
                  d="M7.25 0.313965H17.75C21.75 0.313965 25 3.56397 25 7.56396V18.064C25 19.9868 24.2362 21.8309 22.8765 23.1905C21.5169 24.5501 19.6728 25.314 17.75 25.314H7.25C3.25 25.314 0 22.064 0 18.064V7.56396C0 5.64115 0.763837 3.79708 2.12348 2.43744C3.48311 1.0778 5.32718 0.313965 7.25 0.313965ZM7 2.81396C5.80653 2.81396 4.66193 3.28807 3.81802 4.13198C2.97411 4.9759 2.5 6.12049 2.5 7.31396V18.314C2.5 20.8015 4.5125 22.814 7 22.814H18C19.1935 22.814 20.3381 22.3399 21.182 21.4959C22.0259 20.652 22.5 19.5074 22.5 18.314V7.31396C22.5 4.82646 20.4875 2.81396 18 2.81396H7ZM19.0625 4.68896C19.4769 4.68896 19.8743 4.85358 20.1674 5.14661C20.4604 5.43964 20.625 5.83706 20.625 6.25146C20.625 6.66587 20.4604 7.06329 20.1674 7.35632C19.8743 7.64934 19.4769 7.81396 19.0625 7.81396C18.6481 7.81396 18.2507 7.64934 17.9576 7.35632C17.6646 7.06329 17.5 6.66587 17.5 6.25146C17.5 5.83706 17.6646 5.43964 17.9576 5.14661C18.2507 4.85358 18.6481 4.68896 19.0625 4.68896ZM12.5 6.56396C14.1576 6.56396 15.7473 7.22245 16.9194 8.39455C18.0915 9.56665 18.75 11.1564 18.75 12.814C18.75 14.4716 18.0915 16.0613 16.9194 17.2334C15.7473 18.4055 14.1576 19.064 12.5 19.064C10.8424 19.064 9.25268 18.4055 8.08058 17.2334C6.90848 16.0613 6.25 14.4716 6.25 12.814C6.25 11.1564 6.90848 9.56665 8.08058 8.39455C9.25268 7.22245 10.8424 6.56396 12.5 6.56396ZM12.5 9.06396C11.5054 9.06396 10.5516 9.45905 9.84835 10.1623C9.14509 10.8656 8.75 11.8194 8.75 12.814C8.75 13.8085 9.14509 14.7624 9.84835 15.4656C10.5516 16.1689 11.5054 16.564 12.5 16.564C13.4946 16.564 14.4484 16.1689 15.1517 15.4656C15.8549 14.7624 16.25 13.8085 16.25 12.814C16.25 11.8194 15.8549 10.8656 15.1517 10.1623C14.4484 9.45905 13.4946 9.06396 12.5 9.06396Z"
                  fill="white"
                />
              </svg>
            </a>

            <a href="" class=" hover:scale-110 transition active:scale-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
              >
                <path
                  d="M15 2.81396C13.3585 2.81396 11.733 3.13729 10.2165 3.76547C8.69989 4.39365 7.3219 5.3144 6.16117 6.47513C3.81696 8.81933 2.5 11.9988 2.5 15.314C2.5 20.839 6.0875 25.5265 11.05 27.189C11.675 27.289 11.875 26.9015 11.875 26.564V24.4515C8.4125 25.2015 7.675 22.7765 7.675 22.7765C7.1 21.3265 6.2875 20.939 6.2875 20.939C5.15 20.164 6.375 20.189 6.375 20.189C7.625 20.2765 8.2875 21.4765 8.2875 21.4765C9.375 23.3765 11.2125 22.814 11.925 22.514C12.0375 21.7015 12.3625 21.1515 12.7125 20.839C9.9375 20.5265 7.025 19.4515 7.025 14.689C7.025 13.3015 7.5 12.189 8.3125 11.3015C8.1875 10.989 7.75 9.68896 8.4375 8.00146C8.4375 8.00146 9.4875 7.66397 11.875 9.27646C12.8625 9.00146 13.9375 8.86397 15 8.86397C16.0625 8.86397 17.1375 9.00146 18.125 9.27646C20.5125 7.66397 21.5625 8.00146 21.5625 8.00146C22.25 9.68896 21.8125 10.989 21.6875 11.3015C22.5 12.189 22.975 13.3015 22.975 14.689C22.975 19.464 20.05 20.514 17.2625 20.8265C17.7125 21.214 18.125 21.9765 18.125 23.139V26.564C18.125 26.9015 18.325 27.3015 18.9625 27.189C23.925 25.514 27.5 20.839 27.5 15.314C27.5 13.6724 27.1767 12.047 26.5485 10.5304C25.9203 9.01385 24.9996 7.63586 23.8388 6.47513C22.6781 5.3144 21.3001 4.39365 19.7835 3.76547C18.267 3.13729 16.6415 2.81396 15 2.81396Z"
                  fill="white"
                />
              </svg>
            </a>

            <a href="" class=" hover:scale-110 transition active:scale-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
              >
                <path
                  d="M12.5 19.064L18.9875 15.314L12.5 11.564V19.064ZM26.95 9.27646C27.1125 9.86397 27.225 10.6515 27.3 11.6515C27.3875 12.6515 27.425 13.514 27.425 14.264L27.5 15.314C27.5 18.0515 27.3 20.064 26.95 21.3515C26.6375 22.4765 25.9125 23.2015 24.7875 23.514C24.2 23.6765 23.125 23.789 21.475 23.864C19.85 23.9515 18.3625 23.989 16.9875 23.989L15 24.064C9.7625 24.064 6.5 23.864 5.2125 23.514C4.0875 23.2015 3.3625 22.4765 3.05 21.3515C2.8875 20.764 2.775 19.9765 2.7 18.9765C2.6125 17.9765 2.575 17.114 2.575 16.364L2.5 15.314C2.5 12.5765 2.7 10.564 3.05 9.27646C3.3625 8.15146 4.0875 7.42646 5.2125 7.11396C5.8 6.95146 6.875 6.83896 8.525 6.76396C10.15 6.67646 11.6375 6.63896 13.0125 6.63896L15 6.56396C20.2375 6.56396 23.5 6.76396 24.7875 7.11396C25.9125 7.42646 26.6375 8.15146 26.95 9.27646Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default footer;
