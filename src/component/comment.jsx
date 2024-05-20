import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Comment() {
    const [wisata, setWisata] = useState([]);

    useEffect(() => {
        const fetchAllWisata = async () => {
            try {
                const res = await axios.get("http://localhost:8800");
                setWisata(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllWisata();
    }, []);
    return (
        <div class="">
            {wisata.map((wisata) => (
              <div class="border border-white rounded-xl px-7 py-4 flex flex-col mt-7">
              <div class="flex">
                  <img src="" alt="foto profil" class="w-5 h-5 rounded-full"/>
                  <div class="ml-3">
                      <h1 class="font-bold">User</h1>
                      <h2 class="text-gray-400 text-sm">ddddd</h2>
                  </div>
              </div>
              <h1 class="my-4">{wisata.desc}</h1>
              <div class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#f6995c" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
              </div>
          </div>
            ))}
        </div>

    )
}

export default Comment