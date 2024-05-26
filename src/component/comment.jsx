import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router
import { getDetailComment } from '../services/productservices';

function Comment() {
    const { id } = useParams();
    const [comment, setComment] = useState({});

    useEffect(() => {
        getDetailComment(id, (data) => {
            try {
                setComment(data);
            } catch (err) {
                console.log(err);
            }
        });
    }, [id]);

    console.log(comment);
   
    return (
        <div className="">
            <div className="border border-white rounded-xl px-7 py-4 flex flex-col mt-7">
                <div className="flex">
                    <img src="" alt="foto profil" className="w-5 h-5 rounded-full"/>
                    <div className="ml-3">
                        <h1 className="font-bold">User</h1>
                        <h2 className="text-gray-400 text-sm">ddddd</h2>
                    </div>
                </div>
                <h1 className="my-4">{comment.comment}</h1>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                </div>
            </div>
        </div>
    );
}

export default Comment;
