import React, { useEffect, useState } from 'react';
import Uluwatu from "../img/uluwatu.jpg";
import Starrating from "./starrating";
import { Link, useParams } from 'react-router-dom';
import { getDetailWisata } from '../services/productservices';
import axios from 'axios';


function ViewMore () {
    const { id } = useParams();
    const [wisata, setWisata] = useState({})

    useEffect(() => {
        getDetailWisata(id, (data) => {
            try {
                setWisata(data);
            } catch (err) {
                console.log(err);
            }
        });
    }, [id]);

    console.log(wisata);
    return (
    <div  className="bg-black-bg">
        <nav  className="px-7 py-5 w-full box-border z-10 bg-black-bg bg-opacity-90">
            <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z"/></svg>
            </Link>
        </nav>
        <div  className="flex px-7 py-3 gap-x-10">
            <div  className="w-1/2">
                <div  className="border border-white rounded-xl">
                    <img src={Uluwatu} alt="Uluwatu"  className="w-full h-40 rounded-t-xl object-cover object-custom-position" style={{ objectPosition: "50% 75%" }}/>
                    <div  className="p-7 py-4">
                        <h1  className="text-white font-bold text-2xl">{wisata.title}</h1>
                        <h2  className="text-white text-md py-2">{wisata.lokasi}</h2>
                        <p  className="text-sm text-gray-400">{wisata.desc}</p>
                    </div>
                </div>
                <div  className="border border-white rounded-xl mt-10 px-7 py-4 flex">
                    <div  className="text-white mr-10">
                        <h1  className=" text-md">Rating</h1>
                        <h2  className="font-bold text-4xl mt-3">8.5</h2>
                        <div  className="flex mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg></div>
                        <h3  className="text-gray-300">4.000.000</h3>
                    </div>
                    <div  className="text-white">
                        <div  className="flex items-center">
                            <h1  className="mr-3">5</h1>
                            <div  className="relative"> 
                                <div  className=" bg-gray-400 w-96 rounded-full h-3"></div>
                                <div  className="absolute top-0 left-0 bg-button-bg z-10 w-72 rounded-full h-3"></div>
                            </div>
                        </div>
                        <div  className="flex items-center">
                            <h1  className="mr-3">4</h1>
                            <div  className="relative"> 
                                <div  className=" bg-gray-400 w-96 rounded-full h-3"></div>
                                <div  className="absolute top-0 left-0 bg-button-bg z-10 w-52 rounded-full h-3"></div>
                            </div>
                        </div>
                        <div  className="flex items-center">
                            <h1  className="mr-3">3</h1>
                            <div  className="relative"> 
                                <div  className=" bg-gray-400 w-96 rounded-full h-3"></div>
                                <div  className="absolute top-0 left-0 bg-button-bg z-10 w-40 rounded-full h-3"></div>
                            </div>
                        </div>
                        <div  className="flex items-center">
                            <h1  className="mr-3">2</h1>
                            <div  className="relative"> 
                                <div  className=" bg-gray-400 w-96 rounded-full h-3"></div>
                                <div  className="absolute top-0 left-0 bg-button-bg z-10 w-20 rounded-full h-3"></div>
                            </div>
                        </div>
                        <div  className="flex items-center">
                            <h1  className="mr-3">1</h1>
                            <div  className="relative"> 
                                <div  className=" bg-gray-400 w-96 rounded-full h-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  className="w-1/2">
                <div id="default-carousel"  className="relative w-full" data-carousel="slide">
                    
                    <div  className="relative h-72 overflow-hidden rounded-lg">
                        
                        <div  className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={Uluwatu}  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover" alt="..."/>
                        </div>
                        
                        <div  className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={Uluwatu}  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover" alt="..."/>
                        </div>
                        
                        <div  className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={Uluwatu}  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover" alt="..."/>
                        </div>
                        
                        <div  className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={Uluwatu}  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover" alt="..."/>
                        </div>
                        
                        <div  className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={Uluwatu}  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover" alt="..."/>
                        </div>
                    </div>
                
                    <div  className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        <button type="button"  className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button"  className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button"  className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button"  className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button"  className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                    </div>
                    <button type="button"  className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span  className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button"  className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span  className="sr-only">Next</span>
                        </span>
                    </button>
                </div>

                <div  className="border border-white rounded-xl mt-10 px-7 py-4 flex flex-col text-white">
                    <div  className="flex justify-between">
                        <h1>30 Comment</h1>
                        <div  className="flex">
                            <h2  className="text-gray-400">Short by</h2>
                            <button  className="border border-white flex justify-between w-20 items-center px-3 text-sm ml-3">Rating<svg xmlns="http://www.w3.org/2000/svg" width="0.7em" height="0.7em" viewBox="0 0 2048 2048"><path fill="white" d="m1965 1101l-941 941l-941-941l90-90l787 787V0h128v1798l787-787z"/></svg></button>
                        </div>
                    </div>
                    <div  className="flex mt-6 justify-between">
                        <img src="" alt="foto profil"  className="w-10 h-10 rounded-full"/>
                        <form action=""  className="flex flex-col items-end">
                            <textarea id="comment"  className="p-3 rounded-xl text-black-bg" rows={4} style={{ resize: 'none' }} cols={50} placeholder="Tulis komentar Anda di sini..." required/>
                            <div  className="flex my-3" id="star">
                                <Starrating />
                            </div>
                            <button  className="bg-button-bg text-white font-bold px-7 py-2 rounded-xl">Comment</button>
                        </form>
                    </div>
                    <div  className="border border-white rounded-xl px-7 py-4 flex flex-col mt-7">
                        <div  className="flex">
                            <img src="" alt="foto profil"  className="w-5 h-5 rounded-full"/>
                            <div  className="ml-3">
                                <h1  className="font-bold">Adam Smith</h1>
                                <h2  className="text-gray-400 text-sm">April 27,2023</h2>
                            </div>
                        </div>
                        <h1  className="my-4">A great experience, i hope to stay here again.</h1>
                        <div  className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewMore
