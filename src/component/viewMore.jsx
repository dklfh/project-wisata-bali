import React from 'react';
import Uluwatu from "../img/uluwatu.jpg";

const viewMore = () => {
  return (
    <div class="bg-black-bg">
        <nav className="px-7 py-5 w-full box-border z-10 bg-black-bg bg-opacity-90">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z"/></svg>
            </button>
        </nav>
        <div class="flex px-7 py-3">
            <div class="w-1/2">
                <div class="border border-white rounded-3xl">
                    <img src={Uluwatu} alt="Uluwatu" class="w-full h-40 rounded-t-3xl object-cover object-custom-position" style={{ objectPosition: "50% 75%" }}/>
                    <div class="p-7 py-4">
                        <h1 class="text-white font-bold text-2xl">Uluwatu Beach</h1>
                        <h2 class="text-white text-md py-2">Description :</h2>
                        <p class="text-sm text-gray-400">Uluwatu Beach, located in the southern part of Bali, Indonesia, is renowned for its stunning natural beauty and iconic limestone cliffs overlooking the Indian Ocean. The beach is nestled amidst rugged cliffs and offers breathtaking panoramic views of the ocean and coastline. Uluwatu Beach is a popular destination for surfers, known for its powerful waves that attract experienced surfers from around the world. </p>
                    </div>
                </div>
                <div class="border border-white rounded-3xl mt-10 px-7 py-4 flex">
                    <div class="text-white mr-10">
                        <h1 class=" text-md">Rating</h1>
                        <h2 class="font-bold text-4xl mt-3">8.5</h2>
                        <div class="flex mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg></div>
                        <h3 class="text-gray-300">4.000.000</h3>
                    </div>
                    <div class="text-white">
                        <div class="flex items-center">
                            <h1 class="mr-3">5</h1>
                            <div class="relative"> 
                                <div class=" bg-gray-400 w-96 rounded-full h-3"></div>
                                <div class="absolute top-0 left-0 bg-button-bg z-10 w-72 rounded-full h-3"></div>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <h1 class="mr-3">4</h1>
                            <div class="relative"> 
                                <div class=" bg-gray-400 w-96 rounded-full h-3"></div>
                                <div class="absolute top-0 left-0 bg-button-bg z-10 w-52 rounded-full h-3"></div>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <h1 class="mr-3">3</h1>
                            <div class="relative"> 
                                <div class=" bg-gray-400 w-96 rounded-full h-3"></div>
                                <div class="absolute top-0 left-0 bg-button-bg z-10 w-40 rounded-full h-3"></div>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <h1 class="mr-3">2</h1>
                            <div class="relative"> 
                                <div class=" bg-gray-400 w-96 rounded-full h-3"></div>
                                <div class="absolute top-0 left-0 bg-button-bg z-10 w-20 rounded-full h-3"></div>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <h1 class="mr-3">1</h1>
                            <div class="relative"> 
                                <div class=" bg-gray-400 w-96 rounded-full h-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default viewMore
