import React, { useEffect, useState } from 'react';
import Uluwatu from "../img/uluwatu.jpg";
import { useParams } from 'react-router-dom';
import { getDetailWisata } from '../services/productservices';

const ViewMore = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        getDetailWisata(id, (data) => {
            setProduct(data);
        });
    }, [id]);
    console.log(product);
    return (
    <div class="bg-black-bg">
        <nav className="px-7 py-5 w-full box-border z-10 bg-black-bg bg-opacity-90">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z"/></svg>
            </button>
        </nav>
        <div class="flex px-7 py-3 gap-x-10">
            <div class="w-1/2">
                <div class="border border-white rounded-xl">
                    <img src={Uluwatu} alt="Uluwatu" class="w-full h-40 rounded-t-xl object-cover object-custom-position" style={{ objectPosition: "50% 75%" }}/>
                    <div class="p-7 py-4">
                        <h1 class="text-white font-bold text-2xl">Uluwatu Beach : {id}</h1>
                        <h2 class="text-white text-md py-2">Description :</h2>
                        <p class="text-sm text-gray-400">Uluwatu Beach, located in the southern part of Bali, Indonesia, is renowned for its stunning natural beauty and iconic limestone cliffs overlooking the Indian Ocean. The beach is nestled amidst rugged cliffs and offers breathtaking panoramic views of the ocean and coastline. Uluwatu Beach is a popular destination for surfers, known for its powerful waves that attract experienced surfers from around the world. </p>
                    </div>
                </div>
                <div class="border border-white rounded-xl mt-10 px-7 py-4 flex">
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
            <div class="w-1/2">
                <div id="default-carousel" class="relative w-full" data-carousel="slide">
                    
                    <div class="relative h-72 overflow-hidden rounded-lg">
                        
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={Uluwatu} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover" alt="..."/>
                        </div>
                        
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={Uluwatu} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover" alt="..."/>
                        </div>
                        
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={Uluwatu} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover" alt="..."/>
                        </div>
                        
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={Uluwatu} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover" alt="..."/>
                        </div>
                        
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={Uluwatu} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover" alt="..."/>
                        </div>
                    </div>
                
                    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                    </div>
                    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewMore
