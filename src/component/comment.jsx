import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailComment } from '../services/productservices';

function Comment() {
    const { id } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getDetailComment(id, (data) => {
            if (Array.isArray(data)) {
                setComments(data);
            } else {
                console.error('Expected an array but got:', data);
                setComments([]);
            }
        });
    }, [id]);

    return (
        <div className="">
            {comments.map((comment, index) => (
                <div key={index} className="border border-white rounded-xl px-7 py-4 flex flex-col mt-7">
                    <div className="flex">
                        <img src="" alt="foto profil" className="w-5 h-5 rounded-full"/>
                        <div className="ml-3">
                            <h1 className="font-bold">{comment.user}</h1>
                            <h2 className="text-gray-400 text-sm">{comment.date}</h2>
                        </div>
                    </div>
                    <h1 className="my-4">{comment.comment}</h1>
                    <div className="flex">
                        {[...Array(5)].map((star, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                <path fill={i < comment.rating ? "#f6995c" : "#e4e4e4"} d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/>
                            </svg>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Comment;
