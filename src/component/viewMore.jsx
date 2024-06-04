import React, { useEffect, useState } from 'react';
import Uluwatu from "../img/uluwatu.jpg";
import Starrating from "./starrating";
import { Link, useParams } from 'react-router-dom';
import { getDetailComment, getDetailWisata } from '../services/productservices';
import axios from 'axios';
import Comment from './comment';
import Formhalaman from './formhalaman';
import { FaStar } from 'react-icons/fa';

function ViewMore() {
    const { id } = useParams();
    const [wisata, setWisata] = useState({})
    const [comment, setComment] = useState([]);
    const { cover } = wisata;
    const [averageRating, setAverageRating] = useState(0);
    const [totalComments, setTotalComments] = useState(0);
    const [ratingCounts, setRatingCounts] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

    useEffect(() => {
        getDetailWisata(id, (data) => {
            try {
                setWisata(data);
            } catch (err) {
                console.log(err);
            }
        });
    }, [id]);

    useEffect(() => {
        getDetailComment(id, (data) => {
            try {
                setComment(data);
                setTotalComments(data.length);
                const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
                data.forEach(comment => {
                    counts[comment.rating] += 1;
                });
                setRatingCounts(counts);
            } catch (err) {
                console.log(err);
            }
        });
    }, [id]);

    const handleCommentAdded = (newComment) => {
        setComment([...comment, newComment]); // Spread existing comments and add newComment
        setTotalComments(comment.length + 1); // Update total comments
    };

    useEffect(() => {
        const fetchRatings = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/comments/${id}`);
                const ratings = response.data.map(comment => comment.rating);
                if (ratings.length > 0) {
                    const total = ratings.reduce((acc, rating) => acc + rating, 0);
                    const average = total / ratings.length;
                    setAverageRating(average.toFixed(1)); // Tampilkan 1 tempat desimal
                } else {
                    setAverageRating(0);
                }
            } catch (error) {
                console.error('Error fetching ratings:', error);
            }
        };

        fetchRatings();
    }, [id, comment]);

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        return (
            <div className="flex mt-2">
                {[...Array(fullStars)].map((_, index) => (
                    <FaStar key={index} size={18} color="#f6995c" />
                ))}
                {halfStar === 1 && <FaStar key="half" size={18} color="#f6995c" className="half-star" />}
                {[...Array(emptyStars)].map((_, index) => (
                    <FaStar key={index + fullStars + 1} size={18} color="#d1d5db" />
                ))}
            </div>
        );
    };

    const calculatePercentage = (count) => {
        return totalComments > 0 ? (count / totalComments) * 100 : 0;
    };

    console.log(comment);
    console.log(wisata);
    return (
        <div className="bg-black-bg">
            <nav className="px-7 py-5 w-full box-border z-10 bg-black-bg bg-opacity-90">
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z" /></svg>
                </Link>
            </nav>
            <div className="flex px-7 py-3 gap-x-10 flex-col lg:flex-row">
                <div className="lg:w-1/2">
                    <div className="border border-white rounded-xl">
                        <img src={`http://localhost:8800/uploads/${cover}`} alt="Uluwatu" className="w-full h-auto rounded-t-xl object-cover object-custom-position" style={{ objectPosition: "50% 75%" }} />
                        <div className="p-7 py-4">
                            <h1 className="text-white font-bold text-2xl">{wisata.title} {wisata.category}</h1>
                            <h2 className="text-white text-md py-2">{wisata.lokasi}</h2>
                            <p className="text-sm text-gray-400">{wisata.desc}</p>
                        </div>
                    </div>
                    <div className="border border-white rounded-xl my-10 px-7 py-4 flex flex-col sm:flex-row">
                        <div className="text-white mr-10 mb-6 sm:mb-0">
                            <h1 className="text-md">Rating</h1>
                            <h2 className="font-bold text-4xl mt-3">{averageRating}</h2>
                            {renderStars(averageRating)}
                            <h3 className="text-gray-300">{totalComments}</h3>
                        </div>
                        <div className="text-white flex-1">
                            <div className="flex items-center mb-2">
                                <h1 className="mr-3">5</h1>
                                <div className="relative w-full">
                                    <div className="bg-gray-400 rounded-full h-3 w-full"></div>
                                    <div className="absolute top-0 left-0 bg-button-bg z-10 rounded-full h-3" style={{ width: `${calculatePercentage(ratingCounts[5])}%` }}></div>
                                </div>
                            </div>
                            <div className="flex items-center mb-2">
                                <h1 className="mr-3">4</h1>
                                <div className="relative w-full">
                                    <div className="bg-gray-400 rounded-full h-3 w-full"></div>
                                    <div className="absolute top-0 left-0 bg-button-bg z-10 rounded-full h-3" style={{ width: `${calculatePercentage(ratingCounts[4])}%` }}></div>
                                </div>
                            </div>
                            <div className="flex items-center mb-2">
                                <h1 className="mr-3">3</h1>
                                <div className="relative w-full">
                                    <div className="bg-gray-400 rounded-full h-3 w-full"></div>
                                    <div className="absolute top-0 left-0 bg-button-bg z-10 rounded-full h-3" style={{ width: `${calculatePercentage(ratingCounts[3])}%` }}></div>
                                </div>
                            </div>
                            <div className="flex items-center mb-2">
                                <h1 className="mr-3">2</h1>
                                <div className="relative w-full">
                                    <div className="bg-gray-400 rounded-full h-3 w-full"></div>
                                    <div className="absolute top-0 left-0 bg-button-bg z-10 rounded-full h-3" style={{ width: `${calculatePercentage(ratingCounts[2])}%` }}></div>
                                </div>
                            </div>
                            <div className="flex items-center mb-2">
                                <h1 className="mr-3">1</h1>
                                <div className="relative w-full">
                                    <div className="bg-gray-400 rounded-full h-3 w-full"></div>
                                    <div className="absolute top-0 left-0 bg-button-bg z-10 rounded-full h-3" style={{ width: `${calculatePercentage(ratingCounts[1])}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <div id="default-carousel" className="relative w-full" data-carousel="slide">

                        <div className="relative h-72 overflow-hidden rounded-lg">

                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={Uluwatu} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover" alt="..." />
                            </div>

                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={Uluwatu} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover" alt="..." />
                            </div>

                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={Uluwatu} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover" alt="..." />
                            </div>

                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={Uluwatu} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover" alt="..." />
                            </div>

                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={Uluwatu} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-72 object-cover" alt="..." />
                            </div>
                        </div>

                        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                        </div>
                        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>

                    <div className="border border-white rounded-xl mt-10 px-4 sm:px-7 py-4 flex flex-col text-white">

                        <div>
                            <Formhalaman onCommentAdded={handleCommentAdded} />
                        </div>

                        <div>
                            <Comment comments={comment} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMore
